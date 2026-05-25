import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, CheckCircle2, Upload } from 'lucide-react'
import DashboardLayout from '@/components/layout/DashboardLayout'
import StepIndicator from '@/components/ui/StepIndicator'
import Button from '@/components/ui/Button'

const steps = [
  { id: 1, title: 'Welcome', description: 'Introduction to Studio Method' },
  { id: 2, title: 'Personal details', description: 'Your profile information' },
  { id: 3, title: 'Specialisms', description: 'Areas of expertise' },
  { id: 4, title: 'Documents', description: 'Contract and references' },
  { id: 5, title: 'Required training', description: 'Complete 2 modules' },
  { id: 6, title: 'Complete', description: 'Ready to receive projects' },
]

const specialismOptions = [
  'Studio Design', 'Service Design', 'UX Research', 'Content Design', 'AI Implementation',
  'Design Systems', 'Facilitation', 'Strategy',
]

export default function ConsultantOnboarding() {
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState([])
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', location: '', linkedin: '', bio: '' })
  const navigate = useNavigate()

  const toggleSpecialism = (s) => {
    setSelected(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])
  }

  const next = () => { if (step < 6) setStep(step + 1) }
  const back = () => { if (step > 1) setStep(step - 1) }
  const finish = () => navigate('/consultant')

  return (
    <DashboardLayout title="Onboarding" subtitle="Complete your consultant setup">
      <div className="max-w-2xl mx-auto">
        <StepIndicator steps={steps.map(s => s.title)} current={step - 1} className="mb-8" />

        <div className="card">
          {step === 1 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-ink mb-4">Welcome to Studio Method</h2>
              <p className="text-muted leading-relaxed mb-4">
                As a Studio Method consultant, you will be delivering design operations engagements to Australian organisations. Our consultants are the primary delivery vehicle for the Studio Method — your quality, reliability, and client relationship skills represent the whole business.
              </p>
              <div className="bg-navy/5 rounded-xl p-5 mb-6">
                <h3 className="font-semibold text-ink mb-3">What to expect</h3>
                <div className="space-y-2">
                  {[
                    'Clear project scopes and defined deliverables',
                    'Day rates from $950–$1,350 depending on specialisms',
                    'Direct support from Andrew throughout engagements',
                    'Required to complete 4 core training modules',
                    'Weekly timesheet submission every Friday',
                  ].map((e) => (
                    <div key={e} className="flex items-start gap-2 text-sm text-muted">
                      <CheckCircle2 size={14} className="text-jade mt-0.5 flex-shrink-0" />
                      {e}
                    </div>
                  ))}
                </div>
              </div>
              <Button onClick={next}>Start onboarding <ArrowRight size={14} /></Button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="font-display text-xl font-bold text-ink mb-5">Personal details</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label">Full name</label>
                    <input className="input" value={form.full_name} onChange={e => setForm({ ...form, full_name: e.target.value })} placeholder="Jordan Nakamura" />
                  </div>
                  <div>
                    <label className="label">Email</label>
                    <input type="email" className="input" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label">Phone</label>
                    <input type="tel" className="input" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div>
                    <label className="label">Location</label>
                    <input className="input" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} placeholder="Melbourne" />
                  </div>
                </div>
                <div>
                  <label className="label">LinkedIn URL</label>
                  <input className="input" value={form.linkedin} onChange={e => setForm({ ...form, linkedin: e.target.value })} placeholder="linkedin.com/in/yourname" />
                </div>
                <div>
                  <label className="label">Professional bio (2–3 sentences)</label>
                  <textarea className="input" rows={4} value={form.bio} onChange={e => setForm({ ...form, bio: e.target.value })} placeholder="Describe your background and what makes you a great Studio Method consultant..." />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="font-display text-xl font-bold text-ink mb-2">Your specialisms</h2>
              <p className="text-muted text-sm mb-5">Select all that apply. These determine which projects you are matched to.</p>
              <div className="grid grid-cols-2 gap-3">
                {specialismOptions.map((s) => (
                  <button
                    key={s}
                    onClick={() => toggleSpecialism(s)}
                    className={`p-4 rounded-xl border text-left text-sm font-medium transition-all ${
                      selected.includes(s) ? 'border-gold bg-amber-50 text-ink' : 'border-border text-muted hover:border-border'
                    }`}
                  >
                    {selected.includes(s) && <CheckCircle2 size={14} className="text-gold inline mr-2" />}
                    {s}
                  </button>
                ))}
              </div>
              {selected.length > 0 && <p className="text-xs text-muted mt-3">{selected.length} selected</p>}
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="font-display text-xl font-bold text-ink mb-5">Documents</h2>
              <div className="space-y-4">
                {[
                  { label: 'Signed consultant contract', required: true },
                  { label: 'Two professional references', required: true },
                  { label: 'Portfolio or work samples', required: false },
                ].map((doc) => (
                  <div key={doc.label} className="flex items-center justify-between p-4 rounded-xl border border-border">
                    <div>
                      <p className="text-sm font-medium text-ink">{doc.label}</p>
                      {doc.required && <p className="text-xs text-rose mt-0.5">Required</p>}
                    </div>
                    <button className="flex items-center gap-2 px-3 py-2 text-xs border border-border rounded-lg hover:bg-surface text-muted">
                      <Upload size={12} /> Upload
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="font-display text-xl font-bold text-ink mb-2">Required training</h2>
              <p className="text-muted text-sm mb-5">Complete the first 2 modules before your first engagement.</p>
              <div className="space-y-3">
                {['Welcome to Studio Method', 'The Studio Operating Model'].map((t, i) => (
                  <div key={t} className="flex items-center justify-between p-4 rounded-xl border border-border">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={16} className={i === 0 ? 'text-jade' : 'text-border'} />
                      <span className="text-sm font-medium text-ink">{t}</span>
                    </div>
                    {i !== 0 && <button className="text-xs text-gold hover:underline">Start module</button>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-jade/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} className="text-jade" />
              </div>
              <h2 className="font-display text-2xl font-bold text-ink mb-3">Onboarding complete</h2>
              <p className="text-muted mb-6">Your profile is now active. Andrew will assign your first engagement shortly.</p>
              <Button onClick={finish} size="lg">
                Go to dashboard <ArrowRight size={14} />
              </Button>
            </div>
          )}

          {step < 6 && (
            <div className="flex justify-between mt-8 pt-5 border-t border-border">
              <button onClick={back} disabled={step === 1} className="flex items-center gap-1.5 text-sm text-muted hover:text-ink disabled:opacity-30">
                <ArrowLeft size={14} /> Back
              </button>
              <Button onClick={next}>
                {step === 5 ? 'Complete' : 'Continue'} <ArrowRight size={14} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
