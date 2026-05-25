import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Award, Clock } from 'lucide-react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import ProgressBar from '@/components/ui/ProgressBar'
import ModuleCard from '@/components/ui/ModuleCard'
import { useAuthStore } from '@/store/authStore'
import { FAKE_TRAINING_MODULES, FAKE_INDIVIDUAL_USERS } from '@/lib/constants'

const completedIds = ['module-001', 'module-002', 'module-003', 'module-004']

export default function IndividualDashboard() {
  const { profile } = useAuthStore()
  const user = FAKE_INDIVIDUAL_USERS.find(u => u.full_name === profile?.full_name) || FAKE_INDIVIDUAL_USERS[0]
  const completedModules = FAKE_TRAINING_MODULES.filter(m => completedIds.includes(m.id))
  const nextModule = FAKE_TRAINING_MODULES.find(m => !completedIds.includes(m.id))
  const totalMinutes = completedModules.reduce((s, m) => s + m.estimated_minutes, 0)
  const progressPct = Math.round(completedIds.length / FAKE_TRAINING_MODULES.length * 100)

  return (
    <DashboardLayout title={`Welcome back, ${profile?.full_name?.split(' ')[0] || 'Sam'}`} subtitle="Studio Method learning platform">
      {/* Progress overview */}
      <div className="card mb-5">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h2 className="font-display text-xl font-bold text-ink">Your progress</h2>
            <p className="text-muted text-sm">{completedIds.length} of {FAKE_TRAINING_MODULES.length} modules complete</p>
          </div>
          {progressPct === 100 && (
            <div className="flex items-center gap-2 text-gold">
              <Award size={20} />
              <span className="font-semibold text-sm">Certificate earned</span>
            </div>
          )}
        </div>
        <ProgressBar value={progressPct} color="jade" className="mb-3" />
        <div className="grid grid-cols-3 gap-4 text-sm mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <BookOpen size={14} className="text-gold" />
            <div>
              <p className="font-semibold text-ink">{completedIds.length}</p>
              <p className="text-muted text-xs">Modules complete</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-gold" />
            <div>
              <p className="font-semibold text-ink">{totalMinutes} min</p>
              <p className="text-muted text-xs">Learning time</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-jade flex-shrink-0" />
            <div>
              <p className="font-semibold text-ink capitalize">{user.plan}</p>
              <p className="text-muted text-xs">Current plan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Continue learning */}
      {nextModule && (
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-ink">Continue learning</h3>
          </div>
          <Link to="/learn/training" className="card block hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-1">Up next</p>
                <h4 className="font-display text-lg font-bold text-ink">{nextModule.title}</h4>
                <p className="text-sm text-muted">{nextModule.description}</p>
                <p className="text-xs text-muted mt-2">{nextModule.estimated_minutes} minutes</p>
              </div>
              <ArrowRight size={20} className="text-gold flex-shrink-0 ml-6" />
            </div>
          </Link>
        </div>
      )}

      {/* Recent modules */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-ink">Recent modules</h3>
          <Link to="/learn/training" className="text-xs text-gold hover:underline flex items-center gap-1">
            View all <ArrowRight size={11} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FAKE_TRAINING_MODULES.slice(0, 3).map((m) => (
            <ModuleCard key={m.id} module={m} completed={completedIds.includes(m.id)} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
