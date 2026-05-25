import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Badge from '@/components/ui/Badge'
import ProgressBar from '@/components/ui/ProgressBar'
import { FAKE_PROJECTS } from '@/lib/constants'

const healthVariant = { green: 'jade', amber: 'gold', red: 'rose' }
const typeLabel = { full_service: 'Full Service', studio_setup: 'Studio Setup', ai_layer: 'AI Layer', training: 'Training' }

export default function ProjectsList() {
  const totalBudget = FAKE_PROJECTS.reduce((s, p) => s + p.budget, 0)
  const totalSpent = FAKE_PROJECTS.reduce((s, p) => s + p.spent, 0)

  return (
    <DashboardLayout title="Projects" subtitle={`${FAKE_PROJECTS.length} active projects`}>
      <div className="grid grid-cols-3 gap-4 mb-5">
        <div className="stat-card">
          <p className="text-xs font-medium text-muted uppercase tracking-wide">Total budget</p>
          <p className="text-2xl font-bold text-ink mt-1">${(totalBudget / 1000).toFixed(0)}k</p>
        </div>
        <div className="stat-card">
          <p className="text-xs font-medium text-muted uppercase tracking-wide">Total spent</p>
          <p className="text-2xl font-bold text-ink mt-1">${(totalSpent / 1000).toFixed(0)}k</p>
        </div>
        <div className="stat-card">
          <p className="text-xs font-medium text-muted uppercase tracking-wide">Budget utilisation</p>
          <p className="text-2xl font-bold text-ink mt-1">{Math.round(totalSpent / totalBudget * 100)}%</p>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <button className="flex items-center gap-2 px-4 py-2 text-sm bg-gold text-white rounded-lg hover:bg-gold-light">
          <Plus size={14} /> New project
        </button>
      </div>

      <div className="space-y-3">
        {FAKE_PROJECTS.map((p) => (
          <Link key={p.id} to={`/dashboard/projects/${p.id}`} className="card hover:shadow-md transition-shadow block">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-semibold text-ink">{p.client_name}</h3>
                  <span className="text-muted text-sm">·</span>
                  <span className="text-sm text-muted">{p.name}</span>
                  <Badge variant={healthVariant[p.health] || 'default'}>{p.health}</Badge>
                </div>
                <p className="text-sm text-muted mb-3 line-clamp-1">{p.description}</p>
                <div className="flex items-center gap-2">
                  <ProgressBar value={p.completion_percent} className="flex-1" color={p.health === 'green' ? 'jade' : 'gold'} />
                  <span className="text-xs font-medium text-ink flex-shrink-0">{p.completion_percent}%</span>
                </div>
              </div>
              <div className="flex-shrink-0 text-right space-y-1">
                <p className="text-sm font-semibold text-ink">${(p.budget / 1000).toFixed(0)}k</p>
                <p className="text-xs text-muted">${(p.spent / 1000).toFixed(0)}k spent</p>
                <Badge variant="default">{typeLabel[p.type] || p.type}</Badge>
              </div>
            </div>
            <div className="flex gap-6 mt-4 pt-3 border-t border-border text-xs text-muted">
              <span>{p.start_date} → {p.end_date}</span>
              <span>{p.milestones.filter(m => m.status === 'complete').length}/{p.milestones.length} milestones complete</span>
            </div>
          </Link>
        ))}
      </div>
    </DashboardLayout>
  )
}
