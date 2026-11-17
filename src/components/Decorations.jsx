import { Heart, Sparkles, Star } from 'lucide-react'

const FLOATERS = [
  { type: 'heart', top: '14%', left: '4%', size: 20, color: '#EAB4C9', delay: '0s', dur: '15s' },
  { type: 'star', top: '26%', left: '92%', size: 14, color: '#C9C0EE', delay: '-4s', dur: '17s' },
  { type: 'sparkle', top: '58%', left: '6%', size: 17, color: '#E3C48F', delay: '-8s', dur: '19s' },
  { type: 'heart', top: '72%', left: '90%', size: 15, color: '#F1C7D7', delay: '-2s', dur: '16s' },
  { type: 'star', top: '84%', left: '11%', size: 12, color: '#BCDCEB', delay: '-11s', dur: '21s' },
  { type: 'heart', top: '42%', left: '96%', size: 12, color: '#DCD6F7', delay: '-6s', dur: '18s' },
  { type: 'sparkle', top: '8%', left: '76%', size: 14, color: '#E9C7A6', delay: '-3s', dur: '14s' },
  { type: 'star', top: '64%', left: '3%', size: 10, color: '#E8B8CB', delay: '-9s', dur: '20s' },
]

const ICONS = { heart: Heart, star: Star, sparkle: Sparkles }

export function FloatingBackdrop() {
  return (
    <div className="floating-backdrop" aria-hidden="true">
      {FLOATERS.map((f, i) => {
        const Icon = ICONS[f.type]
        return (
          <span
            key={i}
            className="floater"
            style={{
              top: f.top,
              left: f.left,
              color: f.color,
              '--float-delay': f.delay,
              '--float-dur': f.dur,
            }}
          >
            <Icon size={f.size} strokeWidth={1.4} />
          </span>
        )
      })}
    </div>
  )
}

export function Balloon({ className = '', color, highlight = '#ffffff' }) {
  return (
    <svg
      className={`balloon ${className}`}
      viewBox="0 0 120 280"
      aria-hidden="true"
    >
      <ellipse cx="60" cy="64" rx="42" ry="54" fill={color} />
      <ellipse cx="44" cy="42" rx="12" ry="21" fill={highlight} opacity="0.34" />
      <path d="M60 118 l-8 13 h16 z" fill={color} />
      <path
        d="M60 131 C48 168 74 194 60 228 C52 248 64 258 58 274"
        fill="none"
        stroke="#BFA79E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

const STARS = [
  [6, 16, 3, 0], [14, 62, 2, 1.2], [22, 32, 2.5, 2.4], [31, 78, 2, 0.6],
  [39, 12, 3, 3.1], [47, 52, 2, 1.8], [55, 86, 2.5, 0.2], [63, 24, 2, 2.6],
  [71, 64, 3, 1.4], [79, 38, 2, 3.4], [86, 82, 2.5, 0.9], [92, 18, 2, 2.1],
  [96, 54, 3, 3.8], [10, 88, 2, 2.8], [27, 8, 2, 1.5], [43, 92, 2.5, 0.4],
  [58, 42, 3, 3.6], [68, 8, 2, 1.1], [83, 60, 2, 2.2], [90, 92, 2, 0.7],
  [18, 46, 2, 3.9], [74, 90, 3, 1.9], [4, 44, 2.5, 2.9], [50, 4, 2, 0.3],
]

export function StarField() {
  return (
    <div className="star-field" aria-hidden="true">
      {STARS.map(([left, top, size, delay], i) => (
        <span
          key={i}
          className="twinkle-star"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: `${size * 3}px`,
            height: `${size * 3}px`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </div>
  )
}
