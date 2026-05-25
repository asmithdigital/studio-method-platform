import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Star, ExternalLink, Mail, CheckCircle2, XCircle, Clock } from 'lucide-react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Badge from '@/components/ui/Badge'
import Avatar from '@/components/ui/Avatar'
import { FAKE_CONSULTANTS, FAKE_CLIENTS } from '@/lib/constants'

const availabilityVariant = { available: 'jade', partial: 'gold', unavailable: 'rose' }
const statusVariant = { active: 'jade', onboarding: 'blue', screening: 'purple' }
const specLabels = { studio_design: 'Studio Design', service_design: 'Service Design', ux_research: 'UX Research', content_design: 'Content Design', ai_implementation: 'AI Implementation' }

export default function ConsultantDetail() {
  const { id } = useParams()
  const c = FAKE_CONSULTANTS.find(x => x.id === id) || FAKE_CONSULTANTS[0]
  const currentClient = c.current_project ? FAKE_CLIENTS.find(cl => cl.id === c.current_project) : null

  const onboarding = [
    { label: 'Contract signed', done: c.contract_signed },
    { label: 'Onboarding complete', done: c.onboarding_complete },
    { label: 'References provided', done: c.references_provided },
  ]

  return (
    <DashboardLayout title={c.full_name} subtitle={`${c.location} · ${c.specialisms.map(s => specLabels[s] || s).join(', ')}`}>
      <div className="mb-4">
        <Link to="/dashboard/consultants" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
          <ArrowLeft size={14} /> Back to consultants
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Profile */}
        <div className="lg:col-span-2 space-y-5">
          <div className="card">
            <div className="flex items-start gap-5">
              <Avatar name={c.full_name} size="xl" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-ink">{c.full_name}</h2>
                    <p className="text-muted flex items-center gap-1.5 text-sm mt-0.5">
                      <MapPin size={13} /> {c.location} · {c.timezone}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge variant={statusVariant[c.status] || 'default'} className="capitalize">{c.status}</Badge>
                    <Badge variant={availabilityVariant[c.availability] || 'default'} className="capitalize">{c.availability}</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed mt-3">{c.bio}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {c.specialisms.map(s => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full bg-navy/5 text-navy border border-navy/10">{specLabels[s] || s}</span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <a href={`mailto:${c.email}`} className="flex items-center gap-1.5 text-sm text-muted hover:text-gold">
                    <Mail size={13} /> {c.email}
                  </a>
                  {c.linkedin_url && (
                    <a href={`https://${c.linkedin_url}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-muted hover:text-gold">
                      <ExternalLink size={13} /> LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Performance */}
          <div className="card">
            <h3 className="font-semibold text-ink mb-4">Performance</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-ink">{c.days_delivered}</p>
                <p className="text-xs text-muted mt-1">Days delivered</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-ink">${(c.total_revenue_generated / 1000).toFixed(0)}k</p>
                <p className="text-xs text-muted mt-1">Revenue generated</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-ink flex items-center justify-center gap-1">
                  {c.rating ? <><Star size={20} className="text-gold" fill="currentColor" /> {c.rating}</> : '—'}
                </p>
                <p className="text-xs text-muted mt-1">Client rating</p>
              </div>
            </div>
          </div>

          {/* Current engagement */}
          {currentClient && (
            <div className="card">
              <h3 className="font-semibold text-ink mb-3">Current engagement</h3>
              <Link to={`/dashboard/clients/${currentClient.id}`} className="flex items-center gap-3 p-3 rounded-xl border border-border hover:bg-surface">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold" style={{ background: currentClient.logo_color }}>
                  {currentClient.logo_initial}
                </div>
                <div>
                  <p className="font-semibold text-sm text-ink">{currentClient.company}</p>
                  <p className="text-xs text-muted">{currentClient.tier.replace('_', ' ')}</p>
                </div>
              </Link>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="card">
            <h3 className="font-semibold text-ink mb-4">Onboarding status</h3>
            <div className="space-y-3">
              {onboarding.map((o) => (
                <div key={o.label} className="flex items-center gap-3 text-sm">
                  {o.done
                    ? <CheckCircle2 size={16} className="text-jade flex-shrink-0" />
                    : <XCircle size={16} className="text-rose flex-shrink-0" />}
                  <span className={o.done ? 'text-ink' : 'text-muted'}>{o.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold text-ink mb-4">Rate & capacity</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Day rate</span>
                <span className="font-semibold text-ink">${c.day_rate.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Capacity</span>
                <span className="font-semibold text-ink">{c.capacity_days_per_week} days/week</span>
              </div>
              {c.availability_date && (
                <div className="flex justify-between">
                  <span className="text-muted">Available from</span>
                  <span className="font-semibold text-ink">{c.availability_date}</span>
                </div>
              )}
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold text-ink mb-3">Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-3 rounded-lg border border-border text-sm hover:bg-surface flex items-center gap-2">
                <Clock size={14} className="text-gold" /> View timesheets
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg bg-gold text-white text-sm hover:bg-gold-light flex items-center gap-2">
                <ExternalLink size={14} /> Assign to project
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
