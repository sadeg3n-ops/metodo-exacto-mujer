#!/bin/zsh
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
COMMIT_MESSAGE="${1:-Publish latest changes}"

cd "$ROOT_DIR"

if [ ! -d node_modules ]; then
  npm install
fi

npm run build

git add -A

if ! git diff --cached --quiet; then
  git commit -m "$COMMIT_MESSAGE"
  git push origin main
else
  echo "No hay cambios nuevos en git. Se reutiliza el commit actual."
fi

exec npm run deploy:prod
