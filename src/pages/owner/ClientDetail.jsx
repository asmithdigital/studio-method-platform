import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Mail, Building2, User, DollarSign, Calendar } from 'lucide-react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Tabs from '@/components/ui/Tabs'
import Badge from '@/components/ui/Badge'
import HealthIndicator from '@/components/ui/HealthIndicator'
import ProgressBar from '@/components/ui/ProgressBar'
import AIStatusSummary from '@/components/ai/AIStatusSummary'
import Timeline from '@/components/ui/Timeline'
import { FAKE_CLIENTS, FAKE_PROJECTS } from '@/lib/constants'

const tierLabel = { full_service: 'Full Service', studio_setup: 'Studio Setup', ai_layer: 'AI Layer', training: 'Training' }
const statusVariant = { active: 'jade', onboarding: 'blue', paused: 'gold', completed: 'default' }

export default function ClientDetail() {
  const { id } = useParams()
  const [tab, setTab] = useState('overview')
  const client = FAKE_CLIENTS.find(c => c.id === id) || FAKE_CLIENTS[0]
  const project = FAKE_PROJECTS.find(p => p.client_id === client.id)

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'project', label: 'Project' },
    { id: 'documents', label: 'Documents' },
    { id: 'notes', label: 'Notes' },
  ]

  return (
    <DashboardLayout title={client.company} subtitle={`${tierLabel[client.tier]} · ${client.industry}`}>
      <div className="mb-4">
        <Link to="/dashboard/clients" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
          <ArrowLeft size={14} /> Back to clients
        </Link>
      </div>

      {/* Header */}
      <div className="card mb-5">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0" style={{ background: client.logo_color }}>
              {client.logo_initial}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="font-display text-2xl font-bold text-ink">{client.company}</h2>
                <Badge variant={statusVariant[client.status] || 'default'} className="capitalize">{client.status}</Badge>
              </div>
              <p className="text-muted text-sm">{client.industry} · {client.company_size} employees</p>
              <div className="flex gap-4 mt-2 text-sm text-muted">
                <span className="flex items-center gap-1"><User size={13} /> {client.primary_contact}</span>
                <a href={`mailto:${client.primary_contact_email}`} className="flex items-center gap-1 hover:text-gold">
                  <Mail size={13} /> {client.primary_contact_email}
                </a>
              </div>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <HealthIndicator score={client.health_score} showLabel />
            {client.nps_score !== null && (
              <p className="text-xs text-muted mt-1">NPS: <span className="font-semibold text-ink">{client.nps_score}/10</span></p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-6 pt-5 border-t border-border">
          {[
            { icon: <DollarSign size={14} />, label: 'Contract value', value: `$${client.contract_value.toLocaleString()}` },
            { icon: <Calendar size={14} />, label: 'Start date', value: client.contract_start },
            { icon: <Calendar size={14} />, label: 'End date', value: client.contract_end },
            { icon: <User size={14} />, label: 'Consultant', value: client.primary_consultant },
          ].map((m) => (
            <div key={m.label}>
              <p className="text-xs text-muted flex items-center gap-1 mb-1">{m.icon} {m.label}</p>
              <p className="font-semibold text-ink text-sm">{m.value}</p>
            </div>
          ))}
        </div>
      </div>

      <Tabs tabs={tabs} active={tab} onChange={setTab} />
      <div className="mt-5">
        {tab === 'overview' && (
          <div className="grid lg:grid-cols-2 gap-5">
            <AIStatusSummary project={project} />
            <div className="card">
              <h3 className="font-semibold text-ink mb-4">Notes</h3>
              <p className="text-sm text-muted leading-relaxed">{client.notes}</p>
            </div>
          </div>
        )}
        {tab === 'project' && project && (
          <div className="space-y-5">
            <div className="card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-ink">{project.name}</h3>
                  <p className="text-sm text-muted">{project.description}</p>
                </div>
                <Badge variant={project.health === 'green' ? 'jade' : project.health === 'amber' ? 'gold' : 'rose'}>
                  {project.health}
                </Badge>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted">Progress</span>
                  <span className="font-medium text-ink">{project.completion_percent}%</span>
                </div>
                <ProgressBar value={project.completion_percent} color={project.health === 'green' ? 'jade' : 'gold'} />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted">Budget</p>
                  <p className="font-semibold text-ink">${project.budget.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-muted">Spent</p>
                  <p className="font-semibold text-ink">${project.spent.toLocaleString()} ({Math.round(project.spent / project.budget * 100)}%)</p>
                </div>
              </div>
            </div>
            <div className="card">
              <h3 className="font-semibold text-ink mb-4">Milestones</h3>
              <Timeline milestones={project.milestones} />
            </div>
          </div>
        )}
        {tab === 'documents' && (
          <div className="card">
            <p className="text-sm text-muted">No documents uploaded yet.</p>
          </div>
        )}
        {tab === 'notes' && (
          <div className="card">
            <h3 className="font-semibold text-ink mb-3">Engagement notes</h3>
            <p className="text-sm text-muted leading-relaxed">{client.notes}</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
