export function IllustrationFilterGate({ className }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background lavender blob */}
      <ellipse cx="100" cy="105" rx="88" ry="78" fill="#F0F0FF" />

      {/* Funnel body */}
      <path d="M44 52 L156 52 L124 110 L124 158 L76 158 L76 110 Z" fill="#6366F1" opacity="0.85" rx="8" />
      <path d="M44 52 L156 52 L124 110 L124 158 L76 158 L76 110 Z" fill="url(#funnelGrad)" />

      {/* Funnel rounded top edge */}
      <rect x="40" y="46" width="120" height="14" rx="7" fill="#6366F1" />

      {/* Bottom spout rounding */}
      <rect x="72" y="150" width="56" height="16" rx="8" fill="#6366F1" opacity="0.7" />

      {/* Input circles - entering top */}
      <circle cx="62" cy="30" r="10" fill="#F59E0B" />
      <circle cx="88" cy="22" r="8" fill="#10B981" />
      <circle cx="115" cy="26" r="9" fill="#EC4899" />
      <circle cx="140" cy="20" r="7" fill="#6366F1" opacity="0.6" />
      <circle cx="75" cy="15" r="6" fill="#F59E0B" opacity="0.5" />

      {/* Output circles - exiting bottom, cleaner */}
      <circle cx="86" cy="178" r="11" fill="#6366F1" />
      <circle cx="114" cy="178" r="11" fill="#10B981" />

      <defs>
        <linearGradient id="funnelGrad" x1="100" y1="46" x2="100" y2="165" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function IllustrationThreePathways({ className }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background peach blob */}
      <ellipse cx="100" cy="100" rx="85" ry="80" fill="#FFF7ED" />

      {/* Origin dot */}
      <circle cx="100" cy="162" r="10" fill="#111111" opacity="0.12" />
      <circle cx="100" cy="162" r="6" fill="#6B7280" />

      {/* Left path - indigo */}
      <path d="M100 162 Q60 140 38 90" stroke="#6366F1" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* Centre path - amber */}
      <path d="M100 162 Q100 130 100 68" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* Right path - emerald */}
      <path d="M100 162 Q140 140 162 90" stroke="#10B981" strokeWidth="5" strokeLinecap="round" fill="none" />

      {/* Left deliverable */}
      <rect x="22" y="68" width="32" height="28" rx="7" fill="#6366F1" />
      <rect x="27" y="74" width="22" height="4" rx="2" fill="white" opacity="0.7" />
      <rect x="27" y="82" width="14" height="3" rx="1.5" fill="white" opacity="0.5" />

      {/* Centre deliverable */}
      <rect x="84" y="44" width="32" height="28" rx="7" fill="#F59E0B" />
      <rect x="89" y="50" width="22" height="4" rx="2" fill="white" opacity="0.7" />
      <rect x="89" y="58" width="14" height="3" rx="1.5" fill="white" opacity="0.5" />

      {/* Right deliverable */}
      <rect x="146" y="68" width="32" height="28" rx="7" fill="#10B981" />
      <rect x="151" y="74" width="22" height="4" rx="2" fill="white" opacity="0.7" />
      <rect x="151" y="82" width="14" height="3" rx="1.5" fill="white" opacity="0.5" />
    </svg>
  )
}

export function IllustrationAILayer({ className }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background mint blob */}
      <ellipse cx="100" cy="100" rx="88" ry="82" fill="#F0FDF4" />

      {/* Connector lines - soft grey */}
      <line x1="100" y1="100" x2="50" y2="44" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="100" y1="100" x2="154" y2="50" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="100" y1="100" x2="170" y2="110" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="100" y1="100" x2="140" y2="162" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="100" y1="100" x2="50" y2="156" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="100" y1="100" x2="32" y2="112" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" />

      {/* Tool nodes - rounded rectangles */}
      {/* Figma - top-left */}
      <rect x="28" y="28" width="44" height="30" rx="8" fill="#FFF7ED" />
      <rect x="32" y="34" width="14" height="14" rx="3" fill="#F59E0B" opacity="0.7" />
      <rect x="50" y="36" width="16" height="4" rx="2" fill="#9CA3AF" />
      <rect x="50" y="43" width="10" height="3" rx="1.5" fill="#D1D5DB" />

      {/* GitHub - top-right */}
      <rect x="130" y="30" width="44" height="30" rx="8" fill="#F0F0FF" />
      <circle cx="148" cy="45" r="8" fill="#6366F1" opacity="0.6" />
      <rect x="162" y="38" width="6" height="4" rx="2" fill="#D1D5DB" />
      <rect x="162" y="44" width="9" height="3" rx="1.5" fill="#D1D5DB" />

      {/* Miro - right */}
      <rect x="148" y="94" width="40" height="30" rx="8" fill="#F0FDF4" />
      <rect x="153" y="100" width="10" height="10" rx="2" fill="#10B981" opacity="0.6" />
      <rect x="167" y="102" width="14" height="3" rx="1.5" fill="#D1D5DB" />
      <rect x="167" y="108" width="10" height="3" rx="1.5" fill="#D1D5DB" />

      {/* Slack - bottom-right */}
      <rect x="120" y="148" width="40" height="28" rx="8" fill="#FFF7ED" />
      <circle cx="135" cy="162" r="6" fill="#F59E0B" opacity="0.5" />
      <rect x="145" y="157" width="10" height="3" rx="1.5" fill="#D1D5DB" />
      <rect x="145" y="163" width="7" height="3" rx="1.5" fill="#D1D5DB" />

      {/* Chrome - bottom-left */}
      <rect x="40" y="144" width="40" height="28" rx="8" fill="#F0F0FF" />
      <circle cx="60" cy="158" r="8" fill="#6366F1" opacity="0.3" />
      <circle cx="60" cy="158" r="4" fill="#6366F1" opacity="0.5" />

      {/* Notion - left */}
      <rect x="14" y="96" width="36" height="28" rx="8" fill="#F0FDF4" />
      <rect x="19" y="102" width="8" height="10" rx="2" fill="#10B981" opacity="0.5" />
      <rect x="30" y="104" width="14" height="3" rx="1.5" fill="#D1D5DB" />
      <rect x="30" y="110" width="10" height="3" rx="1.5" fill="#D1D5DB" />

      {/* Central circle */}
      <circle cx="100" cy="100" r="22" fill="#6366F1" />
      <circle cx="100" cy="100" r="18" fill="#818CF8" />
      {/* Spark/lightning inside */}
      <path d="M103 89 L96 101 L101 101 L97 112 L106 98 L101 98 Z" fill="white" opacity="0.9" />
    </svg>
  )
}

export function IllustrationStudioCeremonies({ className }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Very subtle dot grid background */}
      {[...Array(7)].map((_, row) =>
        [...Array(7)].map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={16 + col * 28}
            cy={16 + row * 28}
            r="1.5"
            fill="#E5E7EB"
          />
        ))
      )}

      {/* Left circle - lavender - Monday */}
      <circle cx="72" cy="105" r="46" fill="#F0F0FF" opacity="0.9" />
      {/* Dot pattern inside left */}
      <circle cx="58" cy="92" r="2.5" fill="#A5B4FC" opacity="0.6" />
      <circle cx="68" cy="100" r="2" fill="#A5B4FC" opacity="0.5" />
      <circle cx="60" cy="112" r="2" fill="#A5B4FC" opacity="0.4" />
      <circle cx="74" cy="118" r="2.5" fill="#A5B4FC" opacity="0.5" />
      <text x="56" y="131" style={{ fontSize: '9px', fontWeight: 700, fill: '#6366F1', fontFamily: 'system-ui' }}>Monday</text>

      {/* Right circle - peach - Friday */}
      <circle cx="130" cy="105" r="46" fill="#FFF7ED" opacity="0.9" />
      {/* Dot pattern inside right */}
      <circle cx="144" cy="92" r="2.5" fill="#FCD34D" opacity="0.6" />
      <circle cx="134" cy="100" r="2" fill="#FCD34D" opacity="0.5" />
      <circle cx="142" cy="112" r="2" fill="#FCD34D" opacity="0.4" />
      <circle cx="128" cy="118" r="2.5" fill="#FCD34D" opacity="0.5" />
      <text x="122" y="131" style={{ fontSize: '9px', fontWeight: 700, fill: '#F59E0B', fontFamily: 'system-ui' }}>Friday</text>

      {/* Centre circle - indigo - Wednesday (slightly larger, on top) */}
      <circle cx="101" cy="96" r="50" fill="#6366F1" opacity="0.15" />
      <circle cx="101" cy="96" r="40" fill="#6366F1" opacity="0.2" />
      {/* Dot pattern inside centre */}
      <circle cx="90" cy="82" r="2.5" fill="#6366F1" opacity="0.5" />
      <circle cx="101" cy="88" r="2" fill="#6366F1" opacity="0.4" />
      <circle cx="112" cy="82" r="2" fill="#6366F1" opacity="0.5" />
      <circle cx="94" cy="100" r="2.5" fill="#6366F1" opacity="0.4" />
      <circle cx="108" cy="100" r="2" fill="#6366F1" opacity="0.4" />
      <text x="77" y="118" style={{ fontSize: '9px', fontWeight: 700, fill: '#4F46E5', fontFamily: 'system-ui' }}>Wednesday</text>
    </svg>
  )
}

export function IllustrationModuleLibrary({ className }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Card 4 - bottom, mint, most rotated */}
      <g transform="rotate(-4, 100, 120)">
        <rect x="38" y="72" width="124" height="90" rx="12" fill="#F0FDF4" />
        <circle cx="58" cy="94" r="6" fill="#10B981" opacity="0.5" />
        <rect x="70" y="91" width="60" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="70" y="100" width="40" height="4" rx="2" fill="#E5E7EB" />
      </g>

      {/* Card 3 - peach */}
      <g transform="rotate(3, 100, 115)">
        <rect x="38" y="68" width="124" height="90" rx="12" fill="#FFF7ED" />
        <circle cx="58" cy="90" r="6" fill="#F59E0B" opacity="0.5" />
        <rect x="70" y="87" width="60" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="70" y="96" width="40" height="4" rx="2" fill="#E5E7EB" />
      </g>

      {/* Card 2 - lavender */}
      <g transform="rotate(-2, 100, 110)">
        <rect x="38" y="64" width="124" height="90" rx="12" fill="#F0F0FF" />
        <circle cx="58" cy="86" r="6" fill="#6366F1" opacity="0.4" />
        <rect x="70" y="83" width="60" height="5" rx="2.5" fill="#D1D5DB" />
        <rect x="70" y="92" width="40" height="4" rx="2" fill="#E5E7EB" />
      </g>

      {/* Card 1 - top, white with border, most prominent */}
      <rect x="38" y="56" width="124" height="94" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      <circle cx="60" cy="82" r="8" fill="#6366F1" />
      <circle cx="60" cy="82" r="4" fill="#818CF8" />
      <rect x="74" y="76" width="68" height="6" rx="3" fill="#374151" opacity="0.8" />
      <rect x="74" y="86" width="50" height="4" rx="2" fill="#9CA3AF" />
      <rect x="74" y="94" width="40" height="4" rx="2" fill="#D1D5DB" />

      {/* Small tag on top card */}
      <rect x="42" y="58" width="46" height="16" rx="8" fill="#F0F0FF" />
      <rect x="46" y="63" width="38" height="5" rx="2.5" fill="#6366F1" opacity="0.5" />
    </svg>
  )
}

export function IllustrationDesignSystem({ className }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer frame - soft indigo border */}
      <rect x="22" y="22" width="156" height="156" rx="20" fill="white" stroke="#6366F1" strokeWidth="2" opacity="0.9" />

      {/* Connector lines suggesting a system */}
      <line x1="70" y1="70" x2="100" y2="70" stroke="#E0E7FF" strokeWidth="1.5" />
      <line x1="100" y1="70" x2="130" y2="70" stroke="#E0E7FF" strokeWidth="1.5" />
      <line x1="70" y1="100" x2="100" y2="100" stroke="#E0E7FF" strokeWidth="1.5" />
      <line x1="100" y1="100" x2="130" y2="100" stroke="#E0E7FF" strokeWidth="1.5" />
      <line x1="70" y1="70" x2="70" y2="100" stroke="#E0E7FF" strokeWidth="1.5" />
      <line x1="100" y1="70" x2="100" y2="100" stroke="#E0E7FF" strokeWidth="1.5" />
      <line x1="130" y1="70" x2="130" y2="100" stroke="#E0E7FF" strokeWidth="1.5" />
      <line x1="70" y1="100" x2="70" y2="130" stroke="#E0E7FF" strokeWidth="1.5" />
      <line x1="100" y1="100" x2="100" y2="130" stroke="#E0E7FF" strokeWidth="1.5" />
      <line x1="130" y1="100" x2="130" y2="130" stroke="#E0E7FF" strokeWidth="1.5" />

      {/* Row 1: Buttons */}
      {/* Button shape */}
      <rect x="44" y="54" width="52" height="20" rx="10" fill="#6366F1" opacity="0.8" />
      <rect x="50" y="60" width="40" height="7" rx="3.5" fill="white" opacity="0.6" />

      {/* Colour swatch */}
      <rect x="82" y="52" width="36" height="24" rx="8" fill="#F59E0B" />
      <rect x="82" y="52" width="18" height="24" rx="0" fill="#F59E0B" />
      <rect x="100" y="52" width="18" height="24" rx="0" fill="#FBBF24" />
      <rect x="82" y="52" width="36" height="24" rx="8" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />

      {/* Input field */}
      <rect x="118" y="54" width="60" height="20" rx="6" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1.5" />
      <rect x="124" y="60" width="30" height="4" rx="2" fill="#D1D5DB" />
      <rect x="170" y="56" width="1.5" height="16" rx="0.75" fill="#9CA3AF" />

      {/* Row 2: Icon, Card, Toggle */}
      <rect x="44" y="84" width="52" height="32" rx="10" fill="#F0FDF4" stroke="#A7F3D0" strokeWidth="1.5" />
      <circle cx="62" cy="100" r="8" fill="#10B981" opacity="0.5" />
      <rect x="74" y="95" width="16" height="3" rx="1.5" fill="#6B7280" opacity="0.5" />
      <rect x="74" y="100" width="12" height="3" rx="1.5" fill="#9CA3AF" opacity="0.4" />

      <rect x="100" y="84" width="36" height="32" rx="8" fill="#F0F0FF" />
      <rect x="106" y="90" width="24" height="4" rx="2" fill="#6366F1" opacity="0.5" />
      <rect x="106" y="97" width="18" height="3" rx="1.5" fill="#A5B4FC" opacity="0.5" />
      <rect x="106" y="103" width="20" height="3" rx="1.5" fill="#A5B4FC" opacity="0.4" />

      {/* Toggle switch */}
      <rect x="120" y="88" width="52" height="24" rx="12" fill="#6366F1" opacity="0.15" />
      <rect x="134" y="92" width="30" height="16" rx="8" fill="#6366F1" opacity="0.6" />
      <circle cx="155" cy="100" r="6" fill="white" />

      {/* Row 3: Typography, Avatar, Badge */}
      <rect x="44" y="122" width="52" height="32" rx="10" fill="#FFF7ED" />
      <rect x="50" y="130" width="40" height="6" rx="3" fill="#F59E0B" opacity="0.7" />
      <rect x="50" y="139" width="28" height="4" rx="2" fill="#FCD34D" opacity="0.5" />
      <rect x="50" y="146" width="34" height="3" rx="1.5" fill="#FDE68A" opacity="0.5" />

      <circle cx="118" cy="138" r="18" fill="#F0F0FF" />
      <circle cx="118" cy="133" r="7" fill="#A5B4FC" opacity="0.6" />
      <path d="M104 152 Q104 144 118 144 Q132 144 132 152" fill="#A5B4FC" opacity="0.4" />

      <rect x="138" y="124" width="44" height="28" rx="14" fill="#F0FDF4" />
      <rect x="146" y="131" width="28" height="14" rx="7" fill="#10B981" opacity="0.4" />
      <rect x="152" y="135" width="16" height="5" rx="2.5" fill="#10B981" opacity="0.7" />
    </svg>
  )
}
