import { cn } from '@/lib/utils'

export default function Card({ children, className = '', hover = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'card',
        hover && 'hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}
