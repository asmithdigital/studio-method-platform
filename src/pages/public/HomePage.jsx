import { Link } from 'react-router-dom'
import { ArrowRight, Building2, User } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'
import ArticleCard from '@/components/ui/ArticleCard'
import TestimonialCard from '@/components/ui/TestimonialCard'
import ServiceCard from '@/components/ui/ServiceCard'
import ChatBot from '@/components/ai/ChatBot'
import { SERVICES, TESTIMONIALS, FAKE_INSIGHTS_ARTICLES } from '@/lib/constants'

const clientLogos = ['Afterpay', 'Medibank', 'MYOB', 'Xero', 'Atlassian', 'Culture Amp']

const stats = [
  { number: '4', label: 'Services' },
  { number: '12+', label: 'Engagements delivered' },
  { number: '97%', label: 'Client satisfaction' },
  { number: '$0', label: 'Code written by hand' },
]

export default function HomePage() {
  return (
    <PublicLayout>
      {/* HERO */}
      <section className="min-h-screen bg-navy relative flex items-center overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-mid" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-6 animate-fade-in">Design Operations Consultancy</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            The operating model<br />
            <span className="text-gradient-gold">your design team needs</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Studio Method installs a proven design operations system — filter gate, three pathways, AI orchestration layer — and trains your team to run it. Built from twelve months inside a real organisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/for-organisations" className="btn-gold text-base px-8 py-4 rounded-xl">
              For design teams <ArrowRight size={16} />
            </Link>
            <Link to="/work" className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium border border-white/20 text-white rounded-xl hover:bg-white/10 transition-colors">
              See the case study
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-navy-mid/50 border-t border-white/5 py-5">
          <div className="max-w-5xl mx-auto px-6 flex items-center justify-center gap-8 md:gap-16 flex-wrap">
            {clientLogos.map((logo) => (
              <span key={logo} className="text-white/25 text-sm font-semibold tracking-wide uppercase">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink text-center mb-4">
            Most design teams are set up to struggle
          </h2>
          <p className="text-muted text-center mb-16 max-w-xl mx-auto">Not because of talent. Because of structure. Here is what that looks like in practice.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '📥', title: 'Everything is urgent', body: 'Requests come from everywhere. The backlog is a wishlist. Priority is whoever shouted last. Designers are always busy and always behind.' },
              { icon: '🌀', title: 'Work is undefined at the start', body: 'Projects start without a clear scope or definition of done. Rework is constant. Delivery dates slip. Nobody knows why.' },
              { icon: '🔇', title: 'Knowledge evaporates', body: 'Research gets presented and forgotten. The design system is out of date. New designers ask questions that were answered six months ago.' },
            ].map((p) => (
              <div key={p.title} className="text-center p-8 rounded-2xl bg-white border border-border hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-display text-lg font-semibold text-ink mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-ink font-semibold mt-10 text-lg">
            These are system problems, not people problems. The fix is an operating model.
          </p>
        </div>
      </section>

      {/* DUAL AUDIENCE */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink text-center mb-12">Who Studio Method is for</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/for-organisations" className="group p-8 rounded-2xl bg-navy text-white hover:bg-navy-mid transition-colors flex flex-col gap-4">
              <Building2 size={28} className="text-gold" />
              <h3 className="font-display text-2xl font-bold">Organisations with design teams</h3>
              <p className="text-white/60 leading-relaxed">You have talented designers working in reactive, unstructured ways. You need the operating model that transforms collective potential into consistent output.</p>
              <div className="flex items-center gap-2 text-gold font-medium mt-2 group-hover:gap-3 transition-all">
                See how we help organisations <ArrowRight size={15} />
              </div>
            </Link>
            <Link to="/for-individuals" className="group p-8 rounded-2xl bg-white border border-border hover:shadow-md transition-all flex flex-col gap-4">
              <User size={28} className="text-gold" />
              <h3 className="font-display text-2xl font-bold text-ink">Individual designers and managers</h3>
              <p className="text-muted leading-relaxed">You want to learn the Studio Method yourself — and apply it to your team, your freelance practice, or your own way of working.</p>
              <div className="flex items-center gap-2 text-gold font-medium mt-2 group-hover:gap-3 transition-all">
                Learn the methodology yourself <ArrowRight size={15} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-5xl font-bold text-gold mb-2">{s.number}</p>
              <p className="text-white/50 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest text-center mb-3">What we do</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink text-center mb-4">Four ways to work with Studio Method</h2>
          <p className="text-muted text-center mb-12 max-w-xl mx-auto">From installing the full operating model to self-paced individual learning — there is a Studio Method engagement for where your team is right now.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => <ServiceCard key={s.id} service={s} />)}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all">
              Compare all services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CASE STUDY PREVIEW */}
      <section className="py-20 px-6 bg-navy text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Case Study</p>
            <h2 className="font-display text-3xl font-bold mb-6 leading-tight">
              Twelve months. One manager. A complete design team operating system — built entirely with prompts.
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              The case study that became Studio Method. How a practising UX Manager built the filter gate, three pathways, journey management practice, and AI orchestration layer inside a real Australian organisation.
            </p>
            <Link to="/work" className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-xl">
              Read the full story <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: '12', l: 'months to full implementation' },
              { n: '3×', l: 'increase in team throughput' },
              { n: '4', l: 'tools connected in AI layer' },
              { n: '0', l: 'lines of code written by hand' },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="font-display text-3xl font-bold text-gold mb-1">{s.n}</p>
                <p className="text-white/50 text-xs leading-snug">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink text-center mb-12">From the teams we have worked with</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => <TestimonialCard key={t.id} testimonial={t} />)}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Insights</p>
              <h2 className="font-display text-2xl font-bold text-ink">From the Studio Method blog</h2>
            </div>
            <Link to="/insights" className="text-sm font-medium text-gold hover:underline flex items-center gap-1">
              All articles <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {FAKE_INSIGHTS_ARTICLES.slice(0, 3).map((a) => <ArticleCard key={a.id} article={a} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Ready to change how your team works?</h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Book a 45-minute discovery call. We will look at your team's current state and tell you honestly whether Studio Method is the right fit.
          </p>
          <a href="https://calendly.com" target="_blank" rel="noreferrer" className="btn-gold text-base px-10 py-4 rounded-xl inline-flex items-center gap-2">
            Book a discovery call <ArrowRight size={16} />
          </a>
          <p className="text-white/30 text-sm mt-4">No sales pitch. Just a real conversation about your team.</p>
        </div>
      </section>

      <ChatBot />
    </PublicLayout>
  )
}
