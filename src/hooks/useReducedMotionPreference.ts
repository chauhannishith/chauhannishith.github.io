import useMediaQuery from '@mui/material/useMediaQuery'
import { useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'prefersReducedMotion'
const CHANGE_EVENT = 'reduced-motion-preference-changed'

const readStored = (): boolean | null => {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw === '1') return true
    if (raw === '0') return false
    return null
  } catch {
    return null
  }
}

const writeStored = (value: boolean | null) => {
  if (typeof window === 'undefined') return
  try {
    if (value === null) {
      window.localStorage.removeItem(STORAGE_KEY)
    } else {
      window.localStorage.setItem(STORAGE_KEY, value ? '1' : '0')
    }
  } catch {
    // ignore
  }
}

export function useReducedMotionPreference() {
  const systemPrefersReduced = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [forcedReduced, setForcedReduced] = useState<boolean>(() => readStored() ?? false)

  const reduceMotion = systemPrefersReduced || forcedReduced

  useEffect(() => {
    writeStored(forcedReduced ? true : null)
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event(CHANGE_EVENT))
    }
  }, [forcedReduced])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const syncFromStorage = () => {
      setForcedReduced(readStored() ?? false)
    }

    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY) return
      syncFromStorage()
    }

    window.addEventListener('storage', onStorage)
    window.addEventListener(CHANGE_EVENT, syncFromStorage)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener(CHANGE_EVENT, syncFromStorage)
    }
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.documentElement.dataset.reduceMotion = reduceMotion ? 'true' : 'false'
  }, [reduceMotion])

  const toggleForced = useMemo(() => {
    return () => setForcedReduced((v) => !v)
  }, [])

  return {
    reduceMotion,
    forcedReduced,
    systemPrefersReduced,
    setForcedReduced,
    toggleForced,
  }
}

