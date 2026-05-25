import { useState } from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Button from '@/components/ui/Button'
import { useAuthStore } from '@/store/authStore'

export default function SettingsPage() {
  const { profile } = useAuthStore()
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    full_name: profile?.full_name || 'Andrew Smith',
    email: profile?.email || 'andrew@studiomethod.com.au',
    business_name: 'Studio Method',
    business_email: 'hello@studiomethod.com.au',
    timezone: 'Australia/Adelaide',
    currency: 'AUD',
    notifications_lead: true,
    notifications_milestone: true,
    notifications_timesheet: true,
    notifications_weekly: true,
  })

  const handleSave = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const sections = [
    {
      title: 'Profile',
      fields: [
        { key: 'full_name', label: 'Full name', type: 'text' },
        { key: 'email', label: 'Email', type: 'email' },
      ],
    },
    {
      title: 'Business',
      fields: [
        { key: 'business_name', label: 'Business name', type: 'text' },
        { key: 'business_email', label: 'Business email', type: 'email' },
        { key: 'timezone', label: 'Timezone', type: 'select', options: ['Australia/Adelaide', 'Australia/Sydney', 'Australia/Melbourne', 'Australia/Brisbane'] },
        { key: 'currency', label: 'Currency', type: 'select', options: ['AUD', 'USD', 'GBP'] },
      ],
    },
  ]

  const notifications = [
    { key: 'notifications_lead', label: 'New lead notifications' },
    { key: 'notifications_milestone', label: 'Milestone completion alerts' },
    { key: 'notifications_timesheet', label: 'Timesheet submission alerts' },
    { key: 'notifications_weekly', label: 'Weekly summary email' },
  ]

  return (
    <DashboardLayout title="Settings" subtitle="Account and platform configuration">
      <form onSubmit={handleSave} className="max-w-2xl space-y-6">
        {sections.map((section) => (
          <div key={section.title} className="card">
            <h3 className="font-semibold text-ink mb-5">{section.title}</h3>
            <div className="space-y-4">
              {section.fields.map((field) => (
                <div key={field.key}>
                  <label className="label">{field.label}</label>
                  {field.type === 'select' ? (
                    <select className="input" value={form[field.key]} onChange={e => setForm({ ...form, [field.key]: e.target.value })}>
                      {field.options.map(o => <option key={o}>{o}</option>)}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      className="input"
                      value={form[field.key]}
                      onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="card">
          <h3 className="font-semibold text-ink mb-5">Notifications</h3>
          <div className="space-y-3">
            {notifications.map((n) => (
              <label key={n.key} className="flex items-center justify-between cursor-pointer">
                <span className="text-sm text-muted">{n.label}</span>
                <div
                  onClick={() => setForm({ ...form, [n.key]: !form[n.key] })}
                  className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer ${form[n.key] ? 'bg-gold' : 'bg-border'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${form[n.key] ? 'translate-x-6' : 'translate-x-1'}`} />
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button type="submit" variant="gold">
            {saved ? 'Saved ✓' : 'Save changes'}
          </Button>
        </div>

        <div className="card border-rose/20 bg-red-50">
          <h3 className="font-semibold text-rose mb-3">Danger zone</h3>
          <p className="text-sm text-muted mb-4">These actions are irreversible. Proceed with caution.</p>
          <div className="space-y-2">
            <button type="button" className="px-4 py-2 text-sm border border-rose/30 text-rose rounded-lg hover:bg-red-100 transition-colors">
              Reset all demo data
            </button>
          </div>
        </div>
      </form>
    </DashboardLayout>
  )
}
