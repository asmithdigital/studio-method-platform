import { useState, useEffect } from 'react'
import PublicLayout from '@/components/layout/PublicLayout'
import { Arrow, useReveal } from '@/components/public/SharedComponents'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  useReveal(null)
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <PublicLayout>
      <section
        className="page-hero"
        style={{ borderBottom: 0, minHeight: '78vh', display: 'flex', alignItems: 'center' }}
        data-screen-label="Contact"
      >
        <div className="wrap">
          <span className="eyebrow reveal"><span className="sq"></span>Book a call</span>
          <h1 className="ph-title reveal d1" style={{ maxWidth: '20ch' }}>
            Let&apos;s look at your team&apos;s <em>current state.</em>
          </h1>
          <p className="ph-sub reveal d2">
            A 45-minute discovery call. No deck, no pitch — just an honest read of where your design work gets stuck.
          </p>
          {!sent ? (
            <form
              className="reveal d2"
              style={{ marginTop: 40, display: 'flex', gap: 12, flexWrap: 'wrap', maxWidth: 560 }}
              onSubmit={(e) => { e.preventDefault(); setSent(true) }}
            >
              <input
                required
                type="email"
                placeholder="you@company.com"
                style={{
                  flex: '1 1 280px',
                  padding: '16px 20px',
                  borderRadius: 999,
                  border: '1px solid var(--line-strong)',
                  fontFamily: 'var(--f-sans)',
                  fontSize: 15,
                  background: '#fff',
                  color: 'var(--ink)',
                  outline: 'none',
                }}
              />
              <button className="btn btn-lime" type="submit" style={{ fontSize: 15, padding: '16px 26px' }}>
                Request a call <Arrow />
              </button>
            </form>
          ) : (
            <div
              className="reveal in"
              style={{
                marginTop: 40,
                padding: '22px 26px',
                border: '1px solid var(--line-strong)',
                borderRadius: 16,
                maxWidth: 560,
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                background: '#fff',
              }}
            >
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--lime-deep)', flexShrink: 0 }}></span>
              <span style={{ fontWeight: 500 }}>Thanks — we&apos;ll be in touch within one business day to find a time.</span>
            </div>
          )}
          <div className="reveal d3" style={{ marginTop: 48 }}>
            <span className="mono">hello@studiomethod.com.au · Adelaide, South Australia</span>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
