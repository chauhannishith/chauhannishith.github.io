import { useEffect, useRef, useState } from 'react'

function isInViewport(element: HTMLElement) {
  const r = element.getBoundingClientRect()
  const vw = window.innerWidth
  const vh = window.innerHeight
  return r.top < vh && r.bottom > 0 && r.left < vw && r.right > 0
}

export const useInViewOnce = <T extends HTMLElement>(options?: IntersectionObserverInit) => {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (isInViewport(el)) {
      setIsVisible(true)
      return
    }

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setIsVisible(true)
          obs.disconnect()
        }
      },
      options
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [options])

  return { ref, isVisible }
}

