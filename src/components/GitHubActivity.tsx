import { Box, Button, Link, Stack, Typography } from '@mui/material'
import { GitHubCalendar } from 'react-github-calendar'
import { socialLinks } from '../data/socials'
import { useEffect, useMemo, useState } from 'react'
import { ref } from '../theme/tokens'
import { useInViewOnce } from '../hooks/useInViewOnce'

const githubHref = socialLinks.find((s) => s.id === 'github')?.href

const getGitHubUsername = (href: string | undefined) => {
  if (!href) return null
  try {
    const url = new URL(href)
    if (url.hostname !== 'github.com') return null
    const username = url.pathname.replace(/^\/+/, '').split('/')[0]?.trim()
    return username ? username : null
  } catch {
    return null
  }
}

export const GitHubActivity = () => {
  const username = getGitHubUsername(githubHref)
  const { ref: sectionRef, isVisible } = useInViewOnce<HTMLElement>({
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.15,
  })

  const years = useMemo(() => {
    const y = new Date().getFullYear()
    return [y, y - 1, y - 2, y - 3]
  }, [])

  const [selectedYear, setSelectedYear] = useState(years[0])
  const [dataByYear, setDataByYear] = useState<Record<number, { date: string; count: number; level: number }[]>>({})
  const [isLoading, setIsLoading] = useState(false)

  const selectedYearData = dataByYear[selectedYear]
  const calendarData = selectedYearData ?? []

  useEffect(() => {
    if (!username) return
    if (dataByYear[selectedYear]) return

    let isActive = true
    const controller = new AbortController()

    const run = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${selectedYear}`, {
          signal: controller.signal,
        })
        if (!res.ok) throw new Error(`GitHub contributions fetch failed: ${res.status}`)
        const json = (await res.json()) as { contributions?: { date: string; count: number; level: number }[] }
        const contributions = Array.isArray(json.contributions) ? json.contributions : []

        if (isActive) setDataByYear((prev) => ({ ...prev, [selectedYear]: contributions }))
      } catch {
        if (isActive) setDataByYear((prev) => ({ ...prev, [selectedYear]: [] }))
      } finally {
        if (isActive) setIsLoading(false)
      }
    }

    run()

    return () => {
      isActive = false
      controller.abort()
    }
  }, [dataByYear, selectedYear, username])

  if (!username) return null

  return (
    <Box
      id="github-activity"
      component="section"
      ref={sectionRef}
      className={`portfolio-fade${isVisible ? ' portfolio-fade--in' : ''}`}
      sx={{ maxWidth: 1120, mx: 'auto', mb: { xs: 6, md: 10 }, position: 'relative', zIndex: 1, width: '100%' }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          color: 'text.primary',
          fontWeight: 800,
          fontSize: { xs: '1.5rem', md: '1.75rem' },
          mb: 3,
        }}
      >
        GitHub activity
      </Typography>
      <Box
        sx={{
          position: 'relative',
          p: { xs: 2, md: 4 },
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'rgba(255,255,255,0.08)',
          background: 'rgba(24, 24, 27, 0.6)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
          backdropFilter: 'blur(16px)',
          overflow: 'visible',
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: -32,
            right: -32,
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: 'rgba(99, 102, 241, 0.1)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
            display: { xs: 'none', sm: 'block' },
            animation: 'ref-orb-float 7.5s ease-in-out infinite',
            '@keyframes ref-orb-float': {
              '0%, 100%': { transform: 'translate3d(0, 0, 0)', opacity: 0.7 },
              '50%': { transform: 'translate3d(-10px, 10px, 0)', opacity: 1 },
            },
            '@media (prefers-reduced-motion: reduce)': {
              animation: 'none',
            },
          }}
        />
        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1} sx={{ mb: 2, position: 'relative', zIndex: 1 }}>
          {years.map((y) => {
            const isActive = y === selectedYear
            return (
              <Button
                key={y}
                size="small"
                onClick={() => setSelectedYear(y)}
                sx={{
                  textTransform: 'none',
                  fontWeight: 600,
                  borderRadius: 9999,
                  px: 1.5,
                  color: isActive ? '#fff' : ref.zinc400,
                  backgroundColor: isActive ? 'rgba(99, 102, 241, 0.28)' : 'rgba(255,255,255,0.04)',
                  border: '1px solid',
                  borderColor: isActive ? 'rgba(99, 102, 241, 0.35)' : 'transparent',
                  '&:hover': {
                    backgroundColor: isActive ? 'rgba(99, 102, 241, 0.35)' : 'rgba(255,255,255,0.1)',
                    color: '#fff',
                  },
                }}
              >
                {y}
              </Button>
            )
          })}
        </Stack>
        <Box sx={{ width: '100%', overflowX: 'auto', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          <GitHubCalendar
            username={username}
            data={calendarData}
            loading={isLoading || !selectedYearData}
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            colorScheme="dark"
          />
        </Box>
        <Typography
          variant="body2"
          sx={{ textAlign: 'center', color: 'text.muted', mt: 2, lineHeight: 1.6, maxWidth: 560, mx: 'auto' }}
        >
          Contributions from{' '}
          <Link href={githubHref} target="_blank" rel="noreferrer" sx={{ color: 'primary.main', fontWeight: 700, textDecoration: 'none' }}>
            @{username}
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}
