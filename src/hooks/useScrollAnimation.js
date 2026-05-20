import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    const children = el.querySelectorAll('.animate-on-scroll')
    children.forEach((child) => observer.observe(child))
    if (el.classList.contains('animate-on-scroll')) observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return ref
}
