import { Link } from 'react-router-dom'
import { Plus, MapPin, Star } from 'lucide-react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Badge from '@/components/ui/Badge'
import Avatar from '@/components/ui/Avatar'
import { FAKE_CONSULTANTS } from '@/lib/constants'

const availabilityVariant = { available: 'jade', partial: 'gold', unavailable: 'rose' }
const statusVariant = { active: 'jade', onboarding: 'blue', screening: 'purple' }
const specLabels = { studio_design: 'Studio Design', service_design: 'Service Design', ux_research: 'UX Research', content_design: 'Content Design', ai_implementation: 'AI Layer' }

export default function ConsultantsList() {
  return (
    <DashboardLayout title="Consultants" subtitle={`${FAKE_CONSULTANTS.length} consultants in network`}>
      <div className="flex justify-end mb-5">
        <button className="flex items-center gap-2 px-4 py-2 text-sm bg-gold text-white rounded-lg hover:bg-gold-light">
          <Plus size={14} /> Add consultant
        </button>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {FAKE_CONSULTANTS.map((c) => (
          <Link key={c.id} to={`/dashboard/consultants/${c.id}`} className="card hover:shadow-md transition-shadow flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <Avatar name={c.full_name} size="lg" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-ink">{c.full_name}</p>
                    <p className="text-xs text-muted flex items-center gap-1 mt-0.5">
                      <MapPin size={10} /> {c.location}
                    </p>
                  </div>
                  <Badge variant={statusVariant[c.status] || 'default'} className="flex-shrink-0 capitalize">{c.status}</Badge>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted leading-relaxed line-clamp-3">{c.bio}</p>

            <div className="flex flex-wrap gap-1.5">
              {c.specialisms.map(s => (
                <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-surface text-muted border border-border">{specLabels[s] || s}</span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border text-sm">
              <div>
                <p className="text-muted text-xs">Day rate</p>
                <p className="font-semibold text-ink">${c.day_rate.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-muted text-xs">Availability</p>
                <Badge variant={availabilityVariant[c.availability] || 'default'} className="capitalize">{c.availability}</Badge>
              </div>
              {c.rating && (
                <div className="text-right">
                  <p className="text-muted text-xs">Rating</p>
                  <p className="font-semibold text-ink flex items-center gap-1">
                    <Star size={12} className="text-gold" fill="currentColor" /> {c.rating}
                  </p>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </DashboardLayout>
  )
}
