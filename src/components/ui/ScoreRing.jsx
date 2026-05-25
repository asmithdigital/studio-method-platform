import { getHealthColor } from '@/lib/utils'

export default function ScoreRing({ score, size = 56, strokeWidth = 5 }) {
  const r = (size - strokeWidth * 2) / 2
  const circumference = 2 * Math.PI * r
  const offset = circumference - (score / 100) * circumference
  const color = getHealthColor(score)

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#F0EEE9" strokeWidth={strokeWidth} />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none" stroke={color} strokeWidth={strokeWidth}
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-xs font-bold" style={{ color }}>{score}</span>
    </div>
  )
}
