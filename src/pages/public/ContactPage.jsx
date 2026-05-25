import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'

const JKS = { fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: 12,
  border: '1.5px solid #e5e7eb',
  fontSize: 15,
  outline: 'none',
  background: '#fff',
  color: '#111111',
  boxSizing: 'border-box',
  ...JKS,
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PublicLayout>
      <section style={{ background: '#FAFAF7', minHeight: 'calc(100vh - 64px)', ...JKS }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {submitted ? (
            <div className="text-center py-24">
              <div
                style={{ width: 72, height: 72, borderRadius: 999, background: '#F0FDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h2 style={{ fontSize: 36, fontWeight: 800, color: '#111111', marginBottom: 12, ...JKS }}>Message received</h2>
              <p style={{ fontSize: 17, color: '#6B7280', ...JKS }}>We will come back to you within one business day.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-20 items-start">
              {/* LEFT */}
              <div className="pt-8">
                <h1 style={{ fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 800, color: '#111111', lineHeight: 1, marginBottom: 16, ...JKS }}>
                  Let's talk.
                </h1>
                <p style={{ fontSize: 18, color: '#6B7280', lineHeight: 1.7, marginBottom: 36, ...JKS }}>
                  Tell us what is happening in your team and we will come back to you quickly.
                </p>
                <a
                  href="mailto:hello@studiomethod.com.au"
                  style={{ fontSize: 17, color: '#6366F1', fontWeight: 600, display: 'block', marginBottom: 12, ...JKS }}
                >
                  hello@studiomethod.com.au
                </a>
                <p style={{ fontSize: 15, color: '#9ca3af', ...JKS }}>Adelaide, South Australia (working globally)</p>
              </div>

              {/* RIGHT: FORM */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#111111', marginBottom: 6, ...JKS }}>Your name</label>
                  <input
                    required
                    style={inputStyle}
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Sarah Chen"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#111111', marginBottom: 6, ...JKS }}>Email</label>
                  <input
                    required
                    type="email"
                    style={inputStyle}
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="sarah@company.com"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#111111', marginBottom: 6, ...JKS }}>Message</label>
                  <textarea
                    required
                    rows={6}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your team and what is happening right now…"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 font-semibold transition-all"
                  style={{ background: '#6366F1', color: '#fff', borderRadius: 12, padding: '14px', fontSize: 16, border: 'none', cursor: 'pointer', ...JKS }}
                >
                  Send message <ArrowRight size={16} />
                </button>
                <p style={{ fontSize: 13, color: '#9ca3af', textAlign: 'center', ...JKS }}>Responses within one business day</p>
              </form>
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  )
}
