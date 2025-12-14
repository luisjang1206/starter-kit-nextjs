# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Framework
- **Next.js 16** with App Router
- **React 19** with React Server Components
- **TypeScript 5** with strict mode

### Route Groups
The app uses Next.js route groups for layout separation:
- `(marketing)/` - Public pages with site header/footer
- `(auth)/` - Authentication pages (login, register)
- `(dashboard)/` - Protected pages with sidebar navigation

### Directory Structure
```
src/
├── app/           # Next.js App Router pages and layouts
├── components/
│   ├── ui/        # ShadcnUI components (do not modify directly)
│   ├── layout/    # App-specific layouts (sidebar, header, footer)
│   └── shared/    # Reusable components (logo, theme-toggle)
├── config/        # Site configuration and navigation
├── hooks/         # Custom React hooks
├── lib/           # Utilities (cn function for class merging)
└── types/         # TypeScript type definitions
```

### Path Alias
Use `@/` to import from `src/`:
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

## Styling

### Tailwind CSS v4
This project uses Tailwind CSS v4 with `@tailwindcss/postcss`. Theme configuration is in `src/app/globals.css` using `@theme inline`.

### Color System
Uses OKLCH color format with CSS variables. Key variables:
- `--primary`, `--secondary`, `--accent`, `--destructive`, `--muted`
- `--sidebar-*` for dashboard sidebar theming
- Dark mode variants are automatic via `.dark` class

### Class Merging
Always use the `cn()` utility for conditional classes:
```typescript
import { cn } from "@/lib/utils"
cn("base-class", condition && "conditional-class", className)
```

## ShadcnUI Components

### Configuration
- Style: `new-york`
- Located in `src/components/ui/`
- Config file: `components.json`

### Adding Components
```bash
npx shadcn@latest add [component-name]
```

### Available Components
35+ components including: accordion, alert, avatar, button, card, checkbox, dialog, dropdown-menu, input, select, sheet, sidebar, tabs, toast, tooltip, etc.

## Theme System

- Provider: `next-themes` (configured in `src/app/providers.tsx`)
- Toggle: `src/components/shared/theme-toggle.tsx`
- Supports: light, dark, and system preference

## Data Fetching

### TanStack Query v5
Data fetching is handled by TanStack Query with SSR-optimized configuration.

**Provider Setup** (`src/app/providers.tsx`):
- QueryClientProvider wraps the app
- Default staleTime: 60 seconds (prevents immediate refetch after SSR)
- Server/browser environment separation for proper hydration

**Usage:**
```typescript
import { useQuery } from "@tanstack/react-query"

const { data, isLoading, error } = useQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
})
```

## Date/Time Handling

### date-fns
Use date-fns for date manipulation and formatting.

**Usage:**
```typescript
import { format, parseISO, formatDistance } from "date-fns"

format(new Date(), "yyyy-MM-dd")           // "2024-01-15"
formatDistance(date, new Date())           // "3 days ago"
parseISO("2024-01-15T10:00:00Z")           // Date object
```

## Git Hooks

### Husky v9
Git hooks are managed by Husky for code quality enforcement.

**pre-commit** (`.husky/pre-commit`):
```bash
npm run lint && npm run build
```

**commit-msg** (`.husky/commit-msg`):
```bash
npx --no -- commitlint --edit $1
```

### Conventional Commits
Commit messages must follow conventional format: `<type>: <description>`

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `revert`, `build`, `ci`

**Examples:**
```
feat: add user authentication
fix: resolve button click issue
docs: update README
chore: update dependencies
```

## Key Configuration Files

- `components.json` - ShadcnUI configuration
- `tsconfig.json` - TypeScript config with path aliases
- `src/config/site.ts` - Site metadata and navigation items
- `commitlint.config.js` - Conventional commits rules

## Types

Core types are in `src/types/index.ts`:
- `NavItem` - Navigation items with icon and badge support
- `NavSection` - Grouped navigation sections
- `SiteConfig` - Site metadata structure
