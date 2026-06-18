import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'
import { FAKE_INSIGHTS_ARTICLES } from '@/lib/constants'
import { formatDate } from '@/lib/utils'

const SGF = { fontFamily: "'Schibsted Grotesk', system-ui, sans-serif" }

export default function InsightArticlePage() {
  const { slug } = useParams()
  const article = FAKE_INSIGHTS_ARTICLES.find(a => a.slug === slug)
  const related = FAKE_INSIGHTS_ARTICLES.filter(a => a.slug !== slug).slice(0, 3)

  if (!article) {
    return (
      <PublicLayout>
        <div className="py-32 text-center" style={{ ...SGF }}>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>Article not found.</p>
          <Link to="/insights" style={{ color: '#C7F24D', marginTop: 16, display: 'inline-block', ...SGF }}>← Back to insights</Link>
        </div>
      </PublicLayout>
    )
  }

  const paragraphs = article.body.split('\n\n')

  return (
    <PublicLayout>
      <article style={{ paddingTop: 96, paddingBottom: 64, paddingLeft: 24, paddingRight: 24, background: '#0A0A0A' }}>
        <div style={{ maxWidth: 672, margin: '0 auto' }}>
          <Link to="/insights" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: 15, textDecoration: 'none', marginBottom: 32, ...SGF }}>
            <ArrowLeft size={14} /> All insights
          </Link>
          <div style={{ marginBottom: 24 }}>
            <span style={{ background: 'rgba(199,242,77,0.1)', color: '#C7F24D', borderRadius: 999, padding: '4px 14px', fontSize: 12, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {article.category.replace('_', ' ')}
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 800, color: '#FFFFFF', marginBottom: 16, lineHeight: 1.2, letterSpacing: '-0.02em', ...SGF }}>
            {article.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 40, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,0.08)', ...SGF }}>
            <span>{article.author}</span>
            <span>·</span>
            <span>{formatDate(article.published_date)}</span>
            <span>·</span>
            <span>{article.read_time_minutes} min read</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {paragraphs.map((p, i) => {
              if (p.startsWith('**') && p.endsWith('**')) {
                return <h2 key={i} style={{ fontSize: 24, fontWeight: 700, color: '#FFFFFF', marginTop: 16, marginBottom: 4, ...SGF }}>{p.slice(2, -2)}</h2>
              }
              if (p.startsWith('— ')) {
                return <p key={i} style={{ paddingLeft: 16, borderLeft: '3px solid rgba(199,242,77,0.4)', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', fontSize: 18, lineHeight: 1.7, ...SGF }}>{p.slice(2)}</p>
              }
              return <p key={i} style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, ...SGF }}>{p}</p>
            })}
          </div>
        </div>
      </article>

      <section style={{ padding: '64px 24px', background: '#111111' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#FFFFFF', ...SGF }}>More from Studio Method</h2>
            <Link to="/insights" style={{ fontSize: 15, color: '#C7F24D', display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', ...SGF }}>All articles <ArrowRight size={13} /></Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {related.map(a => (
              <Link
                key={a.id}
                to={`/insights/${a.slug}`}
                style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 28, background: '#1A1A1A', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}
              >
                <span style={{ fontSize: 11, color: '#C7F24D', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{a.category.replace('_', ' ')}</span>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.35, ...SGF }}>{a.title}</h3>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, ...SGF }}>{a.excerpt}</p>
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', marginTop: 'auto', ...SGF }}>{a.read_time_minutes} min read</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 24px', background: '#1A1A1A', textAlign: 'center' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: '#FFFFFF', marginBottom: 16, ...SGF }}>Enjoyed this article?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, marginBottom: 32, ...SGF }}>Get new articles directly to your inbox. No marketing, just writing.</p>
          <div style={{ display: 'flex', gap: 8, maxWidth: 360, margin: '0 auto' }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{ flex: 1, padding: '12px 16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)', background: '#111111', color: '#FFFFFF', fontSize: 16, outline: 'none', ...SGF }}
            />
            <button style={{ background: '#C7F24D', color: '#0A0A0A', borderRadius: 12, padding: '12px 20px', fontWeight: 600, fontSize: 16, border: 'none', cursor: 'pointer', ...SGF }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
