import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'

const SGF = { fontFamily: "'Schibsted Grotesk', system-ui, sans-serif" }

const pricingCards = [
  {
    name: 'Studio Setup',
    price: 'From $28k',
    description: 'The full Studio Method operating model installed in your team.',
    cta: 'Book a call',
    to: '/contact',
    accent: '#C7F24D',
    bg: '#1A1A1A',
  },
  {
    name: 'AI Layer',
    price: 'From $18k',
    description: 'Your design tools connected into a single AI-accessible knowledge base.',
    cta: 'Book a call',
    to: '/contact',
    accent: '#C7F24D',
    bg: '#1A1A1A',
    featured: true,
  },
  {
    name: 'Individual',
    price: '$49 /mo',
    description: 'Self-paced access to the complete Studio Method training platform.',
    cta: 'Start learning',
    to: '/signup',
    accent: '#C7F24D',
    bg: '#1A1A1A',
  },
]

const faqs = [
  {
    q: 'What is included in the discovery call?',
    a: 'A 45-minute conversation where we look at your team\'s current state — how work comes in, how it gets done, what the biggest friction points are. Honest feedback on whether Studio Method is the right fit.',
  },
  {
    q: 'How long do engagements typically take?',
    a: 'Studio Setup runs 8–12 weeks. AI Layer is 4–6 weeks. The timeline depends on your team\'s size and context — we do not rush the work.',
  },
  {
    q: 'Do I need a design system already?',
    a: 'For Studio Setup: no. For AI Layer: ideally yes, because the AI layer amplifies existing knowledge. If the design system is absent we recommend Studio Setup first.',
  },
  {
    q: 'What happens after the engagement ends?',
    a: 'The sustainability plan is part of every engagement. We design the operating model to run without us — ceremonies, filter gate, documentation. Clients have ongoing access to resources.',
  },
  {
    q: 'Is the individual tier right for someone who is not a manager?',
    a: 'Yes. Many subscribers are senior designers or freelancers who want to bring structure to how they work, or are preparing for their first management role.',
  },
]

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span style={{ fontSize: 16, fontWeight: 600, color: '#FFFFFF', ...SGF }}>{item.q}</span>
        <ChevronDown
          size={18}
          style={{ color: 'rgba(255,255,255,0.5)', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
        />
      </button>
      {open && (
        <div style={{ paddingBottom: 20, fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, ...SGF }}>
          {item.a}
        </div>
      )}
    </div>
  )
}

export default function PricingPage() {
  return (
    <PublicLayout>
      {/* HERO */}
      <section style={{ background: '#0A0A0A', ...SGF }} className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: '#1A1A1A', color: '#C7F24D', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            Pricing
          </div>
          <h1 className="mb-4" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1, ...SGF }}>
            Simple, transparent pricing
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, ...SGF }}>
            All pricing in AUD. No retainers, no lock-in.
          </p>
        </div>
      </section>

      {/* THREE CARDS */}
      <section style={{ background: '#0A0A0A', ...SGF }} className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {pricingCards.map((card) => (
            <div
              key={card.name}
              style={{
                background: card.featured ? '#111111' : '#111111',
                borderRadius: 20,
                padding: '36px 28px',
                border: card.featured ? '1px solid rgba(199,242,77,0.3)' : '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}
            >
              {card.featured && (
                <span
                  style={{ background: '#C7F24D', color: '#0A0A0A', borderRadius: 999, padding: '4px 14px', fontSize: 11, fontWeight: 700, display: 'inline-block', marginBottom: 16, alignSelf: 'flex-start', ...SGF }}
                >
                  Most popular
                </span>
              )}
              <div
                style={{ width: 44, height: 44, borderRadius: 12, background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.08)', marginBottom: 20 }}
              />
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#FFFFFF', marginBottom: 8, ...SGF }}>
                {card.name}
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 24, lineHeight: 1.6, ...SGF }}>
                {card.description}
              </p>
              <p style={{ fontSize: 36, fontWeight: 800, color: '#C7F24D', marginBottom: 28, lineHeight: 1, ...SGF }}>
                {card.price}
              </p>
              <Link
                to={card.to}
                className="block text-center font-semibold transition-all mt-auto"
                style={{ background: '#C7F24D', color: '#0A0A0A', borderRadius: 100, padding: '13px', fontSize: 15, ...SGF }}
              >
                {card.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center mt-8" style={{ fontSize: 14, color: 'rgba(255,255,255,0.3)', ...SGF }}>
          Not sure which service is right? <Link to="/contact" style={{ color: '#C7F24D', fontWeight: 600 }}>Book a call</Link> — we will tell you honestly.
        </p>
      </section>

      {/* FAQ */}
      <section style={{ background: '#111111', ...SGF }} className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center mb-12" style={{ fontSize: 32, fontWeight: 700, color: '#FFFFFF', ...SGF }}>
            Frequently asked questions
          </h2>
          <div>
            {faqs.map((item, i) => (
              <FAQItem key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1A1A1A', ...SGF }} className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 style={{ fontSize: 32, fontWeight: 700, color: '#FFFFFF', marginBottom: 12, ...SGF }}>Not sure where to start?</h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', marginBottom: 32, lineHeight: 1.7, ...SGF }}>
            Book a call. We will tell you honestly which service is the right fit.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-semibold transition-all"
            style={{ background: '#C7F24D', color: '#0A0A0A', borderRadius: 999, padding: '14px 28px', fontSize: 16, ...SGF }}
          >
            Book a discovery call <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </PublicLayout>
  )
}
