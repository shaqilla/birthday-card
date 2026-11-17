import { useEffect, useRef, useState } from 'react'
import { Music2, Pause } from 'lucide-react'
import { siteConfig } from '../data/birthdayContent'
import { createMusicBox } from '../lib/musicBox'

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false)
  const boxRef = useRef(null)
  const audioRef = useRef(null)

  useEffect(
    () => () => {
      boxRef.current?.stop()
      audioRef.current?.pause()
    },
    [],
  )

  async function toggle() {
    const track = siteConfig.music.src

    if (track) {
      const el = audioRef.current
      if (!el) return
      if (playing) {
        el.pause()
        setPlaying(false)
      } else {
        el.volume = siteConfig.music.volume
        try {
          await el.play()
          setPlaying(true)
        } catch {
          setPlaying(false)
        }
      }
      return
    }

    if (playing) {
      boxRef.current?.stop()
      setPlaying(false)
      return
    }

    if (!boxRef.current) {
      boxRef.current = createMusicBox(siteConfig.music.volume)
    }
    const started = await boxRef.current.start()
    setPlaying(Boolean(started))
  }

  return (
    <>
      {siteConfig.music.src && (
        <audio ref={audioRef} src={siteConfig.music.src} loop preload="none" />
      )}
      <button
        type="button"
        className={`music-toggle${playing ? ' is-playing' : ''}`}
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? 'Pause background music' : 'Play background music'}
        title={playing ? 'Pause the music' : 'Play a little music'}
      >
        <span className="music-toggle-icon" aria-hidden="true">
          {playing ? <Pause size={15} /> : <Music2 size={15} />}
        </span>
        <span className="music-toggle-label">
          {playing ? 'Music on' : 'Play music'}
        </span>
        <span className="music-bars" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
    </>
  )
}
