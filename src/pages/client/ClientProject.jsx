import DashboardLayout from '@/components/layout/DashboardLayout'
import Timeline from '@/components/ui/Timeline'
import ProgressBar from '@/components/ui/ProgressBar'
import Badge from '@/components/ui/Badge'
import { useAuthStore } from '@/store/authStore'
import { FAKE_PROJECTS, FAKE_CLIENTS } from '@/lib/constants'

export default function ClientProject() {
  const { profile } = useAuthStore()
  const client = FAKE_CLIENTS.find(c => c.id === (profile?.client_id || 'client-001')) || FAKE_CLIENTS[0]
  const project = FAKE_PROJECTS.find(p => p.client_id === client.id) || FAKE_PROJECTS[0]
  const healthVariant = { green: 'jade', amber: 'gold', red: 'rose' }

  return (
    <DashboardLayout title={project.name} subtitle={`${client.company} · Engagement details`}>
      {/* Header */}
      <div className="card mb-5">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="font-display text-xl font-bold text-ink">{project.name}</h2>
              <Badge variant={healthVariant[project.health] || 'default'}>{project.health}</Badge>
            </div>
            <p className="text-sm text-muted">{project.description}</p>
          </div>
          <div className="text-right">
            <p className="font-display text-2xl font-bold text-gold">{project.completion_percent}%</p>
            <p className="text-xs text-muted">complete</p>
          </div>
        </div>
        <ProgressBar value={project.completion_percent} color="jade" />
        <div className="grid grid-cols-4 gap-4 mt-5 pt-4 border-t border-border text-sm">
          <div><p className="text-muted text-xs">Start</p><p className="font-semibold text-ink">{project.start_date}</p></div>
          <div><p className="text-muted text-xs">End</p><p className="font-semibold text-ink">{project.end_date}</p></div>
          <div><p className="text-muted text-xs">Budget</p><p className="font-semibold text-ink">${project.budget.toLocaleString()}</p></div>
          <div><p className="text-muted text-xs">Consultant</p><p className="font-semibold text-ink">{client.primary_consultant}</p></div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Milestones */}
        <div className="card">
          <h3 className="font-semibold text-ink mb-4">Milestones</h3>
          <Timeline milestones={project.milestones} detailed />
        </div>

        {/* Objectives & Deliverables */}
        <div className="space-y-5">
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
      </div>
    </DashboardLayout>
  )
}
