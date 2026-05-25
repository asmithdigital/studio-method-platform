import { useState } from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import ModuleCard from '@/components/ui/ModuleCard'
import { FAKE_TRAINING_MODULES } from '@/lib/constants'

const completedIds = ['module-001', 'module-002']

export default function ConsultantTraining() {
  const [filter, setFilter] = useState('all')

  const consultantModules = FAKE_TRAINING_MODULES.filter(m => m.audience === 'both' || m.audience === 'consultant')
  const filtered = filter === 'all' ? consultantModules : filter === 'complete' ? consultantModules.filter(m => completedIds.includes(m.id)) : consultantModules.filter(m => !completedIds.includes(m.id))

  const requiredIds = ['module-001', 'module-002', 'module-003', 'module-004']
  const requiredDone = requiredIds.filter(id => completedIds.includes(id)).length

  return (
    <DashboardLayout title="Training" subtitle="Studio Method consultant modules">
      <div className="bg-navy/5 border border-navy/10 rounded-xl p-4 mb-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-ink">Required modules: {requiredDone}/{requiredIds.length} complete</p>
            <p className="text-sm text-muted">You must complete all 4 required modules before your first engagement</p>
          </div>
          <span className={`text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full ${requiredDone === requiredIds.length ? 'bg-jade/10 text-jade' : 'bg-amber-100 text-amber-800'}`}>
            {requiredDone === requiredIds.length ? 'Complete' : 'In progress'}
          </span>
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
          <ModuleCard key={m.id} module={m} progress={completedIds.includes(m.id) ? {status:"complete"} : undefined} />
        ))}
      </div>
    </DashboardLayout>
  )
}
