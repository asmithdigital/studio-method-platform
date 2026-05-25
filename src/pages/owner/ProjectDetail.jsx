import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, DollarSign, Calendar, User } from 'lucide-react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Tabs from '@/components/ui/Tabs'
import Badge from '@/components/ui/Badge'
import ProgressBar from '@/components/ui/ProgressBar'
import Timeline from '@/components/ui/Timeline'
import AIStatusSummary from '@/components/ai/AIStatusSummary'
import { FAKE_PROJECTS, FAKE_CLIENTS } from '@/lib/constants'

const healthVariant = { green: 'jade', amber: 'gold', red: 'rose' }
const typeLabel = { full_service: 'Full Service', studio_setup: 'Studio Setup', ai_layer: 'AI Layer', training: 'Training' }

const fakeTimesheets = [
  { consultant: 'Jordan Nakamura', week: 'W/E 23 May', days: 4, amount: 4800, status: 'approved' },
  { consultant: 'Jordan Nakamura', week: 'W/E 16 May', days: 4, amount: 4800, status: 'approved' },
  { consultant: 'Jordan Nakamura', week: 'W/E 9 May', days: 3, amount: 3600, status: 'approved' },
]

export default function ProjectDetail() {
  const { id } = useParams()
  const [tab, setTab] = useState('overview')
  const project = FAKE_PROJECTS.find(p => p.id === id) || FAKE_PROJECTS[0]
  const client = FAKE_CLIENTS.find(c => c.id === project.client_id)

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'milestones', label: 'Milestones', count: project.milestones.length },
    { id: 'budget', label: 'Budget' },
    { id: 'timesheets', label: 'Timesheets' },
  ]

  const completedMs = project.milestones.filter(m => m.status === 'complete').length
  const budgetPercent = Math.round(project.spent / project.budget * 100)

  return (
    <DashboardLayout title={project.name} subtitle={`${project.client_name} · ${typeLabel[project.type]}`}>
      <div className="mb-4">
        <Link to="/dashboard/projects" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
          <ArrowLeft size={14} /> Back to projects
        </Link>
      </div>

      {/* Header */}
      <div className="card mb-5">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h2 className="font-display text-2xl font-bold text-ink">{project.name}</h2>
              <Badge variant={healthVariant[project.health] || 'default'}>{project.health}</Badge>
            </div>
            <p className="text-muted text-sm mb-3">{project.description}</p>
            <div className="flex items-center gap-2 mb-1">
              <ProgressBar value={project.completion_percent} className="flex-1 max-w-xs" color={project.health === 'green' ? 'jade' : 'gold'} />
              <span className="text-sm font-medium text-ink">{project.completion_percent}% complete</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-5 pt-4 border-t border-border text-sm">
          <div><p className="text-muted text-xs flex items-center gap-1"><Calendar size={12} /> Start</p><p className="font-semibold text-ink">{project.start_date}</p></div>
          <div><p className="text-muted text-xs flex items-center gap-1"><Calendar size={12} /> End</p><p className="font-semibold text-ink">{project.end_date}</p></div>
          <div><p className="text-muted text-xs flex items-center gap-1"><DollarSign size={12} /> Budget</p><p className="font-semibold text-ink">${project.budget.toLocaleString()}</p></div>
          <div><p className="text-muted text-xs flex items-center gap-1"><User size={12} /> Client</p>
            <Link to={`/dashboard/clients/${project.client_id}`} className="font-semibold text-gold hover:underline">{project.client_name}</Link>
          </div>
        </div>
      </div>

      <Tabs tabs={tabs} active={tab} onChange={setTab} />
      <div className="mt-5">
        {tab === 'overview' && (
          <div className="grid lg:grid-cols-2 gap-5">
            <AIStatusSummary project={project} />
            <div className="card">
              <h3 className="font-semibold text-ink mb-4">Objectives</h3>
              <div className="space-y-2">
                {project.objectives.map((o) => (
                  <div key={o} className="flex items-start gap-2 text-sm text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    {o}
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="font-semibold text-ink mb-4">Deliverables</h3>
              <div className="space-y-2">
                {project.deliverables.map((d) => (
                  <div key={d} className="flex items-start gap-2 text-sm text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-jade mt-2 flex-shrink-0" />
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {tab === 'milestones' && (
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-ink">Milestones</h3>
              <span className="text-sm text-muted">{completedMs} of {project.milestones.length} complete</span>
            </div>
            <Timeline milestones={project.milestones} detailed />
          </div>
        )}
        {tab === 'budget' && (
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="card">
              <h3 className="font-semibold text-ink mb-4">Budget overview</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted">Spent vs budget</span>
                    <span className="font-medium text-ink">${project.spent.toLocaleString()} / ${project.budget.toLocaleString()}</span>
                  </div>
                  <ProgressBar value={budgetPercent} color={budgetPercent > 85 ? 'rose' : budgetPercent > 70 ? 'gold' : 'jade'} />
                  <p className="text-xs text-muted mt-1">{budgetPercent}% of budget used · ${(project.budget - project.spent).toLocaleString()} remaining</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border text-sm">
                  {[
                    { l: 'Total budget', v: `$${project.budget.toLocaleString()}` },
                    { l: 'Total spent', v: `$${project.spent.toLocaleString()}` },
                    { l: 'Remaining', v: `$${(project.budget - project.spent).toLocaleString()}` },
                    { l: 'Burn rate', v: `${budgetPercent}%` },
                  ].map(r => (
                    <div key={r.l}><p className="text-muted">{r.l}</p><p className="font-semibold text-ink">{r.v}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {tab === 'timesheets' && (
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-surface border-b border-border">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-muted">Consultant</th>
                  <th className="text-left px-4 py-3 font-medium text-muted">Week</th>
                  <th className="text-left px-4 py-3 font-medium text-muted">Days</th>
                  <th className="text-left px-4 py-3 font-medium text-muted">Amount</th>
                  <th className="text-left px-4 py-3 font-medium text-muted">Status</th>
                </tr>
              </thead>
              <tbody>
                {fakeTimesheets.map((t, i) => (
                  <tr key={i} className="border-b border-border last:border-b-0">
                    <td className="px-4 py-3 font-medium text-ink">{t.consultant}</td>
                    <td className="px-4 py-3 text-muted">{t.week}</td>
                    <td className="px-4 py-3 text-muted">{t.days}</td>
                    <td className="px-4 py-3 font-medium text-ink">${t.amount.toLocaleString()}</td>
                    <td className="px-4 py-3"><Badge variant="jade">{t.status}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
