import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { FAKE_CONSULTANTS } from '@/lib/constants'

const data = FAKE_CONSULTANTS.filter(c => c.status === 'active' || c.status === 'onboarding').map(c => ({
  name: c.full_name.split(' ')[0],
  used: c.capacity_days_per_week - (c.availability === 'unavailable' ? c.capacity_days_per_week : c.availability === 'partial' ? Math.ceil(c.capacity_days_per_week / 2) : 0),
  available: c.availability === 'available' ? c.capacity_days_per_week : c.availability === 'partial' ? Math.floor(c.capacity_days_per_week / 2) : 0,
}))

export default function CapacityChart() {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
        <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#7A7670' }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: '#7A7670' }} axisLine={false} tickLine={false} />
        <Tooltip />
        <Bar dataKey="used" stackId="a" fill="#0F1729" radius={[0, 0, 0, 0]} />
        <Bar dataKey="available" stackId="a" fill="#F0EEE9" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
