import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { FAKE_REVENUE_DATA } from '@/lib/constants'

const data = [
  { stage: 'New', value: FAKE_REVENUE_DATA.pipeline.new, color: '#DDD9D2' },
  { stage: 'Contacted', value: FAKE_REVENUE_DATA.pipeline.contacted, color: '#7A7670' },
  { stage: 'Qualified', value: FAKE_REVENUE_DATA.pipeline.qualified, color: '#C4964A' },
  { stage: 'Proposal', value: FAKE_REVENUE_DATA.pipeline.proposal_sent, color: '#2A7B5C' },
]

export default function PipelineChart() {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
        <XAxis dataKey="stage" tick={{ fontSize: 11, fill: '#7A7670' }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: '#7A7670' }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
        <Tooltip formatter={(v) => [`AUD $${v.toLocaleString()}`, 'Value']} />
        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
          {data.map((d, i) => <Cell key={i} fill={d.color} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
