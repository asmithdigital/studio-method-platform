import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { week: 'W1', leads: 2, projects: 3 },
  { week: 'W2', leads: 4, projects: 3 },
  { week: 'W3', leads: 3, projects: 4 },
  { week: 'W4', leads: 6, projects: 4 },
  { week: 'W5', leads: 5, projects: 4 },
  { week: 'W6', leads: 8, projects: 4 },
]

export default function ActivityChart() {
  return (
    <ResponsiveContainer width="100%" height={160}>
      <LineChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
        <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#7A7670' }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 11, fill: '#7A7670' }} axisLine={false} tickLine={false} />
        <Tooltip />
        <Line type="monotone" dataKey="leads" stroke="#C4964A" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="projects" stroke="#2A7B5C" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}
