---
description: Generate comprehensive unit tests with good coverage using Jest or Vitest
---

# Unit Testing

I will help you write effective unit tests to ensure code quality and catch regressions.

## Guardrails
- Test behavior, not implementation details
- Each test should be independent and isolated
- Use descriptive test names that explain expected behavior
- Mock external dependencies appropriately

## Steps

### 1. Check/Install Testing Framework

For Vitest (recommended for Vite projects):
// turbo
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

For Jest (recommended for Next.js):
// turbo
```bash
npm install -D jest @types/jest ts-jest @testing-library/react @testing-library/jest-dom
```

### 2. Configure Test Framework

**Vitest** - Create `vitest.config.ts`:
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
  },
})
```

**Jest** - Create `jest.config.js`:
```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
```

### 3. Create Test Setup File

Create `tests/setup.ts`:
```typescript
import '@testing-library/jest-dom'

// Add any global test setup here
```

### 4. Write Unit Tests

Create test files alongside source files or in `__tests__` folders:

**Testing Functions** (`lib/__tests__/utils.test.ts`):
```typescript
import { describe, it, expect } from 'vitest' // or 'jest'
import { formatDate, calculateTotal } from '../utils'

describe('formatDate', () => {
  it('should format date in US locale', () => {
    const date = new Date('2024-01-15')
    expect(formatDate(date)).toBe('January 15, 2024')
  })

  it('should return empty string for invalid date', () => {
    expect(formatDate(null)).toBe('')
  })
})

describe('calculateTotal', () => {
  it('should sum array of numbers', () => {
    expect(calculateTotal([1, 2, 3])).toBe(6)
  })

  it('should return 0 for empty array', () => {
    expect(calculateTotal([])).toBe(0)
  })
})
```

**Testing React Components** (`components/__tests__/Button.test.tsx`):
```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '../Button'

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn() // or jest.fn()
    render(<Button onClick={handleClick}>Click</Button>)

    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
```

**Testing Hooks** (`hooks/__tests__/useCounter.test.tsx`):
```typescript
import { renderHook, act } from '@testing-library/react'
import { useCounter } from '../useCounter'

describe('useCounter', () => {
  it('should initialize with default value', () => {
    const { result } = renderHook(() => useCounter())
    expect(result.current.count).toBe(0)
  })

  it('should increment counter', () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)
  })
})
```

### 5. Run Tests
// turbo
```bash
npm test
```

Run with coverage:
```bash
npm test -- --coverage
```

Run in watch mode:
```bash
npm test -- --watch
```

## Mocking Patterns

### Mock Functions
```typescript
const mockFn = vi.fn() // or jest.fn()
mockFn.mockReturnValue('value')
mockFn.mockResolvedValue('async value')
```

### Mock Modules
```typescript
vi.mock('@/lib/api', () => ({
  fetchUser: vi.fn().mockResolvedValue({ id: 1, name: 'Test' }),
}))
```

### Mock Fetch
```typescript
global.fetch = vi.fn().mockResolvedValue({
  ok: true,
  json: () => Promise.resolve({ data: 'test' }),
})
```

## Test Structure (AAA Pattern)
```typescript
it('should calculate total with tax', () => {
  // Arrange
  const items = [{ price: 100 }, { price: 50 }]
  const taxRate = 0.1

  // Act
  const result = calculateTotalWithTax(items, taxRate)

  // Assert
  expect(result).toBe(165)
})
```

## Guidelines
- Aim for 80%+ code coverage on critical paths
- Don't test implementation details (private functions, internal state)
- Use `describe` blocks to group related tests
- Keep tests fast — mock slow operations
- One assertion per test when possible

## Reference
- [Vitest Docs](https://vitest.dev)
- [Jest Docs](https://jestjs.io)
- [Testing Library](https://testing-library.com)
