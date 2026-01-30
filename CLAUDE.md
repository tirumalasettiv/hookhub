# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HookHub is a Next.js application built with React 19, TypeScript, and Tailwind CSS v4. It serves as a directory for discovering open-source cloud hooks and webhooks, with category-based filtering and GitHub integration data.

## Development Commands

```bash
npm run dev      # Start development server on http://localhost:3000
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- **Next.js 16.1.5** - App Router architecture
- **React 19.2.3** - Server and client components
- **TypeScript 5** - Strict mode enabled
- **Tailwind CSS v4** - Using new PostCSS plugin (`@tailwindcss/postcss`)
- **Geist Fonts** - Sans and Mono variants loaded via `next/font/google`

## Project Structure

```
src/
  app/
    layout.tsx     # Root layout with font configuration
    page.tsx       # Home page (async Server Component with filtering)
    globals.css    # Global styles with Tailwind v4 @theme syntax
  components/
    layout/
      Header.tsx   # Site header
      Footer.tsx   # Site footer
    hooks/
      HookCard.tsx      # Individual hook display card
      HookGrid.tsx      # Grid layout for hooks
      CategoryFilter.tsx # Client component for category filtering
  data/
    hooks.json     # Static hook data with categories, GitHub info
  types/
    hook.ts        # Hook and Category type definitions
```

## Key Architecture Patterns

### Server vs Client Components

- **Server Components (default)**: `layout.tsx`, `page.tsx`, `HookCard.tsx`, `HookGrid.tsx`, `Header.tsx`, `Footer.tsx`
- **Client Components**: `CategoryFilter.tsx` (uses `"use client"` for router and state)
- The home page is an async Server Component that awaits searchParams for filtering

### Data Flow

1. Static hook data is stored in `src/data/hooks.json` with predefined categories
2. Home page filters hooks server-side based on URL search params
3. CategoryFilter component (client-side) updates URL params via Next.js router
4. URL changes trigger server-side re-filtering without client-side state

### Category System

- Categories are defined in `src/types/hook.ts` as a union type
- Category badge colors are defined in `src/app/globals.css` using `[data-category]` selectors
- Each category has light/dark mode color variants

## Path Aliases

- `@/*` maps to `./src/*` (configured in tsconfig.json)
- Example: `import { Hook } from '@/types/hook'`

## Tailwind CSS v4

This project uses Tailwind v4, which has a different syntax:
- Global styles use `@import "tailwindcss";` instead of separate directives
- Theme customization uses `@theme inline { }` syntax in CSS
- Custom CSS properties defined in `:root` and `@theme` blocks
- PostCSS plugin is `@tailwindcss/postcss` (not standalone Tailwind config file)

## TypeScript Configuration

- Target: ES2017
- JSX: react-jsx (React 17+ transform)
- Strict mode enabled
- Module resolution: bundler

## App Router Patterns

This project uses Next.js App Router (not Pages Router):
- Server Components by default
- Client Components require `"use client"` directive
- Layout and page files use TypeScript (.tsx)
- Metadata exported from layouts/pages for SEO
- Search params are accessed via `Promise<{ key?: string }>` in page props (Next.js 15+ async API)
