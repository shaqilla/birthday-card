import { useEffect, useRef } from 'react'
import { Heart } from 'lucide-react'
import MusicToggle from './MusicToggle'
import { siteConfig } from '../data/birthdayContent'

const CHAPTERS = [
  ['#scrapbook', 'Scrapbook'],
  ['#messages', 'Little notes'],
  ['#surprise', 'Surprise'],
  ['#cake', 'The cake'],
  ['#letter', 'The letter'],
]

export default function SiteHeader() {
  const barRef = useRef(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <header className="site-header">
      <div className="scroll-progress" aria-hidden="true">
        <span ref={barRef} />
      </div>
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Back to the top">
          <span className="brand-mark" aria-hidden="true">
            <Heart size={14} fill="currentColor" strokeWidth={1.5} />
          </span>
          <span className="brand-text">
            a little world <em>for {siteConfig.name}</em>
          </span>
        </a>

        <nav className="header-nav" aria-label="Chapters">
          {CHAPTERS.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <MusicToggle />
      </div>
    </header>
  )
}
