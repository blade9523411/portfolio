import { useEffect, useRef } from 'react'

// Adds `data-visible="true"` to each observed element once it enters the viewport.
// CSS transitions on [data-visible] drive the reveal animation.
export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll<HTMLElement>('[data-reveal]')
    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
