import { useEffect } from 'react'
import PublicLayout from '@/components/layout/PublicLayout'
import { useReveal, CountUp, CtaBand } from '@/components/public/SharedComponents'

const BELIEFS = [
  { n: '01', t: 'Honesty over comfort.', d: 'The methodology tells you what is not working before telling you what to do instead.' },
  { n: '02', t: 'Systems over personalities.', d: 'Built to outlast any individual. If the team cannot run it without help, the job is not done.' },
  { n: '03', t: 'Done is better than perfect.', d: 'A running filter gate with rough edges delivers more value than a perfect process document nobody uses.' },
]

export default function AboutPage() {
  useReveal(null)
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <PublicLayout>
      <section className="page-hero" data-screen-label="About hero">
        <div className="wrap">
          <span className="eyebrow reveal"><span className="sq"></span>About</span>
          <h1 className="ph-title reveal d1">Built inside a real team.<br /><em>Refined</em> over twelve months.</h1>
          <p className="ph-sub reveal d2">Studio Method is a design operations methodology that came from doing, not theorising.</p>
        </div>
      </section>

      <section className="about-statement" data-screen-label="About statement">
        <div className="wrap">
          <p className="as-big reveal">
            Not borrowed from a book. <em>Every element was built because a specific problem existed in a real design team.</em>
          </p>
          <div className="about-body">
            <div className="ab-label reveal">/ origin</div>
            <div className="ab-text reveal d1">
              <p>The filter gate came first — because requests were arriving with no scope and no priority. The three pathways came next — because treating all design work the same was causing chaos.</p>
              <p>The AI layer came last — because connecting tools manually was taking too long and knowledge kept evaporating between projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section tight dark" data-screen-label="About stats">
        <div className="wrap">
          <div className="stats reveal" style={{ borderColor: 'var(--line-d)' }}>
            <div className="stat" style={{ borderColor: 'var(--line-d)' }}>
              <div className="s-num" style={{ color: 'var(--paper)' }}><CountUp end={12} /></div>
              <div className="s-lab" style={{ color: 'var(--muted-d)' }}>Months of iteration</div>
            </div>
            <div className="stat" style={{ borderColor: 'var(--line-d)' }}>
              <div className="s-num" style={{ color: 'var(--paper)' }}><CountUp end={3} /></div>
              <div className="s-lab" style={{ color: 'var(--muted-d)' }}>Core system components</div>
            </div>
            <div className="stat" style={{ borderColor: 'var(--line-d)' }}>
              <div className="s-num" style={{ color: 'var(--paper)' }}><CountUp end={4} suffix="+" /></div>
              <div className="s-lab" style={{ color: 'var(--muted-d)' }}>Tools connected</div>
            </div>
            <div className="stat" style={{ borderColor: 'var(--line-d)' }}>
              <div className="s-num" style={{ color: 'var(--paper)' }}><CountUp end={0} /></div>
              <div className="s-lab" style={{ color: 'var(--muted-d)' }}>Borrowed frameworks</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-screen-label="Beliefs">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow reveal"><span className="sq"></span>Principles</span>
              <h2 className="h-title reveal d1">What we believe.</h2>
            </div>
            <p className="h-sub reveal d2">Three convictions that shape every engagement — and occasionally make us harder to hire than the alternative.</p>
          </div>
          <div className="beliefs reveal">
            {BELIEFS.map((b) => (
              <div className="belief" key={b.n}>
                <span className="b-n">{b.n}</span>
                <div>
                  <h3 className="b-t">{b.t}</h3>
                  <p className="b-d">{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        kicker="Work with us"
        title="Start with a<br/><em>discovery</em> call."
        sub="We'll look at your team's situation honestly — and tell you if Studio Method isn't the right fit."
        btn="Book a call"
        ghost="01"
      />
    </PublicLayout>
  )
}
