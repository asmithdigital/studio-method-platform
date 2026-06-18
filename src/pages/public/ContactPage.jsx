import { useState, useEffect } from 'react'
import PublicLayout from '@/components/layout/PublicLayout'
import { useReveal, Arrow } from '@/components/public/SharedComponents'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  useReveal(null)
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <PublicLayout>
      <div className="dark-section dark-section--dark" style={{ minHeight: '80vh' }}>
        <div className="dark-section__inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>
            {/* Left */}
            <div>
              <div className="dark-hero__eyebrow reveal">Book a call</div>
              <h1 className="dark-hero__title reveal" style={{ fontSize: 'clamp(48px, 6vw, 80px)', marginBottom: 32 }}>
                Let&apos;s talk.
              </h1>
              <p className="editorial-row__body reveal">
                A 45-minute discovery call. No deck, no pitch — just an honest read of where your design work gets stuck.
              </p>
              <div className="reveal" style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <a
                  href="mailto:hello@studiomethod.com.au"
                  style={{ color: '#C7F24D', textDecoration: 'none', fontSize: 16, fontWeight: 600 }}
                >
                  hello@studiomethod.com.au
                </a>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>Adelaide, South Australia</span>
              </div>
            </div>

            {/* Right — form */}
            <div className="reveal">
              {!sent ? (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
                >
                  <div>
                    <label className="dark-label" htmlFor="contact-name">Your name</label>
                    <input
                      id="contact-name"
                      type="text"
                      className="dark-input"
                      placeholder="Jane Smith"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="dark-label" htmlFor="contact-email">Work email</label>
                    <input
                      id="contact-email"
                      type="email"
                      className="dark-input"
                      placeholder="you@company.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="dark-label" htmlFor="contact-message">Tell us about your team</label>
                    <textarea
                      id="contact-message"
                      className="dark-input"
                      placeholder="How many designers, what's not working, what you're hoping for..."
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ resize: 'vertical' }}
                    />
                  </div>
                  <button type="submit" className="btn-lime" style={{ alignSelf: 'flex-start' }}>
                    Send message <Arrow />
                  </button>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
                    Responses within one business day.
                  </p>
                </form>
              ) : (
                <div style={{
                  padding: '48px 40px',
                  border: '1px solid rgba(199,242,77,0.3)',
                  borderRadius: 20,
                  background: 'rgba(199,242,77,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 16,
                }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#C7F24D', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l4 4 8-8" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 style={{ color: '#FFFFFF', fontSize: 22, fontWeight: 700, margin: 0 }}>Message received</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, margin: 0 }}>
                    We&apos;ll be in touch within one business day to find a time.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
