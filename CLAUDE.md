# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HookHub is a Next.js application built with React 19, TypeScript, and Tailwind CSS v4.

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
    page.tsx       # Home page
    globals.css    # Global styles with Tailwind v4 @theme syntax
```

## Key Configuration Details

### Path Aliases

- `@/*` maps to `./src/*` (configured in tsconfig.json)
- Example: `import { Component } from '@/components/Component'`

### Tailwind CSS v4

This project uses Tailwind v4, which has a different syntax:
- Global styles use `@import "tailwindcss";` instead of separate directives
- Theme customization uses `@theme inline { }` syntax in CSS
- Custom CSS properties defined in `:root` and `@theme` blocks
- PostCSS plugin is `@tailwindcss/postcss` (not standalone Tailwind config file)

### TypeScript Configuration

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
