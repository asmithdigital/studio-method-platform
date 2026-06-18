import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'
import { FAKE_INSIGHTS_ARTICLES } from '@/lib/constants'

const SGF = { fontFamily: "'Schibsted Grotesk', system-ui, sans-serif" }

const categories = [
  { value: 'all', label: 'All' },
  { value: 'methodology', label: 'Methodology' },
  { value: 'process', label: 'Process' },
  { value: 'ai_layer', label: 'AI Layer' },
  { value: 'leadership', label: 'Leadership' },
]

export default function InsightsPage() {
  const [filter, setFilter] = useState('all')
  const articles = filter === 'all' ? FAKE_INSIGHTS_ARTICLES : FAKE_INSIGHTS_ARTICLES.filter(a => a.category === filter)

  return (
    <PublicLayout>
      {/* HERO */}
      <section style={{ background: '#0A0A0A', ...SGF }} className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: '#1A1A1A', color: '#C7F24D', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            Insights
          </div>
          <h1 className="mb-6" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1, ...SGF }}>
            From the Studio Method blog
          </h1>
          <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, ...SGF }}>
            Practical writing on design operations, team management, and AI tooling.
          </p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section style={{ background: '#0A0A0A', ...SGF }} className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setFilter(c.value)}
                className="transition-all font-semibold"
                style={{
                  padding: '8px 20px',
                  borderRadius: 999,
                  fontSize: 15,
                  border: filter === c.value ? 'none' : '1.5px solid rgba(255,255,255,0.08)',
                  background: filter === c.value ? '#C7F24D' : '#111111',
                  color: filter === c.value ? '#0A0A0A' : 'rgba(255,255,255,0.7)',
                  cursor: 'pointer',
                  ...SGF,
                }}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Two-column editorial grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((a) => (
              <Link
                key={a.id}
                to={`/insights/${a.slug}`}
                className="flex flex-col gap-4 p-7 transition-all group"
                style={{
                  background: '#111111',
                  borderRadius: 16,
                  border: '1px solid rgba(255,255,255,0.08)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <span
                  style={{ background: 'rgba(199,242,77,0.1)', color: '#C7F24D', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 700, alignSelf: 'flex-start', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                >
                  {a.category.replace('_', ' ')}
                </span>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.35, ...SGF }}>
                  {a.title}
                </h2>
                <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, ...SGF }} className="line-clamp-2">
                  {a.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-auto" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  <Clock size={13} />
                  <span style={{ fontSize: 14, ...SGF }}>{a.read_time_minutes} min read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL SIGNUP */}
      <section style={{ background: '#111111', ...SGF }} className="py-20 px-6 text-center">
        <div className="max-w-lg mx-auto">
          <h2 style={{ fontSize: 30, fontWeight: 700, color: '#FFFFFF', marginBottom: 8, ...SGF }}>Get new articles by email</h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', marginBottom: 24, ...SGF }}>No marketing. Just the articles, when they are published.</p>
          <form className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              style={{ flex: 1, padding: '12px 16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)', fontSize: 17, outline: 'none', background: '#1A1A1A', color: '#FFFFFF', ...SGF }}
            />
            <button
              type="submit"
              style={{ background: '#C7F24D', color: '#0A0A0A', borderRadius: 12, padding: '12px 20px', fontWeight: 600, fontSize: 17, border: 'none', cursor: 'pointer', ...SGF }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </PublicLayout>
  )
}
