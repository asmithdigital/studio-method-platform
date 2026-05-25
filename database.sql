-- ─────────────────────────────────────────────────────────────────────────────
-- Studio Method Platform — Supabase Schema
-- Run in Supabase SQL editor. Enable RLS on all tables after creation.
-- ─────────────────────────────────────────────────────────────────────────────

-- PROFILES
-- Extends Supabase auth.users. Created by trigger on signup.
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  role TEXT CHECK (role IN ('owner', 'client', 'consultant', 'individual')),
  company TEXT,
  client_id TEXT,        -- populated for client role
  consultant_id TEXT,    -- populated for consultant role
  plan TEXT,             -- populated for individual role (individual/individual_pro)
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-create profile on user signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, full_name, role)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name', COALESCE(NEW.raw_user_meta_data->>'role', 'individual'));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- LEADS
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  full_name TEXT,
  company TEXT,
  title TEXT,
  source TEXT CHECK (source IN ('linkedin', 'referral', 'website', 'conference', 'other')),
  status TEXT CHECK (status IN ('new', 'contacted', 'qualified', 'proposal_sent', 'won', 'lost')) DEFAULT 'new',
  score INTEGER CHECK (score >= 0 AND score <= 100),
  pain_points TEXT[],
  budget_range TEXT,
  timeline TEXT,
  service_interest TEXT[],
  notes TEXT,
  ai_summary TEXT,
  last_contact DATE,
  next_followup DATE,
  owner_id UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- CLIENTS
CREATE TABLE IF NOT EXISTS clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company TEXT NOT NULL,
  industry TEXT,
  company_size TEXT,
  status TEXT CHECK (status IN ('active', 'onboarding', 'paused', 'completed')) DEFAULT 'active',
  tier TEXT CHECK (tier IN ('full_service', 'studio_setup', 'ai_layer', 'training')),
  contract_value NUMERIC(10,2),
  contract_start DATE,
  contract_end DATE,
  health_score INTEGER CHECK (health_score >= 0 AND health_score <= 100),
  nps_score INTEGER CHECK (nps_score >= 0 AND nps_score <= 10),
  primary_contact TEXT,
  primary_contact_email TEXT,
  primary_consultant_id UUID REFERENCES profiles(id),
  notes TEXT,
  logo_initial TEXT,
  logo_color TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- CONSULTANTS
CREATE TABLE IF NOT EXISTS consultants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID REFERENCES profiles(id),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  status TEXT CHECK (status IN ('active', 'onboarding', 'screening', 'inactive')) DEFAULT 'screening',
  specialisms TEXT[],
  day_rate NUMERIC(10,2),
  availability TEXT CHECK (availability IN ('available', 'partial', 'unavailable')) DEFAULT 'available',
  availability_date DATE,
  location TEXT,
  timezone TEXT DEFAULT 'Australia/Adelaide',
  bio TEXT,
  linkedin_url TEXT,
  portfolio_url TEXT,
  contract_signed BOOLEAN DEFAULT FALSE,
  onboarding_complete BOOLEAN DEFAULT FALSE,
  references_provided BOOLEAN DEFAULT FALSE,
  days_delivered INTEGER DEFAULT 0,
  total_revenue_generated NUMERIC(10,2) DEFAULT 0,
  rating NUMERIC(3,1),
  capacity_days_per_week INTEGER DEFAULT 5,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- PROJECTS
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  type TEXT CHECK (type IN ('full_service', 'studio_setup', 'ai_layer', 'training')),
  status TEXT CHECK (status IN ('active', 'completed', 'paused', 'cancelled')) DEFAULT 'active',
  start_date DATE,
  end_date DATE,
  budget NUMERIC(10,2),
  spent NUMERIC(10,2) DEFAULT 0,
  health TEXT CHECK (health IN ('green', 'amber', 'red')) DEFAULT 'green',
  completion_percent INTEGER DEFAULT 0 CHECK (completion_percent >= 0 AND completion_percent <= 100),
  description TEXT,
  objectives TEXT[],
  deliverables TEXT[],
  ai_status_summary TEXT,
  lead_consultant_id UUID REFERENCES consultants(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- MILESTONES
CREATE TABLE IF NOT EXISTS milestones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT CHECK (status IN ('complete', 'in_progress', 'upcoming')) DEFAULT 'upcoming',
  due_date DATE,
  completed_date DATE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- PROPOSALS
CREATE TABLE IF NOT EXISTS proposals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  client_id UUID REFERENCES clients(id),
  service TEXT,
  value NUMERIC(10,2),
  status TEXT CHECK (status IN ('draft', 'sent', 'accepted', 'declined')) DEFAULT 'draft',
  sent_date DATE,
  valid_until DATE,
  content JSONB,
  notes TEXT,
  created_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- TIMESHEETS
CREATE TABLE IF NOT EXISTS timesheets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consultant_id UUID REFERENCES consultants(id) ON DELETE CASCADE,
  project_id UUID REFERENCES projects(id),
  week_ending DATE NOT NULL,
  days_worked NUMERIC(3,1) CHECK (days_worked >= 0 AND days_worked <= 5),
  day_rate NUMERIC(10,2),
  amount NUMERIC(10,2),
  status TEXT CHECK (status IN ('submitted', 'approved', 'rejected')) DEFAULT 'submitted',
  notes TEXT,
  approved_by UUID REFERENCES profiles(id),
  approved_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- INVOICES
CREATE TABLE IF NOT EXISTS invoices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_number TEXT UNIQUE NOT NULL,
  client_id UUID REFERENCES clients(id),
  project_id UUID REFERENCES projects(id),
  amount NUMERIC(10,2),
  status TEXT CHECK (status IN ('draft', 'sent', 'paid', 'overdue')) DEFAULT 'draft',
  issue_date DATE,
  due_date DATE,
  paid_date DATE,
  line_items JSONB,
  notes TEXT,
  created_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- TRAINING MODULES
CREATE TABLE IF NOT EXISTS training_modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  audience TEXT CHECK (audience IN ('both', 'client', 'consultant', 'individual')) DEFAULT 'both',
  category TEXT CHECK (category IN ('methodology', 'process', 'ai_layer', 'leadership')),
  order_index INTEGER DEFAULT 0,
  estimated_minutes INTEGER DEFAULT 20,
  published BOOLEAN DEFAULT FALSE,
  content JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- MODULE PROGRESS (for individual learners)
CREATE TABLE IF NOT EXISTS module_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  module_id UUID REFERENCES training_modules(id) ON DELETE CASCADE,
  status TEXT CHECK (status IN ('started', 'complete')) DEFAULT 'started',
  progress_percent INTEGER DEFAULT 0,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, module_id)
);

-- AUTOMATIONS
CREATE TABLE IF NOT EXISTS automations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  trigger_type TEXT,
  trigger_config JSONB,
  actions JSONB,
  status TEXT CHECK (status IN ('active', 'paused')) DEFAULT 'active',
  last_run TIMESTAMPTZ,
  run_count INTEGER DEFAULT 0,
  owner_id UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- INSIGHTS ARTICLES
CREATE TABLE IF NOT EXISTS articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  body TEXT,
  category TEXT,
  author TEXT,
  read_time_minutes INTEGER,
  published BOOLEAN DEFAULT FALSE,
  published_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- DOCUMENTS (client engagement files)
CREATE TABLE IF NOT EXISTS documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  project_id UUID REFERENCES projects(id),
  name TEXT NOT NULL,
  type TEXT,
  category TEXT,
  storage_path TEXT,
  size_bytes BIGINT,
  status TEXT CHECK (status IN ('draft', 'final', 'archived')) DEFAULT 'draft',
  uploaded_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─────────────────────────────────────────────────────────────────────────────
-- ROW LEVEL SECURITY
-- ─────────────────────────────────────────────────────────────────────────────

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultants ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE milestones ENABLE ROW LEVEL SECURITY;
ALTER TABLE proposals ENABLE ROW LEVEL SECURITY;
ALTER TABLE timesheets ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE training_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE module_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE automations ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- OWNER can read and write everything
CREATE POLICY "Owner full access" ON profiles FOR ALL USING (
  (SELECT role FROM profiles WHERE id = auth.uid()) = 'owner'
);

CREATE POLICY "Owner full access leads" ON leads FOR ALL USING (
  (SELECT role FROM profiles WHERE id = auth.uid()) = 'owner'
);

CREATE POLICY "Owner full access clients" ON clients FOR ALL USING (
  (SELECT role FROM profiles WHERE id = auth.uid()) = 'owner'
);

CREATE POLICY "Owner full access consultants" ON consultants FOR ALL USING (
  (SELECT role FROM profiles WHERE id = auth.uid()) = 'owner'
);

CREATE POLICY "Owner full access projects" ON projects FOR ALL USING (
  (SELECT role FROM profiles WHERE id = auth.uid()) = 'owner'
);

-- CLIENTS can read their own data
CREATE POLICY "Client read own data" ON clients FOR SELECT USING (
  (SELECT client_id FROM profiles WHERE id = auth.uid()) = id::text
);

CREATE POLICY "Client read own projects" ON projects FOR SELECT USING (
  client_id IN (
    SELECT id FROM clients WHERE id::text = (SELECT client_id FROM profiles WHERE id = auth.uid())
  )
);

-- CONSULTANTS can read their own profile and assigned projects
CREATE POLICY "Consultant read own profile" ON consultants FOR SELECT USING (
  profile_id = auth.uid()
);

CREATE POLICY "Consultant read assigned projects" ON projects FOR SELECT USING (
  lead_consultant_id IN (
    SELECT id FROM consultants WHERE profile_id = auth.uid()
  )
);

CREATE POLICY "Consultant manage own timesheets" ON timesheets FOR ALL USING (
  consultant_id IN (
    SELECT id FROM consultants WHERE profile_id = auth.uid()
  )
);

-- Training modules are publicly readable when published
CREATE POLICY "Anyone read published modules" ON training_modules FOR SELECT USING (
  published = TRUE
);

CREATE POLICY "Owner manage modules" ON training_modules FOR ALL USING (
  (SELECT role FROM profiles WHERE id = auth.uid()) = 'owner'
);

-- Module progress belongs to user
CREATE POLICY "User own progress" ON module_progress FOR ALL USING (
  user_id = auth.uid()
);

-- Published articles are publicly readable
CREATE POLICY "Anyone read published articles" ON articles FOR SELECT USING (
  published = TRUE
);

CREATE POLICY "Owner manage articles" ON articles FOR ALL USING (
  (SELECT role FROM profiles WHERE id = auth.uid()) = 'owner'
);
