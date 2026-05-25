import { useState } from 'react'
import { FileText, Sparkles } from 'lucide-react'
import { useAI } from '@/hooks/useAI'
import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'
import { SERVICES } from '@/lib/constants'

export default function AIProposalGenerator({ lead }) {
  const [open, setOpen] = useState(false)
  const [proposal, setProposal] = useState(null)
  const [service, setService] = useState(lead?.service_interest?.[0] || 'studio_setup')
  const { generateProposal, loading } = useAI()

  const handleGenerate = async () => {
    const result = await generateProposal(lead, service)
    setProposal(result)
  }

  return (
    <>
      <Button size="sm" variant="ghost" onClick={() => setOpen(true)}>
        <FileText size={13} />
        Generate proposal
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} title="AI Proposal Generator" size="xl">
        <div className="space-y-4">
          <div>
            <label className="label">Service</label>
            <select className="input" value={service} onChange={(e) => setService(e.target.value)}>
              {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
          </div>
          {!proposal ? (
            <Button loading={loading} onClick={handleGenerate} className="w-full justify-center">
              <Sparkles size={14} />
              Generate proposal for {lead?.company}
            </Button>
          ) : (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {Object.entries(proposal).map(([key, value]) => (
                <div key={key}>
                  <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">{key.replace(/_/g, ' ')}</p>
                  {Array.isArray(value) ? (
                    <ul className="space-y-1">{value.map((v, i) => <li key={i} className="text-sm text-ink pl-4 border-l-2 border-gold/30">{v}</li>)}</ul>
                  ) : (
                    <p className="text-sm text-ink leading-relaxed">{value}</p>
                  )}
                </div>
              ))}
              <Button size="sm" variant="ghost" loading={loading} onClick={handleGenerate}>
                <Sparkles size={13} />
                Regenerate
              </Button>
            </div>
          )}
        </div>
      </Modal>
    </>
  )
}
