import { useState } from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Button from '@/components/ui/Button'
import Avatar from '@/components/ui/Avatar'
import { useAuthStore } from '@/store/authStore'
import { FAKE_CLIENTS } from '@/lib/constants'

export default function ClientProfile() {
  const { profile } = useAuthStore()
  const client = FAKE_CLIENTS.find(c => c.id === (profile?.client_id || 'client-001')) || FAKE_CLIENTS[0]
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    full_name: profile?.full_name || client.primary_contact,
    email: profile?.email || client.primary_contact_email,
    role: 'Design Lead',
    company: client.company,
    phone: '+61 4XX XXX XXX',
  })

  const handleSave = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <DashboardLayout title="Profile" subtitle="Your account details">
      <div className="max-w-lg">
        <div className="card mb-5">
          <div className="flex items-center gap-4 mb-6">
            <Avatar name={form.full_name} size="xl" />
            <div>
              <p className="font-semibold text-ink">{form.full_name}</p>
              <p className="text-sm text-muted">{form.role} · {form.company}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSave} className="card space-y-4">
          <h3 className="font-semibold text-ink mb-2">Account details</h3>
          <div>
            <label className="label">Full name</label>
            <input className="input" value={form.full_name} onChange={e => setForm({ ...form, full_name: e.target.value })} />
          </div>
          <div>
            <label className="label">Email</label>
            <input type="email" className="input" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          </div>
          <div>
            <label className="label">Role</label>
            <input className="input" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} />
          </div>
          <div>
            <label className="label">Phone</label>
            <input type="tel" className="input" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
          </div>
          <Button type="submit">{saved ? 'Saved ✓' : 'Save changes'}</Button>
        </form>
      </div>
    </DashboardLayout>
  )
}
