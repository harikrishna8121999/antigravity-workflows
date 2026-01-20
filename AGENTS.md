# Agent Instructions

These instructions are for AI agents working with the Antigravity Workflows repository.

## 🎯 Core Philosophy

**All workflows in this repository follow five core principles:**

| # | Principle | What It Means |
|---|-----------|---------------|
| 1 | **Stack-Agnostic** | Never assume React, Next.js, or any specific stack. Detect first. |
| 2 | **Question-Driven** | Ask clarifying questions before implementing. |
| 3 | **Progressive Disclosure** | Load minimal context first, expand on demand. |
| 4 | **Single Responsibility** | One workflow = one task. |
| 5 | **Composable** | Workflows can be combined for complex tasks. |

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `workflows/registry.json` | Index of all available workflows with metadata |
| `workflows/<category>/<name>.md` | Individual workflow files |
| `CONTRIBUTING.md` | Guidelines for creating new workflows |
| `bin/cli.js` | CLI entry point |
| `src/commands/` | CLI command implementations |

---

## 🏗️ Workflow Format

All workflows follow this structure:

```markdown
---
description: [5-10 word description]
---

# Workflow Name

Brief intro explaining the purpose.

## Guardrails
- Boundaries and constraints
- What to avoid

## Steps

### 1. Understand Context
Ask clarifying questions first.

### 2. Analyze Project  
Detect stack, framework, patterns.

### 3. [Implementation Steps]
Describe WHAT to do, not exact code.

### 4. Verify
Confirm success.

## Principles
- Universal best practices

## Reference
- Links to documentation
```

---

## 🔍 When Executing a Workflow

1. **Always detect project stack first**
   - Check `package.json`, config files, file patterns
   - Look at existing code for conventions
   
2. **Ask questions when unclear**
   - Don't assume the user wants React/Next.js
   - Ask about scope, features, constraints

3. **Follow existing patterns**
   - Match the project's coding style
   - Use existing utilities and components

4. **Use `// turbo` appropriately**
   - Only for safe, non-destructive commands
   - Never for delete operations or global changes

---

## 📂 Workflow Categories

| Category | Workflows |
|----------|-----------|
| `development` | new-project, new-component, new-api, refactor, migrate |
| `git` | git-commit, git-pr, git-conflict |
| `testing` | unit-test, e2e-test, code-review |
| `debugging` | debug-error, debug-log, performance |
| `security` | security-audit, dependency-check |
| `documentation` | readme, api-docs, architecture |
| `deployment` | deploy, docker, ci-cd |
| `database` | db-schema, db-migrate, db-seed |
| `ai-tools` | prompt-engineering, rag-pipeline, workflow-creator |
| `creative` | landing-page, dashboard-ui, email-template |

---

## ➕ Adding a New Workflow

1. Create `workflows/<category>/<name>.md` following the template
2. Ensure it follows the **Stack-Agnostic** principle
3. Add entry to `workflows/registry.json`
4. Test with `/<name>` in Antigravity

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.
