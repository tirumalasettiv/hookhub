# HookHub - Product Specification

## Overview

HookHub is a curated directory for discovering open-source cloud hooks, webhooks, and serverless event integrations. It provides developers with a simple way to browse and find ready-to-use hook implementations from GitHub repositories.

## MVP Scope

The initial release focuses on **displaying and browsing hooks only** — no user accounts, submissions, or advanced filtering.

---

## Core Data Model

### Hook

| Field       | Type     | Description                                      |
|-------------|----------|--------------------------------------------------|
| `id`        | string   | Unique identifier                                |
| `name`      | string   | Hook name (e.g., "Stripe Webhook Handler")       |
| `category`  | string   | Category classification (see categories below)  |
| `description` | string | Brief description of what the hook does         |
| `repoUrl`   | string   | GitHub repository URL                            |
| `repoOwner` | string   | GitHub username/org                              |
| `repoName`  | string   | Repository name                                  |
| `stars`     | number   | GitHub stars (optional, for display)            |
| `language`  | string   | Primary programming language (optional)         |

### Categories

- **Payment** - Stripe, PayPal, Square webhooks
- **Communication** - Slack, Discord, Twilio integrations
- **DevOps** - GitHub, GitLab, CI/CD event handlers
- **Storage** - S3, Cloud Storage event triggers
- **Authentication** - Auth0, Firebase Auth hooks
- **Database** - Supabase, Firebase, Hasura event handlers
- **E-commerce** - Shopify, WooCommerce webhooks
- **Analytics** - Segment, Mixpanel event processors
- **General** - Miscellaneous webhook utilities

---

## Pages & Features

### 1. Home Page (`/`)

**Layout:** Grid of hook cards

**Components:**
- **Header** - Logo, tagline ("Discover Open Source Cloud Hooks")
- **Category Filter Bar** - Horizontal list of category pills for quick filtering
- **Hook Grid** - Responsive grid (3 cols desktop, 2 tablet, 1 mobile)
- **Footer** - Minimal with GitHub link to HookHub repo

**Hook Card Design:**
```
┌─────────────────────────────┐
│ [Category Badge]            │
│                             │
│ Hook Name                   │
│                             │
│ Brief description text      │
│ that may wrap to two lines  │
│                             │
│ ⭐ 1.2k  •  TypeScript      │
│                             │
│ [View on GitHub →]          │
└─────────────────────────────┘
```

### 2. Filtered View (`/?category=payment`)

Same as home page, but filtered to show only hooks in the selected category. Category pill should be visually active/selected.

---

## Technical Implementation

### Data Source (MVP)

For the MVP, hooks data will be stored in a static JSON file:

```
src/
  data/
    hooks.json    # Array of hook objects
```

This allows rapid iteration without backend complexity. Future versions can migrate to a database or GitHub API integration.

### API Routes (Optional for MVP)

```
GET /api/hooks              # List all hooks
GET /api/hooks?category=x   # Filter by category
```

### Component Structure

```
src/
  components/
    layout/
      Header.tsx
      Footer.tsx
    hooks/
      HookCard.tsx         # Individual hook display
      HookGrid.tsx         # Grid container
      CategoryFilter.tsx   # Category pill bar
  app/
    page.tsx               # Home page (server component)
    layout.tsx             # Root layout
  data/
    hooks.json             # Static hook data
  types/
    hook.ts                # TypeScript interfaces
```

---

## UI/UX Requirements

### Design Principles

1. **Clean & Minimal** - Focus on content, not chrome
2. **Fast** - Static data means instant loading
3. **Responsive** - Works on all device sizes
4. **Accessible** - Proper ARIA labels, keyboard navigation

### Color Scheme

Leverage existing Tailwind CSS v4 setup with:
- Dark mode support (matches system preference)
- Category badges with distinct colors per category
- Subtle hover states on cards

### Typography

Use existing Geist font configuration:
- **Geist Sans** - Headings and body text
- **Geist Mono** - Repository names, technical details

---

## Sample Data

```json
[
  {
    "id": "stripe-webhook-handler",
    "name": "Stripe Webhook Handler",
    "category": "Payment",
    "description": "Serverless function to handle Stripe webhook events with signature verification",
    "repoUrl": "https://github.com/serverless/examples/tree/master/aws-node-stripe-integration",
    "repoOwner": "serverless",
    "repoName": "examples",
    "stars": 11200,
    "language": "JavaScript"
  },
  {
    "id": "github-webhook-listener",
    "name": "GitHub Webhook Listener",
    "category": "DevOps",
    "description": "AWS Lambda function that listens to GitHub webhooks and posts notifications to Slack",
    "repoUrl": "https://github.com/serverless/examples/tree/master/aws-node-github-webhook-listener",
    "repoOwner": "serverless",
    "repoName": "examples",
    "stars": 11200,
    "language": "JavaScript"
  },
  {
    "id": "hook0",
    "name": "Hook0",
    "category": "General",
    "description": "Open-source webhook server that handles webhook delivery, retries, and management for your users",
    "repoUrl": "https://github.com/hook0/hook0",
    "repoOwner": "hook0",
    "repoName": "hook0",
    "stars": 450,
    "language": "Rust"
  }
]
```

---

## Future Enhancements (Post-MVP)

- **Search** - Full-text search across names and descriptions
- **GitHub API Integration** - Auto-fetch stars, languages, last updated
- **User Submissions** - Form to submit new hooks for review
- **Favorites** - Local storage-based bookmarking
- **Sorting** - By stars, name, recently added
- **Tags** - Multiple tags per hook beyond single category
- **Detail Pages** - Individual hook pages with README preview

---

## Success Metrics

1. Page loads in < 1 second
2. All hooks visible without JavaScript (SSR)
3. Mobile-friendly layout tested on common devices
4. Lighthouse score > 90 for performance and accessibility

---

## References

- [Serverless Examples Repository](https://github.com/serverless/examples)
- [Hook0 - Open Source Webhook Server](https://github.com/hook0/hook0)
- [Awesome Serverless](https://github.com/anaibol/awesome-serverless)
