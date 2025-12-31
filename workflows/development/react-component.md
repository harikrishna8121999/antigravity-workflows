---
description: Build reusable React components with TypeScript, proper patterns, and accessibility
---

# React Component Creation

I will help you build well-structured, reusable React components following best practices.

## Guardrails
- Always use TypeScript with proper type definitions
- Components should be single-responsibility and composable
- Include accessibility attributes (ARIA) where needed
- Export both the component and its types

## Steps

### 1. Determine Component Requirements
Ask clarifying questions if needed:
- What does this component do?
- What props does it need?
- Does it need internal state?
- Will it be controlled or uncontrolled?

### 2. Create Component File

Create the component in `components/ui/<component-name>.tsx`:
```typescript
import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-primary text-primary-foreground hover:bg-primary/90': variant === 'primary',
            'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
            'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
          },
          {
            'h-9 px-3 text-sm': size === 'sm',
            'h-10 px-4 text-sm': size === 'md',
            'h-11 px-8 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, type ButtonProps }
```

### 3. Add Component Exports

Update `components/ui/index.ts`:
```typescript
export * from './button'
// Add other component exports
```

### 4. Create Component Tests (Optional but Recommended)

Create `components/ui/__tests__/<component-name>.test.tsx`:
```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '../button'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

## Component Patterns

### Compound Components
```typescript
const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-lg border">{children}</div>
)

Card.Header = ({ children }: { children: React.ReactNode }) => (
  <div className="border-b p-4">{children}</div>
)

Card.Body = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4">{children}</div>
)

export { Card }
```

### Controlled vs Uncontrolled
```typescript
interface InputProps {
  value?: string           // Controlled
  defaultValue?: string    // Uncontrolled
  onChange?: (value: string) => void
}
```

## Guidelines
- Use `forwardRef` for components that wrap native elements
- Spread remaining props to the underlying element
- Use `cn()` utility for conditional class names
- Keep styling flexible via `className` prop
- Document complex props with JSDoc comments

## Reference
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Radix UI Primitives](https://www.radix-ui.com/) for accessible patterns
