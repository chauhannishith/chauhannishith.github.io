import { useEffect, useMemo, useState } from 'react'

type UseCountUpOptions = {
  isActive: boolean
  durationMs?: number
  delayMs?: number
}

const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return true
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
}

export const useCountUp = (target: number, { isActive, durationMs = 900, delayMs = 0 }: UseCountUpOptions) => {
  const safeTarget = Number.isFinite(target) ? target : 0
  const [value, setValue] = useState(0)

  const reduced = useMemo(() => prefersReducedMotion(), [])

  useEffect(() => {
    if (!isActive) return
    if (reduced) {
      setValue(safeTarget)
      return
    }

    let raf = 0
    let startAt = 0
    const duration = Math.max(150, durationMs)

    const start = () => {
      startAt = performance.now()
      const tick = (t: number) => {
        const p = Math.min(1, (t - startAt) / duration)
        const eased = 1 - Math.pow(1 - p, 3)
        setValue(Math.round(safeTarget * eased))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }

    const timeout = window.setTimeout(start, Math.max(0, delayMs))

    return () => {
      window.clearTimeout(timeout)
      cancelAnimationFrame(raf)
    }
  }, [delayMs, durationMs, isActive, reduced, safeTarget])

  return value
}

