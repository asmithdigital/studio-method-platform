# Studio Method Platform

> A full-stack business operations platform for Studio Method — an Australian design operations consultancy that installs a proven operating model for design teams.

---

## Table of Contents

1. [About Studio Method](#about-studio-method)
2. [The Methodology](#the-methodology)
3. [Platform Overview](#platform-overview)
4. [User Roles](#user-roles)
5. [Technology Stack](#technology-stack)
6. [Project Structure](#project-structure)
7. [Design System](#design-system)
8. [Getting Started](#getting-started)
9. [Authentication & Demo Mode](#authentication--demo-mode)
10. [Pages & Features](#pages--features)
11. [AI Features](#ai-features)
12. [Data Layer](#data-layer)
13. [Database Schema](#database-schema)
14. [Deployment](#deployment)
15. [Environment Variables](#environment-variables)
16. [Roadmap](#roadmap)
17. [Contributing](#contributing)
18. [Contact](#contact)

---

## About Studio Method

Studio Method was built by Andrew Smith, a practising UX Manager who spent twelve months constructing a complete design team operating system inside a real Australian technology organisation. The methodology is not a framework adapted from a book — it was built from the daily reality of managing a design team with no operating model, too many ad-hoc requests, and stakeholders who could not understand what the design team was doing or why.

The result is a tightly scoped set of processes, ceremonies, and tools that give a design team the structure to operate like a professional services firm: predictable intake, clear pathways for different types of work, weekly rituals that keep the team aligned, and an AI orchestration layer that makes design knowledge accessible across the entire organisation.

Studio Method operates as a consultancy, installing the methodology inside client organisations, training their teams to run it independently, and providing an ongoing platform for individual practitioners to learn it themselves.

**Location:** Adelaide, South Australia  
**Website:** [studiomethod.com.au](https://studiomethod.com.au)  
**Email:** hello@studiomethod.com.au

---

## The Methodology

### Filter Gate

The Filter Gate is an intake mechanism that sits at the front of the design team's workflow. Every design request — whether from a product manager, a developer, an executive, or a customer — passes through the Filter Gate before it enters the backlog.

The gate asks three questions:
1. Is this a design problem or a content/copy/production problem?
2. Does sufficient discovery exist to define this work clearly?
3. Is this the right time for this work given current team capacity and priorities?

Requests that cannot answer all three questions are returned with guidance. Requests that pass are scoped into one of three pathways.

### Three Pathways

Work that passes the Filter Gate is assigned to one of three pathways based on its nature:

**Discovery Pathway** — for investigative work where the problem is not yet fully understood. Research, user interviews, journey mapping, hypothesis testing. Output is a defined problem statement and a recommendation for what to build next.

**Delivery Pathway** — for work with a clear, defined scope. Features, screens, components, and experiences that have been through discovery or are sufficiently understood to design and build directly. Output is design and specifications ready for development.

**Self-Serve Pathway** — for work that does not require a designer. Templated requests (icon updates, banner resizes, copy changes, colour updates) that a trained stakeholder can complete using documented self-serve resources. Output is a completed asset without designer involvement.

### Three Ceremonies

**Monday Backlog Review** — The team reviews the Filter Gate queue, scores incoming requests, assigns pathways, and sets the week's priorities. Duration: 45 minutes.

**Wednesday Studio Session** — Mid-week alignment. Work in progress is shared, blockers are surfaced, and the Filter Gate queue is re-prioritised if new urgent work has arrived. Duration: 60 minutes.

**Friday Close** — End-of-week wrap. Completed work is closed, metrics are updated, and the following Monday's backlog review is pre-loaded. Duration: 30 minutes.

### Journey Management

Journey maps are maintained as living business assets rather than one-off deliverables. Each journey map is version-controlled, owned by a named stakeholder, reviewed quarterly, and linked to the product backlog. This practice ensures the organisation's understanding of its customer experience is always current and always connected to active design work.

### AI Orchestration Layer

A Slack-connected AI system that makes design knowledge accessible across the organisation. The AI layer connects Figma (for design assets), Miro (for journey maps and workshops), GitHub (for specifications and handoff notes), and documentation platforms (Confluence, Notion, or equivalent). Any stakeholder can ask a natural language question and receive an answer grounded in the design team's actual work.

---

## Platform Overview

The Studio Method Platform is the operational backbone of the consultancy. It is a single-page application serving four distinct user types through a role-based dashboard system.

The platform manages:
- **Pipeline management** — lead tracking from first contact through to signed contract
- **Client engagement** — project tracking, milestone management, document delivery
- **Consultant operations** — onboarding, timesheet submission, training delivery
- **Individual learning** — self-paced training platform for individual practitioners
- **Financial operations** — invoicing, revenue tracking, timesheet approval
- **Content management** — training modules and insights articles
- **Automation** — trigger-based workflow automations for routine operations
- **Analytics** — revenue, pipeline, capacity, and client health reporting

---

## User Roles

### Owner

Full access to all platform features. The Owner role is for the Studio Method principal(s) who operate the business.

**Access:** Dashboard, Leads Pipeline, Clients, Consultants, Projects, Proposals, Finance, Timesheets, Analytics, Automations, Content, Settings

**Key capabilities:**
- View and manage the full lead pipeline in Kanban or list view
- Create and send proposals with AI-assisted generation
- Monitor client health scores and project status
- Approve or reject consultant timesheets
- Manage training modules and insights articles
- Configure automation workflows
- View revenue, pipeline conversion, and capacity analytics

### Client

Read access to their own engagement data. The Client role is for organisations that have purchased a Studio Method service.

**Access:** Dashboard, Project, Training, Documents, Profile

**Key capabilities:**
- View project status and completion percentage
- Track milestones and upcoming deliverables
- Access training modules included in their engagement
- Download engagement documents
- View AI-generated engagement summary

### Consultant

Access to their own work and training. The Consultant role is for practitioners delivering Studio Method engagements.

**Access:** Dashboard, Projects, Timesheets, Training, Profile, Onboarding (if incomplete)

**Key capabilities:**
- Complete 6-step onboarding flow (personal details, specialisms, documents, training, complete)
- View assigned projects and milestone status
- Submit weekly timesheets
- Access required and optional training modules
- Manage availability and profile details

### Individual

Access to the self-paced learning platform. The Individual role is for practitioners paying a monthly subscription to access the training library.

**Access:** Dashboard, Training, Profile, Billing

**Key capabilities:**
- Work through 12 training modules at their own pace
- Track progress across all modules
- Manage subscription and billing
- View and download invoices

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite |
| Styling | Tailwind CSS |
| State management | Zustand |
| Routing | React Router v6 |
| Charts | Recharts |
| Icons | Lucide React |
| Backend | Supabase (PostgreSQL + Auth + Storage) |
| AI | Anthropic Claude API |
| Deployment | GitHub Pages |
| Domain | Custom CNAME (studiomethod.com.au) |

---

## Project Structure

```
studio-method-platform/
├── public/
│   ├── CNAME                    # Custom domain
│   ├── .nojekyll                # GitHub Pages config
│   ├── robots.txt               # Search crawler config
│   └── sitemap.xml              # 16-page sitemap
├── src/
│   ├── components/
│   │   ├── ai/                  # AI-powered components
│   │   │   ├── AIEmailComposer.jsx
│   │   │   ├── AILeadScorer.jsx
│   │   │   ├── AIModuleGenerator.jsx
│   │   │   ├── AIProposalGenerator.jsx
│   │   │   └── AIStatusSummary.jsx
│   │   ├── charts/              # Recharts wrappers
│   │   │   ├── CapacityChart.jsx
│   │   │   ├── HealthChart.jsx
│   │   │   ├── PipelineChart.jsx
│   │   │   └── RevenueChart.jsx
│   │   ├── layout/              # App shell
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── PublicLayout.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── TopBar.jsx
│   │   │   └── Toast.jsx
│   │   └── ui/                  # Reusable UI primitives
│   │       ├── Avatar.jsx
│   │       ├── Badge.jsx
│   │       ├── HealthIndicator.jsx
│   │       ├── ModuleCard.jsx
│   │       ├── ProgressBar.jsx
│   │       ├── ScoreRing.jsx
│   │       ├── StatCard.jsx
│   │       ├── StepIndicator.jsx
│   │       └── Tabs.jsx
│   ├── lib/
│   │   ├── constants.js         # All fake data for demo mode
│   │   ├── supabase.js          # Supabase client
│   │   └── anthropic.js         # Claude API client
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── LoginPage.jsx
│   │   │   ├── SignupPage.jsx
│   │   │   └── ForgotPasswordPage.jsx
│   │   ├── public/
│   │   │   ├── HomePage.jsx
│   │   │   ├── ServicesPage.jsx
│   │   │   ├── PricingPage.jsx
│   │   │   ├── WorkPage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   ├── ForOrganisationsPage.jsx
│   │   │   ├── IndividualsPage.jsx
│   │   │   ├── ContactPage.jsx
│   │   │   └── InsightsPage.jsx + InsightArticlePage.jsx
│   │   ├── owner/               # 17 owner pages
│   │   ├── client/              # 5 client pages
│   │   ├── consultant/          # 6 consultant pages
│   │   └── individual/          # 4 individual pages
│   ├── store/
│   │   ├── authStore.js         # Auth + role state
│   │   ├── uiStore.js           # UI state (sidebar, toast)
│   │   └── dataStore.js         # Data state
│   ├── App.jsx                  # Router + ProtectedRoute
│   ├── main.jsx                 # Entry point
│   └── styles/
│       └── index.css            # Tailwind + custom classes
├── .context/
│   ├── BOOTSTRAP.md             # Full platform context for AI
│   ├── CONTINUE_BUILD.md        # Build checklist + next steps
│   └── MODULE_SCRIPTS_PROMPT.md # Prompt for module content generation
├── database.sql                 # Full Supabase schema + RLS policies
├── llms.txt                     # LLM-readable platform description
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

---

## Design System

### Colour Tokens

| Name | Hex | Usage |
|---|---|---|
| `navy` | `#0F1729` | Primary backgrounds, headings, sidebar |
| `gold` | `#C4964A` | Primary CTA buttons, highlights, accents |
| `jade` | `#2A7B5C` | Success states, health indicators, active badges |
| `canvas` | `#F9F8F5` | Page backgrounds, card surfaces |
| `ink` | `#0A0A0A` | Body text, high-contrast headings |

### Custom CSS Classes

These classes are defined in `src/styles/index.css` and used throughout the application:

```css
.btn-gold        /* Gold CTA button — primary actions */
.btn-navy        /* Navy button — secondary actions */
.btn-ghost       /* Outlined button — tertiary/cancel */
.card            /* White card with border and shadow */
.input           /* Form input field */
.label           /* Form label */
.badge           /* Status badge pill */
.sidebar-link    /* Inactive sidebar navigation link */
.sidebar-link-active  /* Active sidebar navigation link */
.stat-card       /* Metric card with icon + value + label */
.dot-grid        /* CSS dot grid background pattern */
```

### Typography

- **Headings:** Inter, weight 700–800, tracked slightly tight
- **Body:** Inter, weight 400, line-height 1.6
- **Monospace:** JetBrains Mono (code, invoice numbers, IDs)
- **Size scale:** Tailwind default (text-sm through text-5xl)

### Component Patterns

**StatCard** — Displays a single metric with icon, value, label, and optional trend indicator. Used on all dashboard pages.

**ModuleCard** — Training module card with title, category, estimated duration, and progress ring. Accepts a `progress` prop (object `{ status: 'complete' }` or `undefined`).

**Badge** — Status pill with colour variants: green (active/complete), amber (pending/in_progress), red (overdue/lost), blue (info), grey (inactive).

**HealthIndicator** — Visual health bar (green/amber/red) with numeric score, used for client health and project health.

**ScoreRing** — SVG ring chart displaying a 0–100 score, used for lead scoring.

**StepIndicator** — Horizontal progress steps for multi-step flows. Accepts `steps` (string array) and `current` (0-based index).

**ProgressBar** — Simple horizontal progress bar with colour thresholds (green > 70%, amber > 40%, red ≤ 40%).

**Tabs** — Accessible tab navigation component with controlled active state.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/asmithdigital/studio-method-platform.git
cd studio-method-platform

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/studio-method-platform`.

### Build

```bash
npm run build
```

The production build outputs to `dist/`. GitHub Actions deploys from this directory automatically on push to `main`.

### Preview Production Build

```bash
npm run preview
```

---

## Authentication & Demo Mode

### Demo Mode

The platform runs in demo mode by default. Demo mode bypasses Supabase authentication entirely and loads all data from `src/lib/constants.js`. This means:

- No account creation required
- No network requests to Supabase
- All data is static and resets on page refresh
- All AI features return mock responses

Demo mode is always active in the current build. To switch to live mode, configure the Supabase environment variables (see [Environment Variables](#environment-variables)) and update `authStore.js` to disable the demo bypass.

### Demo Login

The Login page provides one-click demo buttons for each role:

| Button | Role | Redirects to |
|---|---|---|
| Owner Demo | `owner` | `/owner` |
| Client Demo | `client` | `/client` |
| Consultant Demo | `consultant` | `/consultant` |
| Individual Demo | `individual` | `/individual` |

### ProtectedRoute

All authenticated pages are wrapped in a `ProtectedRoute` component defined in `App.jsx`:

```jsx
function ProtectedRoute({ children, allowed }) {
  const { user, role } = useAuthStore()
  if (!user) return <Navigate to="/login" replace />
  if (allowed && !allowed.includes(role)) return <Navigate to="/" replace />
  return children
}
```

The `allowed` prop accepts an array of permitted roles. If the authenticated user's role is not in the allowed list, they are redirected to the home page.

### Auth Store

`src/store/authStore.js` manages authentication state with Zustand:

```js
{
  user: null,          // User object or null
  role: null,          // 'owner' | 'client' | 'consultant' | 'individual' | null
  isDemoMode: true,    // Always true in current build
  login(email, password, demoRole),
  logout(),
  setUser(user),
  setRole(role),
}
```

---

## Pages & Features

### Public Pages

| Path | Component | Description |
|---|---|---|
| `/` | `HomePage` | Hero, services overview, testimonials, CTA |
| `/services` | `ServicesPage` | Four service offerings with detail |
| `/pricing` | `PricingPage` | Pricing table for all tiers |
| `/work` | `WorkPage` | 2000-word case study of the twelve-month build |
| `/about` | `AboutPage` | Andrew Smith biography and platform story |
| `/for-organisations` | `ForOrganisationsPage` | B2B positioning, symptoms, process, testimonials |
| `/for-individuals` | `IndividualsPage` | Individual tier positioning, module preview, pricing |
| `/contact` | `ContactPage` | Contact form, details, location map |
| `/insights` | `InsightsPage` | Article listing with category filter |
| `/insights/:slug` | `InsightArticlePage` | Full article view |

### Auth Pages

| Path | Component | Description |
|---|---|---|
| `/login` | `LoginPage` | Email/password + demo role buttons |
| `/signup` | `SignupPage` | Registration with account type selection |
| `/forgot-password` | `ForgotPasswordPage` | Password reset request |

### Owner Pages (role: `owner`)

| Path | Component | Description |
|---|---|---|
| `/owner` | `OwnerDashboard` | Morning brief, KPIs, charts, activity feed |
| `/owner/leads` | `LeadsPipeline` | Kanban pipeline with 6 stages + list view |
| `/owner/leads/:id` | `LeadDetail` | Lead profile, AI scoring, email composer |
| `/owner/clients` | `ClientsList` | Searchable client table with health scores |
| `/owner/clients/:id` | `ClientDetail` | Client tabs: overview, projects, documents, notes |
| `/owner/consultants` | `ConsultantsList` | Consultant card grid with availability |
| `/owner/consultants/:id` | `ConsultantDetail` | Consultant profile, performance, onboarding checklist |
| `/owner/projects` | `ProjectsList` | Project cards with health and budget |
| `/owner/projects/:id` | `ProjectDetail` | Project tabs: overview, milestones, budget, timesheets |
| `/owner/proposals` | `ProposalsPage` | Proposal list + AI generator per lead |
| `/owner/proposals/:id` | `ProposalDetail` | Full proposal view with scope and investment |
| `/owner/finance` | `FinancePage` | Revenue, invoices, service breakdown |
| `/owner/timesheets` | `TimesheetsPage` | Timesheet approval queue |
| `/owner/analytics` | `AnalyticsPage` | All four charts + KPI summary |
| `/owner/automations` | `AutomationsPage` | Automation cards with toggle |
| `/owner/content` | `ContentPage` | Module and article management |
| `/owner/settings` | `SettingsPage` | Profile, business, notifications, danger zone |

### Client Pages (role: `client`)

| Path | Component | Description |
|---|---|---|
| `/client` | `ClientDashboard` | Project status, milestones, training, documents |
| `/client/project` | `ClientProject` | Full project view with milestones and objectives |
| `/client/training` | `ClientTraining` | Training modules included in engagement |
| `/client/documents` | `ClientDocuments` | Document downloads and file listing |
| `/client/profile` | `ClientProfile` | Contact details and preferences |

### Consultant Pages (role: `consultant`)

| Path | Component | Description |
|---|---|---|
| `/consultant` | `ConsultantDashboard` | Engagement overview, timesheets, training checklist |
| `/consultant/onboarding` | `ConsultantOnboarding` | 6-step onboarding flow |
| `/consultant/projects` | `ConsultantProjects` | Assigned projects with milestone status |
| `/consultant/timesheets` | `ConsultantTimesheets` | Submit timesheets, view history |
| `/consultant/training` | `ConsultantTraining` | Required and optional training modules |
| `/consultant/profile` | `ConsultantProfile` | Profile, specialisms, availability, rates |

### Individual Pages (role: `individual`)

| Path | Component | Description |
|---|---|---|
| `/individual` | `IndividualDashboard` | Progress summary, continue learning, recent modules |
| `/individual/training` | `IndividualTraining` | Full module library with status filter |
| `/individual/profile` | `IndividualProfile` | Personal details and avatar |
| `/individual/billing` | `IndividualBilling` | Plan details, payment method, invoice history |

---

## AI Features

All AI features are mocked in demo mode. In production, they call the Anthropic Claude API via `src/lib/anthropic.js`.

### AILeadScorer

Analyses a lead's profile (company size, pain points, budget range, timeline, service interest) and returns a 0–100 score with a breakdown and reasoning. Used on `LeadDetail` page.

### AIEmailComposer

Generates a personalised outreach email for a lead based on their profile and stage in the pipeline. Used on `LeadDetail` page.

### AIProposalGenerator

Generates a complete proposal document for a qualified lead, including executive summary, scope of work, investment, and timeline. Each qualified lead on `ProposalsPage` gets its own generator instance via `<AIProposalGenerator lead={lead} />`.

### AIStatusSummary

Generates a natural language summary of a client's current engagement status — combining project health, recent milestones, and upcoming deliverables. Used on `ClientDetail` and `ClientDashboard`.

### AIModuleGenerator

Generates structured training module content in JSON format, given a module title, target audience, and category. Used on the `ContentPage` (owner only) via a dedicated form.

---

## Data Layer

### Constants File

All demo data lives in `src/lib/constants.js`. This file is the single source of truth for all fake data in the application.

Key exports:

```js
FAKE_LEADS          // 8 leads across all pipeline stages
FAKE_CLIENTS        // 4 clients (active, onboarding, paused)
FAKE_CONSULTANTS    // 5 consultants with specialisms, rates, availability
FAKE_PROJECTS       // 4 projects with milestones array
FAKE_TRAINING_MODULES  // 12 complete modules with content JSONB
FAKE_INSIGHTS_ARTICLES // 6 articles with full body content
FAKE_REVENUE_DATA   // 12 months of revenue data for Recharts
FAKE_AUTOMATIONS    // 8 automations with trigger/action config
FAKE_INDIVIDUAL_USERS  // 3 individual learner profiles
FAKE_ACTIVITY       // 10 activity feed items
SERVICES            // 4 service objects with pricing
TESTIMONIALS        // 3 client testimonials
```

### Data Store

`src/store/dataStore.js` manages application data state with Zustand. In demo mode, it initialises from `constants.js`. In live mode, it would hydrate from Supabase on auth.

### Zustand Stores

| Store | File | Responsibilities |
|---|---|---|
| `authStore` | `src/store/authStore.js` | User, role, demo mode, login/logout |
| `uiStore` | `src/store/uiStore.js` | Sidebar open/close, toast messages, modals |
| `dataStore` | `src/store/dataStore.js` | Leads, clients, consultants, projects, modules |

---

## Database Schema

The full schema is in `database.sql`. It targets Supabase (PostgreSQL) and includes all table definitions, foreign key relationships, and Row Level Security policies.

### Tables

| Table | Description |
|---|---|
| `profiles` | Extends `auth.users`. Role, company, client_id, consultant_id |
| `leads` | Pipeline leads with scoring, pain points, and follow-up dates |
| `clients` | Active client engagements with health score and tier |
| `consultants` | Consultant profiles with specialisms, availability, and rates |
| `projects` | Client projects with budget, health, and completion tracking |
| `milestones` | Project milestones with status and due dates |
| `proposals` | Proposals linked to leads or clients |
| `timesheets` | Consultant weekly timesheets with approval workflow |
| `invoices` | Client invoices with status and line items |
| `training_modules` | Training content with audience, category, and JSONB body |
| `module_progress` | User progress records per module |
| `automations` | Trigger-based workflow automation configs |
| `articles` | Insights articles with body content |
| `documents` | Client engagement files with storage references |

### Row Level Security

RLS is enabled on all tables. Policy summary:

- **Owner** — full read/write access to all tables
- **Client** — read-only access to their own `clients` and `projects` records
- **Consultant** — read their own `consultants` record, read assigned `projects`, full access to own `timesheets`
- **Individual** — full access to own `module_progress`, read published `training_modules`
- **Public** — read published `training_modules` and `articles`

To apply the schema, run `database.sql` in the Supabase SQL editor for your project.

---

## Deployment

The platform deploys to GitHub Pages automatically via GitHub Actions on every push to `main`.

### GitHub Actions Workflow

The workflow (`.github/workflows/deploy.yml`) runs:
1. `npm ci` — install dependencies
2. `npm run build` — build to `dist/`
3. Deploy `dist/` to the `gh-pages` branch using `peaceiris/actions-gh-pages`

### Custom Domain

The `public/CNAME` file contains `studiomethod.com.au`. GitHub Pages uses this to serve the application from the custom domain. DNS must point to GitHub Pages servers.

### Base Path

The Vite config sets `base: '/studio-method-platform'` for GitHub Pages compatibility. React Router uses `basename='/studio-method-platform'` in `main.jsx`.

When deploying to a custom domain (root path), update:
- `vite.config.js` — set `base: '/'`
- `main.jsx` — remove `basename` from `BrowserRouter`

---

## Environment Variables

Create a `.env` file in the project root for live mode:

```bash
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Anthropic Claude
VITE_ANTHROPIC_API_KEY=sk-ant-your-key

# App
VITE_APP_ENV=production
```

**Important:** Never commit `.env` to version control. The `.gitignore` should include `.env` and `.env.local`.

All Vite environment variables must be prefixed with `VITE_` to be accessible in the browser bundle.

---

## Roadmap

### Phase 2 — Live Backend

- [ ] Connect Supabase auth (disable demo mode)
- [ ] Wire all data reads/writes to Supabase tables
- [ ] Implement real-time updates via Supabase subscriptions
- [ ] File upload to Supabase Storage (documents, avatars)
- [ ] Supabase Edge Functions for server-side AI calls

### Phase 3 — Payments

- [ ] Stripe integration for Individual subscription billing
- [ ] Stripe Billing Portal for plan management
- [ ] Webhook handling for subscription lifecycle events
- [ ] Invoice generation from Stripe charge data

### Phase 4 — Communications

- [ ] Resend integration for transactional email
- [ ] Proposal send-by-email workflow
- [ ] Automated follow-up sequences for leads
- [ ] Client milestone notification emails

### Phase 5 — AI Enhancement

- [ ] Real Anthropic Claude API calls (lead scoring, proposal generation, email composer)
- [ ] Training module content generation with AIModuleGenerator
- [ ] Client engagement AI summaries on schedule
- [ ] AI-assisted timesheet anomaly detection

### Phase 6 — Module Viewer

- [ ] Full training module viewer with section navigation
- [ ] Module completion tracking
- [ ] Quiz/assessment component
- [ ] Certificate generation on completion

---

## Contributing

This is a private platform for Studio Method. If you are a contractor working on the platform:

1. Read `.context/BOOTSTRAP.md` for full platform context before making changes
2. Read `.context/CONTINUE_BUILD.md` for the current build state and what is still needed
3. All new pages must use fake data from `src/lib/constants.js` until Supabase is wired
4. All imports must use the `@` alias (e.g. `import { FAKE_CLIENTS } from '@/lib/constants'`)
5. All authenticated pages must be wrapped in `ProtectedRoute` in `App.jsx`
6. All authenticated pages must render inside `DashboardLayout`
7. Run `npm run build` before pushing — zero errors required
8. Follow the existing component patterns (StatCard, ModuleCard, Badge, ProgressBar)
9. Use the design token classes (`.btn-gold`, `.card`, `.input`, `.label`) rather than ad-hoc Tailwind

### Adding a New Page

1. Create `src/pages/<role>/<PageName>.jsx`
2. Import `DashboardLayout` and wrap the return
3. Add the route in `App.jsx` inside the appropriate `ProtectedRoute`
4. Add the nav link to `Sidebar.jsx` in the appropriate role nav array
5. Pull data from `constants.js` — no props needed
6. Run build to confirm zero errors

---

## Contact

**Andrew Smith**  
Studio Method  
Adelaide, South Australia  
[hello@studiomethod.com.au](mailto:hello@studiomethod.com.au)  
[studiomethod.com.au](https://studiomethod.com.au)

---

*Studio Method Platform — Built with React 18, Vite, Tailwind CSS, Zustand, Supabase, and Anthropic Claude.*
