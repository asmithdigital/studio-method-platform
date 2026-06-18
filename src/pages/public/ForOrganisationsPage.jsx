import { Link } from 'react-router-dom'
import { ArrowRight, X as XIcon } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'
import { TESTIMONIALS } from '@/lib/constants'

const JKS = { fontFamily: '"Schibsted Grotesk", system-ui, sans-serif' }

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
      <section style={{ background: '#F2EFE6', ...JKS }} className="py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: '#F0F0FF', color: '#16150F' }}
          >
            For Organisations
          </div>
          <h1 className="mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, color: '#16150F', lineHeight: 1.1, ...JKS }}>
            Your design team,<br />
            <span style={{ color: '#16150F' }}>operating like a studio.</span>
          </h1>
          <p style={{ fontSize: 18, color: '#6E6A5C', lineHeight: 1.7, maxWidth: 500, margin: '0 auto 36px', ...JKS }}>
            Studio Method installs the operating model that transforms a reactive team into a functioning studio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-all"
              style={{ background: '#16150F', color: '#fff', borderRadius: 999, padding: '14px 28px', fontSize: 16, ...JKS }}
            >
              Book a discovery call <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-all"
              style={{ background: 'transparent', color: '#16150F', border: '2px solid #6366F1', borderRadius: 999, padding: '14px 28px', fontSize: 16, ...JKS }}
            >
              View services
            </Link>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section style={{ background: '#fff', ...JKS }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-14" style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700, color: '#16150F', ...JKS }}>
            Does this sound familiar?
          </h2>
          <div className="flex flex-col gap-5">
            {symptoms.map((s) => (
              <div
                key={s}
                className="flex items-center gap-5 p-6"
                style={{ background: '#FFF7ED', borderRadius: 16 }}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ width: 40, height: 40, borderRadius: 999, background: '#FECACA' }}
                >
                  <XIcon size={18} style={{ color: '#ef4444' }} />
                </div>
                <p style={{ fontSize: 20, fontWeight: 700, color: '#16150F', ...JKS }}>{s}</p>
              </div>
            ))}
          </div>
          <div
            className="mt-8 p-6 rounded-2xl text-center"
            style={{ background: '#16150F' }}
          >
            <p style={{ fontSize: 17, fontWeight: 700, color: '#fff', ...JKS }}>These are system problems, not people problems.</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 6, ...JKS }}>The fix is the operating model.</p>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section style={{ background: '#F2EFE6', ...JKS }} className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-16" style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700, color: '#16150F', ...JKS }}>
            Five steps from first call to running system
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: 28, top: 0, bottom: 0, width: 2, background: '#e5e7eb' }} />
            <div className="space-y-0">
              {process.map((p, idx) => (
                <div key={p.step} className="flex gap-8 pb-10 relative">
                  {/* Number circle */}
                  <div
                    className="flex items-center justify-center flex-shrink-0 relative z-10"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 999,
                      background: idx === 0 ? '#16150F' : '#fff',
                      border: '2px solid',
                      borderColor: idx === 0 ? '#16150F' : '#e5e7eb',
                      color: idx === 0 ? '#fff' : '#16150F',
                      fontSize: 15,
                      fontWeight: 800,
                      ...JKS,
                    }}
                  >
                    {p.step}
                  </div>
                  <div style={{ paddingTop: 12, flex: 1 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: '#16150F', marginBottom: 6, ...JKS }}>{p.title}</h3>
                    <p style={{ fontSize: 16, color: '#6E6A5C', lineHeight: 1.7, ...JKS }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: '#F0F0FF', ...JKS }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center mb-12" style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#16150F', ...JKS }}>
            From the teams we've worked with
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="flex flex-col gap-4 p-7"
                style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}
              >
                <span style={{ fontSize: 48, color: '#16150F', lineHeight: 1, fontFamily: 'Georgia, serif', fontWeight: 700 }}>"</span>
                <p style={{ fontSize: 15, color: '#16150F', lineHeight: 1.7, marginTop: -20, ...JKS }}>{t.quote}</p>
                <div className="mt-auto pt-4" style={{ borderTop: '1px solid #e5e7eb' }}>
                  <p style={{ fontWeight: 700, color: '#16150F', ...JKS }}>{t.name}</p>
                  <p style={{ fontSize: 13, color: '#6E6A5C', ...JKS }}>{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#16150F', ...JKS }} className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12, lineHeight: 1.2, ...JKS }}>
            Let's look at your team together
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', marginBottom: 36, lineHeight: 1.7, ...JKS }}>
            Book a 45-minute discovery call. No sales pitch — just an honest assessment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-semibold transition-all"
            style={{ background: '#fff', color: '#16150F', borderRadius: 999, padding: '16px 36px', fontSize: 16, ...JKS }}
          >
            Book a discovery call <ArrowRight size={16} />
          </Link>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 16, ...JKS }}>Responses within one business day</p>
        </div>
      </section>
    </PublicLayout>
  )
}
