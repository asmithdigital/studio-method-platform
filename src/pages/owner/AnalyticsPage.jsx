import DashboardLayout from '@/components/layout/DashboardLayout'
import RevenueChart from '@/components/charts/RevenueChart'
import PipelineChart from '@/components/charts/PipelineChart'
import HealthChart from '@/components/charts/HealthChart'
import ActivityChart from '@/components/charts/ActivityChart'
import CapacityChart from '@/components/charts/CapacityChart'
import { FAKE_REVENUE_DATA, FAKE_CLIENTS, FAKE_CONSULTANTS, FAKE_LEADS } from '@/lib/constants'

export default function AnalyticsPage() {
  const totalRevenue = Object.values(FAKE_REVENUE_DATA.by_service).reduce((a, b) => a + b, 0)
  const avgHealth = Math.round(FAKE_CLIENTS.reduce((s, c) => s + c.health_score, 0) / FAKE_CLIENTS.length)
  const pipelineValue = FAKE_REVENUE_DATA.pipeline.total
  const activeConsultants = FAKE_CONSULTANTS.filter(c => c.status === 'active').length

  return (
    <DashboardLayout title="Analytics" subtitle="Business performance overview">
      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Revenue YTD', value: `$${(totalRevenue / 1000).toFixed(0)}k`, sub: `Target: $${(FAKE_REVENUE_DATA.this_month.target / 1000).toFixed(0)}k/mo` },
          { label: 'Pipeline value', value: `$${(pipelineValue / 1000).toFixed(0)}k`, sub: `${FAKE_LEADS.filter(l => !['won','lost'].includes(l.status)).length} open leads` },
          { label: 'Avg client health', value: `${avgHealth}`, sub: `${FAKE_CLIENTS.filter(c => c.health_score >= 80).length} of ${FAKE_CLIENTS.length} healthy` },
          { label: 'Active consultants', value: activeConsultants, sub: `${FAKE_CONSULTANTS.length} in network` },
        ].map((s) => (
          <div key={s.label} className="stat-card">
            <p className="text-xs font-medium text-muted uppercase tracking-wide">{s.label}</p>
            <p className="text-2xl font-bold text-ink mt-1">{s.value}</p>
            <p className="text-xs text-muted">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mb-5">
        <div className="card">
          <h3 className="font-semibold text-ink mb-4">Revenue trajectory (2026)</h3>
          <RevenueChart data={FAKE_REVENUE_DATA.monthly} />
        </div>
        <div className="card">
          <h3 className="font-semibold text-ink mb-4">Pipeline by stage</h3>
          <PipelineChart data={FAKE_REVENUE_DATA.pipeline} />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mb-5">
        <div className="card">
          <h3 className="font-semibold text-ink mb-4">Client health scores</h3>
          <HealthChart clients={FAKE_CLIENTS} />
        </div>
        <div className="card">
          <h3 className="font-semibold text-ink mb-4">Consultant capacity utilisation</h3>
          <CapacityChart consultants={FAKE_CONSULTANTS} />
        </div>
      </div>

      <div className="card">
        <h3 className="font-semibold text-ink mb-4">Revenue by service line</h3>
        <div className="grid grid-cols-4 gap-6">
          {Object.entries(FAKE_REVENUE_DATA.by_service).map(([key, value]) => {
            const total = Object.values(FAKE_REVENUE_DATA.by_service).reduce((a, b) => a + b, 0)
            const pct = Math.round(value / total * 100)
            const labels = { studio_setup: 'Studio Setup', ai_layer: 'AI Layer', training: 'Training', individual: 'Individual' }
            const colors = { studio_setup: 'bg-navy', ai_layer: 'bg-gold', training: 'bg-jade', individual: 'bg-blue-400' }
            return (
              <div key={key} className="text-center">
                <div className={`w-16 h-16 rounded-full ${colors[key]} mx-auto flex items-center justify-center mb-3`}>
                  <span className="text-white font-bold text-sm">{pct}%</span>
                </div>
                <p className="font-semibold text-ink">${(value / 1000).toFixed(0)}k</p>
                <p className="text-xs text-muted">{labels[key]}</p>
              </div>
            )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}
