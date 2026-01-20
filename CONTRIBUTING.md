# Contributing to Antigravity Workflows

Thank you for your interest in contributing! This project thrives on community contributions.

## 🎯 Core Philosophy

> **Every workflow must be Stack-Agnostic and Question-Driven.**

Before writing any workflow, understand these five principles:

| # | Principle | Description |
|---|-----------|-------------|
| 1 | **Stack-Agnostic** | Never assume a specific framework, library, or tool. Detect and adapt. |
| 2 | **Question-Driven** | Ask clarifying questions to produce better results. |
| 3 | **Progressive Disclosure** | Load minimal context first, expand on demand. |
| 4 | **Single Responsibility** | Each workflow does ONE thing well (Unix philosophy). |
| 5 | **Composable** | Workflows can be combined for complex tasks. |

---

## 🚀 Quick Start

1. **Fork** this repository
2. **Clone** your fork locally
3. **Create** a new workflow following the template below
4. **Test** it in Antigravity
5. **Submit** a Pull Request

---

## 📝 Workflow Template

Create your workflow at `workflows/<category>/<name>.md`:

```markdown
---
description: [5-10 word description of what this does]
---

# Workflow Name

Brief intro: what this accomplishes and when to use it.

## Guardrails
- What to AVOID doing
- Scope boundaries  
- Critical constraints

## Steps

### 1. Understand Context
Ask clarifying questions:
- What is the goal?
- What constraints exist?
- What's the expected outcome?

### 2. Analyze Project
Detect existing stack:
- Check `package.json`, config files, file patterns
- Identify framework (React, Vue, Angular, Django, etc.)
- Identify styling approach (Tailwind, CSS Modules, Sass, etc.)
- Note existing patterns to follow

If unclear, ask the user.

### 3. [Core Implementation Steps]
Describe WHAT to do, not exact code.
Reference principles, not boilerplate.
Let AI generate appropriate implementation for the user's stack.

### 4. Verify
- How to confirm success
- What to test
- Expected outcomes

## Principles
- Universal best practices
- Accessibility, security, performance considerations

## Reference
- Links to relevant documentation
- Commands to explore codebase
```

---

## ⚠️ Critical Rules

### ❌ DON'T: Hardcode Technology Stacks

```markdown
<!-- BAD - Assumes specific tech -->
### 2. Install Dependencies
npm install react tailwindcss lucide-react

### 3. Create Component
Create `components/Button.tsx`:
import { cn } from '@/lib/utils'
```

### ✅ DO: Detect and Adapt

```markdown
<!-- GOOD - Stack-agnostic -->
### 2. Analyze Project Stack
Detect the existing setup:
- Check for UI framework (React, Vue, Angular, Svelte, etc.)
- Check for CSS approach (Tailwind, CSS Modules, Sass, etc.)
- Look at existing components for patterns to follow

If no existing setup, ask the user which stack they prefer.

### 3. Install Dependencies
Based on detected stack, install appropriate dependencies:
- Icons: Use project's existing icon library, or suggest one
- Styling: Follow project's existing CSS approach
```

### ❌ DON'T: Provide Boilerplate Code

Workflows should describe **WHAT** and **WHY**, not provide copy-paste code for a specific framework.

### ✅ DO: Ask Clarifying Questions

```markdown
### 1. Understand Requirements
Before implementation, ask:
- What specific features do you need?
- Are there existing patterns in the codebase to follow?
- What's the scope (simple vs comprehensive)?
```

---

## 📂 Categories

Choose the appropriate category for your workflow:

| Category | Description |
|----------|-------------|
| `development` | Creating applications, components, APIs, features |
| `git` | Version control workflows (commits, PRs, conflicts) |
| `testing` | Unit tests, E2E tests, test coverage |
| `debugging` | Error analysis, logging, performance |
| `security` | Vulnerability scanning, dependency checks |
| `documentation` | READMEs, API docs, architecture diagrams |
| `deployment` | Deploying, containerization, CI/CD |
| `database` | Schema design, migrations, seeding |
| `ai-tools` | LLM prompts, RAG, AI agents |
| `creative` | Landing pages, dashboards, email templates |

---

## ✅ Quality Checklist

Before submitting, verify your workflow has:

- [ ] **Guardrails** — What to avoid, scope boundaries
- [ ] **Discovery Phase** — Asks clarifying questions first
- [ ] **Stack Detection** — Analyzes project before implementation
- [ ] **No Hardcoded Tech** — Works with any framework/library
- [ ] **Verification Steps** — How to confirm success
- [ ] **Registry Entry** — Added to `workflows/registry.json`
- [ ] **Tested in Antigravity** — Verified the workflow works

---

## 🏷️ Registry Entry

Add your workflow to `workflows/registry.json`:

```json
"your-workflow": {
  "category": "development",
  "description": "Short description (5-10 words)",
  "tags": ["tag1", "tag2", "tag3"]
}
```

---

## 🔧 Using `// turbo`

Add `// turbo` above commands that are:
- ✅ Safe to run without user approval
- ✅ Non-destructive (don't delete files)
- ✅ Fast to execute
- ✅ Don't require user input

```markdown
### Install dependencies
// turbo
```bash
npm install  # or yarn install, pnpm install based on lockfile
```
```

**Never use `// turbo` for:**
- ❌ Destructive operations (rm, delete)
- ❌ Commands that need confirmation
- ❌ Commands that modify global state

---

## 💬 Questions?

Open an [issue](../../issues) if you have questions or need help!
