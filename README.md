# Fintrack - PR Preview Generator

**Fintrack** is a financial tracking application built with **Next.js 15**, **React 19**, and **Mantine UI** that demonstrates automated **PR Preview Generation** – a complete system that deploys branch-specific frontend previews for every pull request.

## 🚀 PR Preview System

This project showcases a complete PR preview workflow that automatically:

- **🔄 Deploys previews** for every PR using Vercel
- **🏷️ Smart label handling** to skip previews for docs-only changes
- **🧹 Automatic cleanup** when PRs are closed or merged
- **🛑 Preview cancellation** when skip labels are added
- **💬 PR comments** with live preview URLs
- **🔒 Fork protection** - only runs for non-fork PRs
- **⚡ Concurrency control** to prevent conflicting deployments

### Preview Workflow Features

- **Automatic Deployment**: Every PR gets its own preview URL
- **Label Guards**: Use `docs-only` or `skip-preview` labels to skip unnecessary deployments
- **Smart Cleanup**: Automatic cleanup when PRs are closed
- **Cancellation Support**: Add labels to cancel running deployments
- **Status Updates**: Real-time updates in PR comments and job summaries
- **Error Handling**: Robust error handling and status reporting
- **Resource Management**: Efficient temporary file handling and cleanup

## 🛠️ Prerequisites

Before setting up this project, ensure you have:

- **Node.js 20+** (specified in workflows)
- **npm**, **yarn**, **pnpm**, or **bun**
- **Vercel account** with API access
- **GitHub repository** with Actions enabled

## ⚙️ Environment Setup

### Required Secrets

Add these secrets to your GitHub repository settings:

```bash
VERCEL_TOKEN          # Your Vercel API token
VERCEL_ORG_ID         # Your Vercel organization ID
VERCEL_PROJECT_ID     # Your Vercel project ID
```

### Getting Vercel Credentials

1. **Vercel Token**: Generate at [Vercel Dashboard → Settings → Tokens](https://vercel.com/account/tokens)
2. **Org ID & Project ID**: Found in your project's `.vercel/project.json` after linking

## 🚀 Getting Started

### Local Development

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Stephen-Ibe/Fintrack.git
   cd fintrack
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**: Navigate to [http://localhost:3000](http://localhost:3000)

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 📋 PR Preview Labels

Use these labels on your PRs to control preview behavior:

| Label          | Purpose                    | Effect                               |
| -------------- | -------------------------- | ------------------------------------ |
| `docs-only`    | Documentation-only changes | Skips preview deployment and cleanup |
| `skip-preview` | Any reason to skip preview | Skips preview deployment and cleanup |

### Label Behavior

- **Adding labels**: Triggers cancellation of any running deployments
- **Label presence**: Prevents new deployments from starting
- **Cleanup consistency**: Cleanup workflows respect the same label conditions

## 🔧 Workflow Configuration

The project includes three comprehensive GitHub Actions workflows:

### 1. `pr-preview.yml` - Preview Deployment

- **Triggers**: PR opened, synchronized, or reopened
- **Conditions**: Non-fork PRs without skip labels
- **Features**:
  - Vercel CLI deployment
  - Modern `$GITHUB_OUTPUT` usage
  - PR comment updates
  - Job summaries

### 2. `pr-preview-cleanup.yml` - Cleanup Management

- **Triggers**: PR closed
- **Conditions**: Same as preview deployment
- **Features**:
  - Automatic deployment cleanup
  - Status reporting
  - Resource management

### 3. `cancel-vercel-preview.yml` - Active Cancellation

- **Triggers**: Labels added to PR
- **Conditions**: `docs-only` or `skip-preview` labels
- **Features**:
  - Real-time deployment cancellation
  - Robust HTTP response handling
  - Temporary file management
  - Detailed error reporting

## 🛡️ Security & Best Practices

- **Fork Protection**: Workflows only run on non-fork PRs
- **Secret Management**: All API tokens stored as GitHub secrets
- **Concurrency Control**: Prevents conflicting workflow runs
- **Error Handling**: Comprehensive error catching and reporting
- **Resource Cleanup**: Automatic cleanup of temporary files and deployments

## 🏗️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with new features
- **TypeScript 5** - Type safety and developer experience
- **Mantine UI 8.2** - Modern React components library
- **Tailwind CSS 4** - Utility-first CSS framework

### DevOps & Deployment

- **Vercel** - Deployment platform
- **GitHub Actions** - CI/CD workflows
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 📚 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn about React 19 features
- [Mantine Documentation](https://mantine.dev) - UI components and hooks
- [Vercel Documentation](https://vercel.com/docs) - Deployment and previews
- [GitHub Actions Documentation](https://docs.github.com/en/actions) - CI/CD workflows

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

Your PR will automatically get a preview deployment! 🎉

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
