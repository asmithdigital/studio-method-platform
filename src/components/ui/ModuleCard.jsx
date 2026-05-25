import { Clock, CheckCircle, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'
import Badge from './Badge'

export default function ModuleCard({ module, progress, locked = false, onClick }) {
  const done = progress?.status === 'complete'
  const started = progress?.status === 'started'

  return (
    <div
      onClick={!locked ? onClick : undefined}
      className={cn(
        'card flex flex-col gap-3 transition-all duration-200',
        !locked && 'hover:shadow-md hover:-translate-y-0.5 cursor-pointer',
        locked && 'opacity-50'
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <Badge variant={done ? 'jade' : started ? 'gold' : 'default'}>
            {done ? 'Complete' : started ? 'In Progress' : `Module ${module.order_index}`}
          </Badge>
        </div>
        {locked ? <Lock size={16} className="text-muted flex-shrink-0" /> : done ? <CheckCircle size={16} className="text-jade flex-shrink-0" /> : null}
      </div>
      <h3 className="font-display text-base font-semibold text-ink leading-snug">{module.title}</h3>
      <p className="text-xs text-muted leading-relaxed">{module.description}</p>
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div className="flex items-center gap-1 text-xs text-muted">
          <Clock size={12} />
          <span>{module.estimated_minutes} min</span>
        </div>
        <Badge variant="default">{module.category.replace('_', ' ')}</Badge>
      </div>
    </div>
  )
}
