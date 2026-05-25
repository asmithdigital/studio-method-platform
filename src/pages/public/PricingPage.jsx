import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'
import PricingCard from '@/components/ui/PricingCard'
import Accordion from '@/components/ui/Accordion'
import { SERVICES } from '@/lib/constants'

const faqs = [
  { question: 'What is included in the discovery call?', answer: 'A 45-minute conversation where we look at your team\'s current state — how work comes in, how it gets done, what the biggest friction points are. We give you honest feedback on whether Studio Method is the right fit. No pitch, no pressure.' },
  { question: 'How long do engagements typically take?', answer: 'Studio Setup typically runs 8–12 weeks. AI Layer is 4–6 weeks. Training is typically 4 workshops over 4–6 weeks. The timeline depends on your team\'s size and context — we do not rush the work to hit an arbitrary deadline.' },
  { question: 'Do I need to have a design system already?', answer: 'For Studio Setup: no. We work with what exists and build from there. For AI Layer: ideally yes, because the AI layer amplifies existing knowledge — if the design system is absent or chaotic, we recommend Studio Setup first.' },
  { question: 'Can Studio Method work in large organisations?', answer: 'Yes. We have delivered engagements in organisations up to 5,000 people. The approach adapts to context — larger organisations often need more stakeholder management and a more staged rollout, which we account for in the engagement design.' },
  { question: 'How does the consultant model work?', answer: 'Andrew leads every engagement. For larger engagements, specialist Studio Method consultants are brought in to support delivery. All consultants are vetted, trained in the methodology, and managed directly by Andrew throughout.' },
  { question: 'What happens after the engagement ends?', answer: 'The sustainability plan is part of every engagement. We design the operating model to run without us — the ceremonies, the filter gate, the documentation. Clients on the training platform have ongoing access to resources and the monthly Q&A.' },
  { question: 'Is the individual tier right for someone who is not a manager?', answer: 'Yes. Many individual subscribers are senior designers or freelancers who want to bring structure to how they work, or to be prepared for their first management role. The methodology applies at any level of the design career.' },
  { question: 'Can I get a refund on the individual subscription?', answer: 'If you complete less than two modules and are not satisfied, we offer a full refund within 14 days. After that, refunds are at our discretion. We stand behind the quality of the content.' },
]

export default function PricingPage() {
  return (
    <PublicLayout>
      <section className="py-24 px-6 text-center bg-surface">
        <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Pricing</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6">Simple, transparent pricing</h1>
        <p className="text-muted text-lg max-w-xl mx-auto">All pricing in AUD. No retainers, no lock-in. Engagements are scoped and priced based on your team's specific context.</p>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => <PricingCard key={s.id} service={s} featured={i === 0} />)}
        </div>
      </section>

      <section className="py-20 px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-ink mb-10 text-center">Frequently asked questions</h2>
          <Accordion items={faqs} />
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">Not sure where to start?</h2>
          <p className="text-muted mb-8">Book a call. We will tell you honestly which service is the right fit for your team right now.</p>
          <Link to="/contact" className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-xl">
            Book a discovery call <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </PublicLayout>
  )
}
