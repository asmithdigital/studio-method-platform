import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { useAI } from '@/hooks/useAI'
import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'

export default function AIModuleGenerator({ module, onGenerated }) {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState(null)
  const { generateModule, loading } = useAI()

  const handleGenerate = async () => {
    const result = await generateModule(module.title, module.audience, module.category)
    setContent(result)
    onGenerated?.(result)
  }

  return (
    <>
      <Button size="sm" variant="ghost" onClick={() => { setOpen(true); if (!content) handleGenerate() }}>
        <Sparkles size={12} />
        Generate content
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} title={`AI: ${module.title}`} size="xl">
        {loading && !content ? (
          <div className="flex items-center gap-2 text-sm text-muted py-8 justify-center">
            <Sparkles size={14} className="text-gold animate-pulse" />
            Generating module content…
          </div>
        ) : content ? (
          <div className="space-y-4 max-h-[60vh] overflow-y-auto text-sm">
            {content.introduction && <div><p className="font-medium text-ink mb-1">Introduction</p><p className="text-muted leading-relaxed">{content.introduction}</p></div>}
            {content.sections?.map((s, i) => (
              <div key={i}>
                <p className="font-medium text-ink mb-1">{s.heading}</p>
                <p className="text-muted leading-relaxed">{s.content}</p>
              </div>
            ))}
            {content.action_items?.length > 0 && (
              <div>
                <p className="font-medium text-ink mb-1">Action Items</p>
                <ul className="list-disc list-inside space-y-1 text-muted">{content.action_items.map((a, i) => <li key={i}>{a}</li>)}</ul>
              </div>
            )}
          </div>
        ) : null}
      </Modal>
    </>
  )
}
