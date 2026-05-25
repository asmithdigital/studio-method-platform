import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'
import { FAKE_TRAINING_MODULES } from '@/lib/constants'

const JKS = { fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }

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
    accent: '#6366F1',
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
    accent: '#F59E0B',
  },
]

const moduleColors = ['#F0F0FF', '#FFF7ED', '#F0FDF4', '#F0F0FF', '#FFF7ED', '#F0FDF4']
const moduleAccents = ['#6366F1', '#F59E0B', '#10B981', '#6366F1', '#F59E0B', '#10B981']

export default function IndividualsPage() {
  const modules = FAKE_TRAINING_MODULES.slice(0, 6)

  return (
    <PublicLayout>
      {/* HERO */}
      <section style={{ background: '#FAFAF7', ...JKS }} className="py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: '#FFF7ED', color: '#F59E0B' }}
          >
            For Individual Designers &amp; Managers
          </div>
          <h1 className="mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, color: '#111111', lineHeight: 1.1, ...JKS }}>
            Learn the method.<br />
            <span style={{ color: '#F59E0B' }}>Apply it this week.</span>
          </h1>
          <p style={{ fontSize: 18, color: '#6B7280', lineHeight: 1.7, maxWidth: 480, margin: '0 auto 32px', ...JKS }}>
            Twelve modules. The complete Studio Method. Self-paced, immediately applicable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-all"
              style={{ background: '#6366F1', color: '#fff', borderRadius: 999, padding: '14px 28px', fontSize: 16, ...JKS }}
            >
              Start learning <ArrowRight size={16} />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-all"
              style={{ background: 'transparent', color: '#6366F1', border: '2px solid #6366F1', borderRadius: 999, padding: '14px 28px', fontSize: 16, ...JKS }}
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* MODULE HORIZONTAL SCROLL */}
      <section style={{ background: '#fff', ...JKS }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-3 text-center" style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 700, color: '#111111', ...JKS }}>
            12 modules. The complete methodology.
          </h2>
          <p className="text-center mb-10" style={{ fontSize: 16, color: '#6B7280', ...JKS }}>
            Scroll to preview the first six modules →
          </p>
          <div
            className="flex gap-5 overflow-x-auto pb-4"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#e5e7eb transparent' }}
          >
            {modules.map((m, idx) => (
              <div
                key={m.id}
                className="flex-shrink-0 flex flex-col gap-3 p-6"
                style={{
                  width: 240,
                  borderRadius: 16,
                  background: moduleColors[idx],
                  boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
                }}
              >
                <span style={{ fontSize: 36, fontWeight: 800, color: moduleAccents[idx], lineHeight: 1, opacity: 0.25, ...JKS }}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span
                  style={{ background: '#fff', color: moduleAccents[idx], borderRadius: 999, padding: '3px 12px', fontSize: 11, fontWeight: 700, alignSelf: 'flex-start', ...JKS }}
                >
                  {m.category}
                </span>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#111111', lineHeight: 1.4, ...JKS }}>{m.title}</h3>
                <span
                  style={{ background: 'rgba(0,0,0,0.06)', color: '#6B7280', borderRadius: 999, padding: '3px 10px', fontSize: 12, fontWeight: 600, alignSelf: 'flex-start', marginTop: 'auto', ...JKS }}
                >
                  {m.estimated_minutes} min
                </span>
              </div>
            ))}
            <div
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: 200, borderRadius: 16, background: '#F0F0FF', padding: '24px 20px' }}
            >
              <p style={{ fontSize: 14, color: '#6366F1', fontWeight: 600, textAlign: 'center', lineHeight: 1.5, ...JKS }}>
                + 6 more modules on AI layer, design system governance, performance &amp; more
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ background: '#FAFAF7', ...JKS }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-14" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#111111', ...JKS }}>
            Simple, transparent plans
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  background: plan.featured ? '#111111' : '#fff',
                  borderRadius: 20,
                  padding: '36px 32px',
                  boxShadow: plan.featured ? '0 8px 40px rgba(0,0,0,0.15)' : '0 2px 20px rgba(0,0,0,0.06)',
                }}
              >
                {plan.featured && (
                  <span
                    style={{ background: '#F59E0B', color: '#fff', borderRadius: 999, padding: '4px 14px', fontSize: 11, fontWeight: 700, display: 'inline-block', marginBottom: 16, ...JKS }}
                  >
                    Most popular
                  </span>
                )}
                <h3 style={{ fontSize: 20, fontWeight: 700, color: plan.featured ? '#fff' : '#111111', marginBottom: 4, ...JKS }}>
                  {plan.name}
                </h3>
                <p style={{ fontSize: 14, color: plan.featured ? 'rgba(255,255,255,0.6)' : '#6B7280', marginBottom: 20, ...JKS }}>
                  {plan.description}
                </p>
                <div className="flex items-end gap-1 mb-6">
                  <span style={{ fontSize: 52, fontWeight: 800, color: plan.accent, lineHeight: 1, ...JKS }}>{plan.price}</span>
                  <span style={{ fontSize: 15, color: plan.featured ? 'rgba(255,255,255,0.5)' : '#9ca3af', marginBottom: 6, ...JKS }}>{plan.period}</span>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle2 size={16} style={{ color: plan.accent, flexShrink: 0 }} />
                      <span style={{ fontSize: 14, color: plan.featured ? 'rgba(255,255,255,0.8)' : '#6B7280', ...JKS }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/signup"
                  className="block text-center font-semibold transition-all"
                  style={{ background: plan.accent, color: '#fff', borderRadius: 12, padding: '14px', fontSize: 15, ...JKS }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center mt-6" style={{ fontSize: 14, color: '#9ca3af', ...JKS }}>
            Cancel any time. Lifetime access to completed modules.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F0F0FF', ...JKS }} className="py-20 px-6 text-center">
        <div className="max-w-lg mx-auto">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: '#111111', marginBottom: 12, ...JKS }}>Start with Module 1 — free</h2>
          <p style={{ fontSize: 17, color: '#6B7280', marginBottom: 32, lineHeight: 1.7, ...JKS }}>
            The first module is free for all registered users. Create an account today.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 font-semibold transition-all"
            style={{ background: '#6366F1', color: '#fff', borderRadius: 999, padding: '14px 28px', fontSize: 16, ...JKS }}
          >
            Create free account <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PublicLayout>
  )
}
