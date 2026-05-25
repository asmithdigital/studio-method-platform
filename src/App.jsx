import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuthStore } from '@/store/authStore'

// Public
import HomePage from '@/pages/public/HomePage'
import ServicesPage from '@/pages/public/ServicesPage'
import PricingPage from '@/pages/public/PricingPage'
import AboutPage from '@/pages/public/AboutPage'
import InsightsPage from '@/pages/public/InsightsPage'
import InsightArticlePage from '@/pages/public/InsightArticlePage'
import ContactPage from '@/pages/public/ContactPage'
import WorkPage from '@/pages/public/WorkPage'
import ForOrganisationsPage from '@/pages/public/ForOrganisationsPage'
import IndividualsPage from '@/pages/public/IndividualsPage'

// Auth
import LoginPage from '@/pages/auth/LoginPage'
import SignupPage from '@/pages/auth/SignupPage'
import ForgotPasswordPage from '@/pages/auth/ForgotPasswordPage'

// Owner
import OwnerDashboard from '@/pages/owner/OwnerDashboard'
import LeadsPipeline from '@/pages/owner/LeadsPipeline'
import LeadDetail from '@/pages/owner/LeadDetail'
import ClientsList from '@/pages/owner/ClientsList'
import ClientDetail from '@/pages/owner/ClientDetail'
import ConsultantsList from '@/pages/owner/ConsultantsList'
import ConsultantDetail from '@/pages/owner/ConsultantDetail'
import ProjectsList from '@/pages/owner/ProjectsList'
import ProjectDetail from '@/pages/owner/ProjectDetail'
import ProposalsPage from '@/pages/owner/ProposalsPage'
import ProposalDetail from '@/pages/owner/ProposalDetail'
import FinancePage from '@/pages/owner/FinancePage'
import TimesheetsPage from '@/pages/owner/TimesheetsPage'
import AnalyticsPage from '@/pages/owner/AnalyticsPage'
import AutomationsPage from '@/pages/owner/AutomationsPage'
import ContentPage from '@/pages/owner/ContentPage'
import SettingsPage from '@/pages/owner/SettingsPage'

// Client
import ClientDashboard from '@/pages/client/ClientDashboard'
import ClientProject from '@/pages/client/ClientProject'
import ClientTraining from '@/pages/client/ClientTraining'
import ClientDocuments from '@/pages/client/ClientDocuments'
import ClientProfile from '@/pages/client/ClientProfile'

// Consultant
import ConsultantDashboard from '@/pages/consultant/ConsultantDashboard'
import ConsultantOnboarding from '@/pages/consultant/ConsultantOnboarding'
import ConsultantProjects from '@/pages/consultant/ConsultantProjects'
import ConsultantTraining from '@/pages/consultant/ConsultantTraining'
import ConsultantTimesheets from '@/pages/consultant/ConsultantTimesheets'
import ConsultantProfile from '@/pages/consultant/ConsultantProfile'

// Individual
import IndividualDashboard from '@/pages/individual/IndividualDashboard'
import IndividualTraining from '@/pages/individual/IndividualTraining'
import IndividualProfile from '@/pages/individual/IndividualProfile'
import IndividualBilling from '@/pages/individual/IndividualBilling'

function ProtectedRoute({ children, allowed }) {
  const { user, role } = useAuthStore()
  if (!user) return <Navigate to="/login" replace />
  if (allowed && !allowed.includes(role)) return <Navigate to="/" replace />
  return children
}

export default function App() {
  const { initAuth } = useAuthStore()

  useEffect(() => {
    initAuth()
  }, [initAuth])

  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/insights/:slug" element={<InsightArticlePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/for-organisations" element={<ForOrganisationsPage />} />
      <Route path="/for-individuals" element={<IndividualsPage />} />

      {/* Auth */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* Owner */}
      <Route path="/dashboard" element={<ProtectedRoute allowed={['owner']}><OwnerDashboard /></ProtectedRoute>} />
      <Route path="/dashboard/leads" element={<ProtectedRoute allowed={['owner']}><LeadsPipeline /></ProtectedRoute>} />
      <Route path="/dashboard/leads/:id" element={<ProtectedRoute allowed={['owner']}><LeadDetail /></ProtectedRoute>} />
      <Route path="/dashboard/clients" element={<ProtectedRoute allowed={['owner']}><ClientsList /></ProtectedRoute>} />
      <Route path="/dashboard/clients/:id" element={<ProtectedRoute allowed={['owner']}><ClientDetail /></ProtectedRoute>} />
      <Route path="/dashboard/consultants" element={<ProtectedRoute allowed={['owner']}><ConsultantsList /></ProtectedRoute>} />
      <Route path="/dashboard/consultants/:id" element={<ProtectedRoute allowed={['owner']}><ConsultantDetail /></ProtectedRoute>} />
      <Route path="/dashboard/projects" element={<ProtectedRoute allowed={['owner']}><ProjectsList /></ProtectedRoute>} />
      <Route path="/dashboard/projects/:id" element={<ProtectedRoute allowed={['owner']}><ProjectDetail /></ProtectedRoute>} />
      <Route path="/dashboard/proposals" element={<ProtectedRoute allowed={['owner']}><ProposalsPage /></ProtectedRoute>} />
      <Route path="/dashboard/proposals/:id" element={<ProtectedRoute allowed={['owner']}><ProposalDetail /></ProtectedRoute>} />
      <Route path="/dashboard/finance" element={<ProtectedRoute allowed={['owner']}><FinancePage /></ProtectedRoute>} />
      <Route path="/dashboard/timesheets" element={<ProtectedRoute allowed={['owner']}><TimesheetsPage /></ProtectedRoute>} />
      <Route path="/dashboard/analytics" element={<ProtectedRoute allowed={['owner']}><AnalyticsPage /></ProtectedRoute>} />
      <Route path="/dashboard/automations" element={<ProtectedRoute allowed={['owner']}><AutomationsPage /></ProtectedRoute>} />
      <Route path="/dashboard/content" element={<ProtectedRoute allowed={['owner']}><ContentPage /></ProtectedRoute>} />
      <Route path="/dashboard/settings" element={<ProtectedRoute allowed={['owner']}><SettingsPage /></ProtectedRoute>} />

      {/* Client */}
      <Route path="/client" element={<ProtectedRoute allowed={['client']}><ClientDashboard /></ProtectedRoute>} />
      <Route path="/client/project" element={<ProtectedRoute allowed={['client']}><ClientProject /></ProtectedRoute>} />
      <Route path="/client/training" element={<ProtectedRoute allowed={['client']}><ClientTraining /></ProtectedRoute>} />
      <Route path="/client/documents" element={<ProtectedRoute allowed={['client']}><ClientDocuments /></ProtectedRoute>} />
      <Route path="/client/profile" element={<ProtectedRoute allowed={['client']}><ClientProfile /></ProtectedRoute>} />

      {/* Consultant */}
      <Route path="/consultant" element={<ProtectedRoute allowed={['consultant']}><ConsultantDashboard /></ProtectedRoute>} />
      <Route path="/consultant/onboarding" element={<ProtectedRoute allowed={['consultant']}><ConsultantOnboarding /></ProtectedRoute>} />
      <Route path="/consultant/projects" element={<ProtectedRoute allowed={['consultant']}><ConsultantProjects /></ProtectedRoute>} />
      <Route path="/consultant/training" element={<ProtectedRoute allowed={['consultant']}><ConsultantTraining /></ProtectedRoute>} />
      <Route path="/consultant/timesheets" element={<ProtectedRoute allowed={['consultant']}><ConsultantTimesheets /></ProtectedRoute>} />
      <Route path="/consultant/profile" element={<ProtectedRoute allowed={['consultant']}><ConsultantProfile /></ProtectedRoute>} />

      {/* Individual */}
      <Route path="/learn" element={<ProtectedRoute allowed={['individual']}><IndividualDashboard /></ProtectedRoute>} />
      <Route path="/learn/training" element={<ProtectedRoute allowed={['individual']}><IndividualTraining /></ProtectedRoute>} />
      <Route path="/learn/profile" element={<ProtectedRoute allowed={['individual']}><IndividualProfile /></ProtectedRoute>} />
      <Route path="/learn/billing" element={<ProtectedRoute allowed={['individual']}><IndividualBilling /></ProtectedRoute>} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
