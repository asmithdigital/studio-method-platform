import { Link } from 'react-router-dom'
import { Plus, Search } from 'lucide-react'
import { useState } from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import HealthIndicator from '@/components/ui/HealthIndicator'
import Badge from '@/components/ui/Badge'
import { FAKE_CLIENTS } from '@/lib/constants'

const statusVariant = { active: 'jade', onboarding: 'blue', paused: 'gold', completed: 'default' }
const tierLabel = { full_service: 'Full Service', studio_setup: 'Studio Setup', ai_layer: 'AI Layer', training: 'Training' }

export default function ClientsList() {
  const [query, setQuery] = useState('')
  const filtered = FAKE_CLIENTS.filter(c =>
    c.company.toLowerCase().includes(query.toLowerCase()) ||
    c.primary_contact.toLowerCase().includes(query.toLowerCase())
  )

  const totalARR = FAKE_CLIENTS.reduce((s, c) => s + c.contract_value, 0)
  const activeCount = FAKE_CLIENTS.filter(c => c.status === 'active').length

  return (
    <DashboardLayout title="Clients" subtitle={`${FAKE_CLIENTS.length} clients · $${(totalARR / 1000).toFixed(0)}k total contract value`}>
      {/* Summary row */}
      <div className="grid grid-cols-3 gap-4 mb-5">
        {[
          { label: 'Active clients', value: activeCount },
          { label: 'Total contract value', value: `$${(totalARR / 1000).toFixed(0)}k` },
          { label: 'Avg health score', value: `${Math.round(FAKE_CLIENTS.reduce((s, c) => s + c.health_score, 0) / FAKE_CLIENTS.length)}` },
        ].map((s) => (
          <div key={s.label} className="stat-card">
            <p className="text-xs font-medium text-muted uppercase tracking-wide">{s.label}</p>
            <p className="text-2xl font-bold text-ink mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="card overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input
              className="pl-9 pr-4 py-2 text-sm border border-border rounded-lg bg-surface focus:outline-none focus:border-gold"
              placeholder="Search clients..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-sm bg-gold text-white rounded-lg hover:bg-gold-light">
            <Plus size={14} /> Add client
          </button>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-surface border-b border-border">
            <tr>
              <th className="text-left px-5 py-3 font-medium text-muted">Client</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Service tier</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Status</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Contract value</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Health</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Consultant</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Ends</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-b border-border last:border-b-0 hover:bg-surface">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: c.logo_color }}>
                      {c.logo_initial}
                    </div>
                    <div>
                      <Link to={`/dashboard/clients/${c.id}`} className="font-semibold text-ink hover:text-gold">{c.company}</Link>
                      <p className="text-xs text-muted">{c.primary_contact}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 text-muted">{tierLabel[c.tier] || c.tier}</td>
                <td className="px-5 py-4">
                  <Badge variant={statusVariant[c.status] || 'default'} className="capitalize">{c.status}</Badge>
                </td>
                <td className="px-5 py-4 font-semibold text-ink">${c.contract_value.toLocaleString()}</td>
                <td className="px-5 py-4"><HealthIndicator score={c.health_score} showLabel /></td>
                <td className="px-5 py-4 text-muted">{c.primary_consultant}</td>
                <td className="px-5 py-4 text-muted">{c.contract_end}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  )
}
