import { useEffect } from 'react'
import PublicLayout from '@/components/layout/PublicLayout'
import { useReveal, CountUp, CtaBand } from '@/components/public/SharedComponents'

const TEAM_COLLAB = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'

const BELIEFS = [
  { n: '01', t: 'Honesty over comfort.', d: 'We tell you what is not working before telling you what to do instead.' },
  { n: '02', t: 'Systems over personalities.', d: 'We build to outlast any individual. If the team cannot run it without us, the job is not done.' },
  { n: '03', t: 'Done is better than perfect.', d: 'A running filter gate with rough edges delivers more value than a perfect process document nobody uses.' },
]

export default function AboutPage() {
  useReveal(null)
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="dark-section dark-section--dark">
        <div className="dark-section__inner">
          <div className="dark-hero__eyebrow reveal">About</div>
          <h1 className="dark-hero__title reveal" style={{ fontSize: 'clamp(40px, 6vw, 72px)', marginBottom: 24 }}>
            Built inside a real team.<br /><em>Refined</em> over twelve months.
          </h1>
          <p className="dark-hero__sub reveal" style={{ marginBottom: 0 }}>
            Studio Method is a design operations methodology that came from doing, not theorising.
          </p>
        </div>
      </section>

      {/* Origin editorial row */}
      <div className="dark-section dark-section--dark2">
        <div className="dark-section__inner">
          <div className="editorial-row reveal">
            <div className="editorial-row__text">
              <div className="editorial-row__eyebrow">Origin</div>
              <h2 className="editorial-row__title">Not borrowed from a book.</h2>
              <p className="editorial-row__body">
                We started where most design teams start — drowning in unscoped requests, running standups that solved nothing, and losing institutional knowledge every time someone left. Over twelve months, we built something different. Not a framework borrowed from a blog post. A real operating system, tested in production sprints, with real stakeholders pushing back.
              </p>
            </div>
            <div className="editorial-row__image">
              <img src={TEAM_COLLAB} alt="Team collaborating" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="dark-section dark-section--dark3">
        <div className="dark-section__inner">
          <div className="stats-row reveal">
            <div className="stat-block">
              <div className="stat-block__number"><CountUp end={12} /></div>
              <div className="stat-block__label">months</div>
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
              <div className="stat-block__number"><CountUp end={0} /></div>
              <div className="stat-block__label">borrowed frameworks</div>
            </div>
          </div>
        </div>
      </div>

      {/* Beliefs */}
      <div className="dark-section dark-section--dark">
        <div className="dark-section__inner">
          <div style={{ marginBottom: 56 }}>
            <div className="section-eyebrow reveal">Principles</div>
            <h2 className="section-title reveal">What we believe.</h2>
            <p className="section-body reveal">Three convictions that shape every engagement — and occasionally make us harder to hire than the alternative.</p>
          </div>
          <div className="feature-list">
            {BELIEFS.map((b) => (
              <div key={b.n} className="feature-item reveal">
                <div className="feature-item__number">{b.n}</div>
                <div className="feature-item__title">{b.t}</div>
                <div className="feature-item__body">{b.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CtaBand
        title="See how it all fits together."
        subtitle="Four systems. One methodology. Built in twelve months."
        buttonText="See the playbook"
        buttonTo="/services"
      />
    </PublicLayout>
  )
}
