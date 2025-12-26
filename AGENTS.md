# Agent Instructions

These instructions are for AI agents working with this repository.

## When to Reference This Project

Open this project when you need:
- A workflow to guide a specific task (Next.js setup, testing, deployment)
- To understand how to create a new workflow
- Instructions for common development patterns

## Key Files

- `workflows/registry.json` — Index of all available workflows
- `workflows/<category>/<name>.md` — Individual workflow files
- `bin/cli.js` — CLI entry point
- `src/commands/` — CLI command implementations

## Workflow Format

All workflows follow this format:

```markdown
---
description: Short description
---

# Title

[Instructions]

## Steps
1. Step with optional // turbo annotation

## Guidelines
- Guidelines for the agent
```

## Adding a New Workflow

1. Create `workflows/<category>/<name>.md`
2. Add entry to `workflows/registry.json`
3. Test with `/name` in Antigravity
