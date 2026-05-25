import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'

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
    period: 'Month 5–7',
    title: 'Journey management infrastructure',
    content: `Six months into the engagement, the team was running smoothly enough that I could look up. And when I looked up, I saw the knowledge problem.\n\nWe had done good research. We had journey maps — eleven of them across eight product areas. We had user research from fourteen studies across the preceding eighteen months. We had a design system with 180 components. And almost none of this knowledge was accessible in practice.\n\nThe journey maps were in Miro, scattered across eleven different boards from eleven different projects. Finding the relevant map for a given question required knowing which project had produced it, navigating to that board, and hoping the person who built it had organised it in a way you could follow. Most of the time, people just did the research again rather than find the existing answer.\n\nI built the journey management infrastructure in three parts. First: a single Miro board with governance. All eleven journey maps migrated to one place, one owner per journey, a quarterly review cycle. Second: a research pipeline — every new research project was required to produce journey-level insights as an explicit output, not just project-level findings. Third: a connection to product decisions — I established a standing agenda item in the product leadership meeting where the journey maps were referenced when prioritisation decisions were being made.\n\nThe third part was the hardest. Getting research in the room when decisions were being made required building trust with the product leadership team over months, not weeks. The journey maps became trusted when they were referenced and proven accurate twice in quick succession. After that, people started asking for them rather than me pushing them.`,
  },
  {
    period: 'Month 7–10',
    title: 'Building the AI layer',
    content: `The AI Orchestration Layer was the part of this story that I did not plan. I had been using Claude for smaller tasks throughout the engagement — drafting documentation, refining workshop agendas, thinking through design decisions. But the idea of building actual software with it did not occur to me until a specific conversation.\n\nA product manager came to me with a question: "Is there a modal component in our design system that handles destructive actions?" I knew the answer — yes, there was, and it had specific usage guidelines. But I could not send her to find it herself because the design system documentation was not good enough to navigate independently. I spent fifteen minutes finding the answer for her.\n\nAfterwards I described the problem to Claude. Not just the specific instance — the whole pattern. Forty-odd times per week, someone asked a question that our design system, our journey maps, or our documentation could answer. But because the knowledge was locked in files that required guidance to navigate, the question always landed on a designer.\n\nClaude proposed a solution: a Slack bot connected to the relevant tools via their APIs, using Claude to synthesise the content and answer questions in natural language. I said I had no development background. It said that was fine and we could build it together.\n\nThe first version took two evenings. It could answer questions about component names and basic specifications. The second version added journey map content. The third added GitHub documentation. By month nine, the bot was handling approximately forty queries per week, none of which required a designer to open a file.\n\nWhat surprised me about building the AI layer was how much it clarified the state of our underlying knowledge. The bot was only as useful as the content it could access. Poorly documented components produced poor answers. Journey maps with inconsistent labelling produced confused answers. The AI layer became a quality-control mechanism as much as a knowledge-access tool — because every time it failed to answer a question well, I knew exactly where the documentation gap was.`,
  },
  {
    period: 'Month 10–12',
    title: 'What the system looks like running',
    content: `A year after inheriting the chaos, the studio operates differently in a way that is measurable.\n\nThrough-put is up. We are shipping approximately three times the volume of design work at the same team size, and the quality is higher because work is scoped before it starts. The backlog has twenty-one items, all assigned, all scoped, all with defined owners and definitions of done.\n\nThe filter gate processes an average of eight new requests per week. Roughly half go back for clarification. Two to three are redirected to self-serve documentation. Two to three enter the delivery backlog per week fully scoped.\n\nThe Wednesday Studio Session still runs every week. It still produces breakthroughs. The help board at Friday Close generates four to six collaboration commitments per week that might otherwise have happened in isolation or not at all.\n\nThe AI bot is queried forty-plus times per week. The most common questions are component specifications, journey insights, and pattern guidance. The average answer takes four seconds.\n\nThe design system has 220 components, all documented, all with usage guidelines that the bot can access and surface. The journey management practice has eight active journeys, all with named owners, all reviewed quarterly.\n\nThe thing I am most proud of is not the technology. It is the fact that the team knows how to work. Onboarding a new designer now takes one week instead of three months. The ways of working documentation is good enough to explain the system without my involvement. The ceremonies run when I am on leave. The filter gate processes requests when I am not the one running it.\n\nThat is what a good operating model does: it keeps working when the person who built it is not in the room.`,
  },
  {
    period: 'Today',
    title: 'Studio Method as a consultancy',
    content: `Studio Method exists because every time I described what I had built inside that organisation, design managers told me they needed it too. Not a slightly different version adapted for their context — exactly this. The filter gate. The ceremonies. The AI layer. The journey management practice.\n\nThe methodology is now installed in four organisations. It has been delivered by a network of five consultants. The training platform — twelve modules, available individually and to teams — launched in early 2026.\n\nEvery element of Studio Method was built to solve a specific, observed problem. The filter gate was built because requests were coming in from everywhere. The three pathways were built because not all design work is the same and treating it as such creates chaos. The ceremonies were built because the team needed visibility they were not otherwise getting. The AI layer was built because knowledge was evaporating faster than we could capture it.\n\nThis is not a framework adapted from a book. It is a methodology built from twelve months inside a real organisation, iterated through experience, and refined through delivery. It works because it was built for the conditions it is deployed in: imperfect teams, incomplete buy-in, political constraints, and the daily reality of design work at scale.\n\nIf you are a design manager reading this and recognising your situation, the case study above is your situation. The methodology above is the solution. The question is whether you want to build it yourself, have it installed for you, or learn it at your own pace.\n\nAll three are available.`,
  },
]

export default function WorkPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-24 px-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto">
          <Link to="/insights" className="inline-flex items-center gap-1.5 text-white/40 text-sm hover:text-white/70 mb-8 transition-colors">
            <ArrowLeft size={14} /> Back
          </Link>
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Case Study</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Twelve months. One manager.<br />
            <span style={{ color: '#C4964A' }}>A complete design team operating system.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-10">
            How a practising UX Manager built the filter gate, three pathways, journey management practice, and AI orchestration layer inside a real Australian organisation — using only prompts.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.l} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="font-display text-3xl font-bold text-gold mb-1">{s.n}</p>
                <p className="text-white/50 text-xs leading-snug">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context bar */}
      <div className="border-b border-border bg-white">
        <div className="max-w-4xl mx-auto px-6 py-5 flex flex-wrap gap-8 text-sm text-muted">
          <div><span className="font-semibold text-ink">Author</span> — Andrew Smith, Founder</div>
          <div><span className="font-semibold text-ink">Duration</span> — 12 months</div>
          <div><span className="font-semibold text-ink">Team size</span> — 11 designers</div>
          <div><span className="font-semibold text-ink">Industry</span> — Technology</div>
          <div><span className="font-semibold text-ink">Published</span> — May 2026</div>
        </div>
      </div>

      {/* Case study body */}
      <article className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-16 max-w-3xl">
            <p className="text-xl text-muted leading-relaxed mb-6">
              This is the case study that became Studio Method. It is a first-person account of building a complete design team operating system from inside a real organisation — not from theory, not from consulting engagements, from twelve months of daily iteration on a team that needed to work better.
            </p>
            <p className="text-xl text-muted leading-relaxed">
              It is written as a chronological narrative because the order matters. The filter gate came before the operating model because you need to control intake before you can control throughput. The operating model came before the AI layer because the AI layer amplifies whatever system it is connected to — and you need to build the system first.
            </p>
          </div>

          {/* Timeline sections */}
          <div className="space-y-0">
            {timeline.map((section, idx) => (
              <div key={idx} className="grid md:grid-cols-[200px_1fr] gap-8 py-14 border-t border-border first:border-t-0">
                <div className="md:pt-1">
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gold bg-amber-50 px-3 py-1.5 rounded-full">{section.period}</span>
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-6">{section.title}</h2>
                  {section.content.split('\n\n').map((para, i) => (
                    <p key={i} className="text-muted leading-relaxed mb-4 text-base">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key learnings */}
          <div className="mt-16 p-8 rounded-2xl bg-navy text-white">
            <h2 className="font-display text-2xl font-bold mb-6">What this case study means for your team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { n: '1', t: 'The operating model precedes the AI layer', b: 'Every time. The AI layer amplifies whatever system it connects to. A well-structured studio gets exponentially more value from AI than a reactive one.' },
                { n: '2', t: 'Intake is the first problem to solve', b: 'Before throughput, before quality, before ceremonies — the way work enters the team determines everything that follows. The filter gate is always the first build.' },
                { n: '3', t: 'Prompts are a legitimate build tool', b: 'Every piece of infrastructure in this case study was built using Claude. Not as a shortcut — as a genuine capability multiplier for a non-technical practitioner.' },
              ].map((l) => (
                <div key={l.n} className="flex gap-4">
                  <span className="font-display text-3xl font-bold text-gold flex-shrink-0 leading-none">{l.n}</span>
                  <div>
                    <p className="font-semibold text-white mb-2">{l.t}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{l.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-24 px-6 bg-surface border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">What's next</p>
          <h2 className="font-display text-3xl font-bold text-ink mb-4">Ready to build this for your team?</h2>
          <p className="text-muted mb-8 leading-relaxed">
            Studio Method is now available as a consultancy service, a training programme, and an individual learning platform. Every element of the methodology described above can be installed in your organisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold px-8 py-4 rounded-xl text-base">
              Talk to us <ArrowRight size={15} />
            </Link>
            <Link to="/services" className="btn-ghost px-8 py-4 rounded-xl text-base">
              See all services
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
