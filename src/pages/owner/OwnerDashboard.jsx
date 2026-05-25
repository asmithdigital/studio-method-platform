import { DollarSign, Users, Briefcase, TrendingUp, ArrowRight, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'
import DashboardLayout from '@/components/layout/DashboardLayout'
import StatCard from '@/components/ui/StatCard'
import RevenueChart from '@/components/charts/RevenueChart'
import PipelineChart from '@/components/charts/PipelineChart'
import HealthIndicator from '@/components/ui/HealthIndicator'
import Badge from '@/components/ui/Badge'
import { useAuthStore } from '@/store/authStore'
import {
  FAKE_CLIENTS, FAKE_LEADS, FAKE_PROJECTS,
  FAKE_REVENUE_DATA, FAKE_ACTIVITY
} from '@/lib/constants'

const getGreeting = () => {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 18) return 'Good afternoon'
  return 'Good evening'
}

const alerts = [
  { id: 1, type: 'amber', message: 'Medibank Digital health score dropped to 76. Stakeholder re-brief needed.', link: '/dashboard/clients/client-002' },
  { id: 2, type: 'info', message: 'Marcus Webb (REA Group) proposal follow-up due today.', link: '/dashboard/leads/lead-002' },
  { id: 3, type: 'success', message: 'MYOB Workshop 4 scheduled for 29 May. Expansion conversation anticipated.', link: '/dashboard/projects/project-003' },
]

export default function OwnerDashboard() {
  const { profile } = useAuthStore()
  const activeClients = FAKE_CLIENTS.filter(c => c.status === 'active' || c.status === 'onboarding')
  const pipelineLeads = FAKE_LEADS.filter(l => !['won','lost'].includes(l.status))
  const totalRevenue = Object.values(FAKE_REVENUE_DATA.by_service).reduce((a, b) => a + b, 0)
  const pipelineValue = FAKE_REVENUE_DATA.pipeline.total

  return (
    <DashboardLayout title="Overview" subtitle={`${getGreeting()}, ${profile?.full_name?.split(' ')[0] || 'Andrew'}`}>
      {/* Alerts */}
      <div className="space-y-2 mb-6">
        {alerts.map((a) => (
          <div key={a.id} className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm ${
            a.type === 'amber' ? 'bg-amber-50 border-amber-200 text-amber-800' :
            a.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' :
            'bg-blue-50 border-blue-200 text-blue-800'
          }`}>
            <AlertTriangle size={14} className="flex-shrink-0" />
            <span className="flex-1">{a.message}</span>
            <Link to={a.link} className="font-medium hover:underline flex items-center gap-1 flex-shrink-0">
              View <ArrowRight size={12} />
            </Link>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          label="Revenue YTD"
          value={`$${(totalRevenue / 1000).toFixed(0)}k`}
          change={18}
          changeLabel="vs last year"
          icon={<DollarSign size={18} />}
        />
        <StatCard
          label="Active clients"
          value={activeClients.length}
          change={33}
          changeLabel="this quarter"
          icon={<Briefcase size={18} />}
        />
        <StatCard
          label="Pipeline value"
          value={`$${(pipelineValue / 1000).toFixed(0)}k`}
          change={12}
          changeLabel="vs last month"
          icon={<TrendingUp size={18} />}
        />
        <StatCard
          label="Open leads"
          value={pipelineLeads.length}
          change={-5}
          changeLabel="vs last week"
          icon={<Users size={18} />}
        />
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-5 mb-6">
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-ink">Revenue (2026 YTD)</h3>
            <span className="text-xs text-muted">Target: $95k / month</span>
          </div>
          <RevenueChart data={FAKE_REVENUE_DATA.monthly} />
        </div>
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-ink">Pipeline by stage</h3>
            <Link to="/dashboard/leads" className="text-xs text-gold hover:underline">View all</Link>
          </div>
          <PipelineChart data={FAKE_REVENUE_DATA.pipeline} />
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid lg:grid-cols-2 gap-5">
        {/* Active clients */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-ink">Active clients</h3>
            <Link to="/dashboard/clients" className="text-xs text-gold hover:underline">View all</Link>
          </div>
          <div className="space-y-3">
            {activeClients.map((c) => (
              <Link key={c.id} to={`/dashboard/clients/${c.id}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface transition-colors">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: c.logo_color }}>
                  {c.logo_initial}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-ink">{c.company}</p>
                  <p className="text-xs text-muted capitalize">{c.tier.replace('_', ' ')}</p>
                </div>
                <HealthIndicator score={c.health_score} size="sm" />
              </Link>
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-ink">Recent activity</h3>
          </div>
          <div className="space-y-3">
            {FAKE_ACTIVITY.slice(0, 7).map((a) => (
              <div key={a.id} className="flex items-start gap-3">
                <span className="text-base flex-shrink-0 mt-0.5">{a.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted leading-relaxed">{a.text}</p>
                  <p className="text-xs text-muted/60 mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
