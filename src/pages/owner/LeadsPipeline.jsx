import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Filter } from 'lucide-react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Badge from '@/components/ui/Badge'
import ScoreRing from '@/components/ui/ScoreRing'
import { FAKE_LEADS } from '@/lib/constants'

const COLUMNS = [
  { id: 'new', label: 'New', color: 'bg-slate-100' },
  { id: 'contacted', label: 'Contacted', color: 'bg-blue-50' },
  { id: 'qualified', label: 'Qualified', color: 'bg-amber-50' },
  { id: 'proposal_sent', label: 'Proposal Sent', color: 'bg-purple-50' },
  { id: 'won', label: 'Won', color: 'bg-green-50' },
  { id: 'lost', label: 'Lost', color: 'bg-red-50' },
]

const statusVariant = {
  new: 'default',
  contacted: 'blue',
  qualified: 'gold',
  proposal_sent: 'purple',
  won: 'jade',
  lost: 'rose',
}

const sourceLabel = { linkedin: 'LinkedIn', referral: 'Referral', website: 'Website', conference: 'Conference' }

export default function LeadsPipeline() {
  const [view, setView] = useState('kanban')

  return (
    <DashboardLayout title="Pipeline" subtitle="All leads and opportunities">
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-2">
          <button onClick={() => setView('kanban')} className={`px-4 py-2 text-sm font-medium rounded-lg ${view === 'kanban' ? 'bg-navy text-white' : 'bg-white border border-border text-muted hover:text-ink'}`}>
            Kanban
          </button>
          <button onClick={() => setView('list')} className={`px-4 py-2 text-sm font-medium rounded-lg ${view === 'list' ? 'bg-navy text-white' : 'bg-white border border-border text-muted hover:text-ink'}`}>
            List
          </button>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-lg hover:bg-surface">
            <Filter size={14} /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm bg-gold text-white rounded-lg hover:bg-gold-light">
            <Plus size={14} /> Add lead
          </button>
        </div>
      </div>

      {view === 'kanban' ? (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {COLUMNS.map((col) => {
            const leads = FAKE_LEADS.filter(l => l.status === col.id)
            const colValue = leads.reduce((sum, l) => {
              const v = l.budget_range?.match(/\$?([\d,]+)/)?.[1]?.replace(',','')
              return sum + (v ? parseInt(v) : 0)
            }, 0)
            return (
              <div key={col.id} className="flex-shrink-0 w-72">
                <div className={`${col.color} rounded-xl p-3 mb-3 flex items-center justify-between`}>
                  <div>
                    <span className="text-xs font-semibold text-ink uppercase tracking-wide">{col.label}</span>
                    <span className="ml-2 text-xs text-muted">({leads.length})</span>
                  </div>
                  {colValue > 0 && <span className="text-xs font-medium text-muted">${(colValue / 1000).toFixed(0)}k+</span>}
                </div>
                <div className="space-y-3">
                  {leads.map((lead) => (
                    <Link
                      key={lead.id}
                      to={`/dashboard/leads/${lead.id}`}
                      className="block bg-white border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="min-w-0">
                          <p className="font-semibold text-sm text-ink truncate">{lead.full_name}</p>
                          <p className="text-xs text-muted truncate">{lead.company}</p>
                        </div>
                        <ScoreRing score={lead.score} size={32} />
                      </div>
                      <p className="text-xs text-muted mb-3">{lead.title}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted">{sourceLabel[lead.source] || lead.source}</span>
                        <span className="text-xs text-muted">{lead.budget_range || '—'}</span>
                      </div>
                      {lead.next_followup && (
                        <div className="mt-2 pt-2 border-t border-border">
                          <p className="text-xs text-muted">Follow-up: <span className="font-medium text-ink">{lead.next_followup}</span></p>
                        </div>
                      )}
                    </Link>
                  ))}
                  {leads.length === 0 && (
                    <div className="p-4 rounded-xl border border-dashed border-border text-xs text-muted text-center">No leads</div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-surface">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-muted">Name</th>
                <th className="text-left px-4 py-3 font-medium text-muted">Company</th>
                <th className="text-left px-4 py-3 font-medium text-muted">Status</th>
                <th className="text-left px-4 py-3 font-medium text-muted">Score</th>
                <th className="text-left px-4 py-3 font-medium text-muted">Budget</th>
                <th className="text-left px-4 py-3 font-medium text-muted">Next contact</th>
              </tr>
            </thead>
            <tbody>
              {FAKE_LEADS.map((lead) => (
                <tr key={lead.id} className="border-b border-border last:border-b-0 hover:bg-surface">
                  <td className="px-4 py-3">
                    <Link to={`/dashboard/leads/${lead.id}`} className="font-medium text-ink hover:text-gold">{lead.full_name}</Link>
                  </td>
                  <td className="px-4 py-3 text-muted">{lead.company}</td>
                  <td className="px-4 py-3">
                    <Badge variant={statusVariant[lead.status] || 'default'}>
                      {lead.status.replace('_', ' ')}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`font-semibold ${lead.score >= 80 ? 'text-jade' : lead.score >= 60 ? 'text-amber-600' : 'text-muted'}`}>{lead.score}</span>
                  </td>
                  <td className="px-4 py-3 text-muted text-xs">{lead.budget_range || '—'}</td>
                  <td className="px-4 py-3 text-muted text-xs">{lead.next_followup || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </DashboardLayout>
  )
}
