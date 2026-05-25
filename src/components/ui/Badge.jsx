import { cn } from '@/lib/utils'

const variants = {
  default: 'bg-surface text-muted',
  gold: 'bg-amber-100 text-amber-800',
  jade: 'bg-green-100 text-green-800',
  rose: 'bg-red-100 text-red-800',
  blue: 'bg-blue-100 text-blue-800',
  purple: 'bg-purple-100 text-purple-800',
  navy: 'bg-navy text-white',
}

export default function Badge({ children, variant = 'default', className = '' }) {
  return (
    <span className={cn('badge', variants[variant], className)}>
      {children}
    </span>
  )
}
