---
description: Create a new workflow for the Antigravity workflows repository
---

# Workflow Creator

I will help you create a new workflow that can be shared with the community.

## Guardrails
- Keep workflows focused on a single, well-defined task
- Be specific and actionable in instructions
- Include guardrails to prevent common mistakes
- Use `// turbo` annotation for safe, auto-runnable commands

## Steps

### 1. Define the Workflow

Gather information:
- **Name**: kebab-case identifier (e.g., `nextjs-app`, `landing-page`)
- **Category**: development, testing, creative, deployment, documentation, or ai-tools
- **Description**: One-line summary of what it does and when to use it
- **Target Audience**: Who would use this workflow?

### 2. Choose Workflow Structure

A good workflow has these sections:

```markdown
---
description: One-line description for the registry
---

# Workflow Title

Brief intro explaining what this workflow accomplishes.

## Guardrails
- Rule 1: Prevent common mistake
- Rule 2: Enforce best practice
- Rule 3: Scope boundaries

## Steps

### 1. First Step
// turbo (if safe to auto-run)
```bash
command here
```

Explanation of what this does.

### 2. Second Step
Instructions with code examples.

## Guidelines
- Best practice 1
- Best practice 2

## Reference
- Links to documentation
- Commands for exploring codebase
```

### 3. Create the File

Create the workflow file at:
```
workflows/<category>/<name>.md
```

### 4. Update Registry

Add entry to `workflows/registry.json`:
```json
"<name>": {
  "category": "<category>",
  "description": "<description>",
  "tags": ["tag1", "tag2", "tag3"]
}
```

### 5. Test the Workflow

1. Copy the file to a test project's `.agent/workflows/` directory
2. Open Antigravity in that project
3. Type `/<name>` to trigger the workflow
4. Verify the agent follows instructions correctly

## Guidelines

### What Makes a Good Workflow
- **Specific**: Solves one problem well
- **Actionable**: Clear steps the agent can follow
- **Defensive**: Guardrails prevent mistakes
- **Documented**: Includes references for learning more

### Naming Conventions
- Use kebab-case for file names
- Use descriptive names: `nextjs-app` not `create-app`
- Include the tool/framework if relevant: `playwright-test`, `vercel-deploy`

### Using `// turbo`
Add `// turbo` above commands that are:
- Safe to run without user approval
- Non-destructive (don't delete files)
- Fast to execute
- Don't require user input

## Reference
- See existing workflows in `workflows/` for examples
- Check `CONTRIBUTING.md` for submission guidelines
