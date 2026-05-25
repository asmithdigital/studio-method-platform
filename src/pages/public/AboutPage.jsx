import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'

const JKS = { fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }

const values = [
  {
    number: '01',
    title: 'Honesty over comfort.',
    body: 'The methodology tells you what is not working before telling you what to do instead.',
    bg: '#F0F0FF',
    accent: '#6366F1',
  },
  {
    number: '02',
    title: 'Systems over personalities.',
    body: 'Built to outlast any individual. If the team cannot run it without help, the job is not done.',
    bg: '#FFF7ED',
    accent: '#F59E0B',
  },
  {
    number: '03',
    title: 'Done is better than perfect.',
    body: 'A running filter gate with rough edges delivers more value than a perfect process document nobody uses.',
    bg: '#F0FDF4',
    accent: '#10B981',
  },
]

export default function AboutPage() {
  return (
    <PublicLayout>
      {/* HERO */}
      <section style={{ background: '#FAFAF7', ...JKS }} className="py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: '#F0F0FF', color: '#6366F1' }}
          >
            About
          </div>
          <h1 className="mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, color: '#111111', lineHeight: 1.1, ...JKS }}>
            Built inside a real team.<br />Refined over twelve months.
          </h1>
          <p style={{ fontSize: 18, color: '#6B7280', lineHeight: 1.7, maxWidth: 540, margin: '0 auto', ...JKS }}>
            Studio Method is a design operations methodology that came from doing, not theorising.
          </p>
        </div>
      </section>

      {/* ORIGIN */}
      <section style={{ background: '#fff', ...JKS }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#111111', marginBottom: 16, ...JKS }}>
              Not borrowed from a book.
            </h2>
            <p style={{ fontSize: 17, color: '#6B7280', lineHeight: 1.8, marginBottom: 16, ...JKS }}>
              Every element of Studio Method was built because a specific problem existed in a real design team. The filter gate came first — because requests were arriving with no scope and no priority. The three pathways came next — because treating all design work the same was causing chaos.
            </p>
            <p style={{ fontSize: 17, color: '#6B7280', lineHeight: 1.8, ...JKS }}>
              The AI layer came last — because connecting tools manually was taking too long and knowledge kept evaporating between projects.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: '12', l: 'months of iteration' },
              { n: '3', l: 'core system components' },
              { n: '4+', l: 'tools connected' },
              { n: '0', l: 'borrowed frameworks' },
            ].map((s) => (
              <div
                key={s.l}
                style={{ background: '#F0F0FF', borderRadius: 16, padding: '24px 20px' }}
              >
                <p style={{ fontSize: 40, fontWeight: 800, color: '#6366F1', lineHeight: 1, ...JKS }}>{s.n}</p>
                <p style={{ fontSize: 13, color: '#6B7280', marginTop: 6, lineHeight: 1.4, ...JKS }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: '#FAFAF7', ...JKS }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center mb-14" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#111111', ...JKS }}>
            What we believe
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} style={{ background: v.bg, borderRadius: 16, padding: '32px 28px' }}>
                <span style={{ fontSize: 48, fontWeight: 800, color: v.accent, lineHeight: 1, opacity: 0.2, display: 'block', marginBottom: 4, ...JKS }}>{v.number}</span>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: '#111111', marginBottom: 10, lineHeight: 1.3, ...JKS }}>{v.title}</h3>
                <p style={{ fontSize: 16, color: '#6B7280', lineHeight: 1.7, ...JKS }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#6366F1', ...JKS }} className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 style={{ fontSize: 36, fontWeight: 800, color: '#fff', marginBottom: 12, ...JKS }}>Work with us</h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', marginBottom: 32, lineHeight: 1.7, ...JKS }}>
            Start with a discovery call. We will look at your team's situation honestly.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-semibold transition-all"
            style={{ background: '#fff', color: '#6366F1', borderRadius: 999, padding: '14px 28px', fontSize: 16, ...JKS }}
          >
            Book a call <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </PublicLayout>
  )
}
