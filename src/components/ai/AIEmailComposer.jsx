import { useState } from 'react'
import { Mail, Copy, Sparkles } from 'lucide-react'
import { useAI } from '@/hooks/useAI'
import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'
import { useUIStore } from '@/store/uiStore'

export default function AIEmailComposer({ type, context, triggerLabel = 'Compose email' }) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState(null)
  const { generateEmail, loading } = useAI()
  const { addToast } = useUIStore()

  const handleGenerate = async () => {
    const result = await generateEmail(type, context)
    setEmail(result)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(`Subject: ${email.subject}\n\n${email.body}`)
    addToast('Email copied to clipboard', 'success')
  }

  return (
    <>
      <Button size="sm" variant="ghost" onClick={() => { setOpen(true); if (!email) handleGenerate() }}>
        <Mail size={13} />
        {triggerLabel}
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} title="AI Email Draft" size="lg">
        {loading && !email ? (
          <div className="flex items-center gap-2 text-sm text-muted py-8 justify-center">
            <Sparkles size={14} className="text-gold animate-pulse" />
            Composing email…
          </div>
        ) : email ? (
          <div className="space-y-4">
            <div>
              <label className="label">Subject</label>
              <p className="text-sm font-medium text-ink border border-border rounded-lg px-4 py-3">{email.subject}</p>
            </div>
            <div>
              <label className="label">Body</label>
              <pre className="text-sm text-ink border border-border rounded-lg px-4 py-3 whitespace-pre-wrap font-sans leading-relaxed min-h-32">{email.body}</pre>
            </div>
            <div className="flex gap-2">
              <Button size="sm" onClick={handleCopy}><Copy size={13} />Copy to clipboard</Button>
              <Button size="sm" variant="ghost" loading={loading} onClick={handleGenerate}><Sparkles size={13} />Regenerate</Button>
            </div>
          </div>
        ) : null}
      </Modal>
    </>
  )
}
