import DashboardLayout from '@/components/layout/DashboardLayout'
import Badge from '@/components/ui/Badge'
import ProgressBar from '@/components/ui/ProgressBar'
import { useAuthStore } from '@/store/authStore'
import { FAKE_CONSULTANTS, FAKE_PROJECTS, FAKE_CLIENTS } from '@/lib/constants'

export default function ConsultantProjects() {
  const { profile } = useAuthStore()
  const consultant = FAKE_CONSULTANTS.find(c => c.id === (profile?.consultant_id || 'consultant-001')) || FAKE_CONSULTANTS[0]
  const currentProject = consultant.current_project ? FAKE_PROJECTS.find(p => p.client_id === consultant.current_project) : null
  const currentClient = consultant.current_project ? FAKE_CLIENTS.find(cl => cl.id === consultant.current_project) : null

  const healthVariant = { green: 'jade', amber: 'gold', red: 'rose' }

  return (
    <DashboardLayout title="Projects" subtitle="Your engagements">
      {currentProject && currentClient ? (
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Current engagement</p>
          <div className="card mb-5">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold" style={{ background: currentClient.logo_color }}>
                  {currentClient.logo_initial}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">{currentProject.name}</h3>
                  <p className="text-muted">{currentClient.company}</p>
                </div>
              </div>
              <Badge variant={healthVariant[currentProject.health] || 'default'}>{currentProject.health}</Badge>
            </div>
            <p className="text-sm text-muted mb-4">{currentProject.description}</p>
            <div className="flex items-center gap-3 mb-5">
              <ProgressBar value={currentProject.completion_percent} className="flex-1" color="jade" />
              <span className="text-sm font-medium text-ink">{currentProject.completion_percent}%</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm pt-4 border-t border-border">
              <div><p className="text-muted">Start</p><p className="font-semibold text-ink">{currentProject.start_date}</p></div>
              <div><p className="text-muted">End</p><p className="font-semibold text-ink">{currentProject.end_date}</p></div>
              <div><p className="text-muted">Your rate</p><p className="font-semibold text-ink">${consultant.day_rate.toLocaleString()}/day</p></div>
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold text-ink mb-4">Milestones</h3>
            <div className="space-y-3">
              {currentProject.milestones.map((m) => (
                <div key={m.id} className="flex items-start gap-3 py-2 border-b border-border last:border-b-0">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${m.status === 'complete' ? 'bg-jade' : m.status === 'in_progress' ? 'bg-gold' : 'bg-border'}`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-ink">{m.name}</p>
                      <Badge variant={m.status === 'complete' ? 'jade' : m.status === 'in_progress' ? 'gold' : 'default'} className="capitalize text-xs">
                        {m.status.replace('_', ' ')}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted mt-0.5">{m.description}</p>
                    <p className="text-xs text-muted mt-0.5">Due: {m.due_date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="card text-center py-16">
          <p className="font-semibold text-ink mb-2">No active engagement</p>
          <p className="text-sm text-muted">Complete your onboarding to become available for project assignment.</p>
        </div>
      )}
    </DashboardLayout>
  )
}
