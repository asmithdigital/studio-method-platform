import { Sparkles, RefreshCw } from 'lucide-react'
import Spinner from '@/components/ui/Spinner'

export default function AIInsightCard({ title = 'AI Summary', content, loading, onRefresh }) {
  return (
    <div className="rounded-2xl border border-gold/30 bg-amber-50/50 p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Sparkles size={15} className="text-gold" />
          <span className="text-xs font-semibold text-gold uppercase tracking-wide">{title}</span>
        </div>
        {onRefresh && (
          <button onClick={onRefresh} className="p-1.5 rounded-lg hover:bg-gold/10 text-gold transition-colors">
            <RefreshCw size={13} />
          </button>
        )}
      </div>
      {loading ? (
        <div className="flex items-center gap-2 text-sm text-muted">
          <Spinner size="sm" color="gold" />
          <span>Generating insight…</span>
        </div>
      ) : (
        <p className="text-sm text-ink leading-relaxed">{content || 'No AI summary available.'}</p>
      )}
    </div>
  )
}
