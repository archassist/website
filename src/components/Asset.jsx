import { useState } from 'react'

/**
 * Renders a Higgsfield-generated asset when present.
 * Until the file exists, it falls back to an elegant architectural
 * blueprint placeholder so the layout always looks intentional.
 */
export default function Asset({ src, alt = '', className = '', label, dark = false, accent = '#C9A66B' }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div
        className={`relative overflow-hidden ${dark ? 'bg-[#15140f]' : 'bg-[#ece7dd]'} ${className}`}
        aria-label={alt}
      >
        <div className={`absolute inset-0 ${dark ? 'blueprint-grid-dark' : 'blueprint-grid'}`} />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke={accent} strokeWidth="1" opacity={dark ? 0.5 : 0.45}>
            <circle cx="200" cy="250" r="120" />
            <circle cx="200" cy="250" r="74" />
            <rect x="120" y="170" width="160" height="160" />
            <line x1="40" y1="250" x2="360" y2="250" />
            <line x1="200" y1="60" x2="200" y2="440" />
            <path d="M120 330 L200 200 L280 330" />
            <rect x="150" y="300" width="100" height="60" />
          </g>
          <g fill={accent} opacity="0.7">
            <circle cx="200" cy="250" r="3" />
          </g>
        </svg>
        {label && (
          <div className="absolute inset-x-0 bottom-0 p-4 text-center">
            <span
              className={`font-display text-xs tracking-[0.25em] uppercase ${dark ? 'text-white/70' : 'text-ink/55'}`}
            >
              {label}
            </span>
          </div>
        )}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  )
}
