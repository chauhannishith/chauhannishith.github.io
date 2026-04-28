import { Box, Typography } from '@mui/material'
import { useLayoutEffect, useRef, useState } from 'react'

function isInViewport(element: HTMLElement) {
  const r = element.getBoundingClientRect()
  const vw = window.innerWidth
  const vh = window.innerHeight
  return r.top < vh && r.bottom > 0 && r.left < vw && r.right > 0
}

type PageSectionProps = {
  id: string
  kicker?: string
  title: string
  /** Center title like the reference (e.g. Skills). */
  titleAlign?: 'left' | 'center'
  children: React.ReactNode
}

export const PageSection = ({ id, kicker, title, titleAlign = 'left', children }: PageSectionProps) => {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) {
      return
    }
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
      /**
       * Trigger a bit later (closer to "content is actually entering view"),
       * so the fade/slide doesn’t finish while the section is still far below.
       */
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Box
      component="section"
      id={id}
      ref={ref}
      className={`portfolio-fade${isVisible ? ' portfolio-fade--in' : ''}`}
      sx={{
        maxWidth: 1280,
        mx: 'auto',
        width: '100%',
        py: { xs: 3, md: 5 },
        mb: { xs: 2, md: 4 },
      }}
    >
      {kicker && (
        <Typography
          component="span"
          sx={{
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            color: 'primary.main',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            display: 'block',
            mb: 1.5,
            fontWeight: 600,
            textAlign: titleAlign,
          }}
        >
          {kicker}
        </Typography>
      )}
      <Typography
        variant="h2"
        component="h2"
        sx={{
          color: 'text.primary',
          fontWeight: 800,
          lineHeight: 1.1,
          fontSize: { xs: '1.6rem', md: '1.9rem' },
          mb: titleAlign === 'center' ? { xs: 4, md: 6 } : 2,
          textAlign: titleAlign,
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  )
}
