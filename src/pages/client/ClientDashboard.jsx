import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, BookOpen, FileText } from 'lucide-react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import ProgressBar from '@/components/ui/ProgressBar'
import HealthIndicator from '@/components/ui/HealthIndicator'
import Badge from '@/components/ui/Badge'
import { useAuthStore } from '@/store/authStore'
import { FAKE_PROJECTS, FAKE_CLIENTS, FAKE_TRAINING_MODULES } from '@/lib/constants'

export default function ClientDashboard() {
  const { profile } = useAuthStore()
  const client = FAKE_CLIENTS.find(c => c.id === (profile?.client_id || 'client-001')) || FAKE_CLIENTS[0]
  const project = FAKE_PROJECTS.find(p => p.client_id === client.id) || FAKE_PROJECTS[0]
  const nextMs = project?.milestones?.find(m => m.status !== 'complete')

  return (
    <DashboardLayout title={`Welcome, ${profile?.full_name?.split(' ')[0] || 'James'}`} subtitle={`${client.company} engagement portal`}>
      {/* Project status */}
      <div className="card mb-5">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h2 className="font-display text-xl font-bold text-ink">{project.name}</h2>
            <p className="text-sm text-muted">{project.description}</p>
          </div>
          <HealthIndicator score={client.health_score} showLabel />
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted">Overall progress</span>
            <span className="font-medium text-ink">{project.completion_percent}%</span>
          </div>
          <ProgressBar value={project.completion_percent} color="jade" />
        </div>
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border text-sm">
          <div><p className="text-muted">Start date</p><p className="font-semibold text-ink">{project.start_date}</p></div>
          <div><p className="text-muted">End date</p><p className="font-semibold text-ink">{project.end_date}</p></div>
          <div><p className="text-muted">Consultant</p><p className="font-semibold text-ink">{client.primary_consultant}</p></div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Next milestone */}
        <div className="card">
          <div className="flex items-center gap-2 mb-3">
            <Calendar size={16} className="text-gold" />
            <h3 className="font-semibold text-ink">Next milestone</h3>
          </div>
          {nextMs ? (
            <>
              <p className="font-medium text-ink mb-1">{nextMs.name}</p>
              <p className="text-sm text-muted mb-2">{nextMs.description}</p>
              <p className="text-xs text-muted">Due: <span className="font-medium text-ink">{nextMs.due_date}</span></p>
            </>
          ) : (
            <p className="text-sm text-muted">All milestones complete</p>
          )}
          <Link to="/client/project" className="flex items-center gap-1 text-xs text-gold mt-4 hover:underline">
            View full timeline <ArrowRight size={11} />
          </Link>
        </div>

        {/* Training */}
        <div className="card">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={16} className="text-gold" />
            <h3 className="font-semibold text-ink">Training</h3>
          </div>
          <div className="space-y-2">
            {FAKE_TRAINING_MODULES.slice(0, 3).map((m) => (
              <div key={m.id} className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-jade flex-shrink-0" />
                <span className="text-muted truncate">{m.title}</span>
              </div>
            ))}
          </div>
          <Link to="/client/training" className="flex items-center gap-1 text-xs text-gold mt-4 hover:underline">
            View all modules <ArrowRight size={11} />
          </Link>
        </div>

        {/* Documents */}
        <div className="card">
          <div className="flex items-center gap-2 mb-3">
            <FileText size={16} className="text-gold" />
            <h3 className="font-semibold text-ink">Documents</h3>
          </div>
          <div className="space-y-2">
            {['Studio Operating Model', 'Filter Gate Process', 'Ways of Working'].map((d) => (
              <div key={d} className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                <span className="text-muted">{d}</span>
              </div>
            ))}
          </div>
          <Link to="/client/documents" className="flex items-center gap-1 text-xs text-gold mt-4 hover:underline">
            View all documents <ArrowRight size={11} />
          </Link>
        </div>
      </div>

      {/* AI Status Summary */}
      <div className="mt-5 p-5 rounded-2xl bg-navy/5 border border-navy/10">
        <p className="text-xs font-semibold uppercase tracking-widest text-navy mb-3">AI engagement summary</p>
        <p className="text-sm text-muted leading-relaxed">{project.ai_status_summary}</p>
      </div>
    </DashboardLayout>
  )
}
