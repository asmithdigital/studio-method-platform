import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PublicLayout from '@/components/layout/PublicLayout'
import { useReveal } from '@/components/public/SharedComponents'

const SGF = { fontFamily: "'Schibsted Grotesk', system-ui, sans-serif" }
const MONO = { fontFamily: 'JetBrains Mono, monospace' }

const chapters = [
  {
    number: 'Ch 01',
    title: 'The Operating Model',
    summary: 'The studio model creates collective visibility. Designers stop working in isolation and start working as a studio — with shared ceremonies, shared standards, and shared accountability.',
    problem: 'Most design teams embedded in product organisations are collections of individuals, each responsive to their own product manager, each building slightly different versions of the same components. Nobody has a view of the whole. The studio model changes this without removing designers from their squads.',
    howItWorks: [
      'Map all active work across the team so collective visibility exists from day one',
      'Establish the three ceremonies: Monday Backlog Review, Wednesday Studio Session, Friday Close',
      'Assign a studio facilitator responsible for keeping the ceremonies generative, not administrative',
      'Build the ways of working documentation that makes the model sustainable when the facilitator is absent',
    ],
    whatYouNeed: [
      'A design team of at least 3 people',
      'Two hours per week for ceremonies',
      'A facilitator willing to hold the structure',
    ],
    whatChanges: 'Designers know what everyone else is working on. Problems get solved in Wednesday sessions instead of festering for weeks. Knowledge transfers across the team instead of living in individual heads.',
  },
  {
    number: 'Ch 02',
    title: 'The Filter Gate',
    summary: 'Every design request passes through three questions before entering the backlog. Is it discovery, delivery, or self-serve? What is the real scope? What does done look like? No unscoped work gets through.',
    problem: 'Before the filter gate, every request was treated identically. A full product redesign sat in the same queue as a button colour change. Both generated the same overhead. Both produced anxiety because neither had a clear scope or a clear definition of done.',
    howItWorks: [
      'Set up a shared intake channel for all design requests — a form, Notion doc, or Slack channel',
      'At Friday Close, review new requests against three questions: pathway, scope, definition of done',
      'Send clarifying questions back to requesters before any work is accepted into the backlog',
      'Accept only scoped, completable work — vague requests go back with a clear list of what is missing',
    ],
    whatYouNeed: [
      'A shared intake channel (Typeform, Notion form, or Slack channel)',
      'Fifteen minutes at Friday Close each week',
      'Willingness to send requests back for clarification — this is the uncomfortable part',
    ],
    whatChanges: 'The backlog shrinks to only scoped, completable work. Rework from unclear briefs drops significantly. Designers spend their time on work that has a clear finish line.',
  },
  {
    number: 'Ch 03',
    title: 'The AI Layer',
    summary: "The AI orchestration layer connects the team's tools — Figma, Miro, GitHub, Slack — into a single queryable knowledge base. Ask a question in Slack, get an answer from your own team's work in seconds.",
    problem: 'Most design teams have a knowledge problem. They generate knowledge — in Figma files, Miro boards, GitHub repositories — but that knowledge is inaccessible. It is locked in files that require you to know where to look, what to search for, and which of the three competing versions is current.',
    howItWorks: [
      'Audit all existing design tools and assess the quality of content in each',
      'Design the AI connection architecture — which tools connect, in what order, with what access',
      'Build the Slack bot that routes questions to the relevant tool connections',
      'Connect Figma, Miro, and GitHub via their APIs with read-only access',
      'Train the team on AI-augmented workflows and query patterns that return useful results',
    ],
    whatYouNeed: [
      'Figma Professional or Organisation plan (for API access)',
      'Miro API access enabled on relevant boards',
      'GitHub repository with documentation worth connecting',
      'A well-maintained design system — poor content quality means poor AI layer value',
    ],
    whatChanges: 'Forty-plus questions per week that used to interrupt designers are handled by the bot. Design system queries take four seconds instead of seven minutes. Knowledge that used to evaporate between projects stays accessible.',
  },
  {
    number: 'Ch 04',
    title: 'Studio Ceremonies',
    summary: 'Three recurring ceremonies — Monday Backlog Review, Wednesday Studio Session, Friday Close — create the rhythm the studio runs on. Two hours per week. Everything else stays the same.',
    problem: 'Without structured ceremonies, communication is reactive. Problems surface when they have already become crises. Work patterns are invisible until they collide. The studio has no shared rhythm — just a collection of individual calendars.',
    howItWorks: [
      'Monday (30 min): open the week together — what does the studio carry, what needs attention',
      'Wednesday (60 min): bring problems, not reports — the studio solves them as a group',
      'Friday (30 min): what shipped, what got stuck, new requests reviewed through the filter gate',
      'Each designer prepares one specific question for Wednesday — not a status update, a problem',
    ],
    whatYouNeed: [
      'A recurring calendar block for all three ceremonies',
      'A facilitator who can prevent Wednesday from becoming a status meeting',
      'Agreement from the team that problems, not reports, are the currency of the Wednesday session',
    ],
    whatChanges: 'The team has a shared rhythm. Problems get solved before they compound. The filter gate gets reviewed every Friday without fail. New designers orient in days, not months.',
  },
]

export default function ServicesPage() {
  useReveal(null)
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [open, setOpen] = useState({})
  const toggle = (i) => setOpen(prev => ({ ...prev, [i]: !prev[i] }))

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="dark-section dark-section--dark">
        <div className="dark-section__inner" style={{ paddingTop: 'clamp(40px, 8vh, 80px)' }}>
          <div className="dark-hero__eyebrow reveal">The Playbook</div>
          <h1 className="dark-hero__title reveal" style={{ fontSize: 'clamp(40px, 6vw, 72px)', marginBottom: 24 }}>
            Four systems that change<br /><em>how a design team operates.</em>
          </h1>
          <p className="dark-hero__sub reveal" style={{ marginBottom: 0 }}>
            Each one was built to solve a specific problem. Together they create an operating model that scales.
          </p>
        </div>
      </section>

      {/* Expandable chapters */}
      <div className="dark-section dark-section--dark2" style={{ paddingTop: 0 }}>
        <div className="dark-section__inner">
          {chapters.map((ch, i) => (
            <div
              key={ch.number}
              className="reveal"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.08)',
                paddingTop: 40,
                paddingBottom: open[i] ? 0 : 40,
              }}
            >
              {/* Chapter header */}
              <div
                style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24, cursor: 'pointer' }}
                onClick={() => toggle(i)}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ ...MONO, fontSize: 13, color: '#C7F24D', fontWeight: 600, letterSpacing: '0.1em', marginBottom: 12 }}>
                    {ch.number}
                  </div>
                  <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 800, color: '#FFFFFF', marginBottom: 16, letterSpacing: '-0.01em', ...SGF }}>
                    {ch.title}
                  </h2>
                  <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 720, ...SGF }}>
                    {ch.summary}
                  </p>
                </div>
                <button
                  style={{
                    flexShrink: 0,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 999,
                    padding: '10px 20px',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    whiteSpace: 'nowrap',
                    marginTop: 8,
                    ...SGF,
                  }}
                  onClick={(e) => { e.stopPropagation(); toggle(i) }}
                >
                  {open[i] ? 'Close ↑' : 'Read the full process ↓'}
                </button>
              </div>

              {/* Expanded content */}
              {open[i] && (
                <div
                  style={{
                    paddingTop: 48,
                    paddingBottom: 56,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: 40,
                  }}
                >
                  <div>
                    <div style={{ ...MONO, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#C7F24D', marginBottom: 16 }}>
                      The Problem
                    </div>
                    <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, ...SGF }}>
                      {ch.problem}
                    </p>
                  </div>
                  <div>
                    <div style={{ ...MONO, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#C7F24D', marginBottom: 16 }}>
                      How It Works
                    </div>
                    <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {ch.howItWorks.map((step, si) => (
                        <li key={si} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                          <span style={{ ...MONO, fontSize: 13, color: '#C7F24D', fontWeight: 700, flexShrink: 0, paddingTop: 2 }}>
                            {String(si + 1).padStart(2, '0')}
                          </span>
                          <span style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, ...SGF }}>
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <div style={{ ...MONO, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#C7F24D', marginBottom: 16 }}>
                      What You Need
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {ch.whatYouNeed.map((item, wi) => (
                        <li key={wi} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                          <span style={{ color: '#C7F24D', flexShrink: 0, paddingTop: 4, fontSize: 12 }}>▸</span>
                          <span style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, ...SGF }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: 'rgba(199,242,77,0.06)', border: '1px solid rgba(199,242,77,0.15)' }}>
                      <div style={{ ...MONO, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#C7F24D', marginBottom: 12 }}>
                        What Changes
                      </div>
                      <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, margin: 0, ...SGF }}>
                        {ch.whatChanges}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 1 }} />
        </div>
      </div>

      {/* CTA */}
      <section className="dark-section dark-section--dark3" style={{ textAlign: 'center' }}>
        <div className="dark-section__inner">
          <div className="reveal">
            <div className="section-eyebrow" style={{ marginBottom: 16 }}>Start somewhere</div>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Start with one. Build from there.</h2>
            <p className="section-body" style={{ maxWidth: 520, margin: '0 auto 40px', color: 'rgba(255,255,255,0.7)' }}>
              Most teams implement the Filter Gate first. It takes a week and changes everything.
            </p>
            <Link to="/" className="btn-outline" style={{ display: 'inline-flex' }}>
              ← Back to overview
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
