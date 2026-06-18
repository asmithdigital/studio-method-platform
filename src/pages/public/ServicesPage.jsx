import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PublicLayout from '@/components/layout/PublicLayout'
import { Arrow, useReveal, CtaBand } from '@/components/public/SharedComponents'

const SERVICES = [
  {
    n: '01', t: 'Studio Setup',
    d: 'We assess your team and install the full Studio Method operating model — filter gate, pathways, ceremonies, documentation, and governance. Your team comes out knowing exactly how to work together.',
    timing: '8–12 weeks', price: 'From AUD $28,000',
  },
  {
    n: '02', t: 'AI Layer',
    d: 'We build the AI orchestration layer for your design team. A Slack-connected assistant that searches across your design system, journey maps, Miro boards, and codebase — built with your tools, owned by your team.',
    timing: '4–6 weeks', price: 'From AUD $18,000',
  },
  {
    n: '03', t: 'Studio Training',
    d: 'Workshop-based training programme in the Studio Method. Practical, applied, and grounded in how real design teams work. Delivered as a series of half-day workshops tailored to your context.',
    timing: 'Flexible', price: 'From AUD $8,500',
  },
  {
    n: '04', t: 'Individual',
    d: 'Access the full Studio Method training platform. 12 modules covering the complete methodology. Work at your own pace. Apply it to your team or practice as you go.',
    timing: 'Self-paced', price: 'From AUD $49',
  },
]

export default function ServicesPage() {
  const navigate = useNavigate()
  useReveal(null)
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <PublicLayout>
      <section className="page-hero" data-screen-label="Services hero">
        <div className="wrap">
          <span className="eyebrow reveal"><span className="sq"></span>Services · 04</span>
          <h1 className="ph-title reveal d1">Four ways to work<br />with <em>Studio Method.</em></h1>
          <p className="ph-sub reveal d2">Each service is built around a different starting point and a different need.</p>
        </div>
      </section>

      <section className="section tight" data-screen-label="Services list">
        <div className="wrap">
          <div className="svc-list">
            {SERVICES.map((s) => (
              <div className="svc-row reveal" key={s.n}>
                <div className="svc-n">{s.n}</div>
                <div className="svc-main">
                  <h2 className="svc-t">{s.t}</h2>
                  <p className="svc-d">{s.d}</p>
                </div>
                <div className="svc-aside">
                  <div className="svc-meta">
                    <div className="m"><span className="k">Timeline</span><span className="v">{s.timing}</span></div>
                    <div className="m"><span className="k">Investment</span><span className="v price">{s.price}</span></div>
                  </div>
                  <button className="btn btn-ghost btn-sm" onClick={() => navigate('/contact')}>
                    Book a discovery call <Arrow s={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        kicker="Not sure which is right?"
        title="Book a <em>30-minute</em><br/>call."
        sub="We'll look at your situation honestly and point you to the right starting point — no pressure."
        btn="Book a call"
        ghost="30"
      />
    </PublicLayout>
  )
}
