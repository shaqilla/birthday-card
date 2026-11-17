import { useEffect } from 'react'

export function useScrollReveal(active) {
  useEffect(() => {
    if (!active) return undefined

    const items = Array.from(document.querySelectorAll('.reveal'))
    if (!items.length) return undefined

    // Class names are re-rendered by React; the attribute survives state updates.
    const reveal = (el) => {
      el.setAttribute('data-reveal-visible', '')
    }

    if (!('IntersectionObserver' in window)) {
      items.forEach(reveal)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.02, rootMargin: '0px 0px -5% 0px' },
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [active])
}
