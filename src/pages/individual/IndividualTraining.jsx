import { useState } from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import ModuleCard from '@/components/ui/ModuleCard'
import ProgressBar from '@/components/ui/ProgressBar'
import { FAKE_TRAINING_MODULES } from '@/lib/constants'

const completedIds = ['module-001', 'module-002', 'module-003', 'module-004']

const categories = ['all', 'methodology', 'process', 'ai_layer', 'leadership']

export default function IndividualTraining() {
  const [filter, setFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const available = FAKE_TRAINING_MODULES.filter(m => m.audience === 'both' || m.audience === 'client')
  const byStatus = filter === 'complete' ? available.filter(m => completedIds.includes(m.id)) : filter === 'todo' ? available.filter(m => !completedIds.includes(m.id)) : available
  const filtered = categoryFilter === 'all' ? byStatus : byStatus.filter(m => m.category === categoryFilter)

  const totalTime = available.reduce((s, m) => s + m.estimated_minutes, 0)
  const doneTime = available.filter(m => completedIds.includes(m.id)).reduce((s, m) => s + m.estimated_minutes, 0)

  return (
    <DashboardLayout title="Training" subtitle="All Studio Method modules">
      <div className="card mb-5">
        <div className="flex items-center justify-between mb-3">
          <p className="font-semibold text-ink">{completedIds.length}/{available.length} modules complete</p>
          <p className="text-sm text-muted">{doneTime}/{totalTime} minutes</p>
        </div>
        <ProgressBar value={Math.round(completedIds.length / available.length * 100)} color="jade" />
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {['all', 'complete', 'todo'].map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 text-sm font-medium rounded-lg capitalize ${filter === f ? 'bg-navy text-white' : 'bg-white border border-border text-muted hover:text-ink'}`}>
            {f === 'todo' ? 'To do' : f}
          </button>
        ))}
        <div className="w-px bg-border mx-1" />
        {categories.map((c) => (
          <button key={c} onClick={() => setCategoryFilter(c)} className={`px-3 py-1.5 text-sm font-medium rounded-lg capitalize ${categoryFilter === c ? 'bg-gold text-white' : 'bg-white border border-border text-muted hover:text-ink'}`}>
            {c.replace('_', ' ')}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((m) => (
          <ModuleCard key={m.id} module={m} completed={completedIds.includes(m.id)} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-3 text-center py-12 text-muted">No modules match this filter</div>
        )}
      </div>
    </DashboardLayout>
  )
}
