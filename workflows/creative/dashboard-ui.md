---
description: Create professional admin dashboard interfaces with data visualization and navigation
---

# Dashboard UI Creation

I will help you build a professional, feature-rich admin dashboard interface.

## Guardrails
- Use a consistent layout pattern (sidebar + header)
- Ensure responsive design for tablet and desktop
- Keep data tables scannable and interactive
- Use proper loading and empty states

## Steps

### 1. Determine Requirements
Ask clarifying questions:
- What data will the dashboard display?
- What actions can users perform?
- What navigation structure is needed?
- Any specific metrics or charts required?

### 2. Install Dependencies
// turbo
```bash
npm install lucide-react clsx tailwind-merge recharts
```

Optional for advanced features:
```bash
npm install @tanstack/react-table date-fns
```

### 3. Create Layout Structure

Create `components/dashboard/layout.tsx`:
```typescript
import { ReactNode } from 'react'
import { Sidebar } from './sidebar'
import { Header } from './header'

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
```

### 4. Create Sidebar Navigation

Create `components/dashboard/sidebar.tsx`:
```typescript
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Users, Settings, BarChart3, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Users', href: '/dashboard/users', icon: Users },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Reports', href: '/dashboard/reports', icon: FileText },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 bg-white dark:bg-gray-800 border-r md:block">
      <div className="flex h-16 items-center px-6 border-b">
        <span className="text-xl font-bold">Admin</span>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
```

### 5. Create Stats Cards

Create `components/dashboard/stats-card.tsx`:
```typescript
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatsCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  icon: LucideIcon
}

export function StatsCard({ title, value, change, changeType = 'neutral', icon: Icon }: StatsCardProps) {
  return (
    <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          <p className="mt-1 text-3xl font-semibold">{value}</p>
          {change && (
            <p className={cn(
              'mt-1 text-sm',
              changeType === 'positive' && 'text-green-600',
              changeType === 'negative' && 'text-red-600',
              changeType === 'neutral' && 'text-gray-500'
            )}>
              {change}
            </p>
          )}
        </div>
        <div className="rounded-full bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  )
}
```

### 6. Create Data Table

Create `components/dashboard/data-table.tsx`:
```typescript
interface Column<T> {
  key: keyof T
  header: string
  render?: (value: T[keyof T], row: T) => React.ReactNode
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
}

export function DataTable<T extends { id: string | number }>({ data, columns }: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} className="px-4 py-3 text-left text-sm font-medium">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
              {columns.map((col) => (
                <td key={String(col.key)} className="px-4 py-3 text-sm">
                  {col.render ? col.render(row[col.key], row) : String(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

### 7. Assemble Dashboard Page

```typescript
import { DashboardLayout } from '@/components/dashboard/layout'
import { StatsCard } from '@/components/dashboard/stats-card'
import { DataTable } from '@/components/dashboard/data-table'
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react'

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard title="Total Users" value="12,345" change="+12% from last month" changeType="positive" icon={Users} />
        <StatsCard title="Revenue" value="$45,678" change="+8% from last month" changeType="positive" icon={DollarSign} />
        <StatsCard title="Orders" value="1,234" change="-3% from last month" changeType="negative" icon={ShoppingCart} />
        <StatsCard title="Growth" value="23%" icon={TrendingUp} />
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <DataTable data={recentActivity} columns={activityColumns} />
      </div>
    </DashboardLayout>
  )
}
```

## Design Guidelines

### Color Scheme
- Use a neutral base (gray/slate)
- Accent color for primary actions and active states
- Semantic colors for status (green: success, red: error, yellow: warning)

### Typography
- Clear hierarchy: page title → section headers → card titles → body
- Use tabular numbers for data

### Spacing
- Consistent padding (p-6 for cards)
- Gap-6 for grid layouts
- Breathing room between sections

## Guidelines
- Always show loading skeletons while fetching data
- Provide empty states with helpful messaging
- Make tables sortable and filterable for large datasets
- Support dark mode

## Reference
- [Recharts](https://recharts.org) for charts
- [TanStack Table](https://tanstack.com/table) for advanced tables
