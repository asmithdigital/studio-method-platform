import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'

const data = [
  { subject: 'Milestones', A: 85 },
  { subject: 'Budget', A: 72 },
  { subject: 'Engagement', A: 90 },
  { subject: 'Quality', A: 88 },
  { subject: 'Timeline', A: 78 },
]

export default function HealthChart() {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <RadarChart data={data}>
        <PolarGrid stroke="#DDD9D2" />
        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: '#7A7670' }} />
        <Radar dataKey="A" stroke="#C4964A" fill="#C4964A" fillOpacity={0.2} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
