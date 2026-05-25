import DashboardLayout from '@/components/layout/DashboardLayout'
import RevenueChart from '@/components/charts/RevenueChart'
import Badge from '@/components/ui/Badge'
import { FAKE_REVENUE_DATA, FAKE_CLIENTS } from '@/lib/constants'

const invoices = [
  { id: 'INV-0024', client: 'Afterpay', amount: 16250, status: 'paid', date: '2026-05-20', due: '2026-05-20' },
  { id: 'INV-0023', client: 'Medibank Digital', amount: 9500, status: 'paid', date: '2026-05-12', due: '2026-05-12' },
  { id: 'INV-0022', client: 'MYOB', amount: 12500, status: 'paid', date: '2026-05-01', due: '2026-05-01' },
  { id: 'INV-0025', client: 'Xero Australia', amount: 5500, status: 'outstanding', date: '2026-05-22', due: '2026-06-05' },
  { id: 'INV-0026', client: 'Afterpay', amount: 16250, status: 'outstanding', date: '2026-05-22', due: '2026-06-05' },
]

const statusVariant = { paid: 'jade', outstanding: 'gold', overdue: 'rose' }

export default function FinancePage() {
  const { this_month, by_service, monthly } = FAKE_REVENUE_DATA
  const totalYTD = Object.values(by_service).reduce((a, b) => a + b, 0)
  const outstanding = invoices.filter(i => i.status === 'outstanding').reduce((s, i) => s + i.amount, 0)

  return (
    <DashboardLayout title="Finance" subtitle="Revenue, invoices, and projections">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Revenue YTD', value: `$${(totalYTD / 1000).toFixed(0)}k` },
          { label: 'This month (actual)', value: `$${(this_month.actual / 1000).toFixed(0)}k` },
          { label: 'Monthly target', value: `$${(this_month.target / 1000).toFixed(0)}k` },
          { label: 'Outstanding', value: `$${(outstanding / 1000).toFixed(0)}k` },
        ].map((s) => (
          <div key={s.label} className="stat-card">
            <p className="text-xs font-medium text-muted uppercase tracking-wide">{s.label}</p>
            <p className="text-2xl font-bold text-ink mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mb-5">
        {/* Revenue chart */}
        <div className="card">
          <h3 className="font-semibold text-ink mb-4">Revenue by month (2026)</h3>
          <RevenueChart data={monthly} />
        </div>

        {/* By service */}
        <div className="card">
          <h3 className="font-semibold text-ink mb-4">Revenue by service</h3>
          <div className="space-y-3">
            {Object.entries(by_service).map(([key, value]) => {
              const pct = Math.round(value / totalYTD * 100)
              const labels = { studio_setup: 'Studio Setup', ai_layer: 'AI Layer', training: 'Training', individual: 'Individual' }
              return (
                <div key={key}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted">{labels[key] || key}</span>
                    <span className="font-medium text-ink">${value.toLocaleString()} ({pct}%)</span>
                  </div>
                  <div className="h-2 bg-surface rounded-full overflow-hidden">
                    <div className="h-full bg-gold rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Invoices */}
      <div className="card overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="font-semibold text-ink">Recent invoices</h3>
          <button className="text-sm text-gold hover:underline">New invoice</button>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-surface border-b border-border">
            <tr>
              <th className="text-left px-5 py-3 font-medium text-muted">Invoice</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Client</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Amount</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Status</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Date</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Due</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-b border-border last:border-b-0 hover:bg-surface">
                <td className="px-5 py-3 font-medium text-ink">{inv.id}</td>
                <td className="px-5 py-3 text-muted">{inv.client}</td>
                <td className="px-5 py-3 font-semibold text-ink">${inv.amount.toLocaleString()}</td>
                <td className="px-5 py-3"><Badge variant={statusVariant[inv.status] || 'default'} className="capitalize">{inv.status}</Badge></td>
                <td className="px-5 py-3 text-muted">{inv.date}</td>
                <td className="px-5 py-3 text-muted">{inv.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  )
}
