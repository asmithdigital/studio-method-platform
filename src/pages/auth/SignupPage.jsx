import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function SignupPage() {
  const [form, setForm] = useState({ full_name: '', email: '', password: '', account_type: 'individual' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    // Demo: redirect to login
    setTimeout(() => {
      setLoading(false)
      navigate('/login')
    }, 1000)
  }

  const accountTypes = [
    { id: 'individual', label: 'Individual learner', description: 'Learn Studio Method at your own pace' },
    { id: 'client', label: 'Client access', description: 'Access your engagement portal' },
    { id: 'consultant', label: 'Consultant', description: 'Join the consultant network' },
  ]

  return (
    <div className="min-h-screen bg-canvas flex">
      <div className="hidden lg:flex lg:w-1/2 bg-navy relative overflow-hidden items-center justify-center p-16">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative z-10 max-w-sm">
          <Link to="/" className="font-display text-2xl font-bold text-white block mb-12">Studio Method</Link>
          <h2 className="font-display text-2xl font-bold text-white mb-4">Join the Studio Method community</h2>
          <p className="text-white/60 leading-relaxed">
            Thousands of design managers, consultants, and teams use Studio Method to build the operating model their teams need.
          </p>
          <div className="mt-8 space-y-3">
            {['12 training modules', 'Monthly live Q&A with Andrew', 'Community access', 'Certificate of completion'].map((f) => (
              <div key={f} className="flex items-center gap-3 text-white/70 text-sm">
                <div className="w-5 h-5 rounded-full bg-jade/30 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-jade" />
                </div>
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link to="/" className="font-display text-xl font-bold text-ink block mb-8 lg:hidden">Studio Method</Link>
          <h1 className="font-display text-3xl font-bold text-ink mb-2">Create your account</h1>
          <p className="text-muted text-sm mb-8">Start learning Studio Method today</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">Full name</label>
              <input className="input" value={form.full_name} onChange={e => setForm({ ...form, full_name: e.target.value })} placeholder="Sarah Chen" required />
            </div>
            <div>
              <label className="label">Email</label>
              <input type="email" className="input" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="sarah@company.com" required />
            </div>
            <div>
              <label className="label">Password</label>
              <input type="password" className="input" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="8+ characters" minLength={8} required />
            </div>
            <div>
              <label className="label">Account type</label>
              <div className="space-y-2 mt-1">
                {accountTypes.map((t) => (
                  <label key={t.id} className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${form.account_type === t.id ? 'border-gold bg-amber-50' : 'border-border hover:border-border'}`}>
                    <input
                      type="radio"
                      name="account_type"
                      value={t.id}
                      checked={form.account_type === t.id}
                      onChange={e => setForm({ ...form, account_type: e.target.value })}
                      className="mt-0.5 accent-gold"
                    />
                    <div>
                      <p className="text-sm font-medium text-ink">{t.label}</p>
                      <p className="text-xs text-muted">{t.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            {error && <p className="text-sm text-rose">{error}</p>}
            <Button type="submit" loading={loading} className="w-full justify-center" size="lg">
              Create account <ArrowRight size={16} />
            </Button>
            <p className="text-xs text-muted text-center">
              By creating an account you agree to our{' '}
              <Link to="/privacy" className="text-gold hover:underline">Privacy Policy</Link>
            </p>
          </form>

          <p className="text-center text-sm text-muted mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-gold font-medium hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
