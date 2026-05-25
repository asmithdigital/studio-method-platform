import { useState } from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { useAuthStore } from '@/store/authStore'
import { FAKE_CONSULTANTS } from '@/lib/constants'

const myTimesheets = [
  { week: 'W/E 23 May 2026', project: 'Afterpay — Studio Setup + AI Layer', days: 4, rate: 1200, amount: 4800, status: 'submitted' },
  { week: 'W/E 16 May 2026', project: 'Afterpay — Studio Setup + AI Layer', days: 4, rate: 1200, amount: 4800, status: 'approved' },
  { week: 'W/E 9 May 2026', project: 'Afterpay — Studio Setup + AI Layer', days: 3, rate: 1200, amount: 3600, status: 'approved' },
  { week: 'W/E 2 May 2026', project: 'Afterpay — Studio Setup + AI Layer', days: 4, rate: 1200, amount: 4800, status: 'approved' },
]

const statusVariant = { submitted: 'gold', approved: 'jade', rejected: 'rose' }

export default function ConsultantTimesheets() {
  const { profile } = useAuthStore()
  const consultant = FAKE_CONSULTANTS.find(c => c.id === (profile?.consultant_id || 'consultant-001')) || FAKE_CONSULTANTS[0]
  const [showForm, setShowForm] = useState(false)
  const [days, setDays] = useState(4)
  const [notes, setNotes] = useState('')

  const totalApproved = myTimesheets.filter(t => t.status === 'approved').reduce((s, t) => s + t.amount, 0)

  return (
    <DashboardLayout title="Timesheets" subtitle="Weekly time submissions">
      <div className="grid grid-cols-3 gap-4 mb-5">
        <div className="stat-card">
          <p className="text-xs font-medium text-muted uppercase tracking-wide">This week</p>
          <p className="text-2xl font-bold text-amber-600 mt-1">Not submitted</p>
        </div>
        <div className="stat-card">
          <p className="text-xs font-medium text-muted uppercase tracking-wide">Approved this month</p>
          <p className="text-2xl font-bold text-ink mt-1">${totalApproved.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <p className="text-xs font-medium text-muted uppercase tracking-wide">Day rate</p>
          <p className="text-2xl font-bold text-ink mt-1">${consultant.day_rate.toLocaleString()}</p>
        </div>
      </div>

      {!showForm ? (
        <div className="mb-5">
          <Button onClick={() => setShowForm(true)}>Submit this week's timesheet</Button>
        </div>
      ) : (
        <div className="card mb-5">
          <h3 className="font-semibold text-ink mb-4">W/E 30 May 2026</h3>
          <div className="space-y-4">
            <div>
              <label className="label">Days worked</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((d) => (
                  <button key={d} onClick={() => setDays(d)} className={`w-12 h-12 rounded-xl border text-sm font-semibold transition-all ${days === d ? 'bg-gold text-white border-gold' : 'border-border text-muted hover:border-gold'}`}>
                    {d}
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted mt-1">Amount: ${(days * consultant.day_rate).toLocaleString()}</p>
            </div>
            <div>
              <label className="label">Notes (optional)</label>
              <textarea className="input" rows={3} value={notes} onChange={e => setNotes(e.target.value)} placeholder="Summary of work completed this week..." />
            </div>
            <div className="flex gap-3">
              <Button onClick={() => setShowForm(false)}>Submit timesheet</Button>
              <button onClick={() => setShowForm(false)} className="px-4 py-2 text-sm text-muted hover:text-ink">Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-surface border-b border-border">
            <tr>
              <th className="text-left px-5 py-3 font-medium text-muted">Week</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Project</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Days</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Amount</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Status</th>
            </tr>
          </thead>
          <tbody>
            {myTimesheets.map((t, i) => (
              <tr key={i} className="border-b border-border last:border-b-0 hover:bg-surface">
                <td className="px-5 py-3 font-medium text-ink">{t.week}</td>
                <td className="px-5 py-3 text-muted text-xs">{t.project}</td>
                <td className="px-5 py-3 text-muted">{t.days}</td>
                <td className="px-5 py-3 font-semibold text-ink">${t.amount.toLocaleString()}</td>
                <td className="px-5 py-3"><Badge variant={statusVariant[t.status] || 'default'} className="capitalize">{t.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  )
}
