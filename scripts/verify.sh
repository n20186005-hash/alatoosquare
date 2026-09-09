#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

if [[ -f pnpm-workspace.yaml ]]; then
  if ! grep -Eq '^packages:' pnpm-workspace.yaml || ! grep -Eq "['\"]\.['\"]" pnpm-workspace.yaml; then
    echo 'ERROR: pnpm-workspace.yaml exists but packages does not include .' >&2
    exit 1
  fi
fi

SOURCE_TARGETS=(src public astro.config.mjs wrangler.jsonc package.json)
if grep -RInE 'example\.com|chrome-extension://' "${SOURCE_TARGETS[@]}"; then
  echo 'ERROR: forbidden placeholder/extension content found in web source.' >&2
  exit 1
fi

rm -rf node_modules dist
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build

OUT_DIR="dist/client"
if [[ ! -d "$OUT_DIR" ]]; then
  echo 'ERROR: expected Astro+Cloudflare output under dist/client.' >&2
  exit 1
fi

if grep -RInE 'example\.com|chrome-extension://' "$OUT_DIR"; then
  echo 'ERROR: forbidden placeholder/extension content found in dist.' >&2
  exit 1
fi

if [[ ! -f "$OUT_DIR/sitemap-index.xml" && ! -f "$OUT_DIR/sitemap-0.xml" ]]; then
  echo 'ERROR: no sitemap was generated (site defaults to https://alatoosquare.com).' >&2
  exit 1
fi
if grep -RIn '<lastmod>' "$OUT_DIR"/sitemap*.xml 2>/dev/null; then
  echo 'ERROR: unexpected lastmod in generated sitemap.' >&2
  exit 1
fi

echo 'All requested checks passed.'
