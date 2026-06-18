import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'

const SGF = { fontFamily: "'Schibsted Grotesk', system-ui, sans-serif" }

const stats = [
  { n: '12', l: 'months to full implementation' },
  { n: '3×', l: 'increase in throughput' },
  { n: '4', l: 'tools in the AI layer' },
  { n: '0', l: 'lines of code written by hand' },
]

const timeline = [
  {
    period: 'Month 1–2',
    title: 'Inheriting the chaos',
    content: `In February 2025, I took over as UX Manager for a design team of eleven people embedded across six product squads in a mid-size Australian technology company. The handover took thirty minutes. My predecessor gave me the Jira board password, told me the team was "good but stretched", and left for a product leadership role at a fintech.\n\nThe first week was instructive. I had eleven designers, each doing something different, none of them sure who owned what. The backlog had 84 items. Twenty-three were assigned to no one. Eleven were marked "in progress" but had not been touched in two weeks. The rest were a mixture of rough ideas, half-scoped requests, and a few things that had genuinely been completed but not closed.\n\nRequests came in through every channel imaginable: Jira, Slack, email, hallway conversations, a spreadsheet someone had set up six months ago that nobody updated anymore. Priority was determined by whoever had spoken to me most recently. I had two designers sitting idle because they were waiting for stakeholder sign-off on projects that no one was actively managing. I had three designers simultaneously working on variations of the same component because nobody had compared notes.\n\nThis was not a talent problem. The designers were good. This was a system problem. The team had no operating model.`,
  },
  {
    period: 'Month 2–3',
    title: 'Building the filter gate',
    content: `The first thing I built was the filter gate, and I built it entirely with prompts.\n\nThe problem I was solving was intake. Before the filter gate, every request was treated identically. A request for a complete product redesign sat in the same queue as a request to adjust the colour of an error state. Both were "design work". Both generated the same overhead. Both produced the same anxiety in the designer who received them, because neither had a clear scope or a clear definition of done.\n\nI described this problem to Claude in detail. I described the shape of the requests we received, the failure modes we were experiencing, the specific constraints of our organisation (no executive buy-in yet, political sensitivity around saying no to stakeholders, two senior designers who had been there for years and would resist change if it felt imposed). I asked Claude to help me design an intake process that would work within those constraints.\n\nWe went through eight iterations. The first was too complex — a five-question form that would have scared off requesters and made more work for the team. The fourth was the right shape: three questions, one submission, one guaranteed response within two business days. The filter gate asks: Is this Discovery, Delivery, or Self-Serve? What is the real scope? And what does done look like?\n\nI built the intake form in Typeform. The triage logic was a simple shared Notion document that I ran with the team at the Friday Close ceremony. The first time I ran it, four requests went back to their requesters for clarification. Two of those came back with clear scopes. Two never came back — the work was wanted but not needed enough to answer three questions. That was the first sign the system was working.`,
  },
  {
    period: 'Month 3–5',
    title: 'Installing the operating model',
    content: `With the filter gate running, I turned my attention to how the team worked together. The problem was visibility. Eleven designers, six squads, eleven different working contexts — and nobody, including me, had a clear picture of what the whole studio was carrying at any moment.\n\nThe studio operating model has three ceremonies. Monday Backlog Review: thirty minutes, the whole team, what is the studio carrying this week. Wednesday Studio Session: sixty minutes, the working heart of the week, problems brought to the group and solved together. Friday Close: thirty minutes, what shipped, what got stuck, filter gate review.\n\nTwo hours of structured time per week. Everything else stayed exactly as it was.\n\nThe first Wednesday Studio Session was painful. Everyone reported their status. No problems were brought. The hour passed with no problems solved. I knew exactly what had gone wrong — I had not been explicit enough about what the session was for. Before the following Wednesday I sent a message to the team: "Come to Studio Session this week with one specific problem you want the studio to help you solve. Not a status update — a problem."\n\nThe next session was different. A designer brought a navigation pattern she had been stuck on for four days. Three colleagues responded. Within twenty minutes she had a clear direction she had not considered. Another designer raised a technical constraint he had discovered that affected two other people's work — they found out at the session rather than three weeks later when the work collided. The Friday after that session, three pieces of work shipped that had been stuck.\n\nThe ceremonies created collective visibility. Collective visibility created collective accountability. It happened faster than I expected.`,
  },
  {
    period: 'Month 7–10',
    title: 'Building the AI layer',
    content: `The AI Orchestration Layer was the part of this story that I did not plan. I had been using Claude for smaller tasks throughout the engagement — drafting documentation, refining workshop agendas, thinking through design decisions. But the idea of building actual software with it did not occur to me until a specific conversation.\n\nA product manager came to me with a question: "Is there a modal component in our design system that handles destructive actions?" I knew the answer — yes, there was, and it had specific usage guidelines. But I could not send her to find it herself because the design system documentation was not good enough to navigate independently. I spent fifteen minutes finding the answer for her.\n\nAfterwards I described the problem to Claude. Not just the specific instance — the whole pattern. Forty-odd times per week, someone asked a question that our design system, our journey maps, or our documentation could answer. But because the knowledge was locked in files that required guidance to navigate, the question always landed on a designer.\n\nClaude proposed a solution: a Slack bot connected to the relevant tools via their APIs, using Claude to synthesise the content and answer questions in natural language. I said I had no development background. It said that was fine and we could build it together.\n\nThe first version took two evenings. It could answer questions about component names and basic specifications. The second version added journey map content. The third added GitHub documentation. By month nine, the bot was handling approximately forty queries per week, none of which required a designer to open a file.`,
  },
  {
    period: 'Month 10–12',
    title: 'What the system looks like running',
    content: `A year after inheriting the chaos, the studio operates differently in a way that is measurable.\n\nThrough-put is up. We are shipping approximately three times the volume of design work at the same team size, and the quality is higher because work is scoped before it starts. The backlog has twenty-one items, all assigned, all scoped, all with defined owners and definitions of done.\n\nThe filter gate processes an average of eight new requests per week. Roughly half go back for clarification. Two to three are redirected to self-serve documentation. Two to three enter the delivery backlog per week fully scoped.\n\nThe Wednesday Studio Session still runs every week. It still produces breakthroughs. The AI bot is queried forty-plus times per week. The most common questions are component specifications, journey insights, and pattern guidance. The average answer takes four seconds.\n\nThe thing I am most proud of is not the technology. It is the fact that the team knows how to work. Onboarding a new designer now takes one week instead of three months. The ceremonies run when I am on leave. The filter gate processes requests when I am not the one running it.\n\nThat is what a good operating model does: it keeps working when the person who built it is not in the room.`,
  },
]

export default function WorkPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section style={{ padding: '96px 24px', background: '#0A0A0A', ...SGF }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <Link to="/insights" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.5)', fontSize: 15, textDecoration: 'none', marginBottom: 32, ...SGF }}>
            <ArrowLeft size={14} /> Back
          </Link>
          <p style={{ color: '#C7F24D', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16, fontFamily: 'JetBrains Mono, monospace' }}>Case Study</p>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 24, ...SGF }}>
            Twelve months. One manager.<br />
            <span style={{ color: '#C7F24D' }}>A complete design team operating system.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 20, maxWidth: 640, lineHeight: 1.7, marginBottom: 48, ...SGF }}>
            How a practising UX Manager built the filter gate, three pathways, journey management practice, and AI orchestration layer inside a real Australian organisation — using only prompts.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {stats.map((s) => (
              <div key={s.l} style={{ borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)', background: '#111111', padding: 20 }}>
                <p style={{ fontSize: 34, fontWeight: 800, color: '#C7F24D', marginBottom: 4, ...SGF }}>{s.n}</p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.4, ...SGF }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context bar */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: '#111111' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '20px 24px', display: 'flex', flexWrap: 'wrap', gap: 32, fontSize: 15, color: 'rgba(255,255,255,0.6)', ...SGF }}>
          <div><span style={{ fontWeight: 600, color: '#FFFFFF' }}>Author</span> — Andrew Smith, Founder</div>
          <div><span style={{ fontWeight: 600, color: '#FFFFFF' }}>Duration</span> — 12 months</div>
          <div><span style={{ fontWeight: 600, color: '#FFFFFF' }}>Team size</span> — 11 designers</div>
          <div><span style={{ fontWeight: 600, color: '#FFFFFF' }}>Industry</span> — Technology</div>
          <div><span style={{ fontWeight: 600, color: '#FFFFFF' }}>Published</span> — May 2026</div>
        </div>
      </div>

      {/* Case study body */}
      <article style={{ padding: '64px 24px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          {/* Introduction */}
          <div style={{ marginBottom: 64, maxWidth: 720 }}>
            <p style={{ fontSize: 22, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: 24, ...SGF }}>
              This is the case study that became Studio Method. It is a first-person account of building a complete design team operating system from inside a real organisation — not from theory, not from consulting engagements, from twelve months of daily iteration on a team that needed to work better.
            </p>
            <p style={{ fontSize: 22, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, ...SGF }}>
              It is written as a chronological narrative because the order matters. The filter gate came before the operating model because you need to control intake before you can control throughput. The operating model came before the AI layer because the AI layer amplifies whatever system it is connected to — and you need to build the system first.
            </p>
          </div>

          {/* Timeline sections */}
          <div>
            {timeline.map((section, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 32, padding: '56px 0', borderTop: idx > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div style={{ paddingTop: 4 }}>
                  <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#C7F24D', background: 'rgba(199,242,77,0.08)', padding: '6px 12px', borderRadius: 999, fontFamily: 'JetBrains Mono, monospace' }}>{section.period}</span>
                </div>
                <div>
                  <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#FFFFFF', marginBottom: 24, letterSpacing: '-0.01em', ...SGF }}>{section.title}</h2>
                  {section.content.split('\n\n').map((para, i) => (
                    <p key={i} style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: 18, fontSize: 18, ...SGF }}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key learnings */}
          <div style={{ marginTop: 64, padding: 48, borderRadius: 20, background: '#111111', border: '1px solid rgba(199,242,77,0.15)' }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#FFFFFF', marginBottom: 32, ...SGF }}>What this case study means for your team</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
              {[
                { n: '1', t: 'The operating model precedes the AI layer', b: 'Every time. The AI layer amplifies whatever system it connects to. A well-structured studio gets exponentially more value from AI than a reactive one.' },
                { n: '2', t: 'Intake is the first problem to solve', b: 'Before throughput, before quality, before ceremonies — the way work enters the team determines everything that follows. The filter gate is always the first build.' },
                { n: '3', t: 'Prompts are a legitimate build tool', b: 'Every piece of infrastructure in this case study was built using Claude. Not as a shortcut — as a genuine capability multiplier for a non-technical practitioner.' },
              ].map((l) => (
                <div key={l.n} style={{ display: 'flex', gap: 16 }}>
                  <span style={{ fontSize: 34, fontWeight: 800, color: '#C7F24D', flexShrink: 0, lineHeight: 1, ...SGF }}>{l.n}</span>
                  <div>
                    <p style={{ fontWeight: 600, color: '#FFFFFF', marginBottom: 8, fontSize: 17, ...SGF }}>{l.t}</p>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.6, ...SGF }}>{l.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section style={{ padding: '96px 24px', background: '#111111', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ color: '#C7F24D', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16, fontFamily: 'JetBrains Mono, monospace' }}>What's next</p>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 800, color: '#FFFFFF', marginBottom: 16, ...SGF }}>Explore the full methodology</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 40, lineHeight: 1.7, fontSize: 20, ...SGF }}>
            Everything documented here is available as a playbook. The full methodology — filter gate, operating model, ceremonies, AI layer — documented for teams to implement themselves.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services" style={{ background: '#C7F24D', color: '#0A0A0A', borderRadius: 100, padding: '14px 32px', fontWeight: 600, fontSize: 17, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, ...SGF }}>
              Read the playbook <ArrowRight size={15} />
            </Link>
            <Link to="/insights" style={{ background: 'transparent', color: '#FFFFFF', border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: 100, padding: '14px 32px', fontWeight: 600, fontSize: 17, textDecoration: 'none', ...SGF }}>
              Back to insights
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
