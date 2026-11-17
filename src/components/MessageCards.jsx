import { useState } from 'react'
import { Gift, Heart, Sparkles, Star, Sun } from 'lucide-react'
import { messageCards, siteConfig } from '../data/birthdayContent'
import SectionHeading from './SectionHeading'

const ICONS = {
  heart: Heart,
  sparkles: Sparkles,
  gift: Gift,
  star: Star,
  sun: Sun,
}

export default function MessageCards() {
  const { messages } = siteConfig
  const [flipped, setFlipped] = useState(() => ({}))

  const toggle = (index) =>
    setFlipped((current) => ({ ...current, [index]: !current[index] }))

  return (
    <section className="section messages-section" id="messages">
      <div className="container">
        <SectionHeading
          eyebrow={messages.eyebrow}
          titleLead={messages.titleLead}
          titleAccent={messages.titleAccent}
          subtitle={messages.subtitle}
        />

        <ul className="message-grid">
          {messageCards.map((card, index) => {
            const Icon = ICONS[card.icon] ?? Heart
            const isFlipped = Boolean(flipped[index])
            return (
              <li
                className={`message-item reveal${isFlipped ? ' is-flipped' : ''}`}
                key={card.message}
                style={{ '--delay': `${index * 70}ms` }}
              >
                <button
                  type="button"
                  className={`flip-card tint-${card.tint}`}
                  onClick={() => toggle(index)}
                  aria-pressed={isFlipped}
                  aria-label={
                    isFlipped
                      ? `${card.message} Tap to close the card.`
                      : `Open little note ${index + 1} of ${messageCards.length}`
                  }
                >
                  <span className="flip-inner">
                    <span className="flip-face flip-front" aria-hidden="true">
                      <span className="card-corner">
                        <Icon size={20} strokeWidth={1.6} />
                      </span>
                      <span className="card-number">0{index + 1}</span>
                      <span className="card-open">open me</span>
                      <span className="card-heart">
                        <Heart size={14} fill="currentColor" strokeWidth={0} />
                      </span>
                    </span>
                    <span className="flip-face flip-back" aria-hidden="true">
                      <span className="card-quote">&ldquo;</span>
                      <span className="card-message">{card.message}</span>
                      <span className="card-signed">— a little note for you</span>
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        <p className="messages-hint">tap a card to turn it over</p>
      </div>
    </section>
  )
}
