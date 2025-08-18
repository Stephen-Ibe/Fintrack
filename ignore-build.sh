#!/bin/bash

PR_NUMBER=$(echo $VERCEL_GIT_COMMIT_REF | grep -oE '[0-9]+')
REPO="${VERCEL_GIT_REPO_SLUG}"
OWNER="${VERCEL_GIT_REPO_OWNER}"

echo "Checking labels for PR #$PR_NUMBER..."

LABELS=$(curl -s -H "Authorization: token $GITHUB_TOKEN" \
  "https://api.github.com/repos/$OWNER/$REPO/issues/$PR_NUMBER/labels" \
  | jq -r '.[].name')

if echo "$LABELS" | grep -q "skip-preview"; then
  echo "🛑 Found skip-preview label, ignoring build."
  exit 1
fi

echo "✅ No skip-preview label, continue build."
exit 0
