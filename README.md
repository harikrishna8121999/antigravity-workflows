# Antigravity Workflows 🚀

<div align="center">

**Community-driven workflows for Antigravity AI coding assistant**

[![npm version](https://img.shields.io/npm/v/antigravity-workflows.svg)](https://www.npmjs.com/package/antigravity-workflows)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)

[Quick Start](#-quick-start) • [Workflows](#-available-workflows) • [CLI Commands](#-cli-commands) • [Contributing](#-contributing)

</div>

---

## 🌟 What Is This?

This is the **"skills marketplace"** for Antigravity — a collection of reusable workflows that teach your AI agent how to perform specific tasks like:

- 🏗️ Creating Next.js applications with best practices
- 🧪 Writing Playwright browser tests
- 🎨 Building stunning landing pages
- 🚀 Deploying to Vercel/Railway
- 📝 Generating comprehensive documentation

**Think of it like [anthropics/skills](https://github.com/anthropics/skills), but for Antigravity.**

---

## ⚡ Quick Start

No installation required — just use `npx`!

```bash
# Install a workflow into your project
npx antigravity-workflows install landing-page

# List all available workflows
npx antigravity-workflows list

# Search for workflows
npx antigravity-workflows search "react"
```

Once installed, trigger the workflow in Antigravity:

> Type `/landing-page` in the chat

That's it! The agent will follow the workflow instructions.

---

## 📦 Available Workflows

### 🔧 Development
| Workflow | Description |
|----------|-------------|
| `nextjs-app` | Create a new Next.js app with TypeScript, Tailwind, ESLint |
| `react-component` | Build reusable React components with proper patterns |
| `api-endpoint` | Create type-safe REST API endpoints with Zod validation |
| `code-review` | Perform thorough code reviews with focus on quality and security |

### 🧪 Testing
| Workflow | Description |
|----------|-------------|
| `playwright-test` | Write robust Playwright browser automation tests |
| `unit-test` | Generate unit tests with good coverage |

### 🎨 Creative & Design
| Workflow | Description |
|----------|-------------|
| `landing-page` | Build stunning, modern landing pages |
| `dashboard-ui` | Create professional admin dashboard interfaces |
| `email-template` | Create responsive HTML email templates |

### 🚀 Deployment
| Workflow | Description |
|----------|-------------|
| `vercel-deploy` | Deploy applications to Vercel |
| `railway-deploy` | Deploy applications to Railway |

### 📚 Documentation
| Workflow | Description |
|----------|-------------|
| `readme-generator` | Generate comprehensive project README files |

### 🤖 AI Tools
| Workflow | Description |
|----------|-------------|
| `workflow-creator` | Create new workflows for the Antigravity workflows repository |

---

## 🛠️ CLI Commands

```bash
# Install workflows
npx antigravity-workflows install <name>           # Single workflow
npx antigravity-workflows install <name1> <name2>  # Multiple workflows
npx antigravity-workflows install --category dev   # By category
npx antigravity-workflows install --all            # All workflows

# Explore workflows
npx antigravity-workflows list                     # List all
npx antigravity-workflows list --category testing  # Filter by category
npx antigravity-workflows search "next"            # Search

# Get details
npx antigravity-workflows info landing-page        # Workflow details
```

---

## 📁 Where Do Workflows Go?

Workflows are installed to `.agent/workflows/` in your project:

```
your-project/
├── .agent/
│   └── workflows/
│       ├── landing-page.md
│       ├── nextjs-app.md
│       └── ...
└── src/
```

Antigravity automatically discovers workflows in this directory.

---

## 🏗️ Workflow Format

Each workflow is a Markdown file with YAML frontmatter:

```markdown
---
description: Short description for AI to understand when to use this workflow
---

# Workflow Title

[Instructions for the AI agent]

## Steps
1. First step
   // turbo (auto-run safe commands)
2. Second step

## Guidelines
- Important guidelines
```

The `// turbo` annotation tells Antigravity it's safe to auto-run that command without user approval.

---

## 🤝 Contributing

We welcome community contributions! Here's how to add your workflow:

1. **Fork** this repository
2. **Create** your workflow in `workflows/<category>/<name>.md`
3. **Update** `workflows/registry.json` with metadata
4. **Submit** a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 📄 License

Apache 2.0 — See [LICENSE](LICENSE) for details.

---

<div align="center">

**Made with ❤️ for the Antigravity community**

[Report Issue](../../issues) • [Request Workflow](../../issues/new)

</div>
