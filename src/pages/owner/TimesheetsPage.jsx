import { useState } from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Badge from '@/components/ui/Badge'
import { FAKE_CONSULTANTS, FAKE_PROJECTS } from '@/lib/constants'

const timesheets = [
  { id: 'ts-001', consultant_id: 'consultant-001', consultant: 'Jordan Nakamura', project: 'Afterpay — Studio Setup + AI Layer', week: 'W/E 23 May 2026', days: 4, rate: 1200, amount: 4800, status: 'submitted' },
  { id: 'ts-002', consultant_id: 'consultant-002', consultant: 'Asha Patel', project: 'Medibank Digital — Studio Setup', week: 'W/E 23 May 2026', days: 2, rate: 1050, amount: 2100, status: 'submitted' },
  { id: 'ts-003', consultant_id: 'consultant-003', consultant: 'Stuart McAlister', project: 'Xero Australia — AI Orchestration Layer', week: 'W/E 23 May 2026', days: 5, rate: 1350, amount: 6750, status: 'submitted' },
  { id: 'ts-004', consultant_id: 'consultant-001', consultant: 'Jordan Nakamura', project: 'Afterpay — Studio Setup + AI Layer', week: 'W/E 16 May 2026', days: 4, rate: 1200, amount: 4800, status: 'approved' },
  { id: 'ts-005', consultant_id: 'consultant-002', consultant: 'Asha Patel', project: 'Medibank Digital — Studio Setup', week: 'W/E 16 May 2026', days: 2, rate: 1050, amount: 2100, status: 'approved' },
  { id: 'ts-006', consultant_id: 'consultant-001', consultant: 'Jordan Nakamura', project: 'Afterpay — Studio Setup + AI Layer', week: 'W/E 9 May 2026', days: 3, rate: 1200, amount: 3600, status: 'approved' },
]

const statusVariant = { submitted: 'gold', approved: 'jade', rejected: 'rose' }

export default function TimesheetsPage() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? timesheets : timesheets.filter(t => t.status === filter)
  const pendingTotal = timesheets.filter(t => t.status === 'submitted').reduce((s, t) => s + t.amount, 0)
  const approvedTotal = timesheets.filter(t => t.status === 'approved').reduce((s, t) => s + t.amount, 0)

  return (
    <DashboardLayout title="Timesheets" subtitle="Consultant time submissions">
      <div className="grid grid-cols-3 gap-4 mb-5">
        <div className="stat-card">
          <p className="text-xs font-medium text-muted uppercase tracking-wide">Pending approval</p>
          <p className="text-2xl font-bold text-ink mt-1">${pendingTotal.toLocaleString()}</p>
          <p className="text-xs text-muted">{timesheets.filter(t => t.status === 'submitted').length} timesheets</p>
        </div>
        <div className="stat-card">
          <p className="text-xs font-medium text-muted uppercase tracking-wide">Approved this month</p>
          <p className="text-2xl font-bold text-ink mt-1">${approvedTotal.toLocaleString()}</p>
          <p className="text-xs text-muted">{timesheets.filter(t => t.status === 'approved').length} timesheets</p>
        </div>
        <div className="stat-card">
          <p className="text-xs font-medium text-muted uppercase tracking-wide">Total days this month</p>
          <p className="text-2xl font-bold text-ink mt-1">{timesheets.filter(t => t.week.includes('May')).reduce((s, t) => s + t.days, 0)}</p>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        {['all', 'submitted', 'approved'].map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 text-sm font-medium rounded-lg capitalize ${filter === f ? 'bg-navy text-white' : 'bg-white border border-border text-muted hover:text-ink'}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-surface border-b border-border">
            <tr>
              <th className="text-left px-5 py-3 font-medium text-muted">Consultant</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Project</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Week</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Days</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Amount</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Status</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => (
              <tr key={t.id} className="border-b border-border last:border-b-0 hover:bg-surface">
                <td className="px-5 py-3 font-medium text-ink">{t.consultant}</td>
                <td className="px-5 py-3 text-muted text-xs">{t.project}</td>
                <td className="px-5 py-3 text-muted">{t.week}</td>
                <td className="px-5 py-3 text-muted">{t.days}</td>
                <td className="px-5 py-3 font-semibold text-ink">${t.amount.toLocaleString()}</td>
                <td className="px-5 py-3"><Badge variant={statusVariant[t.status] || 'default'} className="capitalize">{t.status}</Badge></td>
                <td className="px-5 py-3">
                  {t.status === 'submitted' && (
                    <button className="text-xs px-3 py-1.5 bg-jade text-white rounded-lg hover:opacity-90">Approve</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  )
}
