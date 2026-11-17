import { Heart, RotateCcw, Sparkles, Star } from 'lucide-react'
import { siteConfig } from '../data/birthdayContent'
import { StarField } from './Decorations'

export default function Footer({ onReplay }) {
  const { finale, name } = siteConfig

  return (
    <footer className="finale" id="finale">
      <div className="container">
        <div className="finale-card">
          <StarField />
          <span className="finale-moon" aria-hidden="true" />
          <Star className="finale-star star-one" size={16} fill="currentColor" aria-hidden="true" />
          <Star className="finale-star star-two" size={11} fill="currentColor" aria-hidden="true" />
          <Sparkles className="finale-star star-three" size={18} aria-hidden="true" />

          <div className="finale-content reveal">
            <span className="eyebrow finale-eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              {finale.eyebrow}
            </span>
            <h2>{finale.title}</h2>
            <p className="finale-subtitle">{finale.subtitle}</p>
            <p className="finale-note">{finale.note}</p>

            <button type="button" className="btn btn-cream" onClick={onReplay}>
              <RotateCcw size={17} />
              {finale.button}
            </button>

            <p className="finale-signature">
              with love, always
              <Heart size={13} fill="currentColor" strokeWidth={0} aria-hidden="true" />
            </p>
          </div>
        </div>

        <div className="footer-base">
          <p className="footer-made">
            made with
            <Heart size={12} fill="currentColor" strokeWidth={0} aria-hidden="true" />
            for {name}
          </p>
          <p className="footer-small">a little world that will always be here for you</p>
        </div>
      </div>
    </footer>
  )
}
