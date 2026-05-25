import { useState } from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import ModuleCard from '@/components/ui/ModuleCard'
import { FAKE_TRAINING_MODULES } from '@/lib/constants'

const completedIds = ['module-001', 'module-002', 'module-003']

export default function ClientTraining() {
  const [filter, setFilter] = useState('all')

  const clientModules = FAKE_TRAINING_MODULES.filter(m => m.audience === 'both' || m.audience === 'client')
  const filtered = filter === 'all' ? clientModules : filter === 'complete' ? clientModules.filter(m => completedIds.includes(m.id)) : clientModules.filter(m => !completedIds.includes(m.id))

  return (
    <DashboardLayout title="Training" subtitle="Studio Method learning modules">
      <div className="grid grid-cols-3 gap-4 mb-5">
        <div className="stat-card">
          <p className="text-xs font-medium text-muted uppercase tracking-wide">Completed</p>
          <p className="text-2xl font-bold text-ink mt-1">{completedIds.length}/{clientModules.length}</p>
        </div>
        <div className="stat-card">
          <p className="text-xs font-medium text-muted uppercase tracking-wide">Time invested</p>
          <p className="text-2xl font-bold text-ink mt-1">{FAKE_TRAINING_MODULES.filter(m => completedIds.includes(m.id)).reduce((s, m) => s + m.estimated_minutes, 0)} min</p>
        </div>
        <div className="stat-card">
          <p className="text-xs font-medium text-muted uppercase tracking-wide">Remaining</p>
          <p className="text-2xl font-bold text-ink mt-1">{clientModules.length - completedIds.length} modules</p>
        </div>
      </div>

      <div className="flex gap-2 mb-5">
        {['all', 'complete', 'todo'].map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 text-sm font-medium rounded-lg capitalize ${filter === f ? 'bg-navy text-white' : 'bg-white border border-border text-muted hover:text-ink'}`}>
            {f === 'todo' ? 'To do' : f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((m) => (
          <ModuleCard key={m.id} module={m} completed={completedIds.includes(m.id)} />
        ))}
      </div>
    </DashboardLayout>
  )
}
