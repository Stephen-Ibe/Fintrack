#!/bin/bash
set -e

PR_NUMBER=$(echo "$VERCEL_GIT_COMMIT_REF" | grep -oE 'pull/[0-9]+' | cut -d/ -f2)

# Not a PR → allow build
if [ -z "$PR_NUMBER" ]; then
  exit 0
fi

echo "🔎 Checking labels for PR #$PR_NUMBER..."

LABELS=$(curl -s -H "Authorization: token $GITHUB_TOKEN" \
  "https://api.github.com/repos/$VERCEL_GIT_REPO_OWNER/$VERCEL_GIT_REPO_SLUG/issues/$PR_NUMBER/labels")

# Convert labels to lowercase
LABELS_LOWER=$(echo "$LABELS" | tr '[:upper:]' '[:lower:]')

if echo "$LABELS_LOWER" | grep -q '"name":"skip-preview"'; then
  echo "🛑 Found 'skip-preview' label. Ignoring deployment."
  exit 1
fi

if echo "$LABELS_LOWER" | grep -q '"name":"docs-only"'; then
  echo "🛑 Found 'docs-only' label. Ignoring deployment."
  exit 1
fi

echo "✅ No skip labels. Continuing build."
exit 0
