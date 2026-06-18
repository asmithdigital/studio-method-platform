import { Link } from 'react-router-dom'
import { ArrowRight, X as XIcon } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'
import { TESTIMONIALS } from '@/lib/constants'

const SGF = { fontFamily: "'Schibsted Grotesk', system-ui, sans-serif" }

const symptoms = [
  'Work comes in from everywhere.',
  'Nobody knows what\'s in flight.',
  'Research gets skipped to ship faster.',
]

const process = [
  { step: '01', title: 'Discovery call', body: 'A 45-minute conversation where we look at your team\'s current situation honestly.' },
  { step: '02', title: 'Team assessment', body: 'Interviews, observation, backlog review. A written current state that describes what is happening and why.' },
  { step: '03', title: 'Model design', body: 'We design the Studio Method operating model for your specific context — adapted, not generic.' },
  { step: '04', title: 'Implementation', body: 'We install the model. Ceremonies running, filter gate operational, team trained.' },
  { step: '05', title: 'Handover', body: 'A documented, sustainable system. The team knows how to run it. We include a 90-day check-in.' },
]

export default function ForOrganisationsPage() {
  return (
    <PublicLayout>
      {/* HERO */}
      <section style={{ background: '#0A0A0A', ...SGF }} className="py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: '#1A1A1A', color: '#C7F24D', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            For Organisations
          </div>
          <h1 className="mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1, ...SGF }}>
            Your design team,<br />
            <span style={{ color: '#C7F24D' }}>operating like a studio.</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 500, margin: '0 auto 36px', ...SGF }}>
            Studio Method installs the operating model that transforms a reactive team into a functioning studio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-all"
              style={{ background: '#C7F24D', color: '#0A0A0A', borderRadius: 999, padding: '14px 28px', fontSize: 16, ...SGF }}
            >
              Book a discovery call <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-all"
              style={{ background: 'transparent', color: '#FFFFFF', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: 999, padding: '14px 28px', fontSize: 16, ...SGF }}
            >
              View services
            </Link>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section style={{ background: '#111111', ...SGF }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-14" style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700, color: '#FFFFFF', ...SGF }}>
            Does this sound familiar?
          </h2>
          <div className="flex flex-col gap-5">
            {symptoms.map((s) => (
              <div
                key={s}
                className="flex items-center gap-5 p-6"
                style={{ background: '#1A1A1A', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ width: 40, height: 40, borderRadius: 999, background: 'rgba(255,255,255,0.06)' }}
                >
                  <XIcon size={18} style={{ color: 'rgba(255,255,255,0.4)' }} />
                </div>
                <p style={{ fontSize: 20, fontWeight: 700, color: '#FFFFFF', ...SGF }}>{s}</p>
              </div>
            ))}
          </div>
          <div
            className="mt-8 p-6 rounded-2xl text-center"
            style={{ background: 'rgba(199,242,77,0.08)', border: '1px solid rgba(199,242,77,0.2)' }}
          >
            <p style={{ fontSize: 17, fontWeight: 700, color: '#C7F24D', ...SGF }}>These are system problems, not people problems.</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 6, ...SGF }}>The fix is the operating model.</p>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section style={{ background: '#0A0A0A', ...SGF }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-16" style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700, color: '#FFFFFF', ...SGF }}>
            Five steps from first call to running system
          </h2>
          <div className="relative">
            <div style={{ position: 'absolute', left: 28, top: 0, bottom: 0, width: 1, background: 'rgba(255,255,255,0.08)' }} />
            <div className="space-y-0">
              {process.map((p, idx) => (
                <div key={p.step} className="flex gap-8 pb-10 relative">
                  <div
                    className="flex items-center justify-center flex-shrink-0 relative z-10"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 999,
                      background: idx === 0 ? '#C7F24D' : '#1A1A1A',
                      border: '1px solid',
                      borderColor: idx === 0 ? '#C7F24D' : 'rgba(255,255,255,0.08)',
                      color: idx === 0 ? '#0A0A0A' : 'rgba(255,255,255,0.5)',
                      fontSize: 15,
                      fontWeight: 800,
                      ...SGF,
                    }}
                  >
                    {p.step}
                  </div>
                  <div style={{ paddingTop: 12, flex: 1 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: '#FFFFFF', marginBottom: 6, ...SGF }}>{p.title}</h3>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, ...SGF }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: '#111111', ...SGF }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center mb-12" style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#FFFFFF', ...SGF }}>
            From the teams we've worked with
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="flex flex-col gap-4 p-7"
                style={{ background: '#1A1A1A', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span style={{ fontSize: 48, color: '#C7F24D', lineHeight: 1, fontFamily: 'Georgia, serif', fontWeight: 700 }}>"</span>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginTop: -20, ...SGF }}>{t.quote}</p>
                <div className="mt-auto pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <p style={{ fontWeight: 700, color: '#FFFFFF', ...SGF }}>{t.name}</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', ...SGF }}>{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1A1A1A', ...SGF }} className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#FFFFFF', marginBottom: 12, lineHeight: 1.2, ...SGF }}>
            Let's look at your team together
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', marginBottom: 36, lineHeight: 1.7, ...SGF }}>
            Book a 45-minute discovery call. No sales pitch — just an honest assessment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-semibold transition-all"
            style={{ background: '#C7F24D', color: '#0A0A0A', borderRadius: 999, padding: '16px 36px', fontSize: 16, ...SGF }}
          >
            Book a discovery call <ArrowRight size={16} />
          </Link>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)', marginTop: 16, ...SGF }}>Responses within one business day</p>
        </div>
      </section>
    </PublicLayout>
  )
}
