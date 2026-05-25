import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, FileText, Send, Download } from 'lucide-react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Badge from '@/components/ui/Badge'

const fakeProposals = {
  'prop-001': {
    id: 'prop-001',
    client: 'REA Group',
    contact: 'Marcus Webb',
    email: 'marcus.webb@rea-group.com',
    service: 'Studio Setup',
    value: 52000,
    status: 'sent',
    sent_date: '2026-05-19',
    valid_until: '2026-06-02',
    duration: '10 weeks',
    summary: 'A Studio Method Studio Setup engagement for REA Group\'s 12-person design team, spanning 3 product squads. The engagement will install the complete Studio Method operating model — filter gate, three pathways, ceremonies, and ways of working documentation.',
    scope: [
      'Team assessment and current state audit (2 weeks)',
      'Studio model and filter gate design (2 weeks)',
      'Implementation Sprint 1: Ceremonies live (2 weeks)',
      'Implementation Sprint 2: Filter gate operational (2 weeks)',
      'Handover and sustainability plan (2 weeks)',
    ],
    investment: [
      { item: 'Studio Setup engagement (10 weeks)', amount: 46000 },
      { item: 'Ways of working documentation', amount: 3500 },
      { item: 'Team training (2 sessions)', amount: 2500 },
    ],
    notes: 'Proposal sent 19 May. Follow-up call on 24 May. Budget approved. Decision expected by 2 June.',
  },
}

const statusVariant = { draft: 'default', sent: 'blue', accepted: 'jade', declined: 'rose' }

export default function ProposalDetail() {
  const { id } = useParams()
  const p = fakeProposals[id] || fakeProposals['prop-001']
  const total = p.investment.reduce((s, i) => s + i.amount, 0)

  return (
    <DashboardLayout title={`Proposal — ${p.client}`} subtitle={p.service}>
      <div className="mb-4">
        <Link to="/dashboard/proposals" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
          <ArrowLeft size={14} /> Back to proposals
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          {/* Header */}
          <div className="card">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="font-display text-2xl font-bold text-ink">{p.client}</h2>
                  <Badge variant={statusVariant[p.status] || 'default'} className="capitalize">{p.status}</Badge>
                </div>
                <p className="text-muted">{p.contact} · {p.email}</p>
              </div>
              <p className="font-display text-3xl font-bold text-gold">${p.value.toLocaleString()}</p>
            </div>
          </div>

          {/* Summary */}
          <div className="card">
            <h3 className="font-semibold text-ink mb-3">Engagement summary</h3>
            <p className="text-sm text-muted leading-relaxed">{p.summary}</p>
          </div>

          {/* Scope */}
          <div className="card">
            <h3 className="font-semibold text-ink mb-4">Scope of work</h3>
            <div className="space-y-2">
              {p.scope.map((s, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-muted">
                  <span className="font-display font-bold text-border w-5 text-center flex-shrink-0">{i + 1}</span>
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Investment */}
          <div className="card">
            <h3 className="font-semibold text-ink mb-4">Investment</h3>
            <table className="w-full text-sm">
              <tbody>
                {p.investment.map((item) => (
                  <tr key={item.item} className="border-b border-border">
                    <td className="py-3 text-muted">{item.item}</td>
                    <td className="py-3 font-semibold text-ink text-right">${item.amount.toLocaleString()}</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-3 font-semibold text-ink">Total (AUD, ex GST)</td>
                  <td className="py-3 font-bold text-ink text-right">${total.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-5">
          <div className="card">
            <h3 className="font-semibold text-ink mb-4">Details</h3>
            <div className="space-y-3 text-sm">
              {[
                { l: 'Service', v: p.service },
                { l: 'Duration', v: p.duration },
                { l: 'Value', v: `$${p.value.toLocaleString()}` },
                { l: 'Sent', v: p.sent_date || 'Not yet sent' },
                { l: 'Valid until', v: p.valid_until || '—' },
              ].map(r => (
                <div key={r.l} className="flex justify-between">
                  <span className="text-muted">{r.l}</span>
                  <span className="font-medium text-ink">{r.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold text-ink mb-3">Notes</h3>
            <p className="text-sm text-muted leading-relaxed">{p.notes}</p>
          </div>

          <div className="card">
            <h3 className="font-semibold text-ink mb-3">Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-4 py-3 rounded-lg bg-gold text-white text-sm hover:bg-gold-light">
                <Send size={14} /> Send to client
              </button>
              <button className="w-full flex items-center gap-2 px-4 py-3 rounded-lg border border-border text-sm hover:bg-surface">
                <Download size={14} /> Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
