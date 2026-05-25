import { useState } from 'react'
import { RefreshCw, Sparkles } from 'lucide-react'
import { generateProjectStatusAI } from '@/lib/anthropic'
import Spinner from '@/components/ui/Spinner'

export default function AIStatusSummary({ project }) {
  const [summary, setSummary] = useState(project?.ai_status_summary || '')
  const [loading, setLoading] = useState(false)

  const refresh = async () => {
    setLoading(true)
    try {
      const text = await generateProjectStatusAI(project, project.milestones, [])
      setSummary(text)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-2xl border border-gold/30 bg-amber-50/50 p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Sparkles size={15} className="text-gold" />
          <span className="text-xs font-semibold text-gold uppercase tracking-wide">AI Status Summary</span>
        </div>
        <button onClick={refresh} className="p-1.5 rounded-lg hover:bg-gold/10 text-gold transition-colors">
          {loading ? <Spinner size="sm" color="gold" /> : <RefreshCw size={13} />}
        </button>
      </div>
      <p className="text-sm text-ink leading-relaxed">{summary || 'Click refresh to generate an AI status summary.'}</p>
    </div>
  )
}
