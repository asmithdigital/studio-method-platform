import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Mail, Calendar, Building2, Tag, ExternalLink } from 'lucide-react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Badge from '@/components/ui/Badge'
import ScoreRing from '@/components/ui/ScoreRing'
import AILeadScorer from '@/components/ai/AILeadScorer'
import AIEmailComposer from '@/components/ai/AIEmailComposer'
import { FAKE_LEADS } from '@/lib/constants'

const statusVariant = { new: 'default', contacted: 'blue', qualified: 'gold', proposal_sent: 'purple', won: 'jade', lost: 'rose' }
const sourceLabel = { linkedin: 'LinkedIn', referral: 'Referral', website: 'Website', conference: 'Conference' }

const serviceLabels = { studio_setup: 'Studio Setup', ai_layer: 'AI Layer', training: 'Training', individual: 'Individual' }

export default function LeadDetail() {
  const { id } = useParams()
  const lead = FAKE_LEADS.find(l => l.id === id) || FAKE_LEADS[0]

  return (
    <DashboardLayout title={lead.full_name} subtitle={`${lead.title} · ${lead.company}`}>
      <div className="mb-4">
        <Link to="/dashboard/leads" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
          <ArrowLeft size={14} /> Back to pipeline
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Main profile */}
        <div className="lg:col-span-2 space-y-5">
          {/* Header card */}
          <div className="card flex items-start gap-6">
            <ScoreRing score={lead.score} size={64} />
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink">{lead.full_name}</h2>
                  <p className="text-muted">{lead.title}, {lead.company}</p>
                </div>
                <Badge variant={statusVariant[lead.status] || 'default'} className="flex-shrink-0">
                  {lead.status.replace('_', ' ')}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted">
                <a href={`mailto:${lead.email}`} className="flex items-center gap-1.5 hover:text-gold">
                  <Mail size={13} /> {lead.email}
                </a>
                <span className="flex items-center gap-1.5">
                  <Building2 size={13} /> {lead.company}
                </span>
                <span className="flex items-center gap-1.5">
                  <Tag size={13} /> {sourceLabel[lead.source]}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {lead.service_interest.map(s => (
                  <Badge key={s} variant="gold">{serviceLabels[s] || s}</Badge>
                ))}
              </div>
            </div>
          </div>

          {/* AI summary */}
          <div className="card bg-navy/5 border-navy/10">
            <p className="text-xs font-semibold uppercase tracking-widest text-navy mb-3">AI Assessment</p>
            <p className="text-sm text-muted leading-relaxed">{lead.ai_summary}</p>
          </div>

          {/* Pain points */}
          <div className="card">
            <h3 className="font-semibold text-ink mb-4">Pain points</h3>
            <div className="space-y-2">
              {lead.pain_points.map((p) => (
                <div key={p} className="flex items-start gap-2 text-sm text-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose mt-2 flex-shrink-0" />
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="card">
            <h3 className="font-semibold text-ink mb-3">Notes</h3>
            <p className="text-sm text-muted leading-relaxed">{lead.notes}</p>
          </div>

          {/* AI Email Composer */}
          <AIEmailComposer lead={lead} />
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Quick facts */}
          <div className="card">
            <h3 className="font-semibold text-ink mb-4">Lead details</h3>
            <div className="space-y-3 text-sm">
              {[
                { label: 'Budget range', value: lead.budget_range || '—' },
                { label: 'Timeline', value: lead.timeline || '—' },
                { label: 'Last contact', value: lead.last_contact || '—' },
                { label: 'Next follow-up', value: lead.next_followup || '—' },
                { label: 'Created', value: lead.created_at },
                { label: 'Source', value: sourceLabel[lead.source] },
              ].map((row) => (
                <div key={row.label} className="flex justify-between">
                  <span className="text-muted">{row.label}</span>
                  <span className="font-medium text-ink text-right">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Lead Scorer */}
          <AILeadScorer lead={lead} />

          {/* Actions */}
          <div className="card">
            <h3 className="font-semibold text-ink mb-4">Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-3 rounded-lg border border-border text-sm hover:bg-surface flex items-center gap-2">
                <Calendar size={14} className="text-gold" /> Schedule follow-up
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg border border-border text-sm hover:bg-surface flex items-center gap-2">
                <Mail size={14} className="text-gold" /> Send email
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg bg-gold text-white text-sm hover:bg-gold-light flex items-center gap-2">
                <ExternalLink size={14} /> Create proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
