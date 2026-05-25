import { useState } from 'react'
import { Play, Pause, Zap, Clock, CheckCircle2 } from 'lucide-react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Badge from '@/components/ui/Badge'
import { FAKE_AUTOMATIONS } from '@/lib/constants'

export default function AutomationsPage() {
  const [automations, setAutomations] = useState(FAKE_AUTOMATIONS)

  const toggleStatus = (id) => {
    setAutomations(prev => prev.map(a =>
      a.id === id ? { ...a, status: a.status === 'active' ? 'paused' : 'active' } : a
    ))
  }

  const activeCount = automations.filter(a => a.status === 'active').length
  const totalRuns = automations.reduce((s, a) => s + a.run_count, 0)

  return (
    <DashboardLayout title="Automations" subtitle="Automated workflows and triggers">
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="stat-card">
          <p className="text-xs font-medium text-muted uppercase tracking-wide">Active automations</p>
          <p className="text-2xl font-bold text-ink mt-1">{activeCount}/{automations.length}</p>
        </div>
        <div className="stat-card">
          <p className="text-xs font-medium text-muted uppercase tracking-wide">Total runs</p>
          <p className="text-2xl font-bold text-ink mt-1">{totalRuns}</p>
        </div>
        <div className="stat-card">
          <p className="text-xs font-medium text-muted uppercase tracking-wide">Last run</p>
          <p className="text-2xl font-bold text-ink mt-1">Today</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {automations.map((a) => (
          <div key={a.id} className={`card ${a.status === 'paused' ? 'opacity-60' : ''}`}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${a.status === 'active' ? 'bg-jade/10' : 'bg-surface'}`}>
                  <Zap size={18} className={a.status === 'active' ? 'text-jade' : 'text-muted'} />
                </div>
                <div>
                  <p className="font-semibold text-ink">{a.name}</p>
                  <p className="text-xs text-muted mt-0.5">{a.description}</p>
                </div>
              </div>
              <button
                onClick={() => toggleStatus(a.id)}
                className={`flex-shrink-0 p-2 rounded-lg transition-colors ${a.status === 'active' ? 'bg-jade/10 text-jade hover:bg-jade/20' : 'bg-surface text-muted hover:bg-border'}`}
              >
                {a.status === 'active' ? <Pause size={14} /> : <Play size={14} />}
              </button>
            </div>

            <div className="bg-surface rounded-lg p-3 mb-3">
              <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">Trigger</p>
              <p className="text-xs text-ink">{a.trigger}</p>
            </div>

            <div className="mb-3">
              <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1.5">Actions</p>
              <div className="space-y-1">
                {a.actions.map((action, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-muted">
                    <CheckCircle2 size={11} className="text-jade flex-shrink-0" />
                    {action}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center gap-3 text-xs text-muted">
                <span className="flex items-center gap-1"><Clock size={11} /> Last run: {a.last_run}</span>
                <span>{a.run_count} runs</span>
              </div>
              <Badge variant={a.status === 'active' ? 'jade' : 'default'} className="capitalize">{a.status}</Badge>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  )
}
