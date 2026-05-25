import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'
import Avatar from '@/components/ui/Avatar'

const values = [
  { title: 'Honesty over comfort', body: 'We tell clients when something is not going to work. We say so when an engagement is at risk. Comfortable lies are worse than uncomfortable truths.' },
  { title: 'Systems over personalities', body: 'The methodology is designed to outlast any individual, including us. If the team cannot run the operating model without us, we have not done our job.' },
  { title: 'Practical over theoretical', body: 'Every element of the Studio Method was built because a specific problem existed in a real team. Not adapted from a book, not borrowed from another industry.' },
  { title: 'Done is better than perfect', body: 'A running filter gate with rough edges delivers more value than a perfect process document that nobody uses. We bias toward implementation.' },
]

export default function AboutPage() {
  return (
    <PublicLayout>
      <section className="py-24 px-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">About Studio Method</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Built from the inside</h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Studio Method is a design operations consultancy founded by Andrew Smith in 2026. The methodology it delivers was not invented in a consultancy — it was built inside a real Australian organisation over twelve months of practice, iteration, and failure.
            </p>
          </div>
          <div className="flex justify-center">
            <Avatar name="Andrew Smith" size="xl" color="#C4964A" className="w-32 h-32 text-4xl" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-8">The founder's story</h2>
          <div className="prose max-w-none text-muted space-y-6 text-base leading-relaxed">
            <p>
              Andrew Smith spent ten years as a UX practitioner before becoming a manager. When he stepped into his first management role — inheriting a team of four embedded across product squads with no shared process, no operating model, and no visibility into what the team was carrying — he spent the first six weeks feeling lost.
            </p>
            <p>
              The designers were talented. The work they produced was good. But it was not scaling. Requests came from everywhere. Everything was urgent. Designers were permanently reactive, perpetually behind, and quietly burning out. Andrew knew the problem was structural — but he did not have a model for fixing it.
            </p>
            <p>
              What followed was twelve months of building. The filter gate came first — a simple process to ensure every design request was scoped before it entered the backlog. The three pathways came next — the recognition that Discovery, Delivery, and Self-Serve work need fundamentally different processes. The studio ceremonies came after — Monday backlog review, Wednesday studio session, Friday close. Journey management came when research started compounding instead of evaporating.
            </p>
            <p>
              And then came the AI layer. Using Claude, Andrew built a Slack bot that could search simultaneously across the team's Figma design system, Miro journey maps, and GitHub documentation. A React application deployed to GitHub Pages. A journey management platform populated from FigJam data. A nightly check comparing design specs against the production site. All of it built from prompts, without writing a line of code.
            </p>
            <p>
              When the pattern became clear — that this was a methodology, not just a solution to one team's problems — Studio Method was founded. The methodology is now installed for organisations, delivered by a network of specialist consultants, and available as a self-paced training programme for individuals who want to learn it themselves.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-12 text-center">What we believe</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="card">
                <h3 className="font-display text-lg font-semibold text-ink mb-2">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center bg-navy text-white">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-6">Work with us</h2>
          <p className="text-white/60 mb-8">Start with a discovery call. We will look at your team's situation and tell you honestly what we think.</p>
          <Link to="/contact" className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-xl">
            Book a call <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </PublicLayout>
  )
}
