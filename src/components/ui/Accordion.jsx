import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="divide-y divide-border">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="font-medium text-ink text-sm">{item.question}</span>
            <ChevronDown
              size={16}
              className={cn('text-muted flex-shrink-0 transition-transform duration-200', open === i && 'rotate-180')}
            />
          </button>
          {open === i && (
            <div className="pb-4 text-sm text-muted leading-relaxed">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  )
}
