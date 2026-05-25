import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import Badge from './Badge'

const categoryVariant = { methodology: 'gold', process: 'blue', ai_layer: 'purple', leadership: 'jade' }

export default function ArticleCard({ article }) {
  return (
    <Link to={`/insights/${article.slug}`} className="card hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col group">
      <div className="mb-3">
        <Badge variant={categoryVariant[article.category] || 'default'}>{article.category.replace('_', ' ')}</Badge>
      </div>
      <h3 className="font-display text-lg font-semibold text-ink mb-2 group-hover:text-gold transition-colors leading-snug">{article.title}</h3>
      <p className="text-sm text-muted leading-relaxed flex-1 mb-4">{article.excerpt}</p>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-xs text-muted">
          <span>{formatDate(article.published_date)}</span>
          <span>·</span>
          <span>{article.read_time_minutes} min read</span>
        </div>
        <ArrowRight size={14} className="text-gold group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  )
}
