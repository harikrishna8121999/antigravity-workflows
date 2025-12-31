---
description: Create type-safe REST API endpoints with Zod validation and proper error handling
---

# API Endpoint Creation

I will help you create robust, type-safe API endpoints for Next.js applications.

## Guardrails
- Always validate input with Zod schemas
- Return consistent response formats
- Handle errors gracefully with appropriate status codes
- Use TypeScript for full type coverage

## Steps

### 1. Determine Requirements
Ask clarifying questions:
- What HTTP methods does this endpoint support?
- What data does it accept/return?
- Does it require authentication?
- What database/service does it interact with?

### 2. Create Validation Schema

Create `lib/validations/<resource>.ts`:
```typescript
import { z } from 'zod'

export const createUserSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['user', 'admin']).default('user'),
})

export const updateUserSchema = createUserSchema.partial()

export type CreateUserInput = z.infer<typeof createUserSchema>
export type UpdateUserInput = z.infer<typeof updateUserSchema>
```

### 3. Create API Route Handler

Create `app/api/<resource>/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server'
import { createUserSchema } from '@/lib/validations/user'
import { ZodError } from 'zod'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validated = createUserSchema.parse(body)

    // Your business logic here
    const user = await createUser(validated)

    return NextResponse.json(
      { success: true, data: user },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      )
    }

    console.error('API Error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    const users = await getUsers({ page, limit })

    return NextResponse.json({
      success: true,
      data: users,
      pagination: { page, limit }
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

### 4. Create Dynamic Route (for single resource)

Create `app/api/<resource>/[id]/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server'

interface RouteParams {
  params: { id: string }
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await getUserById(params.id)

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'Not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, data: user })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  // Update logic
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  // Delete logic
}
```

### 5. Add Authentication (Optional)

Create middleware or use in route:
```typescript
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 401 }
    )
  }

  // Protected logic here
}
```

## Response Format Standard

```typescript
// Success response
{
  "success": true,
  "data": { ... },
  "pagination"?: { "page": 1, "limit": 10, "total": 100 }
}

// Error response
{
  "success": false,
  "error": "Error message",
  "errors"?: [{ "path": ["field"], "message": "Validation error" }]
}
```

## HTTP Status Codes
- `200` - Success (GET, PUT)
- `201` - Created (POST)
- `204` - No Content (DELETE)
- `400` - Bad Request (validation errors)
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## Guidelines
- Keep routes focused on a single resource
- Use appropriate HTTP methods (GET, POST, PUT, DELETE)
- Always validate user input
- Log errors but don't expose internal details to clients
- Consider rate limiting for public APIs

## Reference
- [Next.js Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Zod Documentation](https://zod.dev)
