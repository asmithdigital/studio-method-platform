import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PublicLayout from '@/components/layout/PublicLayout'
import {
  Arrow, ArrowUR, IcoOrg, IcoPerson, useReveal, CountUp, CtaBand,
} from '@/components/public/SharedComponents'

/* ---- hero ---- */
function HomeHero() {
  const navigate = useNavigate()
  return (
    <header className="hero" id="top" data-screen-label="Hero">
      <div className="wrap">
        <div className="hero-tag">
          <span className="eyebrow"><span className="sq"></span>Design Operations Methodology</span>
          <span className="mono">Adelaide, AU · Est. 2026</span>
        </div>
        <h1 className="hero-h1 reveal">
          Design teams<br />
          that work <span className="lime-word"><span className="mark">like</span> <em>studios.</em></span>
        </h1>
        <div className="hero-grid">
          <p className="hero-sub reveal d1">
            A methodology for how work comes in, gets prioritised, and gets done — installed
            inside your team, not handed over as a slide deck.
          </p>
          <div className="hero-actions reveal d2">
            <button
              className="btn btn-lime"
              onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See how it works <Arrow />
            </button>
            <button className="btn btn-ghost" onClick={() => navigate('/about')}>
              View the method <ArrowUR />
            </button>
          </div>
        </div>
        <div className="pipeline reveal d2">
          <div className="pipe-row">
            <div className="pipe-node"><span className="pn-t">Request comes in</span></div>
            <div className="pipe-conn c1"><span className="track"></span><span className="flow"></span></div>
            <div className="pipe-node gate"><span className="pn-t">Filter Gate</span></div>
            <div className="pipe-conn c2"><span className="track"></span><span className="flow"></span></div>
            <div className="pipe-node"><span className="pn-t">Right pathway</span></div>
          </div>
        </div>
      </div>
    </header>
  )
}

/* ---- 4 pillars ---- */
const PILLARS = [
  {
    n: '01', t: 'Filter Gate', k: 'Assessment',
    desc: 'Every request gets assessed before it enters the backlog — scoped, prioritised, and routed, so nothing lands on a designer\'s desk without a clear shape.',
    viz: 'gate',
  },
  {
    n: '02', t: 'Three Pathways', k: 'Routing',
    desc: 'Discovery, Delivery, or Self-serve — each with its own process. Treating all design work the same is what creates the chaos; pathways end it.',
    viz: 'pathways',
  },
  {
    n: '03', t: 'Studio Ceremonies', k: 'Rhythm',
    desc: 'Rhythm-based rituals that keep the team aligned week to week. A predictable cadence from Monday planning through to Friday review.',
    viz: 'days',
  },
  {
    n: '04', t: 'AI Layer', k: 'Knowledge',
    desc: 'Your tools connected, your knowledge accessible. A Slack-connected assistant that searches across your design system, journey maps, boards, and codebase.',
    viz: 'ai',
  },
]

function PillarViz({ kind }) {
  if (kind === 'days') {
    return (
      <div className="pd-viz fade-key">
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((d) => (
          <span key={d} className={`day-chip ${['Monday', 'Wednesday', 'Friday'].includes(d) ? 'lit' : ''}`}>
            {d.slice(0, 3)}
          </span>
        ))}
      </div>
    )
  }
  if (kind === 'pathways') {
    return (
      <div className="pd-viz fade-key">
        {['Discovery', 'Delivery', 'Self-serve'].map((p) => (
          <span key={p} className="pathway-chip">{p}</span>
        ))}
      </div>
    )
  }
  if (kind === 'gate') {
    return (
      <div className="pd-viz fade-key">
        {['Scoped', 'Prioritised', 'Routed'].map((p) => (
          <span key={p} className="pathway-chip">{p}</span>
        ))}
      </div>
    )
  }
  return (
    <div className="pd-viz fade-key">
      {['Design System', 'Journey Maps', 'Miro', 'Codebase'].map((p) => (
        <span key={p} className="pathway-chip">{p}</span>
      ))}
    </div>
  )
}

function Pillars() {
  const [active, setActive] = useState(0)
  const a = PILLARS[active]
  return (
    <section className="section dark" id="how" data-screen-label="Method">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow on-dark reveal"><span className="sq"></span>The system</span>
            <h2 className="h-title reveal d1" style={{ color: 'var(--paper)' }}>
              Four parts,<br />one operating model.
            </h2>
          </div>
          <p className="h-sub reveal d2">
            Studio Method isn&apos;t a framework you read. It&apos;s a set of connected components that
            change how work moves through your team — installed, documented, and owned by you.
          </p>
        </div>
        <div className="pillars reveal">
          <div className="pillar-list">
            {PILLARS.map((p, i) => (
              <div
                key={p.n}
                className={`pillar-item ${i === active ? 'active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <span className="pi-bar"></span>
                <span className="pi-n">{p.n}</span>
                <span className="pi-t">{p.t}</span>
                <span className="pi-dot"></span>
              </div>
            ))}
          </div>
          <div className="pillar-detail">
            <div>
              <span className="pd-k">{a.k} · {a.n} / 04</span>
              <h3 className="pd-t fade-key" key={a.t}>{a.t}</h3>
              <p className="pd-d fade-key" key={a.desc}>{a.desc}</p>
            </div>
            <PillarViz kind={a.viz} key={a.viz} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---- stats ---- */
function Stats() {
  return (
    <section className="section tight" data-screen-label="Stats">
      <div className="wrap">
        <div className="stats reveal">
          <div className="stat"><div className="s-num"><CountUp end={4} /></div><div className="s-lab">Services</div></div>
          <div className="stat"><div className="s-num"><CountUp end={12} suffix="+" /></div><div className="s-lab">Engagements delivered</div></div>
          <div className="stat"><div className="s-num"><CountUp end={97} suffix="%" /></div><div className="s-lab">Client satisfaction</div></div>
          <div className="stat"><div className="s-num"><CountUp end={12} /></div><div className="s-lab">Training modules</div></div>
        </div>
      </div>
    </section>
  )
}

/* ---- audience ---- */
function Audience() {
  const navigate = useNavigate()
  return (
    <section className="section" data-screen-label="Audience">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow reveal"><span className="sq"></span>Who it&apos;s for</span>
            <h2 className="h-title reveal d1">Who Studio Method<br />is for.</h2>
          </div>
          <p className="h-sub reveal d2">
            Two starting points, one methodology — whether you run a team or want to learn it for yourself.
          </p>
        </div>
        <div className="aud-grid">
          <div className="aud-card feature reveal">
            <span className="corner"></span>
            <div className="ac-ico"><IcoOrg /></div>
            <div className="ac-t">Organisations with design teams</div>
            <p className="ac-d">Talented designers working in reactive, unstructured ways. The operating model changes that — from constantly firefighting to genuinely collaborative.</p>
            <span className="txtlink" onClick={() => navigate('/about')}>See how we help organisations <ArrowUR /></span>
          </div>
          <div className="aud-card reveal d1">
            <span className="corner"></span>
            <div className="ac-ico"><IcoPerson /></div>
            <div className="ac-t">Individual designers and managers</div>
            <p className="ac-d">Learn the Studio Method yourself and apply it to your team or freelance practice — twelve modules, at your own pace.</p>
            <span className="txtlink" onClick={() => navigate('/for-individuals')}>Learn the methodology yourself <ArrowUR /></span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---- testimonials ---- */
const QUOTES = [
  { body: 'Studio Method didn\'t just give us a process — it gave us a shared language. The team went from constantly reactive to genuinely collaborative in about six weeks.', name: 'James Okafor', role: 'Design Lead, Afterpay' },
  { body: 'The training workshops were the most practically useful design leadership development I\'ve had in ten years. Andrew knows this stuff from the inside.', name: 'Ben Hartley', role: 'Head of Design, MYOB' },
  { body: 'What I appreciated most was the honesty. When something wasn\'t working they said so directly and adapted. That\'s rare in consulting.', name: 'Rachel Torres', role: 'Senior UX Lead, Medibank Digital' },
]

function Testimonials() {
  return (
    <section className="section dark" data-screen-label="Testimonials">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow on-dark reveal"><span className="sq"></span>Evidence</span>
            <h2 className="h-title reveal d1" style={{ color: 'var(--paper)' }}>From the teams<br />we&apos;ve worked with.</h2>
          </div>
        </div>
        <div className="quotes reveal">
          {QUOTES.map((q) => (
            <div className="quote" key={q.name}>
              <span className="q-mark">&ldquo;</span>
              <p className="q-body">{q.body}</p>
              <div className="q-who">
                <span className="q-name">{q.name}</span>
                <span className="q-role">{q.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---- blog ---- */
const POSTS = [
  { cat: 'process', t: 'The filter gate: how to stop your design team drowning in unscoped requests', d: 'Every design team gets flooded with requests. Most manage this with a backlog. Here is why that does not work, and what to do instead.', read: '6 min read' },
  { cat: 'process', t: 'Three pathways for design work and why you need all of them', d: 'Not all design work is the same. Treating it as though it is creates the chaos that makes design teams feel permanently overloaded.', read: '8 min read' },
  { cat: 'ai_layer', t: 'Building an AI orchestration layer for a design team using only prompts', d: 'A Slack bot that searches Figma, Miro, and GitHub at once. A React app on GitHub Pages. A journey platform. All built without writing code.', read: '11 min read' },
]

function Blog() {
  const navigate = useNavigate()
  return (
    <section className="section" data-screen-label="Insights">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow reveal"><span className="sq"></span>Writing</span>
            <h2 className="h-title reveal d1">From the<br />Studio Method blog.</h2>
          </div>
          <div className="h-sub reveal d2" style={{ display: 'flex', alignItems: 'flex-end' }}>
            <span className="txtlink" onClick={() => navigate('/insights')}>All articles <ArrowUR /></span>
          </div>
        </div>
        <div className="posts">
          {POSTS.map((p, i) => (
            <article className={`post reveal d${i + 1}`} key={p.t} onClick={() => navigate('/insights')}>
              <span className="p-cat">{p.cat}</span>
              <h3 className="p-t">{p.t}</h3>
              <p className="p-d">{p.d}</p>
              <div className="p-foot">
                <span className="p-read">{p.read}</span>
                <ArrowUR />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---- marquee ---- */
function Marquee() {
  const words = ['Studio Setup', 'AI Layer', 'Studio Training', 'Filter Gate', 'Three Pathways', 'Studio Ceremonies']
  const row = [...words, ...words]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((w, i) => (
          <span className="marquee-item" key={i}>{w}<span className="star">✦</span></span>
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  useReveal(null)
  return (
    <PublicLayout>
      <HomeHero />
      <Marquee />
      <Pillars />
      <Stats />
      <Audience />
      <Testimonials />
      <Blog />
      <CtaBand
        kicker="Get started"
        title="Ready to change how<br/>your team <em>works?</em>"
        sub="Book a 45-minute discovery call. We'll look at your team's current state — honestly."
        ghost="45"
      />
    </PublicLayout>
  )
}
