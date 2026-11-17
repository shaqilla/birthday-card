import { useState } from 'react'
import { Feather, Heart } from 'lucide-react'
import { siteConfig } from '../data/birthdayContent'
import SectionHeading from './SectionHeading'

function PressedFlower() {
  return (
    <svg
      className="paper-flower"
      viewBox="0 0 120 130"
      aria-hidden="true"
    >
      <path
        d="M62 126 C 56 102, 56 82, 64 62"
        fill="none"
        stroke="#B5A48F"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M61 96 C 46 92, 38 82, 36 70 C 50 70, 60 78, 61 96 Z"
        fill="#C3CDBB"
        opacity="0.85"
      />
      <path
        d="M63 110 C 77 106, 86 96, 88 84 C 73 84, 64 92, 63 110 Z"
        fill="#C3CDBB"
        opacity="0.7"
      />
      <g fill="#D9D2F2">
        <ellipse cx="64" cy="40" rx="9" ry="16" transform="rotate(0 64 40)" />
        <ellipse cx="64" cy="40" rx="9" ry="16" transform="rotate(72 64 40)" />
        <ellipse cx="64" cy="40" rx="9" ry="16" transform="rotate(144 64 40)" />
        <ellipse cx="64" cy="40" rx="9" ry="16" transform="rotate(216 64 40)" />
        <ellipse cx="64" cy="40" rx="9" ry="16" transform="rotate(288 64 40)" />
      </g>
      <circle cx="64" cy="40" r="7" fill="#E7C08A" />
    </svg>
  )
}

export default function BirthdayLetter() {
  const { letter, name } = siteConfig
  const [opened, setOpened] = useState(false)
  const paragraphs = letter.body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)

  return (
    <section className="section letter-section" id="letter">
      <div className="container">
        <SectionHeading
          eyebrow={letter.eyebrow}
          titleLead={letter.titleLead}
          titleAccent={letter.titleAccent}
          subtitle={letter.subtitle}
        />

        <div className={`letter-stage reveal${opened ? ' is-open' : ''}`}>
          <div className="letter-frame">
            <article
              className="letter-paper"
              id="letter-paper"
              aria-hidden={!opened}
            >
              <span className="paper-tape" aria-hidden="true" />
              <div className="paper-stamp" aria-hidden="true">
                <Heart size={16} fill="currentColor" strokeWidth={0} />
                <span>with love</span>
              </div>

              <div className="paper-content">
                {paragraphs.map((paragraph, index) =>
                  index === 0 ? (
                    <p className="paper-greeting" key={index}>
                      {paragraph}
                    </p>
                  ) : (
                    <p key={index}>{paragraph}</p>
                  ),
                )}
                <p className="paper-closing">{letter.closing}</p>
                <p className="paper-signature">{letter.signature}</p>
              </div>

              {letter.ps && <p className="paper-ps">{letter.ps}</p>}
              <PressedFlower />
            </article>

            {!opened && (
              <button
                type="button"
                className="letter-cover"
                onClick={() => setOpened(true)}
                aria-label={`Break the seal and read the letter for ${name}`}
              >
                <span className="cover-tape" aria-hidden="true" />
                <span className="cover-kicker">{letter.coverKicker}</span>
                <span className="cover-note">{letter.coverNote}</span>
                <span className="cover-seal" aria-hidden="true">
                  {name.charAt(0)}
                </span>
                <span className="cover-line" aria-hidden="true" />
                <span className="cover-cta">
                  {letter.button}
                  <Feather size={15} aria-hidden="true" />
                </span>
              </button>
            )}
          </div>

          <div className="letter-actions">
            {!opened ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setOpened(true)}
                aria-expanded={opened}
                aria-controls="letter-paper"
              >
                {letter.button}
                <Feather size={17} />
              </button>
            ) : (
              <p className="letter-after">
                <Heart size={13} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                Keep this one somewhere safe.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
