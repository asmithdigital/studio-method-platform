import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'
import { FAKE_TRAINING_MODULES } from '@/lib/constants'

const SGF = { fontFamily: "'Schibsted Grotesk', system-ui, sans-serif" }

const plans = [
  {
    name: 'Individual',
    price: '$49',
    period: '/month',
    description: 'The full Studio Method methodology at your own pace.',
    features: [
      'All 12 training modules',
      'Downloadable templates',
      'Community access',
      'Certificate of completion',
    ],
    cta: 'Start learning',
    featured: false,
  },
  {
    name: 'Individual Pro',
    price: '$99',
    period: '/month',
    description: 'Everything in Individual plus one-to-one coaching.',
    features: [
      'Everything in Individual',
      '2 × 30-min coaching calls / month',
      'Custom implementation plan',
      'Priority community responses',
    ],
    cta: 'Start with Pro',
    featured: true,
  },
]

const moduleColors = [
  'rgba(199,242,77,0.06)', 'rgba(255,255,255,0.04)', 'rgba(199,242,77,0.04)',
  'rgba(199,242,77,0.06)', 'rgba(255,255,255,0.04)', 'rgba(199,242,77,0.04)',
]

export default function IndividualsPage() {
  const modules = FAKE_TRAINING_MODULES.slice(0, 6)

  return (
    <PublicLayout>
      {/* HERO */}
      <section style={{ background: '#0A0A0A', ...SGF }} className="py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: '#1A1A1A', color: '#C7F24D', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            For Individual Designers &amp; Managers
          </div>
          <h1 className="mb-6" style={{ fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1, ...SGF }}>
            Learn the method.<br />
            <span style={{ color: '#C7F24D' }}>Apply it this week.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 480, margin: '0 auto 32px', ...SGF }}>
            Twelve modules. The complete Studio Method. Self-paced, immediately applicable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-all"
              style={{ background: '#C7F24D', color: '#0A0A0A', borderRadius: 999, padding: '14px 28px', fontSize: 17, ...SGF }}
            >
              Start learning <ArrowRight size={16} />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-all"
              style={{ background: 'transparent', color: '#FFFFFF', border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: 999, padding: '14px 28px', fontSize: 17, ...SGF }}
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* MODULE HORIZONTAL SCROLL */}
      <section style={{ background: '#111111', ...SGF }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-3 text-center" style={{ fontSize: 'clamp(26px, 3vw, 44px)', fontWeight: 700, color: '#FFFFFF', ...SGF }}>
            12 modules. The complete methodology.
          </h2>
          <p className="text-center mb-10" style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', ...SGF }}>
            Scroll to preview the first six modules →
          </p>
          <div
            className="flex gap-5 overflow-x-auto pb-4"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent' }}
          >
            {modules.map((m, idx) => (
              <div
                key={m.id}
                className="flex-shrink-0 flex flex-col gap-3 p-6"
                style={{
                  width: 270,
                  height: 210,
                  borderRadius: 16,
                  background: moduleColors[idx],
                  border: '1px solid rgba(255,255,255,0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: 8,
                    left: 12,
                    fontSize: 48,
                    fontWeight: 800,
                    color: '#C7F24D',
                    lineHeight: 1,
                    opacity: 0.08,
                    pointerEvents: 'none',
                    ...SGF,
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 40, height: '100%' }}>
                  <span
                    style={{ background: 'rgba(199,242,77,0.1)', color: '#C7F24D', borderRadius: 999, padding: '3px 12px', fontSize: 11, fontWeight: 700, alignSelf: 'flex-start', fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {m.category}
                  </span>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.4, ...SGF }}>{m.title}</h3>
                  <span
                    style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)', borderRadius: 999, padding: '3px 10px', fontSize: 13, fontWeight: 600, alignSelf: 'flex-start', marginTop: 'auto', ...SGF }}
                  >
                    {m.estimated_minutes} min
                  </span>
                </div>
              </div>
            ))}
            <div
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: 210, borderRadius: 16, background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.08)', padding: '24px 20px' }}
            >
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', fontWeight: 600, textAlign: 'center', lineHeight: 1.5, ...SGF }}>
                + 6 more modules on AI layer, design system governance, performance &amp; more
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ background: '#0A0A0A', ...SGF }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-14" style={{ fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 700, color: '#FFFFFF', ...SGF }}>
            Simple, transparent plans
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  background: '#111111',
                  borderRadius: 20,
                  padding: '36px 32px',
                  border: plan.featured ? '1px solid rgba(199,242,77,0.3)' : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {plan.featured && (
                  <span
                    style={{ background: '#C7F24D', color: '#0A0A0A', borderRadius: 999, padding: '4px 14px', fontSize: 11, fontWeight: 700, display: 'inline-block', marginBottom: 16, ...SGF }}
                  >
                    Most popular
                  </span>
                )}
                <h3 style={{ fontSize: 22, fontWeight: 700, color: '#FFFFFF', marginBottom: 4, ...SGF }}>
                  {plan.name}
                </h3>
                <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', marginBottom: 20, ...SGF }}>
                  {plan.description}
                </p>
                <div className="flex items-end gap-1 mb-6">
                  <span style={{ fontSize: 52, fontWeight: 800, color: '#C7F24D', lineHeight: 1, ...SGF }}>{plan.price}</span>
                  <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', marginBottom: 6, ...SGF }}>{plan.period}</span>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle2 size={16} style={{ color: '#C7F24D', flexShrink: 0 }} />
                      <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', ...SGF }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/signup"
                  className="block text-center font-semibold transition-all"
                  style={{ background: '#C7F24D', color: '#0A0A0A', borderRadius: 100, padding: '14px', fontSize: 16, ...SGF }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center mt-6" style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', ...SGF }}>
            Cancel any time. Lifetime access to completed modules.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#111111', ...SGF }} className="py-20 px-6 text-center">
        <div className="max-w-lg mx-auto">
          <h2 style={{ fontSize: 34, fontWeight: 700, color: '#FFFFFF', marginBottom: 12, ...SGF }}>Start with Module 1 — free</h2>
          <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.7)', marginBottom: 32, lineHeight: 1.7, ...SGF }}>
            The first module is free for all registered users. Create an account today.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 font-semibold transition-all"
            style={{ background: '#C7F24D', color: '#0A0A0A', borderRadius: 999, padding: '14px 28px', fontSize: 17, ...SGF }}
          >
            Create free account <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PublicLayout>
  )
}
