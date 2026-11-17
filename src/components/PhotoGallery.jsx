import { useEffect, useRef, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Sparkles,
  X,
} from 'lucide-react'
import { photos, siteConfig } from '../data/birthdayContent'
import SectionHeading from './SectionHeading'

function PhotoVisual({ photo, failed, onError, large = false }) {
  if (failed) {
    return (
      <span className={`photo-fallback${large ? ' is-large' : ''}`}>
        <Sparkles size={22} aria-hidden="true" />
        <span>Your photo goes here</span>
        <small>{photo.src.split('/').pop()}</small>
      </span>
    )
  }

  return (
    <img
      src={photo.src}
      alt={photo.alt}
      loading={large ? 'eager' : 'lazy'}
      decoding="async"
      onError={onError}
    />
  )
}

export default function PhotoGallery() {
  const { gallery } = siteConfig
  const [active, setActive] = useState(null)
  const [failed, setFailed] = useState({})
  const closeRef = useRef(null)
  const lastFocused = useRef(null)
  const dialogRef = useRef(null)
  const touchStart = useRef(null)

  const isOpen = active !== null
  const current = isOpen ? photos[active] : null

  useEffect(() => {
    if (!isOpen) return undefined

    lastFocused.current = document.activeElement
    closeRef.current?.focus()
    document.body.classList.add('no-scroll')

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setActive(null)
      } else if (event.key === 'ArrowRight') {
        setActive((index) => (index + 1) % photos.length)
      } else if (event.key === 'ArrowLeft') {
        setActive((index) => (index - 1 + photos.length) % photos.length)
      } else if (event.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll('button')
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('no-scroll')
      lastFocused.current?.focus?.()
    }
  }, [isOpen])

  const showNext = () => setActive((i) => (i + 1) % photos.length)
  const showPrev = () => setActive((i) => (i - 1 + photos.length) % photos.length)

  function handleTouchStart(event) {
    touchStart.current = event.changedTouches[0].clientX
  }

  function handleTouchEnd(event) {
    if (touchStart.current === null) return
    const delta = event.changedTouches[0].clientX - touchStart.current
    touchStart.current = null
    if (Math.abs(delta) < 45) return
    if (delta < 0) showNext()
    else showPrev()
  }

  return (
    <section className="section scrapbook" id="scrapbook">
      <div className="container">
        <SectionHeading
          eyebrow={gallery.eyebrow}
          titleLead={gallery.titleLead}
          titleAccent={gallery.titleAccent}
          subtitle={gallery.subtitle}
        />

        <div className="scrapbook-board reveal">
          <span className="board-tape tape-left" aria-hidden="true" />
          <span className="board-tape tape-right" aria-hidden="true" />

          <div className="board-doodle doodle-star" aria-hidden="true">
            <Sparkles size={22} />
          </div>
          <div className="board-doodle doodle-heart" aria-hidden="true">
            <Heart size={16} fill="currentColor" strokeWidth={0} />
          </div>

          <p className="sticky-note" aria-hidden="true">
            every one of these
            <br />
            is a good memory
          </p>

          <ul className="photo-row">
            {photos.map((photo, index) => (
              <li
                className={`photo-item item-${index + 1} reveal`}
                key={photo.src}
                style={{ '--delay': `${index * 90}ms` }}
              >
                <button
                  type="button"
                  className="polaroid"
                  style={{ '--tilt': `${photo.tilt}deg` }}
                  onClick={() => setActive(index)}
                  aria-label={`Open photo ${index + 1}: ${photo.alt}`}
                >
                  <span
                    className="polaroid-tape"
                    data-tape={photo.tape}
                    aria-hidden="true"
                  />
                  <span className="polaroid-photo">
                    <PhotoVisual
                      photo={photo}
                      failed={Boolean(failed[index])}
                      onError={() =>
                        setFailed((prevFails) => ({ ...prevFails, [index]: true }))
                      }
                    />
                  </span>
                  <span className="polaroid-caption">
                    <span>{photo.caption}</span>
                    <Heart size={12} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <p className="board-hint">{gallery.hint}</p>
        </div>
      </div>

      {isOpen && (
        <div
          className="lightbox"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo viewer, photo ${active + 1} of ${photos.length}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) setActive(null)
          }}
        >
          <button
            type="button"
            className="lightbox-close"
            ref={closeRef}
            onClick={() => setActive(null)}
            aria-label="Close photo viewer"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={showPrev}
            aria-label="Previous photo"
          >
            <ChevronLeft size={22} />
          </button>

          <figure
            className="lightbox-frame"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="lightbox-image">
              <PhotoVisual
                photo={current}
                failed={Boolean(failed[active])}
                onError={() =>
                  setFailed((prevFails) => ({ ...prevFails, [active]: true }))
                }
                large
              />
            </div>
            <figcaption>
              <span className="lightbox-caption">{current.caption}</span>
              <span className="lightbox-count">
                {active + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={showNext}
            aria-label="Next photo"
          >
            <ChevronRight size={22} />
          </button>

          <p className="lightbox-hint">use the arrow keys or swipe to browse</p>
        </div>
      )}
    </section>
  )
}
