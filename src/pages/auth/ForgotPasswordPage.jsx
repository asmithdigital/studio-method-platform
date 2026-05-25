import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1000)
  }

  return (
    <div className="min-h-screen bg-canvas flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <Link to="/" className="font-display text-xl font-bold text-ink block mb-10">Studio Method</Link>

        {sent ? (
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-jade/10 flex items-center justify-center mx-auto mb-6">
              <Mail size={28} className="text-jade" />
            </div>
            <h1 className="font-display text-2xl font-bold text-ink mb-3">Check your email</h1>
            <p className="text-muted mb-8">We have sent a password reset link to <strong>{email}</strong>. Check your inbox and follow the link.</p>
            <Link to="/login" className="inline-flex items-center gap-2 text-gold font-medium hover:underline">
              <ArrowLeft size={14} /> Back to sign in
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink mb-8">
              <ArrowLeft size={14} /> Back to sign in
            </Link>
            <h1 className="font-display text-3xl font-bold text-ink mb-2">Reset your password</h1>
            <p className="text-muted text-sm mb-8">Enter your email address and we will send you a reset link.</p>

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
              <Button type="submit" loading={loading} className="w-full justify-center" size="lg">
                Send reset link <ArrowRight size={16} />
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
