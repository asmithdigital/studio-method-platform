import { CreditCard, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Badge from '@/components/ui/Badge'
import { useAuthStore } from '@/store/authStore'
import { FAKE_INDIVIDUAL_USERS } from '@/lib/constants'

const planDetails = {
  individual: {
    name: 'Individual',
    price: '$49/month',
    features: ['All 12 training modules', 'Templates and guides', 'Community access', 'Monthly live Q&A', 'Certificate of completion'],
  },
  individual_pro: {
    name: 'Individual Pro',
    price: '$99/month',
    features: ['Everything in Individual', '2 × 30-min coaching calls/month', 'Direct email to Andrew', 'Custom implementation plan', 'Early access to new modules'],
  },
}

const invoiceHistory = [
  { id: 'INV-IND-012', date: '2026-05-01', amount: 49, status: 'paid', plan: 'Individual' },
  { id: 'INV-IND-011', date: '2026-04-01', amount: 49, status: 'paid', plan: 'Individual' },
  { id: 'INV-IND-010', date: '2026-03-20', amount: 0, status: 'paid', plan: 'Trial' },
]

export default function IndividualBilling() {
  const { profile } = useAuthStore()
  const user = FAKE_INDIVIDUAL_USERS.find(u => u.full_name === profile?.full_name) || FAKE_INDIVIDUAL_USERS[0]
  const plan = planDetails[user.plan] || planDetails.individual

  return (
    <DashboardLayout title="Billing" subtitle="Plan and payment details">
      <div className="grid lg:grid-cols-2 gap-5">
        {/* Current plan */}
        <div className="card">
          <h3 className="font-semibold text-ink mb-4">Current plan</h3>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-display text-xl font-bold text-ink">{plan.name}</p>
              <p className="text-gold font-semibold">{plan.price}</p>
            </div>
            <Badge variant="jade">Active</Badge>
          </div>
          <div className="space-y-2 mb-6">
            {plan.features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-muted">
                <CheckCircle2 size={13} className="text-jade flex-shrink-0" />
                {f}
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            {user.plan !== 'individual_pro' && (
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm bg-gold text-white rounded-lg hover:bg-gold-light">
                Upgrade to Pro <ArrowRight size={13} />
              </button>
            )}
            <button className="px-4 py-2 text-sm border border-border rounded-lg text-muted hover:text-rose hover:border-rose transition-colors">
              Cancel subscription
            </button>
          </div>
        </div>

        {/* Payment method */}
        <div className="card">
          <h3 className="font-semibold text-ink mb-4">Payment method</h3>
          <div className="flex items-center gap-3 p-4 rounded-xl border border-border mb-4">
            <CreditCard size={20} className="text-muted" />
            <div>
              <p className="font-medium text-ink">•••• •••• •••• 4242</p>
              <p className="text-xs text-muted">Visa · Expires 04/28</p>
            </div>
            <Badge variant="jade" className="ml-auto">Default</Badge>
          </div>
          <button className="text-sm text-gold hover:underline">Update payment method</button>
        </div>
      </div>

      {/* Invoice history */}
      <div className="card overflow-hidden mt-5">
        <div className="p-4 border-b border-border">
          <h3 className="font-semibold text-ink">Invoice history</h3>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-surface border-b border-border">
            <tr>
              <th className="text-left px-5 py-3 font-medium text-muted">Invoice</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Date</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Plan</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Amount</th>
              <th className="text-left px-5 py-3 font-medium text-muted">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoiceHistory.map((inv) => (
              <tr key={inv.id} className="border-b border-border last:border-b-0">
                <td className="px-5 py-3 font-medium text-ink">{inv.id}</td>
                <td className="px-5 py-3 text-muted">{inv.date}</td>
                <td className="px-5 py-3 text-muted">{inv.plan}</td>
                <td className="px-5 py-3 font-medium text-ink">{inv.amount > 0 ? `$${inv.amount}` : 'Free'}</td>
                <td className="px-5 py-3"><Badge variant="jade">{inv.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  )
}
