# Studio Method Platform — Developer Handoff

## Current build status

**Build**: Passing (zero errors)
**Deployment**: GitHub Pages at https://asmithdigital.github.io/studio-method-platform/
**Demo mode**: Active (all data is fake, no API calls)
**Last updated**: May 2026

---

## What is complete

### Infrastructure
- [x] Vite + React 18 setup with @ alias
- [x] Tailwind CSS with custom design tokens
- [x] React Router v6 with full route map
- [x] Zustand stores (auth, UI, data)
- [x] Supabase client (scaffolded, not connected)
- [x] Anthropic client (scaffolded, mock responses in demo mode)
- [x] All UI component library (17 components)
- [x] All AI components (7 components)
- [x] All chart components (5 components)
- [x] All layout components (5 components)
- [x] Demo mode with fake data

### Public pages
- [x] HomePage
- [x] ServicesPage
- [x] PricingPage
- [x] AboutPage
- [x] WorkPage (2000+ word case study)
- [x] InsightsPage
- [x] InsightArticlePage
- [x] ContactPage
- [x] ForOrganisationsPage
- [x] IndividualsPage

### Auth pages
- [x] LoginPage (with demo role buttons)
- [x] SignupPage
- [x] ForgotPasswordPage

### Owner dashboard (12 pages)
- [x] OwnerDashboard (stats, charts, activity feed, alerts)
- [x] LeadsPipeline (kanban + list views)
- [x] LeadDetail (full profile + AI components)
- [x] ClientsList (table with health scores)
- [x] ClientDetail (tabbed with project, documents, notes)
- [x] ConsultantsList (card grid)
- [x] ConsultantDetail (full profile)
- [x] ProjectsList (table with progress)
- [x] ProjectDetail (tabbed: overview, milestones, budget, timesheets)
- [x] ProposalsPage (list + AI generator)
- [x] ProposalDetail (full proposal view)
- [x] FinancePage (revenue charts + invoices)
- [x] TimesheetsPage (approval workflow)
- [x] AnalyticsPage (full analytics dashboard)
- [x] AutomationsPage (8 automation cards with toggle)
- [x] ContentPage (modules + articles management)
- [x] SettingsPage (profile, notifications)

### Client portal (5 pages)
- [x] ClientDashboard
- [x] ClientProject
- [x] ClientTraining
- [x] ClientDocuments
- [x] ClientProfile

### Consultant portal (6 pages)
- [x] ConsultantDashboard
- [x] ConsultantOnboarding (6-step flow)
- [x] ConsultantProjects
- [x] ConsultantTraining
- [x] ConsultantTimesheets
- [x] ConsultantProfile

### Individual portal (4 pages)
- [x] IndividualDashboard
- [x] IndividualTraining
- [x] IndividualProfile
- [x] IndividualBilling

---

## What still needs to be built

### High priority (needed for live launch)

1. **Module viewer** — When a user clicks a training module, it should open a full reading experience showing the module content from `FAKE_TRAINING_MODULES[n].content`. Currently clicking a ModuleCard does nothing (no `onClick` handler wired up). Pattern: create a `/learn/training/:slug` route with a `ModuleViewer` page component.

2. **Supabase integration** — Replace all fake data reads with real Supabase queries. The hooks in `src/hooks/useData.js` are scaffolded for this. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env.local`. Change `isDemoMode` in `src/lib/demoMode.js` to `false`.

3. **Real Claude API** — The `useAI` hook returns mocked data in demo mode. Set `VITE_ANTHROPIC_API_KEY` and change `isDemoMode` to `false`. All AI components will then use real Claude API calls.

4. **GitHub Actions deploy workflow** — Create `.github/workflows/deploy.yml` to automate GitHub Pages deployment on push to main.

5. **Stripe billing** — Wire up the IndividualBilling page to Stripe. The page is UI-only; no real payment processing exists.

### Medium priority

6. **Email integration** — Automations are UI-only. Wire up a transactional email service (Resend or Postmark) to the automation triggers.

7. **File uploads** — Document upload in ConsultantOnboarding and ClientDocuments needs Supabase Storage.

8. **PDF generation for proposals** — ProposalDetail has a "Download PDF" button. Implement using `react-pdf` or a server-side PDF service.

9. **Proposal editing** — ProposalDetail is read-only. Add an edit mode.

10. **Lead status updates** — LeadDetail has a status display but no way to change the status. Add a status change dropdown.

### Low priority (polish)

11. **Mobile optimisation** — All pages work on mobile but are not optimised. Several tables need responsive card alternatives.

12. **Onboarding completion** — ConsultantOnboarding form data is not persisted. Wire to Supabase on submit.

13. **Timesheet form** — ConsultantTimesheets has a basic day-selector form. Improve with per-day breakdown and project allocation.

14. **Search** — ClientsList, ProjectsList, ConsultantsList have search inputs. The input renders but some need more sophisticated filtering.

---

## Key files to know

| File | What it does |
|---|---|
| `src/App.jsx` | All routes, ProtectedRoute component |
| `src/lib/constants.js` | All fake data — start here for data questions |
| `src/lib/demoMode.js` | Toggle between demo and live mode |
| `src/store/authStore.js` | Auth state, login/logout, role management |
| `src/components/layout/Sidebar.jsx` | Navigation by role — add nav items here |
| `src/styles/index.css` | All custom CSS classes and design tokens |

---

## Adding a new page (checklist)

1. Create the page file in the appropriate `src/pages/{role}/` directory
2. Import `DashboardLayout` (authenticated) or `PublicLayout` (public)
3. Add the route to `src/App.jsx`
4. If it's a dashboard page, add the nav item to the appropriate nav array in `src/components/layout/Sidebar.jsx`
5. Use fake data from `src/lib/constants.js`
6. Run `npm run build` to confirm zero errors

---

## Environment variables

```
# Supabase (required for live mode)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Anthropic (required for live AI)
VITE_ANTHROPIC_API_KEY=sk-ant-...
```

Add these to `.env.local` (never commit to git).

---

## Consultant data model

Each consultant in `FAKE_CONSULTANTS` has:
- `id`, `full_name`, `email`, `status` (active/onboarding/screening)
- `specialisms` (array of specialism ids)
- `day_rate`, `availability` (available/partial/unavailable)
- `location`, `timezone`
- `bio`, `linkedin_url`, `portfolio_url`
- `contract_signed`, `onboarding_complete`, `references_provided` (onboarding flags)
- `days_delivered`, `total_revenue_generated`, `rating` (performance data)
- `current_project` (client_id of current engagement)
- `capacity_days_per_week`

---

## Lead data model

Each lead in `FAKE_LEADS` has:
- `id`, `email`, `full_name`, `company`, `title`
- `source` (linkedin/referral/website/conference)
- `status` (new/contacted/qualified/proposal_sent/won/lost)
- `score` (0–100 AI lead score)
- `pain_points` (array of strings)
- `budget_range`, `timeline`
- `service_interest` (array of service ids)
- `notes`, `ai_summary`
- `last_contact`, `next_followup`, `created_at`

---

## Project data model

Each project in `FAKE_PROJECTS` has:
- `id`, `client_id`, `client_name`, `name`, `type`
- `status` (active/completed/paused)
- `start_date`, `end_date`
- `budget`, `spent`, `health` (green/amber/red)
- `completion_percent`
- `description`, `objectives` (array), `deliverables` (array)
- `ai_status_summary`
- `milestones` (array with id, name, status, due_date, completed_date, description)
