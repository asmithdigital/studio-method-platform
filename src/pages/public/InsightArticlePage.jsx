import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'
import ArticleCard from '@/components/ui/ArticleCard'
import Badge from '@/components/ui/Badge'
import { FAKE_INSIGHTS_ARTICLES } from '@/lib/constants'
import { formatDate } from '@/lib/utils'

const categoryVariant = { methodology: 'gold', process: 'blue', ai_layer: 'purple', leadership: 'jade' }

export default function InsightArticlePage() {
  const { slug } = useParams()
  const article = FAKE_INSIGHTS_ARTICLES.find(a => a.slug === slug)
  const related = FAKE_INSIGHTS_ARTICLES.filter(a => a.slug !== slug).slice(0, 3)

  if (!article) {
    return (
      <PublicLayout>
        <div className="py-32 text-center">
          <p className="text-muted">Article not found.</p>
          <Link to="/insights" className="text-gold mt-4 inline-block">← Back to insights</Link>
        </div>
      </PublicLayout>
    )
  }

  const paragraphs = article.body.split('\n\n')

  return (
    <PublicLayout>
      <article className="pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <Link to="/insights" className="flex items-center gap-2 text-muted text-sm hover:text-ink mb-8 transition-colors">
            <ArrowLeft size={14} /> All insights
          </Link>
          <div className="mb-6">
            <Badge variant={categoryVariant[article.category] || 'default'}>{article.category.replace('_', ' ')}</Badge>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">{article.title}</h1>
          <div className="flex items-center gap-3 text-sm text-muted mb-10 pb-10 border-b border-border">
            <span>{article.author}</span>
            <span>·</span>
            <span>{formatDate(article.published_date)}</span>
            <span>·</span>
            <span>{article.read_time_minutes} min read</span>
          </div>
          <div className="prose max-w-none space-y-5 text-base leading-relaxed text-ink/80">
            {paragraphs.map((p, i) => {
              if (p.startsWith('**') && p.endsWith('**')) {
                return <h2 key={i} className="font-display text-xl font-bold text-ink mt-8 mb-3">{p.slice(2, -2)}</h2>
              }
              if (p.startsWith('— ')) {
                return <p key={i} className="pl-4 border-l-4 border-gold/50 italic text-muted">{p.slice(2)}</p>
              }
              return <p key={i}>{p}</p>
            })}
          </div>
        </div>
      </article>

      <section className="py-16 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-xl font-bold text-ink">More from Studio Method</h2>
            <Link to="/insights" className="text-sm text-gold flex items-center gap-1">All articles <ArrowRight size={13} /></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map(a => <ArticleCard key={a.id} article={a} />)}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-navy text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-white mb-4">Enjoyed this article?</h2>
          <p className="text-white/60 mb-8">Get new articles directly to your inbox. No marketing, just writing.</p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold" />
            <button className="btn-gold px-5 py-3 rounded-lg text-sm">Subscribe</button>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
