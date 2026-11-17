import { useCallback, useEffect, useState } from 'react'
import Envelope from './components/Envelope'
import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import PhotoGallery from './components/PhotoGallery'
import MessageCards from './components/MessageCards'
import SurpriseBox from './components/SurpriseBox'
import BirthdayCake from './components/BirthdayCake'
import BirthdayLetter from './components/BirthdayLetter'
import Footer from './components/Footer'
import { FloatingBackdrop } from './components/Decorations'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  const [showOpening, setShowOpening] = useState(true)
  const [leaving, setLeaving] = useState(false)
  const [entered, setEntered] = useState(false)
  const [replayKey, setReplayKey] = useState(0)

  useScrollReveal(entered)

  useEffect(() => {
    document.body.classList.toggle('no-scroll', showOpening)
    return () => document.body.classList.remove('no-scroll')
  }, [showOpening])

  const handleOpen = useCallback(() => {
    setLeaving(true)
    setEntered(true)
    window.scrollTo({ top: 0, behavior: 'instant' })
    window.setTimeout(() => setShowOpening(false), 800)
  }, [])

  const handleReplay = useCallback(() => {
    setEntered(false)
    setLeaving(false)
    setShowOpening(true)
    setReplayKey((key) => key + 1)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="app">
      <FloatingBackdrop />

      <div
        className={`site-shell${entered ? ' is-entered' : ' is-concealed'}`}
        aria-hidden={!entered}
        inert={!entered ? '' : undefined}
      >
        <SiteHeader />
        <main>
          <Hero entered={entered} />
          <PhotoGallery />
          <MessageCards />
          <SurpriseBox />
          <BirthdayCake />
          <BirthdayLetter />
          <Footer onReplay={handleReplay} />
        </main>
      </div>

      {showOpening && (
        <Envelope key={replayKey} leaving={leaving} onOpen={handleOpen} />
      )}
    </div>
  )
}
