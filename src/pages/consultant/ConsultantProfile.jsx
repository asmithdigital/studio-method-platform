import { useState } from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Avatar from '@/components/ui/Avatar'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { useAuthStore } from '@/store/authStore'
import { FAKE_CONSULTANTS } from '@/lib/constants'

const specLabels = { studio_design: 'Studio Design', service_design: 'Service Design', ux_research: 'UX Research', content_design: 'Content Design', ai_implementation: 'AI Implementation' }
const availabilityVariant = { available: 'jade', partial: 'gold', unavailable: 'rose' }

export default function ConsultantProfile() {
  const { profile } = useAuthStore()
  const consultant = FAKE_CONSULTANTS.find(c => c.id === (profile?.consultant_id || 'consultant-001')) || FAKE_CONSULTANTS[0]
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    full_name: consultant.full_name,
    email: consultant.email,
    location: consultant.location,
    linkedin_url: consultant.linkedin_url || '',
    portfolio_url: consultant.portfolio_url || '',
    bio: consultant.bio,
    day_rate: consultant.day_rate,
    availability: consultant.availability,
    capacity_days_per_week: consultant.capacity_days_per_week,
  })

  const handleSave = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <DashboardLayout title="Profile" subtitle="Your consultant profile">
      <div className="grid lg:grid-cols-3 gap-5">
        {/* Preview card */}
        <div className="card text-center">
          <Avatar name={form.full_name} size="xl" className="mx-auto mb-3" />
          <h3 className="font-semibold text-ink">{form.full_name}</h3>
          <p className="text-sm text-muted mb-3">{form.location}</p>
          <Badge variant={availabilityVariant[form.availability] || 'default'} className="capitalize mb-3">{form.availability}</Badge>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {consultant.specialisms.map(s => (
              <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-surface text-muted border border-border">{specLabels[s] || s}</span>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-3 text-sm">
            <div><p className="text-muted text-xs">Days delivered</p><p className="font-semibold text-ink">{consultant.days_delivered}</p></div>
            <div><p className="text-muted text-xs">Rating</p><p className="font-semibold text-ink">{consultant.rating || '—'}</p></div>
          </div>
        </div>

        {/* Edit form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSave} className="card space-y-4">
            <h3 className="font-semibold text-ink">Edit profile</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">Full name</label>
                <input className="input" value={form.full_name} onChange={e => setForm({ ...form, full_name: e.target.value })} />
              </div>
              <div>
                <label className="label">Email</label>
                <input type="email" className="input" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>
            <div>
              <label className="label">Location</label>
              <input className="input" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">LinkedIn URL</label>
                <input className="input" value={form.linkedin_url} onChange={e => setForm({ ...form, linkedin_url: e.target.value })} />
              </div>
              <div>
                <label className="label">Portfolio URL</label>
                <input className="input" value={form.portfolio_url} onChange={e => setForm({ ...form, portfolio_url: e.target.value })} />
              </div>
            </div>
            <div>
              <label className="label">Bio</label>
              <textarea className="input" rows={4} value={form.bio} onChange={e => setForm({ ...form, bio: e.target.value })} />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="label">Day rate (AUD)</label>
                <input type="number" className="input" value={form.day_rate} onChange={e => setForm({ ...form, day_rate: parseInt(e.target.value) })} />
              </div>
              <div>
                <label className="label">Availability</label>
                <select className="input" value={form.availability} onChange={e => setForm({ ...form, availability: e.target.value })}>
                  <option value="available">Available</option>
                  <option value="partial">Partial</option>
                  <option value="unavailable">Unavailable</option>
                </select>
              </div>
              <div>
                <label className="label">Days/week capacity</label>
                <input type="number" min={0} max={5} className="input" value={form.capacity_days_per_week} onChange={e => setForm({ ...form, capacity_days_per_week: parseInt(e.target.value) })} />
              </div>
            </div>
            <Button type="submit">{saved ? 'Saved ✓' : 'Save changes'}</Button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  )
}
