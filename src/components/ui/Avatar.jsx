import { generateInitials } from '@/lib/utils'
import { cn } from '@/lib/utils'

export default function Avatar({ name, src, size = 'md', color = '#0F1729', className = '' }) {
  const sizes = { sm: 'w-7 h-7 text-xs', md: 'w-9 h-9 text-sm', lg: 'w-12 h-12 text-base', xl: 'w-16 h-16 text-xl' }
  if (src) {
    return <img src={src} alt={name} className={cn('rounded-full object-cover', sizes[size], className)} />
  }
  return (
    <div
      className={cn('rounded-full flex items-center justify-center font-semibold text-white flex-shrink-0', sizes[size], className)}
      style={{ backgroundColor: color }}
    >
      {generateInitials(name)}
    </div>
  )
}
