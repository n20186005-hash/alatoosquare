#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"
mkdir -p public/images
curl -fL 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ala_Too_Square_Bishkek_2021.jpg/1280px-Ala_Too_Square_Bishkek_2021.jpg' -o public/images/ala-too-square-hero.jpg
curl -fL 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Ala-Too_Square_Bishkek.jpg/1280px-Ala-Too_Square_Bishkek.jpg' -o public/images/ala-too-square-wide.jpg
curl -fL 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Kyrgyz_State_Historical_Museum%2C_Ala_Too_Square%2C_Bishkek%2C_Kyrgyzstan.jpg/1280px-Kyrgyz_State_Historical_Museum%2C_Ala_Too_Square%2C_Bishkek%2C_Kyrgyzstan.jpg' -o public/images/state-history-museum.jpg
python - <<'PY'
from pathlib import Path
p=Path('src/data/site.ts')
s=p.read_text()
repls={
'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ala_Too_Square_Bishkek_2021.jpg/1280px-Ala_Too_Square_Bishkek_2021.jpg':'/images/ala-too-square-hero.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Ala-Too_Square_Bishkek.jpg/1280px-Ala-Too_Square_Bishkek.jpg':'/images/ala-too-square-wide.jpg',
'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Kyrgyz_State_Historical_Museum%2C_Ala_Too_Square%2C_Bishkek%2C_Kyrgyzstan.jpg/1280px-Kyrgyz_State_Historical_Museum%2C_Ala_Too_Square%2C_Bishkek%2C_Kyrgyzstan.jpg':'/images/state-history-museum.jpg',
}
for a,b in repls.items():
    s=s.replace(a,b)
p.write_text(s)
PY
printf 'Localized 3 real photos and updated src/data/site.ts.\n'
