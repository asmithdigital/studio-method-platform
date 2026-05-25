import { useState } from 'react'
import { Mail, MapPin, ArrowRight } from 'lucide-react'
import PublicLayout from '@/components/layout/PublicLayout'
import Button from '@/components/ui/Button'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', team_size: '', message: '', service: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PublicLayout>
      <section className="py-24 px-6 bg-navy text-white text-center">
        <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Contact</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Let's talk about your team</h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto">Fill in the form and we will come back to you within one business day. Or book directly below.</p>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          {submitted ? (
            <div className="md:col-span-2 text-center py-16">
              <div className="text-5xl mb-6">✓</div>
              <h2 className="font-display text-3xl font-bold text-ink mb-4">Message received</h2>
              <p className="text-muted mb-2">Thanks for reaching out. We will come back to you within one business day.</p>
              <p className="text-muted">In the meantime, the case study is worth reading: <a href="/work" className="text-gold hover:underline">Studio Method case study →</a></p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-display text-2xl font-bold text-ink mb-2">Send us a message</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label">Your name</label>
                    <input required className="input" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Sarah Chen" />
                  </div>
                  <div>
                    <label className="label">Email</label>
                    <input required type="email" className="input" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="sarah@company.com" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label">Organisation</label>
                    <input className="input" value={form.company} onChange={e => setForm({...form, company: e.target.value})} placeholder="Atlassian" />
                  </div>
                  <div>
                    <label className="label">Your role</label>
                    <input className="input" value={form.role} onChange={e => setForm({...form, role: e.target.value})} placeholder="Head of Design" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label">Team size</label>
                    <select className="input" value={form.team_size} onChange={e => setForm({...form, team_size: e.target.value})}>
                      <option value="">Select…</option>
                      <option>1–3</option><option>4–8</option><option>9–20</option><option>20+</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">Service interest</label>
                    <select className="input" value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                      <option value="">Select…</option>
                      <option>Studio Setup</option><option>AI Layer</option><option>Training</option><option>Individual</option><option>Not sure</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="label">What is happening in your team right now?</label>
                  <textarea required className="input" rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell us about the main challenge your design team is facing…" />
                </div>
                <Button type="submit" className="w-full justify-center">
                  Send message <ArrowRight size={15} />
                </Button>
              </form>
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink mb-6">Or book directly</h2>
                  <div className="rounded-2xl border border-border bg-surface p-8 text-center">
                    <p className="font-semibold text-ink mb-2">45-minute discovery call</p>
                    <p className="text-sm text-muted mb-6 leading-relaxed">We look at your team's situation together and tell you honestly whether Studio Method is the right fit. No sales pitch.</p>
                    <a href="https://calendly.com" target="_blank" rel="noreferrer" className="btn-gold px-6 py-3 rounded-xl inline-flex items-center gap-2">
                      Book on Calendly <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <Mail size={16} className="text-gold flex-shrink-0" />
                    <a href="mailto:hello@studiomethod.com.au" className="hover:text-ink transition-colors">hello@studiomethod.com.au</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <MapPin size={16} className="text-gold flex-shrink-0" />
                    <span>Adelaide, South Australia (working with teams globally)</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </PublicLayout>
  )
}
