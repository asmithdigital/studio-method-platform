import { Link } from 'react-router-dom'
import { ArrowRight, Clock, BookOpen, CheckCircle2 } from 'lucide-react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import ProgressBar from '@/components/ui/ProgressBar'
import Badge from '@/components/ui/Badge'
import { useAuthStore } from '@/store/authStore'
import { FAKE_CONSULTANTS, FAKE_CLIENTS, FAKE_TRAINING_MODULES } from '@/lib/constants'

export default function ConsultantDashboard() {
  const { profile } = useAuthStore()
  const consultant = FAKE_CONSULTANTS.find(c => c.id === (profile?.consultant_id || 'consultant-001')) || FAKE_CONSULTANTS[0]
  const client = consultant.current_project ? FAKE_CLIENTS.find(cl => cl.id === consultant.current_project) : null

  const onboardingSteps = [
    { label: 'Contract signed', done: consultant.contract_signed },
    { label: 'Onboarding complete', done: consultant.onboarding_complete },
    { label: 'References provided', done: consultant.references_provided },
  ]
  const onboardingDone = onboardingSteps.filter(s => s.done).length
  const isOnboarding = !consultant.onboarding_complete

  return (
    <DashboardLayout title={`Welcome, ${profile?.full_name?.split(' ')[0] || consultant.full_name.split(' ')[0]}`} subtitle="Studio Method consultant portal">
      {isOnboarding && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
          <p className="font-semibold text-amber-800 mb-2">Complete your onboarding to start receiving projects</p>
          <div className="flex items-center gap-2 mb-3">
            <ProgressBar value={Math.round(onboardingDone / onboardingSteps.length * 100)} className="flex-1" color="gold" />
            <span className="text-sm text-amber-800 font-medium">{onboardingDone}/{onboardingSteps.length}</span>
          </div>
          <Link to="/consultant/onboarding" className="text-sm font-medium text-amber-800 hover:underline flex items-center gap-1">
            Continue onboarding <ArrowRight size={12} />
          </Link>
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 mb-5">
        <div className="stat-card">
          <p className="text-xs font-medium text-muted uppercase tracking-wide">Days delivered</p>
          <p className="text-2xl font-bold text-ink mt-1">{consultant.days_delivered}</p>
        </div>
        <div className="stat-card">
          <p className="text-xs font-medium text-muted uppercase tracking-wide">Revenue generated</p>
          <p className="text-2xl font-bold text-ink mt-1">${(consultant.total_revenue_generated / 1000).toFixed(0)}k</p>
        </div>
        <div className="stat-card">
          <p className="text-xs font-medium text-muted uppercase tracking-wide">Rating</p>
          <p className="text-2xl font-bold text-ink mt-1">{consultant.rating || '—'}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Current project */}
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="font-semibold text-ink">Current engagement</h3>
          </div>
          {client ? (
            <div className="flex items-center gap-3 p-3 rounded-xl border border-border">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold" style={{ background: client.logo_color }}>
                {client.logo_initial}
              </div>
              <div>
                <p className="font-semibold text-ink">{client.company}</p>
                <p className="text-xs text-muted capitalize">{client.tier.replace('_', ' ')}</p>
                <Badge variant="jade" className="mt-1">{client.status}</Badge>
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted">No active engagement. Capacity: {consultant.capacity_days_per_week} days/week</p>
          )}
          <Link to="/consultant/projects" className="flex items-center gap-1 text-xs text-gold mt-4 hover:underline">
            View all projects <ArrowRight size={11} />
          </Link>
        </div>

        {/* Timesheets */}
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <Clock size={16} className="text-gold" />
            <h3 className="font-semibold text-ink">Timesheets</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-muted">
              <span>This week</span>
              <span className="font-medium text-ink">Not submitted</span>
            </div>
            <div className="flex justify-between text-muted">
              <span>Last week</span>
              <span className="text-jade font-medium">Approved</span>
            </div>
          </div>
          <Link to="/consultant/timesheets" className="flex items-center gap-1 text-xs text-gold mt-4 hover:underline">
            Submit timesheet <ArrowRight size={11} />
          </Link>
        </div>

        {/* Training */}
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={16} className="text-gold" />
            <h3 className="font-semibold text-ink">Required training</h3>
          </div>
          <div className="space-y-2">
            {FAKE_TRAINING_MODULES.slice(0, 4).map((m, i) => (
              <div key={m.id} className="flex items-center gap-2 text-sm">
                {i < 2 ? (
                  <CheckCircle2 size={14} className="text-jade flex-shrink-0" />
                ) : (
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-border flex-shrink-0" />
                )}
                <span className={i < 2 ? 'text-muted line-through' : 'text-ink'}>{m.title}</span>
              </div>
            ))}
          </div>
          <Link to="/consultant/training" className="flex items-center gap-1 text-xs text-gold mt-4 hover:underline">
            View all modules <ArrowRight size={11} />
          </Link>
        </div>

        {/* Onboarding checklist */}
        <div className="card">
          <h3 className="font-semibold text-ink mb-4">Onboarding</h3>
          <div className="space-y-3">
            {onboardingSteps.map((step) => (
              <div key={step.label} className="flex items-center gap-3 text-sm">
                {step.done
                  ? <CheckCircle2 size={16} className="text-jade flex-shrink-0" />
                  : <div className="w-4 h-4 rounded-full border-2 border-border flex-shrink-0" />}
                <span className={step.done ? 'text-muted' : 'text-ink font-medium'}>{step.label}</span>
              </div>
            ))}
          </div>
          {isOnboarding && (
            <Link to="/consultant/onboarding" className="flex items-center gap-1 text-xs text-gold mt-4 hover:underline">
              Complete onboarding <ArrowRight size={11} />
            </Link>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
