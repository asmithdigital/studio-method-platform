import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, FileText } from 'lucide-react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Badge from '@/components/ui/Badge'
import AIProposalGenerator from '@/components/ai/AIProposalGenerator'
import { FAKE_LEADS } from '@/lib/constants'

const fakeProposals = [
  {
    id: 'prop-001',
    client: 'REA Group',
    contact: 'Marcus Webb',
    service: 'Studio Setup',
    value: 52000,
    status: 'sent',
    sent_date: '2026-05-19',
    valid_until: '2026-06-02',
    notes: 'Proposal for 10-week Studio Setup. Follow-up call on 24 May.',
  },
  {
    id: 'prop-002',
    client: 'ANZ Bank',
    contact: 'Lisa Park',
    service: 'Studio Setup + Training',
    value: 78000,
    status: 'draft',
    sent_date: null,
    valid_until: null,
    notes: 'Awaiting FY27 budget approval (July). Draft ready to send.',
  },
  {
    id: 'prop-003',
    client: 'Afterpay',
    contact: 'James Okafor',
    service: 'Full Service',
    value: 65000,
    status: 'accepted',
    sent_date: '2026-01-20',
    valid_until: '2026-02-03',
    notes: 'Won. Engagement active.',
  },
]

const statusVariant = { draft: 'default', sent: 'blue', accepted: 'jade', declined: 'rose' }

export default function ProposalsPage() {
  const [showGenerator, setShowGenerator] = useState(false)
  const qualifiedLeads = FAKE_LEADS.filter(l => ['qualified', 'contacted'].includes(l.status))

  return (
    <DashboardLayout title="Proposals" subtitle={`${fakeProposals.length} proposals`}>
      <div className="flex justify-end mb-5 gap-3">
        <button onClick={() => setShowGenerator(!showGenerator)} className="flex items-center gap-2 px-4 py-2 text-sm border border-border bg-white rounded-lg hover:bg-surface">
          AI Generate
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-sm bg-gold text-white rounded-lg hover:bg-gold-light">
          <Plus size={14} /> New proposal
        </button>
      </div>

      {showGenerator && (
        <div className="mb-5 card space-y-3">
          <p className="font-semibold text-ink text-sm">Generate proposal for lead</p>
          <div className="grid grid-cols-2 gap-3">
            {qualifiedLeads.slice(0,4).map(lead => (
              <div key={lead.id} className="flex items-center justify-between p-3 rounded-xl border border-border">
                <div>
                  <p className="text-sm font-medium text-ink">{lead.full_name}</p>
                  <p className="text-xs text-muted">{lead.company}</p>
                </div>
                <AIProposalGenerator lead={lead} />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-3">
        {fakeProposals.map((p) => (
          <Link key={p.id} to={`/dashboard/proposals/${p.id}`} className="card hover:shadow-md transition-shadow block">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center">
                  <FileText size={18} className="text-muted" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-ink">{p.client}</h3>
                    <Badge variant={statusVariant[p.status] || 'default'} className="capitalize">{p.status}</Badge>
                  </div>
                  <p className="text-sm text-muted">{p.contact} · {p.service}</p>
                  <p className="text-xs text-muted mt-1">{p.notes}</p>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-semibold text-ink">${p.value.toLocaleString()}</p>
                {p.sent_date && <p className="text-xs text-muted mt-1">Sent {p.sent_date}</p>}
                {p.valid_until && <p className="text-xs text-muted">Valid until {p.valid_until}</p>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </DashboardLayout>
  )
}
