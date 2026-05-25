import { useState } from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Avatar from '@/components/ui/Avatar'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { useAuthStore } from '@/store/authStore'
import { FAKE_INDIVIDUAL_USERS } from '@/lib/constants'

export default function IndividualProfile() {
  const { profile } = useAuthStore()
  const user = FAKE_INDIVIDUAL_USERS.find(u => u.full_name === profile?.full_name) || FAKE_INDIVIDUAL_USERS[0]
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    full_name: profile?.full_name || user.full_name,
    email: profile?.email || 'sam@freelance.com',
    company: user.company,
    title: user.title,
    why: '',
  })

  const handleSave = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <DashboardLayout title="Profile" subtitle="Your account">
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="card text-center">
          <Avatar name={form.full_name} size="xl" className="mx-auto mb-3" />
          <h3 className="font-semibold text-ink">{form.full_name}</h3>
          <p className="text-sm text-muted">{form.title}</p>
          <p className="text-sm text-muted">{form.company}</p>
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-muted mb-1">Current plan</p>
            <Badge variant="gold" className="capitalize">{user.plan.replace('_', ' ')}</Badge>
          </div>
          <div className="mt-3 text-sm">
            <p className="text-muted text-xs">Modules complete</p>
            <p className="font-bold text-ink">{user.modules_completed}/{user.modules_total}</p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <form onSubmit={handleSave} className="card space-y-4">
            <h3 className="font-semibold text-ink">Personal details</h3>
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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">Company or context</label>
                <input className="input" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
              </div>
              <div>
                <label className="label">Your role</label>
                <input className="input" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
              </div>
            </div>
            <div>
              <label className="label">Why you are learning Studio Method (optional)</label>
              <textarea className="input" rows={3} value={form.why} onChange={e => setForm({ ...form, why: e.target.value })} placeholder="What are you hoping to apply from this course?" />
            </div>
            <Button type="submit">{saved ? 'Saved ✓' : 'Save changes'}</Button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  )
}
