import { useRef, useState } from 'react'
import { Flame, Sparkles } from 'lucide-react'
import { siteConfig } from '../data/birthdayContent'
import { confettiBurst } from '../lib/confetti'
import SectionHeading from './SectionHeading'

const CANDLES = [42, 52, 46]
const TOP_SPRINKLES = [
  { left: '18%', top: '56%', color: '#F8C8DC', rotate: '18deg' },
  { left: '44%', top: '68%', color: '#E7C08A', rotate: '-22deg' },
  { left: '72%', top: '50%', color: '#C9E7F2', rotate: '34deg' },
]
const BOTTOM_SPRINKLES = [
  { left: '12%', top: '44%', color: '#DCD6F7', rotate: '24deg' },
  { left: '24%', top: '70%', color: '#E7C08A', rotate: '-16deg' },
  { left: '78%', top: '48%', color: '#C9E7F2', rotate: '12deg' },
  { left: '88%', top: '68%', color: '#F8C8DC', rotate: '-30deg' },
  { left: '14%', top: '82%', color: '#C9E7F2', rotate: '40deg' },
  { left: '82%', top: '84%', color: '#DCD6F7', rotate: '-8deg' },
]

export default function BirthdayCake() {
  const { cake } = siteConfig
  const [wished, setWished] = useState(false)
  const sceneRef = useRef(null)

  function handleWish() {
    if (wished) {
      setWished(false)
      return
    }

    setWished(true)
    const rect = sceneRef.current?.getBoundingClientRect()
    if (rect) {
      confettiBurst({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height * 0.28,
        count: 110,
        spread: 1.2,
      })
    }
  }

  return (
    <section className="section cake-section" id="cake">
      <div className="container cake-layout">
        <div className="cake-visual reveal">
          <div
            className={`cake-scene${wished ? ' is-wished' : ''}`}
            ref={sceneRef}
          >
            <span className="wish-sparkles" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} style={{ '--i': i }} />
              ))}
            </span>

            <div className="cake">
              <div className="candles" aria-hidden="true">
                {CANDLES.map((height, index) => (
                  <span
                    className="candle-wrap"
                    key={index}
                    style={{
                      '--candle-h': `${height}px`,
                      '--candle-delay': `${index * 0.25}s`,
                    }}
                  >
                    <span className="smoke" />
                    <span className="flame" />
                    <span className="wick" />
                    <span className="candle-body" />
                  </span>
                ))}
              </div>

              <div className="cake-tier cake-tier-top">
                <span className="tier-frosting" aria-hidden="true" />
                {TOP_SPRINKLES.map((sprinkle, index) => (
                  <span
                    className="sprinkle"
                    key={index}
                    style={{
                      left: sprinkle.left,
                      top: sprinkle.top,
                      backgroundColor: sprinkle.color,
                      transform: `rotate(${sprinkle.rotate})`,
                    }}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <div className="cake-tier cake-tier-bottom">
                <span className="tier-frosting" aria-hidden="true" />
                {BOTTOM_SPRINKLES.map((sprinkle, index) => (
                  <span
                    className="sprinkle"
                    key={index}
                    style={{
                      left: sprinkle.left,
                      top: sprinkle.top,
                      backgroundColor: sprinkle.color,
                      transform: `rotate(${sprinkle.rotate})`,
                    }}
                    aria-hidden="true"
                  />
                ))}
                <span className="cake-face" aria-hidden="true">
                  <span className="cake-eye eye-left" />
                  <span className="cake-eye eye-right" />
                  <span className="cake-smile" />
                  <span className="cake-blush blush-left" />
                  <span className="cake-blush blush-right" />
                </span>
              </div>

              <span className="cake-plate" aria-hidden="true" />
            </div>
          </div>
          <p className="cake-caption">one candle for every lovely thing ahead</p>
        </div>

        <div className="cake-copy">
          <SectionHeading
            align="left"
            eyebrow={cake.eyebrow}
            titleLead={cake.titleLead}
            titleAccent={cake.titleAccent}
            subtitle={cake.subtitle}
          />

          <div className="wish-card" aria-live="polite">
            {wished ? (
              <div className="wish-revealed" key="wish">
                <Sparkles size={20} aria-hidden="true" />
                <p>{cake.wish}</p>
              </div>
            ) : (
              <p className="wish-prompt" key="prompt">
                {cake.prompt}
              </p>
            )}
          </div>

          <button type="button" className="btn btn-primary" onClick={handleWish}>
            {wished ? cake.relightButton : cake.button}
            {wished ? <Flame size={17} /> : <Sparkles size={17} />}
          </button>
        </div>
      </div>
    </section>
  )
}
