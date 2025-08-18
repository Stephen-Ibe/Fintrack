# Fintrack - PR Preview Generator

**Fintrack** is a financial tracking application that demonstrates automated **PR Preview Generation** – a system that deploys branch-specific frontend previews for every pull request.

## 🚀 PR Preview System

This project showcases a complete PR preview workflow that automatically:

- **🔄 Deploys previews** for every PR using Vercel
- **🏷️ Smart label handling** to skip previews for docs-only changes
- **🧹 Automatic cleanup** when PRs are closed or merged
- **🛑 Preview cancellation** when skip labels are added
- **💬 PR comments** with live preview URLs

### Preview Workflow Features

- **Automatic Deployment**: Every PR gets its own preview URL
- **Label Guards**: Use `docs-only` or `skip-preview` labels to skip unnecessary deployments
- **Smart Cleanup**: Automatic cleanup when PRs are closed
- **Cancellation Support**: Add labels to cancel running deployments
- **Status Updates**: Real-time updates in PR comments and job summaries

## 🛠️ Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 📋 PR Preview Labels

Use these labels on your PRs to control preview behavior:

- `docs-only` - Skip preview deployment for documentation-only changes
- `skip-preview` - Skip preview deployment for any reason

## 🔧 Workflow Configuration

The project includes three GitHub Actions workflows:

1. **`pr-preview.yml`** - Deploys preview for each PR
2. **`pr-preview-cleanup.yml`** - Cleans up when PR is closed
3. **`cancel-vercel-preview.yml`** - Cancels deployments when skip labels are added

## 📚 Learn More

To learn more about Next.js and the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Vercel Documentation](https://vercel.com/docs) - learn about deployment and previews.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
