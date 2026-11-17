import { useRef, useState } from 'react'
import { Gift, Sparkles } from 'lucide-react'
import { siteConfig, surpriseMessages } from '../data/birthdayContent'
import { confettiBurst } from '../lib/confetti'
import SectionHeading from './SectionHeading'

export default function SurpriseBox() {
  const { surprise } = siteConfig
  const [isOpen, setIsOpen] = useState(false)
  const [messageIndex, setMessageIndex] = useState(null)
  const [draws, setDraws] = useState(0)
  const boxRef = useRef(null)

  function drawMessage() {
    let next = Math.floor(Math.random() * surpriseMessages.length)
    if (next === messageIndex) {
      next = (next + 1) % surpriseMessages.length
    }

    const rect = boxRef.current?.getBoundingClientRect()
    if (rect) {
      confettiBurst({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height * 0.2,
        count: 70,
        spread: 1,
      })
    }

    setMessageIndex(next)
    setIsOpen(true)
    setDraws((count) => count + 1)
  }

  return (
    <section className="section surprise-section" id="surprise">
      <div className="container">
        <SectionHeading
          eyebrow={surprise.eyebrow}
          titleLead={surprise.titleLead}
          titleAccent={surprise.titleAccent}
          subtitle={surprise.subtitle}
        />

        <div className="surprise-panel reveal">
          <div className="surprise-box-area">
            <span className="surprise-orbit orbit-one" aria-hidden="true" />
            <span className="surprise-orbit orbit-two" aria-hidden="true" />
            <button
              type="button"
              ref={boxRef}
              className={`gift${isOpen ? ' is-open' : ''}`}
              onClick={drawMessage}
              aria-label={
                isOpen
                  ? 'Open the little box again for another message'
                  : 'Open the little surprise box'
              }
            >
              <span className="gift-glow" aria-hidden="true" />
              <span className="gift-shadow" aria-hidden="true" />
              <span className="gift-body" aria-hidden="true">
                <span className="gift-ribbon-v" />
                <span className="gift-ribbon-h" />
                <span className="gift-heart">♥</span>
              </span>
              <span className="gift-lid" aria-hidden="true">
                <span className="gift-lid-ribbon" />
                <span className="gift-bow">
                  <span className="bow-loop bow-left" />
                  <span className="bow-loop bow-right" />
                  <span className="bow-knot" />
                </span>
              </span>
              <span className="gift-sparkles" aria-hidden="true">
                {Array.from({ length: 7 }).map((_, i) => (
                  <span key={i} style={{ '--i': i }} />
                ))}
              </span>
              <span className="gift-tag" aria-hidden="true">
                for you
              </span>
            </button>
            <p className="gift-hint" aria-hidden="true">
              {surprise.hint}
            </p>
          </div>

          <div className="surprise-content">
            <div className="surprise-note" aria-live="polite">
              {isOpen ? (
                <div className="note-pop" key={draws}>
                  <Sparkles className="note-spark" size={22} aria-hidden="true" />
                  <p>{surpriseMessages[messageIndex]}</p>
                  <span className="note-sign">— from the little box</span>
                </div>
              ) : (
                <div className="surprise-empty">
                  <Gift size={26} strokeWidth={1.4} aria-hidden="true" />
                  <p>A small thought is waiting inside. It is yours whenever you want it.</p>
                </div>
              )}
            </div>

            <button type="button" className="btn btn-soft" onClick={drawMessage}>
              {isOpen ? surprise.againButton : surprise.button}
              <Sparkles size={16} />
            </button>

            <p className="draw-count">
              {draws > 0 ? `little thought no. ${draws}` : 'open as many times as you like'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
