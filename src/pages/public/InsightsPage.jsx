import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'
import { FAKE_INSIGHTS_ARTICLES } from '@/lib/constants'

const JKS = { fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }

const categories = [
  { value: 'all', label: 'All' },
  { value: 'methodology', label: 'Methodology' },
  { value: 'process', label: 'Process' },
  { value: 'ai_layer', label: 'AI Layer' },
  { value: 'leadership', label: 'Leadership' },
]

const categoryColors = {
  methodology: { bg: '#F0F0FF', color: '#6366F1' },
  process: { bg: '#FFF7ED', color: '#F59E0B' },
  ai_layer: { bg: '#F0FDF4', color: '#10B981' },
  leadership: { bg: '#F0F0FF', color: '#6366F1' },
}

export default function InsightsPage() {
  const [filter, setFilter] = useState('all')
  const articles = filter === 'all' ? FAKE_INSIGHTS_ARTICLES : FAKE_INSIGHTS_ARTICLES.filter(a => a.category === filter)

  return (
    <PublicLayout>
      {/* HERO */}
      <section style={{ background: '#FAFAF7', ...JKS }} className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: '#F0F0FF', color: '#6366F1' }}
          >
            Insights
          </div>
          <h1 className="mb-6" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#111111', lineHeight: 1.1, ...JKS }}>
            From the Studio Method blog
          </h1>
          <p style={{ fontSize: 18, color: '#6B7280', lineHeight: 1.7, ...JKS }}>
            Practical writing on design operations, team management, and AI tooling.
          </p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section style={{ background: '#FAFAF7', ...JKS }} className="py-16 px-6">
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
                  fontSize: 14,
                  border: filter === c.value ? 'none' : '1.5px solid #e5e7eb',
                  background: filter === c.value ? '#6366F1' : '#fff',
                  color: filter === c.value ? '#fff' : '#6B7280',
                  cursor: 'pointer',
                  ...JKS,
                }}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Two-column editorial grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((a) => {
              const cat = categoryColors[a.category] || categoryColors.methodology
              return (
                <Link
                  key={a.id}
                  to={`/insights/${a.slug}`}
                  className="flex flex-col gap-4 p-7 transition-all group"
                  style={{
                    background: '#fff',
                    borderRadius: 16,
                    boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <span
                    style={{ background: cat.bg, color: cat.color, borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 700, alignSelf: 'flex-start', ...JKS }}
                  >
                    {a.category.replace('_', ' ')}
                  </span>
                  <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111111', lineHeight: 1.35, ...JKS }}>
                    {a.title}
                  </h2>
                  <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, ...JKS }} className="line-clamp-2">
                    {a.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-auto" style={{ color: '#9ca3af' }}>
                    <Clock size={13} />
                    <span style={{ fontSize: 13, ...JKS }}>{a.read_time} min read</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* EMAIL SIGNUP */}
      <section style={{ background: '#F0F0FF', ...JKS }} className="py-20 px-6 text-center">
        <div className="max-w-lg mx-auto">
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#111111', marginBottom: 8, ...JKS }}>Get new articles by email</h2>
          <p style={{ fontSize: 16, color: '#6B7280', marginBottom: 24, ...JKS }}>No marketing. Just the articles, when they are published.</p>
          <form className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              style={{ flex: 1, padding: '12px 16px', borderRadius: 12, border: '1.5px solid #e5e7eb', fontSize: 15, outline: 'none', background: '#fff', ...JKS }}
            />
            <button
              type="submit"
              style={{ background: '#6366F1', color: '#fff', borderRadius: 12, padding: '12px 20px', fontWeight: 600, fontSize: 15, border: 'none', cursor: 'pointer', ...JKS }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </PublicLayout>
  )
}
