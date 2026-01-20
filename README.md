# Antigravity Workflows 🚀

<div align="center">

**Stack-agnostic, question-driven workflows for AI coding assistants**

[![npm version](https://img.shields.io/npm/v/antigravity-workflows.svg)](https://www.npmjs.com/package/antigravity-workflows)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)

[Quick Start](#-quick-start) • [Philosophy](#-philosophy) • [Workflows](#-available-workflows) • [Contributing](#-contributing)

</div>

---

## 🌟 What Is This?

A collection of **intelligent workflows** that teach AI coding assistants how to perform tasks — without assuming your tech stack.

Unlike typical code snippets or templates, our workflows:
- **🔍 Detect** your project's framework, styling, and patterns
- **❓ Ask** clarifying questions to produce better results
- **🎯 Adapt** to your specific setup, not force a specific stack

**Think of it like [anthropics/skills](https://github.com/anthropics/skills), but stack-agnostic.**

---

## 🎯 Philosophy

Every workflow follows five core principles:

| Principle | Description |
|-----------|-------------|
| **Stack-Agnostic** | Works with React, Vue, Angular, Django, or any stack |
| **Question-Driven** | Asks clarifying questions for better results |
| **Progressive Disclosure** | Loads minimal context first, expands on demand |
| **Single Responsibility** | Each workflow does ONE thing well |
| **Composable** | Combine workflows for complex tasks |

---

## ⚡ Quick Start

No installation required — just use `npx`!

```bash
# Install a workflow into your project
npx antigravity-workflows install git-commit

# List all available workflows
npx antigravity-workflows list

# Search for workflows
npx antigravity-workflows search "test"
```

Once installed, trigger the workflow in Antigravity:

> Type `/git-commit` in the chat

That's it! The agent will follow the workflow instructions.

---

## 📦 Available Workflows

### 🔧 Development
| Workflow | Description |
|----------|-------------|
| `new-project` | Scaffold any project (detects or asks for stack) |
| `new-component` | Create reusable UI components (any framework) |
| `new-api` | Create API endpoints (REST/GraphQL, any backend) |
| `refactor` | Improve code quality, extract, reduce duplication |
| `migrate` | Technology migrations (JS→TS, framework upgrades) |
| `cli-tool` | Build command-line applications |

### 🔀 Git & Collaboration
| Workflow | Description |
|----------|-------------|
| `git-commit` | Generate conventional commits from staged changes |
| `git-pr` | Create comprehensive PR descriptions |
| `git-conflict` | Help resolve merge conflicts |

### 🧪 Testing & Quality
| Workflow | Description |
|----------|-------------|
| `unit-test` | Generate unit tests (detects testing framework) |
| `e2e-test` | End-to-end browser tests |
| `code-review` | Comprehensive code review |

### 🐛 Debugging
| Workflow | Description |
|----------|-------------|
| `debug-error` | Analyze errors and suggest fixes |
| `debug-log` | Add strategic logging/debugging |
| `performance` | Profile and optimize slow code |

### 🔒 Security
| Workflow | Description |
|----------|-------------|
| `security-audit` | Scan for vulnerabilities and secrets |
| `dependency-check` | Check for vulnerable dependencies |

### 📚 Documentation
| Workflow | Description |
|----------|-------------|
| `readme` | Generate comprehensive README |
| `api-docs` | Generate API documentation (OpenAPI, JSDoc) |
| `architecture` | Create architecture diagrams (Mermaid, C4) |

### 🚀 Deployment
| Workflow | Description |
|----------|-------------|
| `deploy` | Deploy to any platform (detects or configures) |
| `docker` | Containerize application |
| `ci-cd` | Set up CI/CD pipelines |

### 🗄️ Database
| Workflow | Description |
|----------|-------------|
| `db-schema` | Design database schemas (any ORM/DB) |
| `db-migrate` | Create and run migrations |
| `db-seed` | Generate seed/test data |

### 🤖 AI & LLM
| Workflow | Description |
|----------|-------------|
| `prompt-engineering` | Design and optimize LLM prompts |
| `rag-pipeline` | Build retrieval-augmented generation |
| `workflow-creator` | Create new antigravity workflows |

### 🎨 Creative & UI
| Workflow | Description |
|----------|-------------|
| `landing-page` | Build landing pages (any stack) |
| `dashboard-ui` | Create admin dashboards (any stack) |
| `email-template` | Design responsive emails |

---

## 🛠️ CLI Commands

```bash
# Install workflows
npx antigravity-workflows install <name>           # Single workflow
npx antigravity-workflows install <name1> <name2>  # Multiple workflows
npx antigravity-workflows install --category git   # By category
npx antigravity-workflows install --all            # All workflows

# Explore workflows
npx antigravity-workflows list                     # List all
npx antigravity-workflows list --category testing  # Filter by category
npx antigravity-workflows search "debug"           # Search

# Get details
npx antigravity-workflows info git-commit          # Workflow details
```

---

## 📁 Where Do Workflows Go?

Workflows are installed to `.agent/workflows/` in your project:

```
your-project/
├── .agent/
│   └── workflows/
│       ├── git-commit.md
│       ├── unit-test.md
│       └── ...
└── src/
```

Antigravity automatically discovers workflows in this directory.

---

## 🤝 Contributing

We welcome community contributions! Our workflows follow strict guidelines to ensure quality:

1. **Fork** this repository
2. **Read** the [Core Philosophy](#-philosophy)
3. **Create** your workflow following our [template](CONTRIBUTING.md)
4. **Ensure** it's stack-agnostic and question-driven
5. **Submit** a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 📄 License

Apache 2.0 — See [LICENSE](LICENSE) for details.

---

<div align="center">

**Made with ❤️ for the Antigravity community**

[Report Issue](../../issues) • [Request Workflow](../../issues/new)

</div>
