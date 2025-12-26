---
description: Build stunning, modern landing pages with premium aesthetics and conversion-focused design
---

# Landing Page Creation

I will help you build a high-converting, visually stunning landing page that avoids generic "AI slop" aesthetics.

## Guardrails
- Favor bold, distinctive design over safe, generic choices
- Use real content placeholders, not "Lorem ipsum"
- Ensure mobile-first responsive design
- Keep accessibility in mind (contrast ratios, semantic HTML)

## Steps

### 1. Understand Requirements
Ask clarifying questions if needed:
- What is the product/service?
- Who is the target audience?
- What is the primary call-to-action?

### 2. Create Design System
Set up the foundation:
// turbo
```bash
# If using a fresh Next.js project, install dependencies
npm install framer-motion lucide-react clsx tailwind-merge
```

Create `lib/utils.ts`:
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 3. Build Key Sections
Create components for each section:

**Hero Section** (`components/hero.tsx`)
- Large, compelling headline
- Subheadline with value proposition  
- Primary CTA button
- Hero image or abstract visual

**Social Proof** (`components/social-proof.tsx`)
- Customer logos or testimonials
- Trust badges

**Features Grid** (`components/features.tsx`)
- 3-4 key benefits with icons
- Brief descriptions

**Final CTA** (`components/cta.tsx`)
- Strong call to action at the bottom
- Email capture or signup form

### 4. Assemble Page
Import and compose all sections in `app/page.tsx`:
```tsx
import Hero from '@/components/hero'
import Features from '@/components/features'
import CTA from '@/components/cta'

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <Features />
      <CTA />
    </main>
  )
}
```

### 5. Add Animations
Use Framer Motion for entrance animations:
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* content */}
</motion.div>
```

## Design Guidelines

### Typography
- Use a modern sans-serif like Inter, Geist Sans, or DM Sans
- Large, bold headings (48-72px on desktop)
- Generous line height (1.5-1.6) for body text

### Color
- Use a primary brand color for CTAs
- Subtle background gradients (mesh gradients, grain overlays)
- Dark mode consideration

### Spacing
- 80-120px padding between major sections
- Consistent component spacing using design tokens

## Reference
- Use `rg` to search for existing components in the codebase
- Check for existing Tailwind config at `tailwind.config.js`
- Look for design tokens in `globals.css`
