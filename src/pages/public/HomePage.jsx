import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PublicLayout from '@/components/layout/PublicLayout'
import {
  useReveal, CountUp, CtaBand, DarkPostCard, TestimonialCard,
  IllustrationFilterGate, IllustrationPathways, IllustrationCeremonies, IllustrationAILayer,
  Arrow,
} from '@/components/public/SharedComponents'
import { TESTIMONIALS, FAKE_INSIGHTS_ARTICLES } from '@/lib/constants'

const HERO_BG = 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1400&q=80'
const TEAM_COLLAB = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
const UX_WORKSPACE = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80'
const DESIGN_TOOLS = 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80'
const MEETING = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80'
const WHITEBOARD = 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'

const MARQUEE_ITEMS = [
  'Filter Gate', 'Three Pathways', 'Studio Ceremonies',
  'AI Orchestration', 'Journey Management', 'Design System Governance', 'Definition of Done',
]

const FEATURES = [
  {
    n: '01',
    t: 'Filter Gate',
    d: 'Every request passes through three questions before it enters the backlog. Is it discovery, delivery, or self-serve? What is the real scope? What does done look like?',
  },
  {
    n: '02',
    t: 'Three Pathways',
    d: 'Not all design work is the same. Discovery is investigative. Delivery is defined. Self-serve is documented. Each gets the process it needs.',
  },
  {
    n: '03',
    t: 'Studio Ceremonies',
    d: 'Monday opens the week. Wednesday solves problems. Friday closes the loop. Two hours of structure that changes everything.',
  },
  {
    n: '04',
    t: 'AI Orchestration Layer',
    d: 'Your Figma library, Miro boards, GitHub docs, and Slack — connected through a single AI-accessible knowledge base.',
  },
]

const POST_IMAGES = [DESIGN_TOOLS, MEETING, WHITEBOARD]

export default function HomePage() {
  useReveal(null)
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const articles = FAKE_INSIGHTS_ARTICLES.slice(0, 3)

  return (
    <PublicLayout>
      {/* ── HERO ── */}
      <section className="dark-hero">
        <div className="dark-hero__bg">
          <img src={HERO_BG} alt="" aria-hidden="true" />
        </div>
        <div className="dark-hero__content">
          <div className="dark-hero__eyebrow reveal">Design Operations Methodology</div>
          <h1 className="dark-hero__title reveal">
            Extraordinary design teams<br />start with <em>structure.</em>
          </h1>
          <p className="dark-hero__sub reveal">
            A methodology for how work comes in, gets prioritised, and gets done. Built inside a real team. Refined over twelve months.
          </p>
          <div className="dark-hero__actions reveal">
            <Link to="/services" className="btn-lime">
              See how it works <Arrow />
            </Link>
            <Link to="/about" className="btn-outline">
              About the method
            </Link>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-strip__inner">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="marquee-strip__item">
              <span className="marquee-strip__dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURE LIST ── */}
      <div className="dark-section dark-section--dark">
        <div className="dark-section__inner">
          <div style={{ maxWidth: 560, marginBottom: 56 }}>
            <div className="section-eyebrow reveal">How it works</div>
            <h2 className="section-title reveal">The Studio Method</h2>
          </div>
          <div className="feature-list">
            {FEATURES.map((f) => (
              <div key={f.n} className="feature-item reveal">
                <div className="feature-item__number">{f.n}</div>
                <div className="feature-item__title">{f.t}</div>
                <div className="feature-item__body">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── EDITORIAL ROW 1 ── */}
      <div className="dark-section dark-section--dark2">
        <div className="dark-section__inner">
          <div className="editorial-row reveal">
            <div className="editorial-row__text">
              <div className="editorial-row__eyebrow">Built from experience</div>
              <h2 className="editorial-row__title">Not borrowed from a book.</h2>
              <p className="editorial-row__body">
                This methodology was built inside a real Australian organisation over twelve months. Every element was tested in production sprints with real designers, real stakeholders, and real deadlines. Nothing here is theoretical.
              </p>
              <Link to="/services" className="btn-outline" style={{ display: 'inline-flex', marginTop: 0 }}>
                Read the playbook →
              </Link>
            </div>
            <div className="editorial-row__image">
              <img src={TEAM_COLLAB} alt="Team collaborating" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      {/* ── EDITORIAL ROW 2 (reversed) ── */}
      <div className="dark-section dark-section--dark">
        <div className="dark-section__inner">
          <div className="editorial-row reversed reveal">
            <div className="editorial-row__text">
              <div className="editorial-row__eyebrow">AI-augmented</div>
              <h2 className="editorial-row__title">Your tools connected. Your knowledge accessible.</h2>
              <p className="editorial-row__body">
                The AI Orchestration Layer connects your Figma library, Miro boards, GitHub documentation, and Slack channels into a single queryable knowledge base. Ask a question, get an answer from your own team's work — in seconds.
              </p>
              <Link to="/services" className="btn-outline" style={{ display: 'inline-flex' }}>
                Read the playbook →
              </Link>
            </div>
            <div className="editorial-row__image">
              <img src={UX_WORKSPACE} alt="UX workspace" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="dark-section dark-section--dark2">
        <div className="dark-section__inner">
          <div className="stats-row reveal">
            <div className="stat-block">
              <div className="stat-block__number"><CountUp end={12} /></div>
              <div className="stat-block__label">months building this</div>
            </div>
            <div className="stat-block">
              <div className="stat-block__number"><CountUp end={3} /></div>
              <div className="stat-block__label">core systems</div>
            </div>
            <div className="stat-block">
              <div className="stat-block__number"><CountUp end={4} suffix="+" /></div>
              <div className="stat-block__label">tools connected</div>
            </div>
            <div className="stat-block">
              <div className="stat-block__number"><CountUp end={40} suffix="+" /></div>
              <div className="stat-block__label">AI queries per week</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <div className="dark-section dark-section--dark3">
        <div className="dark-section__inner">
          <div style={{ marginBottom: 48 }}>
            <div className="section-eyebrow reveal">Evidence</div>
            <h2 className="section-title reveal">What the team says</h2>
          </div>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="reveal">
                <TestimonialCard quote={t.quote} name={t.name} role={t.role} company={t.company} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BLOG POSTS ── */}
      <div className="dark-section dark-section--dark">
        <div className="dark-section__inner">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="section-eyebrow reveal">Insights</div>
              <h2 className="section-title reveal" style={{ marginBottom: 0 }}>What we learned along the way</h2>
            </div>
            <Link to="/insights" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 16, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
              All articles →
            </Link>
          </div>
          <div className="dark-post-grid">
            {articles.map((a, i) => (
              <div key={a.id} className="reveal">
                <DarkPostCard
                  category={a.category}
                  title={a.title}
                  excerpt={a.excerpt}
                  readTime={a.read_time_minutes}
                  slug={a.slug}
                  imageSrc={POST_IMAGES[i]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <CtaBand
        title="Ready to see the full process?"
        subtitle="Four systems. Twelve months of iteration. Everything documented."
        buttonText="Read the playbook"
        buttonTo="/services"
      />
    </PublicLayout>
  )
}
