import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Building2 } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'
import ServiceCard from '@/components/ui/ServiceCard'
import TestimonialCard from '@/components/ui/TestimonialCard'
import { SERVICES, TESTIMONIALS } from '@/lib/constants'

const orgServices = SERVICES.filter(s => ['studio_setup', 'ai_layer', 'training'].includes(s.id))

const symptoms = [
  'Designers are constantly busy but never feel like they are finishing things',
  'Requests come in through every channel — Slack, email, Jira, hallway conversations',
  'Work starts without a clear scope and ends without a clear definition of done',
  'Senior designers are leaving because there is no structure or progression',
  'The backlog is a wishlist that no one believes in',
  'Research gets done, presented, and never referenced again',
  'Nobody knows what anyone else in the team is working on',
  'The design system exists but nobody uses it consistently',
]

const process = [
  { step: '01', title: 'Discovery call', body: 'A 45-minute conversation where we look at your team\'s current situation honestly. We tell you what we see and whether Studio Method is the right fit. No pitch — just assessment.' },
  { step: '02', title: 'Team assessment', body: 'We spend time with your team — interviews, observation, backlog review. We produce a written current state assessment that describes what is happening and why.' },
  { step: '03', title: 'Model design', body: 'We design the Studio Method operating model for your specific context: filter gate, pathways, ceremonies, documentation. Adapted, not generic.' },
  { step: '04', title: 'Implementation', body: 'We install the model. Ceremonies running, filter gate operational, team trained. We are there for the first six weeks of implementation.' },
  { step: '05', title: 'Handover', body: 'We hand over a documented, sustainable system. The team knows how to run it without us. We include a 90-day check-in.' },
]

export default function ForOrganisationsPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-28 px-6 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
            <Building2 size={16} className="text-gold" />
            <span className="text-white/80 text-sm font-medium">For organisations with design teams</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
            Your design team is talented.<br />
            <span style={{ color: '#C4964A' }}>The system is broken.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Studio Method installs the operating model that transforms a reactive, individual-working team into a functioning studio. Filter gate, three pathways, AI orchestration layer, ceremonies — the full system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold text-base px-8 py-4 rounded-xl">
              Book a discovery call <ArrowRight size={16} />
            </Link>
            <Link to="/work" className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium border border-white/20 text-white rounded-xl hover:bg-white/10 transition-colors">
              See the case study
            </Link>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Does this sound familiar?</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">The symptoms of a team without an operating model</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {symptoms.map((s) => (
              <div key={s} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border">
                <div className="w-2 h-2 rounded-full bg-rose mt-2 flex-shrink-0" />
                <p className="text-sm text-muted leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 rounded-2xl bg-navy text-white text-center">
            <p className="font-display text-lg font-semibold mb-2">These are system problems, not people problems.</p>
            <p className="text-white/60 text-sm">Adding more designers to a broken system makes the system bigger, not better. The fix is the operating model.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Our services</p>
            <h2 className="font-display text-3xl font-bold text-ink mb-4">Three ways to work with us</h2>
            <p className="text-muted max-w-xl mx-auto">Each service is available independently or combined. Most organisations start with Studio Setup and add the AI Layer in a second engagement.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {orgServices.map((s) => <ServiceCard key={s.id} service={s} />)}
          </div>
          <div className="text-center mt-8">
            <Link to="/pricing" className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all">
              See full pricing <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">How it works</p>
            <h2 className="font-display text-3xl font-bold text-ink">Five steps from first call to running system</h2>
          </div>
          <div className="space-y-0">
            {process.map((p, idx) => (
              <div key={p.step} className={`flex gap-6 md:gap-10 py-8 ${idx < process.length - 1 ? 'border-b border-border' : ''}`}>
                <div className="flex-shrink-0">
                  <span className="font-display text-4xl font-bold text-border">{p.step}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink mb-2">{p.title}</h3>
                  <p className="text-muted leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Best fit</p>
            <h2 className="font-display text-3xl font-bold text-ink mb-6">Studio Method works best for teams that are already good</h2>
            <p className="text-muted leading-relaxed mb-6">
              We are not a team turnaround service. Studio Method works when you have talented designers who are working in reactive, unstructured ways because the system around them does not support better work. The methodology installs the structure that releases the talent.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              We have delivered engagements for teams of 4 to 20 designers, across fintech, health, software, and media. The methodology adapts to context — the principles do not change.
            </p>
            <div className="space-y-2">
              {['Design teams of 4–20 people', 'Teams with confirmed budget and timeline', 'Organisations that want sustainable change, not a one-time fix', 'Teams with a design lead or manager who is bought in'].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-muted">
                  <CheckCircle2 size={15} className="text-jade flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {TESTIMONIALS.map((t) => <TestimonialCard key={t.id} testimonial={t} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Let's look at your team together</h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Book a 45-minute discovery call. We look at your team's current state together and tell you honestly whether Studio Method is the right fit. No sales pitch.
          </p>
          <Link to="/contact" className="btn-gold text-base px-10 py-4 rounded-xl inline-flex items-center gap-2">
            Book a discovery call <ArrowRight size={16} />
          </Link>
          <p className="text-white/30 text-sm mt-4">Responses within one business day</p>
        </div>
      </section>
    </PublicLayout>
  )
}
