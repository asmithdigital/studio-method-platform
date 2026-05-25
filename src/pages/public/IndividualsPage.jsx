import { Link } from 'react-router-dom'
import { ArrowRight, User, BookOpen, CheckCircle2 } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'
import { FAKE_TRAINING_MODULES } from '@/lib/constants'

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
      'Monthly live Q&A with Andrew',
      'Certificate of completion',
      'Lifetime module access',
    ],
    cta: 'Start learning',
    featured: false,
  },
  {
    name: 'Individual Pro',
    price: '$99',
    period: '/month',
    description: 'Everything in Individual plus one-to-one coaching sessions.',
    features: [
      'Everything in Individual',
      '2 × 30-min coaching calls per month',
      'Direct email access to Andrew',
      'Custom implementation plan',
      'Priority community responses',
      'Early access to new modules',
    ],
    cta: 'Start with Pro',
    featured: true,
  },
]

const whoFor = [
  { icon: '🎓', title: 'New design managers', body: 'You have just stepped into a management role and inherited a team with no structure. The methodology gives you the tools to change that from day one.' },
  { icon: '🔧', title: 'Experienced managers hitting a ceiling', body: 'You have managed well for years but your team is at a scale where informal approaches are breaking down. Studio Method builds the system layer you need.' },
  { icon: '🌍', title: 'Freelancers and independent consultants', body: 'You are advising clients on design operations. Studio Method is the methodology you can adapt and apply across every engagement.' },
  { icon: '📚', title: 'Senior designers who want to move into leadership', body: 'You are preparing for your first management role. The methodology gives you the vocabulary, frameworks, and perspective you will need.' },
]

export default function IndividualsPage() {
  const publishedModules = FAKE_TRAINING_MODULES.slice(0, 6)

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-28 px-6 bg-canvas relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(196,150,74,0.05) 0%, transparent 60%)' }} />
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-6">
              <User size={15} className="text-gold" />
              <span className="text-amber-800 text-sm font-medium">For individual designers and managers</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
              Learn the Studio Method.<br />Apply it to your team.
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Twelve modules covering the complete Studio Method — filter gate, three pathways, journey management, AI orchestration layer, design system governance, and more. Self-paced. Immediately applicable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup" className="btn-gold text-base px-8 py-4 rounded-xl">
                Start learning <ArrowRight size={16} />
              </Link>
              <Link to="/pricing" className="btn-ghost text-base px-8 py-4 rounded-xl">
                See pricing
              </Link>
            </div>
            <p className="text-xs text-muted mt-4">Cancel any time. Lifetime access to completed modules.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {['12 modules', '6+ hours of content', 'Downloadable templates', 'Monthly live Q&A', 'Community access', 'Certificate'].map((f) => (
              <div key={f} className="rounded-xl border border-border bg-white p-4 text-sm font-medium text-ink flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                </div>
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Who it is for</p>
            <h2 className="font-display text-3xl font-bold text-ink">Built for practitioners, not students</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {whoFor.map((w) => (
              <div key={w.title} className="flex gap-5 p-6 rounded-2xl bg-white border border-border">
                <span className="text-3xl flex-shrink-0">{w.icon}</span>
                <div>
                  <h3 className="font-semibold text-ink mb-2">{w.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules preview */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">What you will learn</p>
              <h2 className="font-display text-3xl font-bold text-ink">12 modules. The complete methodology.</h2>
            </div>
          </div>
          <div className="space-y-2">
            {publishedModules.map((m, idx) => (
              <div key={m.id} className="flex items-center gap-5 p-5 bg-white rounded-xl border border-border">
                <span className="font-display text-2xl font-bold text-border w-8 flex-shrink-0 text-center">{String(idx + 1).padStart(2, '0')}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-ink text-sm">{m.title}</p>
                  <p className="text-xs text-muted truncate">{m.description}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs text-muted">{m.estimated_minutes} min</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${m.audience === 'both' ? 'bg-jade/10 text-jade' : m.audience === 'consultant' ? 'bg-navy/10 text-navy' : 'bg-amber-100 text-amber-800'}`}>
                    {m.audience === 'both' ? 'All' : m.audience}
                  </span>
                </div>
              </div>
            ))}
            <div className="p-4 text-center rounded-xl border border-dashed border-border text-sm text-muted">
              + 6 more modules on AI layer, design system governance, performance management, and client relationships
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="font-display text-3xl font-bold text-ink">Simple, transparent plans</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-8 border ${plan.featured ? 'border-gold bg-navy text-white shadow-xl' : 'border-border bg-white'}`}>
                {plan.featured && <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">Most popular</p>}
                <h3 className={`font-display text-xl font-bold mb-1 ${plan.featured ? 'text-white' : 'text-ink'}`}>{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.featured ? 'text-white/60' : 'text-muted'}`}>{plan.description}</p>
                <div className="flex items-end gap-1 mb-6">
                  <span className={`font-display text-4xl font-bold ${plan.featured ? 'text-gold' : 'text-ink'}`}>{plan.price}</span>
                  <span className={`text-sm mb-1 ${plan.featured ? 'text-white/50' : 'text-muted'}`}>{plan.period}</span>
                </div>
                <div className="space-y-2 mb-8">
                  {plan.features.map((f) => (
                    <div key={f} className={`flex items-center gap-2 text-sm ${plan.featured ? 'text-white/80' : 'text-muted'}`}>
                      <CheckCircle2 size={14} className={plan.featured ? 'text-gold' : 'text-jade'} />
                      {f}
                    </div>
                  ))}
                </div>
                <Link
                  to="/signup"
                  className={`block text-center py-3 px-6 rounded-xl font-medium transition-all ${plan.featured ? 'bg-gold text-white hover:bg-gold-light' : 'bg-surface border border-border text-ink hover:bg-canvas'}`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-surface border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <BookOpen size={32} className="text-gold mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold text-ink mb-4">Start with Module 1 — free</h2>
          <p className="text-muted mb-8">The first module, Welcome to Studio Method, is free for all registered users. Create an account and start learning today.</p>
          <Link to="/signup" className="btn-gold text-base px-10 py-4 rounded-xl inline-flex items-center gap-2">
            Create free account <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PublicLayout>
  )
}
