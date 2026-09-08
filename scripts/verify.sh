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
if grep -RInE 'example\.com|localhost|chrome-extension://' "${SOURCE_TARGETS[@]}"; then
  echo 'ERROR: forbidden placeholder/extension content found in web source.' >&2
  exit 1
fi

rm -rf node_modules dist
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build

if grep -RInE 'example\.com|localhost|chrome-extension://' dist; then
  echo 'ERROR: forbidden placeholder/extension content found in dist.' >&2
  exit 1
fi

if [[ -n "${SITE_URL:-}" ]]; then
  if [[ ! -f dist/sitemap-index.xml && ! -f dist/sitemap-0.xml ]]; then
    echo 'ERROR: SITE_URL is set but no sitemap was generated.' >&2
    exit 1
  fi
  if grep -RIn '<lastmod>' dist/sitemap*.xml 2>/dev/null; then
    echo 'ERROR: unexpected lastmod in generated sitemap.' >&2
    exit 1
  fi
else
  if compgen -G 'dist/sitemap*.xml' > /dev/null; then
    echo 'ERROR: sitemap must not be generated when SITE_URL is empty.' >&2
    exit 1
  fi
fi

echo 'All requested checks passed.'
