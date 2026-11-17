export default function CakeIllustration() {
  return (
    <svg
      className="cake-art"
      viewBox="0 0 460 470"
      role="img"
      aria-label="A whimsical illustration of a birthday cake with balloons, bunting and candles"
    >
      <defs>
        <linearGradient id="tierPink" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FADCE7" />
          <stop offset="1" stopColor="#F0B9CE" />
        </linearGradient>
        <linearGradient id="tierLav" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EBE5FC" />
          <stop offset="1" stopColor="#CFC7F0" />
        </linearGradient>
        <linearGradient id="flameFill" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#F2A65A" />
          <stop offset="0.55" stopColor="#F7C873" />
          <stop offset="1" stopColor="#FFF0C4" />
        </linearGradient>
        <radialGradient id="flameGlow">
          <stop offset="0" stopColor="#FFD9A0" stopOpacity="0.85" />
          <stop offset="1" stopColor="#FFD9A0" stopOpacity="0" />
        </radialGradient>
        <pattern id="candleStripe" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(18)">
          <rect width="7" height="7" fill="#F8C8DC" />
          <rect width="3.5" height="7" fill="#FFF8F0" />
        </pattern>
      </defs>

      {/* bunting */}
      <path
        d="M44 70 C 138 128, 322 128, 416 60"
        fill="none"
        stroke="#C7A99F"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M100 86 h26 l-13 26 z" fill="#F3B6CC" />
      <path d="M148 100 h26 l-13 26 z" fill="#DCD6F7" />
      <path d="M196 109 h26 l-13 26 z" fill="#C9E7F2" />
      <path d="M244 110 h26 l-13 26 z" fill="#F7E1C9" />
      <path d="M292 102 h26 l-13 26 z" fill="#F3B6CC" />
      <path d="M338 88 h26 l-13 26 z" fill="#DCD6F7" />

      {/* balloons */}
      <g className="art-balloon balloon-left">
        <ellipse cx="82" cy="158" rx="32" ry="41" fill="#F2AFC8" />
        <ellipse cx="71" cy="143" rx="9" ry="15" fill="#ffffff" opacity="0.38" />
        <path d="M82 199 l-7 11 h14 z" fill="#E49BB7" />
        <path
          d="M82 210 C 70 242 94 260 80 288 C 72 304 84 310 78 322"
          fill="none"
          stroke="#C3A399"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <g className="art-balloon balloon-right">
        <ellipse cx="382" cy="142" rx="27" ry="35" fill="#CFC7F0" />
        <ellipse cx="373" cy="129" rx="8" ry="13" fill="#ffffff" opacity="0.4" />
        <path d="M382 177 l-6 10 h12 z" fill="#B7ADDf" />
        <path
          d="M382 187 C 372 216 392 234 380 258"
          fill="none"
          stroke="#C3A399"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* sparkles */}
      <g className="art-sparkle spark-a" fill="#E7C08A">
        <path d="M60 232 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 z" />
      </g>
      <g className="art-sparkle spark-b" fill="#C9BFEC">
        <path d="M406 246 l2.4 6 6 2.4 -6 2.4 -2.4 6 -2.4 -6 -6 -2.4 6 -2.4 z" />
      </g>
      <g className="art-sparkle spark-c" fill="#F3B6CC">
        <path d="M352 60 l2 5.5 5.5 2 -5.5 2 -2 5.5 -2 -5.5 -5.5 -2 5.5 -2 z" />
      </g>

      {/* plate + shadow */}
      <ellipse cx="230" cy="424" rx="158" ry="17" fill="#EAD8CC" opacity="0.55" />
      <ellipse cx="230" cy="411" rx="148" ry="18" fill="#F6E9DF" />
      <ellipse cx="230" cy="408" rx="124" ry="12" fill="#FFFBF6" />

      {/* bottom tier */}
      <rect x="102" y="306" width="256" height="92" rx="18" fill="url(#tierPink)" />
      <g fill="#FFFAF4">
        <rect x="102" y="296" width="256" height="30" rx="15" />
        <circle cx="116" cy="324" r="10" />
        <circle cx="142" cy="325" r="12" />
        <circle cx="168" cy="324" r="9" />
        <circle cx="194" cy="326" r="12" />
        <circle cx="220" cy="324" r="9" />
        <circle cx="246" cy="326" r="12" />
        <circle cx="272" cy="324" r="9" />
        <circle cx="298" cy="325" r="12" />
        <circle cx="324" cy="324" r="10" />
        <circle cx="346" cy="324" r="11" />
      </g>

      {/* face */}
      <g fill="#7B5C55">
        <circle cx="196" cy="360" r="4" />
        <circle cx="264" cy="360" r="4" />
      </g>
      <path
        d="M212 372 Q230 385 248 372"
        fill="none"
        stroke="#7B5C55"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse cx="176" cy="371" rx="10" ry="6" fill="#F0A6C0" opacity="0.75" />
      <ellipse cx="284" cy="371" rx="10" ry="6" fill="#F0A6C0" opacity="0.75" />

      {/* sprinkles */}
      <g opacity="0.9">
        <circle cx="136" cy="356" r="3" fill="#C9E7F2" />
        <circle cx="152" cy="382" r="2.6" fill="#DCD6F7" />
        <circle cx="220" cy="378" r="2.6" fill="#E7C08A" />
        <circle cx="304" cy="382" r="2.6" fill="#C9E7F2" />
        <circle cx="326" cy="356" r="3" fill="#DCD6F7" />
        <rect x="266" y="344" width="7" height="3" rx="1.5" fill="#C9E7F2" transform="rotate(24 269 345)" />
        <rect x="166" y="340" width="7" height="3" rx="1.5" fill="#E7C08A" transform="rotate(-18 169 341)" />
      </g>

      {/* middle tier */}
      <rect x="132" y="240" width="196" height="70" rx="14" fill="url(#tierLav)" />
      <g fill="#FFFAF4">
        <rect x="132" y="230" width="196" height="26" rx="13" />
        <circle cx="146" cy="254" r="9" />
        <circle cx="170" cy="255" r="10" />
        <circle cx="194" cy="254" r="8" />
        <circle cx="218" cy="256" r="10" />
        <circle cx="242" cy="254" r="8" />
        <circle cx="266" cy="255" r="10" />
        <circle cx="290" cy="254" r="8" />
        <circle cx="314" cy="255" r="10" />
      </g>
      <g opacity="0.9">
        <circle cx="172" cy="278" r="2.6" fill="#F8C8DC" />
        <circle cx="212" cy="288" r="2.6" fill="#E7C08A" />
        <circle cx="252" cy="280" r="2.6" fill="#C9E7F2" />
        <circle cx="292" cy="288" r="2.6" fill="#F3B6CC" />
      </g>
      <path
        d="M230 268 c -4 -5 -12 -3 -12 3 c 0 6 12 11 12 11 c 0 0 12 -5 12 -11 c 0 -6 -8 -8 -12 -3 z"
        fill="#F3B6CC"
        opacity="0.85"
      />

      {/* candles */}
      {[
        { x: 184, h: 46, delay: '0s' },
        { x: 224, h: 56, delay: '0.4s' },
        { x: 262, h: 48, delay: '0.8s' },
      ].map((candle) => (
        <g key={candle.x} transform={`translate(${candle.x} 238)`}>
          <rect
            x="-6"
            y={-candle.h}
            width="12"
            height={candle.h}
            rx="6"
            fill="url(#candleStripe)"
            stroke="#E9AFC5"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1={-candle.h - 7}
            x2="0"
            y2={-candle.h}
            stroke="#7B5C55"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <g className="art-flame" style={{ animationDelay: candle.delay }}>
            <circle cx="0" cy={-candle.h - 26} r="18" fill="url(#flameGlow)" />
            <path
              d={`M0 ${-candle.h - 9} C 8 ${-candle.h - 18} 9 ${-candle.h - 29} 0 ${-candle.h - 36} C -9 ${-candle.h - 29} -8 ${-candle.h - 18} 0 ${-candle.h - 9} Z`}
              fill="url(#flameFill)"
            />
            <path
              d={`M0 ${-candle.h - 14} C 4 ${-candle.h - 20} 4 ${-candle.h - 27} 0 ${-candle.h - 30} C -4 ${-candle.h - 27} -4 ${-candle.h - 20} 0 ${-candle.h - 14} Z`}
              fill="#FFF6DC"
              opacity="0.9"
            />
          </g>
        </g>
      ))}
    </svg>
  )
}
