import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Eye, EyeOff } from 'lucide-react'
import { useAuthStore } from '@/store/authStore'
import Button from '@/components/ui/Button'

const demoRoles = [
  { id: 'owner', label: 'Owner', description: 'Full dashboard access' },
  { id: 'client', label: 'Client', description: 'Afterpay engagement' },
  { id: 'consultant', label: 'Consultant', description: 'Jordan Nakamura' },
  { id: 'individual', label: 'Individual', description: 'Sam Rivera' },
]

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [selectedRole, setSelectedRole] = useState('owner')
  const { login, loading } = useAuthStore()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const { error, user } = await login(email, password, selectedRole)
    if (error) { setError(error.message); return }
    const role = user?.role || selectedRole
    if (role === 'owner') navigate('/dashboard')
    else if (role === 'client') navigate('/client')
    else if (role === 'consultant') navigate('/consultant')
    else if (role === 'individual') navigate('/learn')
    else navigate('/dashboard')
  }

  const handleDemoLogin = async (role) => {
    setError('')
    const { user } = await login('', '', role)
    if (role === 'owner') navigate('/dashboard')
    else if (role === 'client') navigate('/client')
    else if (role === 'consultant') navigate('/consultant')
    else if (role === 'individual') navigate('/learn')
  }

  return (
    <div className="min-h-screen bg-canvas flex">
      <div className="hidden lg:flex lg:w-1/2 bg-navy relative overflow-hidden items-center justify-center p-16">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative z-10 max-w-sm">
          <Link to="/" className="font-display text-2xl font-bold text-white block mb-12">Studio Method</Link>
          <blockquote className="text-white/80 text-lg leading-relaxed mb-8 italic">
            "Studio Method didn't just give us a process — it gave us a shared language. The team went from constantly reactive to genuinely collaborative in about six weeks."
          </blockquote>
          <div>
            <p className="text-gold font-semibold">James Okafor</p>
            <p className="text-white/50 text-sm">Design Lead, Afterpay</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link to="/" className="font-display text-xl font-bold text-ink block mb-8 lg:hidden">Studio Method</Link>
          <h1 className="font-display text-3xl font-bold text-ink mb-2">Welcome back</h1>
          <p className="text-muted text-sm mb-8">Sign in to your Studio Method account</p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <p className="text-sm font-semibold text-amber-800 mb-3">Demo access — select a role</p>
            <div className="grid grid-cols-2 gap-2">
              {demoRoles.map((r) => (
                <button
                  key={r.id}
                  onClick={() => handleDemoLogin(r.id)}
                  className="text-left p-3 rounded-lg border border-amber-200 bg-white hover:border-amber-400 hover:bg-amber-50 transition-all"
                >
                  <p className="text-sm font-semibold text-ink">{r.label}</p>
                  <p className="text-xs text-muted">{r.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="relative flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted">or sign in with email</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
              />
            </div>
            <div>
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="input pr-11"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            {error && <p className="text-sm text-rose">{error}</p>}
            <div className="flex items-center justify-between">
              <Link to="/forgot-password" className="text-sm text-gold hover:underline">Forgot password?</Link>
            </div>
            <Button type="submit" loading={loading} className="w-full justify-center" size="lg">
              Sign in <ArrowRight size={16} />
            </Button>
          </form>

          <p className="text-center text-sm text-muted mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-gold font-medium hover:underline">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
