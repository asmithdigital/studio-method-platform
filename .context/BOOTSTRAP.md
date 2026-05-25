# Studio Method Platform — Bootstrap Context

## What this document is

This document is the authoritative technical and business context for the Studio Method Platform. It is written for an AI agent (Claude) beginning a new conversation on this codebase, but is equally useful for a developer picking up the project for the first time. Read this document before any other file.

---

## Business overview

**Studio Method** is an Australian design operations consultancy founded by Andrew Smith. The business provides four services to design teams inside Australian technology companies:

1. **Studio Setup** — 8–12 week engagement to install the full Studio Method operating model (filter gate, three pathways, ceremonies, documentation) for a design team of 4–20 people. Starting from $28,000 AUD.

2. **AI Layer** — 4–6 week engagement to build an AI orchestration layer connecting the client's design tools (Figma, Miro, GitHub, ZeroHeight) into a Slack-accessible knowledge base. Starting from $18,000 AUD.

3. **Studio Training** — Workshop series (4 × half-day) teaching the Studio Method to design managers and their teams. Starting from $8,500 AUD.

4. **Individual** — Self-paced access to the 12-module Studio Method training platform. $49–$99/month.

The business is operated by Andrew Smith (owner/founder) and a network of 5 freelance consultants. All engagement delivery is done by the consultant network.

### The Studio Method methodology

The methodology consists of:

- **Filter Gate**: An intake process that every design request passes through before entering the backlog. Asks three questions: Is this Discovery, Delivery, or Self-Serve? What is the real scope? What does done look like?
- **Three Pathways**: Discovery (investigative), Delivery (defined), Self-Serve (documented). Each pathway has a different process and definition of done.
- **Three Ceremonies**: Monday Backlog Review (30 min), Wednesday Studio Session (60 min), Friday Close (30 min).
- **Journey Management**: Practice of treating journey maps as living business assets — single source of truth, research pipeline, decision framework, quarterly review.
- **AI Orchestration Layer**: Slack bot connected to Figma, Miro, GitHub, and ZeroHeight via read-only APIs, powered by Claude.

---

## Technical architecture

### Technology stack

| Layer | Choice |
|---|---|
| Frontend framework | React 18 with Vite |
| Routing | React Router v6 |
| Styling | Tailwind CSS with custom design tokens |
| State management | Zustand |
| Backend | Supabase (PostgreSQL, Auth, Storage) |
| AI | Anthropic Claude API |
| Deployment | GitHub Pages |
| Charts | Recharts |
| Icons | Lucide React |

### Repository structure

```
studio-method-platform/
├── src/
│   ├── App.jsx                     # Main router with all routes
│   ├── main.jsx                    # Entry point, BrowserRouter with basename
│   ├── styles/index.css            # Global CSS, design tokens, component classes
│   ├── lib/
│   │   ├── constants.js            # ALL fake data: leads, clients, consultants, projects, modules, etc
│   │   ├── supabase.js             # Supabase client
│   │   ├── anthropic.js            # Claude API client
│   │   ├── utils.js                # Helper functions (cn, formatDate, formatCurrency)
│   │   └── demoMode.js             # Demo mode flag and demo user object
│   ├── store/
│   │   ├── authStore.js            # Zustand auth store (user, profile, role, login, logout)
│   │   ├── uiStore.js              # Zustand UI store (toast, sidebar, modals)
│   │   └── dataStore.js            # Zustand data store (leads, clients, etc)
│   ├── hooks/
│   │   ├── useAuth.js              # Auth hook
│   │   ├── useAI.js                # AI generation hooks
│   │   ├── useData.js              # Data fetching hooks
│   │   └── useAnalytics.js         # Analytics hooks
│   ├── components/
│   │   ├── ui/                     # Reusable UI primitives
│   │   ├── ai/                     # AI-powered components
│   │   ├── charts/                 # Recharts wrappers
│   │   └── layout/                 # Layout components
│   └── pages/
│       ├── public/                 # Public marketing pages
│       ├── auth/                   # Login, signup, forgot password
│       ├── owner/                  # Owner/founder dashboard (12 pages)
│       ├── client/                 # Client portal (5 pages)
│       ├── consultant/             # Consultant portal (6 pages)
│       └── individual/             # Individual learner portal (4 pages)
├── .context/                       # AI context documents
├── database.sql                    # Full Supabase schema
├── llms.txt                        # LLM context file
├── README.md                       # Full business + technical manual
└── public/                         # Static assets
```

### Design token system

| Token | Value | Usage |
|---|---|---|
| navy | #0F1729 | Primary dark, backgrounds, headings |
| gold | #C4964A | Brand accent, CTAs, highlights |
| jade | #2A7B5C | Success states, positive indicators |
| canvas | #F9F8F5 | Page background |
| ink | #0A0A0A | Body text |
| muted | #7A7670 | Secondary text |
| border | #DDD9D2 | Borders and dividers |
| surface | #F0EEE9 | Card backgrounds, hover states |

### CSS classes (tailwind.config + index.css)

Custom component classes defined in `src/styles/index.css`:
- `.btn-gold` — gold button
- `.btn-ghost` — outlined button
- `.btn-navy` — navy button
- `.card` — white rounded card with border
- `.input` — form input
- `.label` — form label
- `.badge` — pill badge
- `.sidebar-link` / `.sidebar-link-active` — nav link styles
- `.stat-card` — metric card
- `.dot-grid` — background grid pattern

---

## Authentication and roles

The platform has four user roles:

| Role | Portal | Entry route |
|---|---|---|
| owner | Full dashboard | /dashboard |
| client | Client portal | /client |
| consultant | Consultant portal | /consultant |
| individual | Learning portal | /learn |

**Demo mode** is enabled by default (see `src/lib/demoMode.js`). In demo mode, the login page shows role buttons that instantly log you in as a demo user of that role. No Supabase credentials required.

The `useAuthStore` (Zustand) manages auth state: `user`, `profile`, `role`, `loading`. On app init, `initAuth()` is called to check for an existing session.

**ProtectedRoute** component in App.jsx wraps all authenticated routes. It redirects to `/login` if unauthenticated, and to `/` if the user's role is not in the `allowed` array.

---

## Fake data layer

All data is stored in `src/lib/constants.js`. In demo mode (which is always active), all pages use this data instead of Supabase queries.

**Data available:**
- `FAKE_LEADS` — 8 leads with full profiles, AI summaries, pain points
- `FAKE_CLIENTS` — 4 clients (Afterpay, Medibank, MYOB, Xero)
- `FAKE_CONSULTANTS` — 5 consultants with full profiles
- `FAKE_PROJECTS` — 4 projects with milestones, objectives, deliverables
- `FAKE_TRAINING_MODULES` — 12 full training modules with 2000+ word content each
- `FAKE_INSIGHTS_ARTICLES` — 6 Insights articles with full body text
- `FAKE_REVENUE_DATA` — Monthly revenue, by-service breakdown, pipeline data
- `FAKE_AUTOMATIONS` — 8 automation records
- `FAKE_INDIVIDUAL_USERS` — 3 individual learner profiles
- `FAKE_ACTIVITY` — 10 activity feed items
- `SERVICES` — 4 service definitions
- `TESTIMONIALS` — 3 client testimonials

---

## AI components

All AI components are in `src/components/ai/`. They use the `useAI` hook which calls the Claude API (or returns mocked data in demo mode).

| Component | Purpose |
|---|---|
| AILeadScorer | Scores a lead and provides rationale |
| AIProposalGenerator | Generates a proposal for a lead |
| AIEmailComposer | Drafts a follow-up email for a lead |
| AIStatusSummary | Summarises project status in natural language |
| AIModuleGenerator | Generates training module content |
| AIInsightCard | Renders an AI insight |
| ChatBot | Public-facing chatbot widget |

---

## Routing summary

All routes are defined in `src/App.jsx`. The basename is `/studio-method-platform` (set in both vite.config.js and main.jsx).

**Public routes**: `/`, `/services`, `/pricing`, `/about`, `/work`, `/insights`, `/insights/:slug`, `/contact`, `/for-organisations`, `/for-individuals`

**Auth routes**: `/login`, `/signup`, `/forgot-password`

**Owner routes**: `/dashboard/*` (12 sub-routes)

**Client routes**: `/client/*` (5 sub-routes)

**Consultant routes**: `/consultant/*` (6 sub-routes)

**Individual routes**: `/learn/*` (4 sub-routes)

---

## Deployment

The app deploys to GitHub Pages at `https://asmithdigital.github.io/studio-method-platform/`.

Build command: `npm run build`
Deploy: Push to `main` branch — GitHub Actions runs the build and deploys to `gh-pages` branch.

The `public/` directory contains `.nojekyll` (prevents Jekyll processing), `CNAME` (custom domain if configured), `robots.txt`, and `sitemap.xml`.

---

## Known constraints and decisions

1. **Demo mode is always on** — `isDemoMode` in `src/lib/demoMode.js` returns `true`. This means Supabase and the Claude API are never called in the current deployment. To enable live mode, set the env vars and change `demoMode.js`.

2. **No real auth** — In demo mode, login just sets a fake user in Zustand state. The real auth flow (Supabase) is scaffolded but not tested.

3. **Training module content is all in constants.js** — The 12 training modules have their full content (2000+ words each) stored in the fake data file, not in a CMS. This is intentional for the demo.

4. **All currency is AUD** — No internationalisation is planned.

5. **Mobile responsiveness** — All pages use responsive Tailwind classes but the primary experience is desktop. Mobile is acceptable but not optimised.

---

## What is not yet built

As of the initial build (May 2026):
- Individual module viewer (full reading experience) — not built; clicking a module does nothing
- Real Supabase queries — all data comes from constants.js
- Real Claude API calls — useAI returns mocked data in demo mode
- Email integration — automations are UI-only
- File upload — document upload in ConsultantOnboarding is UI-only
- PDF generation for proposals — button exists but not wired
- Stripe billing integration — IndividualBilling page is UI-only
- GitHub Actions deploy workflow — needs to be configured

---

## Where to start for specific tasks

| Task | Start here |
|---|---|
| Add a new owner dashboard page | Copy OwnerDashboard.jsx pattern, add route to App.jsx, add to Sidebar ownerNav |
| Add a new client portal feature | Copy ClientDashboard.jsx pattern, add route to App.jsx, add to Sidebar clientNav |
| Connect real Supabase data | Update useData.js hooks, set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env |
| Connect real Claude API | Set VITE_ANTHROPIC_API_KEY in .env, update demoMode.js to return false |
| Add a new training module | Add to FAKE_TRAINING_MODULES in constants.js following the existing schema |
| Change design tokens | Update tailwind.config.js and src/styles/index.css |
