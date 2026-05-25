import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { useAI } from '@/hooks/useAI'
import ScoreRing from '@/components/ui/ScoreRing'
import Button from '@/components/ui/Button'

export default function AILeadScorer({ lead, onScore }) {
  const { scoreLead, loading } = useAI()
  const [result, setResult] = useState(null)

  const handleScore = async () => {
    const res = await scoreLead(lead)
    setResult(res)
    onScore?.(res)
  }

  return (
    <div className="rounded-xl border border-border p-4 bg-white">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-gold" />
          <span className="text-sm font-semibold text-ink">AI Lead Score</span>
        </div>
        {result && <ScoreRing score={result.score} size={44} />}
      </div>
      {result ? (
        <div className="space-y-2">
          <p className="text-xs text-muted leading-relaxed">{result.reasoning}</p>
          <p className="text-xs font-medium text-jade">{result.recommended_action}</p>
          {result.risk_flags?.length > 0 && (
            <ul className="text-xs text-rose space-y-0.5">
              {result.risk_flags.map((f, i) => <li key={i}>⚠ {f}</li>)}
            </ul>
          )}
        </div>
      ) : (
        <Button size="sm" variant="ghost" loading={loading} onClick={handleScore}>
          <Sparkles size={12} />
          Score with AI
        </Button>
      )}
    </div>
  )
}
