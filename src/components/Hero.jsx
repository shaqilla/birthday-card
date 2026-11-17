import { useEffect } from 'react'
import { ArrowDown, Heart, Sparkles } from 'lucide-react'
import { siteConfig } from '../data/birthdayContent'
import { confettiBurst } from '../lib/confetti'
import { Balloon } from './Decorations'
import CakeIllustration from './CakeIllustration'

export default function Hero({ entered }) {
  const { hero, name } = siteConfig

  useEffect(() => {
    if (!entered) return undefined
    const timer = setTimeout(() => {
      confettiBurst({
        x: window.innerWidth * 0.68,
        y: window.innerHeight * 0.32,
        count: 90,
        spread: 1.15,
      })
    }, 900)
    return () => clearTimeout(timer)
  }, [entered])

  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-balloons" aria-hidden="true">
        <Balloon className="balloon-a" color="#F3B6CC" />
        <Balloon className="balloon-b" color="#CFC7F0" />
        <Balloon className="balloon-c" color="#BFE3F1" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {hero.eyebrow}
          </span>

          <h1 className="hero-title">
            <span className="hero-title-top">{hero.titleTop}</span>
            <span className="hero-title-name">
              <span className="script">{name}</span>
              <span className="hero-bang">!</span>
              <Sparkles className="hero-title-spark" size={26} aria-hidden="true" />
            </span>
          </h1>

          <p className="hero-subtitle">{hero.subtitle}</p>
          <p className="hero-extra">{hero.extra}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#scrapbook">
              {hero.button}
              <ArrowDown size={17} />
            </a>
          </div>

          <p className="hero-note">
            <Heart size={13} fill="currentColor" strokeWidth={0} aria-hidden="true" />
            Made with care, meant to be kept
          </p>
        </div>

        <div className="hero-visual">
          <div className="hero-art-frame">
            <span className="hero-tape" aria-hidden="true" />
            <div className="hero-art">
              <CakeIllustration />
            </div>
            <p className="hero-art-caption">{hero.cardNote}</p>
          </div>
          <span className="hero-sticker sticker-star" aria-hidden="true">
            <Sparkles size={20} />
          </span>
          <span className="hero-sticker sticker-heart" aria-hidden="true">
            <Heart size={16} fill="currentColor" strokeWidth={0} />
          </span>
          <span className="hero-badge" aria-hidden="true">
            for {name}
          </span>
        </div>
      </div>

      <a className="scroll-cue" href="#scrapbook" aria-label="Scroll to the scrapbook">
        <span>our little scrapbook</span>
        <ArrowDown size={15} aria-hidden="true" />
      </a>
    </section>
  )
}
