import { useEffect, useRef, useState } from 'react'
import { Heart, MailOpen, Sparkles } from 'lucide-react'
import { siteConfig } from '../data/birthdayContent'

export default function Envelope({ onOpen, leaving = false }) {
  const { opening, name } = siteConfig
  const [isOpening, setIsOpening] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const [before, after = '!'] = opening.title.split(name)

  function handleOpen() {
    if (isOpening) return
    setIsOpening(true)
    timer.current = setTimeout(() => onOpen?.(), 1050)
  }

  return (
    <div className={`opening${leaving ? ' is-leaving' : ''}`}>
      <div className="opening-decor" aria-hidden="true">
        <Heart className="opening-heart h1" size={18} fill="currentColor" />
        <Heart className="opening-heart h2" size={12} fill="currentColor" />
        <Heart className="opening-heart h3" size={15} fill="currentColor" />
        <Sparkles className="opening-spark s1" size={20} />
        <Sparkles className="opening-spark s2" size={14} />
        <span className="opening-ring r1" />
        <span className="opening-ring r2" />
      </div>

      <div className="opening-inner">
        <span className="eyebrow opening-eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          {opening.eyebrow}
        </span>

        <h1 className="opening-title">
          {before}
          <span className="script">{name}</span>
          {after}
        </h1>
        <p className="opening-subtitle">{opening.subtitle}</p>

        <div
          className={`envelope-stage${isOpening ? ' is-open' : ''}`}
          aria-hidden="true"
        >
          <div className="envelope">
            <div className="env-back" />
            <div className="env-letter">
              <span className="env-letter-to">to {name}</span>
              <span className="env-letter-line" />
              <span className="env-letter-note">{opening.envelopeNote}</span>
              <Heart size={13} fill="currentColor" strokeWidth={0} />
            </div>
            <div className="env-front" />
            <span className="env-address">
              <span>to {name}</span>
              <span className="env-address-line" />
            </span>
            <div className="env-flap" />
            <span className="env-seal">{opening.seal}</span>
            <span className="env-burst">
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i} style={{ '--angle': `${i * 36}deg` }} />
              ))}
            </span>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary opening-btn"
          onClick={handleOpen}
          disabled={isOpening}
        >
          {isOpening ? (
            <>
              Opening something lovely
              <Sparkles size={18} />
            </>
          ) : (
            <>
              {opening.button}
              <MailOpen size={18} />
            </>
          )}
        </button>

        <p className="opening-hint">{opening.hint}</p>
      </div>
    </div>
  )
}
