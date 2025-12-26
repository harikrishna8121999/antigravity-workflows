# Contributing to Antigravity Workflows

Thank you for your interest in contributing! This project thrives on community contributions.

## 🚀 Quick Start

1. **Fork** this repository
2. **Clone** your fork locally
3. **Create** a new workflow
4. **Test** it in Antigravity
5. **Submit** a Pull Request

## 📝 Creating a Workflow

### 1. Choose a Name and Category

- **Name**: Use `kebab-case` (e.g., `nextjs-app`, `landing-page`)
- **Category**: Choose from `development`, `testing`, `creative`, `deployment`, `documentation`, or `ai-tools`

### 2. Create the Workflow File

Create your workflow at `workflows/<category>/<name>.md`:

```markdown
---
description: One-line description for AI to understand when to use this
---

# Workflow Title

Brief intro explaining what this workflow accomplishes.

## Guardrails
- Rule to prevent common mistakes
- Best practice to enforce

## Steps

### 1. First Step
// turbo
```bash
safe-command-here
```

### 2. Second Step
Instructions with code examples.

## Guidelines
- Best practices

## Reference
- Links to documentation
```

### 3. Update the Registry

Add your workflow to `workflows/registry.json`:

```json
"your-workflow": {
  "category": "development",
  "description": "Short description",
  "tags": ["tag1", "tag2"]
}
```

### 4. Test Your Workflow

1. Copy your workflow to a test project's `.agent/workflows/` directory
2. Open Antigravity in that project
3. Type `/your-workflow` to trigger it
4. Verify the agent follows instructions correctly

## ✅ Checklist Before Submitting

- [ ] Workflow has a clear, descriptive name
- [ ] Description explains when to use it
- [ ] Guardrails section prevents common mistakes
- [ ] Steps are clear and actionable
- [ ] Code examples are tested and work
- [ ] `// turbo` only on safe, non-destructive commands
- [ ] Entry added to `registry.json`
- [ ] Workflow tested in Antigravity

## 🎯 Best Practices

### Writing Good Instructions
- Be specific and actionable
- Include code examples that work out of the box
- Explain *why*, not just *what*
- Consider edge cases

### Using `// turbo`
Add `// turbo` above commands that are:
- ✅ Safe to run without user approval
- ✅ Non-destructive (don't delete files)
- ✅ Fast to execute
- ✅ Don't require user input
- ❌ DON'T use for destructive operations
- ❌ DON'T use for commands that need confirmation

### Keep It Focused
One workflow = one task. If you're doing multiple things, consider splitting into separate workflows.

## 💬 Questions?

Open an [issue](../../issues) if you have questions or need help!
