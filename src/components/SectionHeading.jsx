export default function SectionHeading({
  eyebrow,
  titleLead,
  titleAccent,
  subtitle,
  align = 'center',
}) {
  return (
    <div className={`section-heading reveal${align === 'left' ? ' is-left' : ''}`}>
      {eyebrow && (
        <span className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2>
        {titleLead}
        {titleAccent && (
          <span className="heading-accent">
            {titleAccent}
            <svg
              className="heading-scribble"
              viewBox="0 0 220 14"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <path
                d="M3 9 C 45 3, 83 12, 121 7 S 190 2, 217 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        )}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}
