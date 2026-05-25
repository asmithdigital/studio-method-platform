import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { FAKE_REVENUE_DATA } from '@/lib/constants'

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white border border-border rounded-xl px-3 py-2 shadow-md">
      <p className="text-xs font-medium text-muted">{label}</p>
      <p className="text-sm font-bold text-ink">AUD ${payload[0].value.toLocaleString()}</p>
    </div>
  )
}

export default function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={FAKE_REVENUE_DATA.monthly} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#C4964A" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#C4964A" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#7A7670' }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: '#7A7670' }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
        <Tooltip content={<CustomTooltip />} />
        <Area type="monotone" dataKey="revenue" stroke="#C4964A" strokeWidth={2} fill="url(#revenueGrad)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
