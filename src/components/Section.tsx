import { Card, Grid, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { customTheme } from '../utils'

export const Section = ({children, id, title, dark}: {children: React.ReactNode, dark?: boolean, id: string, title?: string}) => {
  const {palette} = customTheme
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const sectionElement = sectionRef.current
    if (!sectionElement) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '-6% 0px -8% 0px',
        threshold: 0.15,
      },
    )

    observer.observe(sectionElement)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <Grid container item xs={12}>
      <section id={id}
        ref={sectionRef}
        className={`fade-section ${isVisible ? 'is-visible' : ''}`}
        data-surface={dark ? 'dark' : 'light'}
        style={{
          width: '100%',
        }}
      >
        <Card
          className='fade-card'
          style={{
            minHeight: 'calc(100vh - 60px)',
            width: '100%',
            backgroundColor: dark ? palette.background.surface2 : palette.background.default,
          }}
          sx={{
            padding: {
              xs:'2rem 2rem',
              md: '6rem 10rem',
            },
          }}
        >
          {title && (
            <Typography variant='h2' fontWeight={600} style={{
              marginTop: '0',
            }} className='fade-item'>
              {title}
            </Typography>
          )}
          <div className='fade-item fade-item-delay-1'>{children}</div>
        </Card>
      </section>
    </Grid>
  )
}