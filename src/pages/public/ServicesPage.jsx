import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'
import PricingCard from '@/components/ui/PricingCard'
import { SERVICES } from '@/lib/constants'

export default function ServicesPage() {
  return (
    <PublicLayout>
      <section className="py-24 px-6 bg-navy text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Services</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Four ways to work with Studio Method</h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Each service is built around a different starting point and a different need. The right one depends on where your team is right now.
          </p>
        </div>
      </section>

      {SERVICES.filter(s => s.id !== 'individual').map((service, i) => (
        <section key={service.id} id={service.id} className={`py-24 px-6 ${i % 2 === 0 ? 'bg-canvas' : 'bg-surface'}`}>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className={i % 2 !== 0 ? 'md:order-2' : ''}>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">{service.tagline}</p>
              <h2 className="font-display text-3xl font-bold text-ink mb-4">{service.name}</h2>
              <p className="text-muted leading-relaxed mb-6">{service.description}</p>
              <div className="flex items-center gap-4 mb-8 text-sm">
                <div className="flex items-center gap-1.5 text-muted"><span className="font-semibold text-ink">From AUD ${service.price_from.toLocaleString()}</span></div>
                <div className="text-muted">·</div>
                <div className="text-muted">{service.duration}</div>
              </div>
              <ul className="space-y-2.5 mb-8">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                    <Check size={14} className="text-jade flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted bg-surface rounded-xl px-4 py-3 mb-6 italic">{service.best_for}</p>
              <Link to="/contact" className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-xl">
                Book a discovery call <ArrowRight size={15} />
              </Link>
            </div>
            <div className={`rounded-2xl bg-navy p-10 text-white text-center ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
              <p className="text-6xl mb-6">{['⚙️', '🤖', '📚'][i]}</p>
              <p className="font-display text-2xl font-bold mb-3">{service.name}</p>
              <p className="text-white/50 text-sm leading-relaxed">{service.tagline}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 px-6 bg-navy">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Individual</p>
          <h2 className="font-display text-3xl font-bold text-white mb-6">Learn the methodology yourself</h2>
          <p className="text-white/60 mb-10 leading-relaxed">
            Self-paced access to the complete Studio Method training platform. 12 modules, templates, and a community of design leaders applying the methodology.
          </p>
          <div className="max-w-sm mx-auto">
            <PricingCard service={SERVICES[3]} featured />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-canvas text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">Not sure which is right?</h2>
          <p className="text-muted mb-8">Book a 30-minute call. We will look at your situation and tell you honestly which service makes sense — or whether none of them do.</p>
          <Link to="/contact" className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-xl">
            Book a call <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </PublicLayout>
  )
}
