import { CheckCircle, Circle, Clock } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { cn } from '@/lib/utils'

const statusIcon = {
  complete: <CheckCircle size={18} className="text-jade" />,
  in_progress: <Clock size={18} className="text-gold" />,
  upcoming: <Circle size={18} className="text-border" />,
}

export default function Timeline({ milestones }) {
  return (
    <div className="relative">
      <div className="absolute left-[17px] top-0 bottom-0 w-px bg-border" />
      <div className="space-y-6">
        {milestones.map((m, i) => (
          <div key={m.id || i} className="flex gap-4 relative">
            <div className="flex-shrink-0 z-10 bg-white">{statusIcon[m.status] || statusIcon.upcoming}</div>
            <div className="flex-1 pb-2">
              <div className="flex items-start justify-between gap-2">
                <p className={cn('font-medium text-sm', m.status === 'upcoming' ? 'text-muted' : 'text-ink')}>{m.name}</p>
                <span className="text-xs text-muted whitespace-nowrap">
                  {m.completed_date ? formatDate(m.completed_date) : `Due ${formatDate(m.due_date)}`}
                </span>
              </div>
              {m.description && <p className="text-xs text-muted mt-0.5">{m.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
