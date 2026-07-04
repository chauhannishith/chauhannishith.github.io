import { Box, Grid, Typography } from '@mui/material'
import LayersIcon from '@mui/icons-material/Layers'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { site } from '../data/site'
import { ref } from '../theme/tokens'
import { experiences } from '../data/experience'
import { yearsExperienceFromPeriods } from '../utils/experienceYears'
import { useInViewOnce } from '../hooks/useInViewOnce'
import { useCountUp } from '../hooks/useCountUp'

const iconById: Record<string, typeof LayersIcon> = {
  projects: LayersIcon,
  certs: EmojiEventsIcon,
  years: CalendarMonthIcon,
}

const iconShellById: Record<string, { bg: string; color: string }> = {
  projects: { bg: 'rgba(48, 128, 255, 0.1)', color: '#54a2ff' },
  certs: { bg: 'rgba(0, 187, 127, 0.1)', color: ref.secondary },
  years: { bg: 'rgba(168, 85, 247, 0.1)', color: '#c07eff' },
}

type StatCardProps = {
  stat: (typeof site.stats)[number]
  index: number
  isActive: boolean
  rawValue: string
}

const StatCard = ({ stat, index, isActive, rawValue }: StatCardProps) => {
  const Icon = iconById[stat.id] ?? LayersIcon
  const shell = iconShellById[stat.id] ?? iconShellById.projects

  const match = rawValue.match(/-?\d+/)
  const targetNumber = match ? Number(match[0]) : null
  const suffix = rawValue.includes('+') ? '+' : ''
  const animated = useCountUp(targetNumber ?? 0, { isActive: isActive && targetNumber !== null, delayMs: index * 90 })
  const shownValue =
    targetNumber === null
      ? rawValue
      : `${new Intl.NumberFormat(undefined).format(animated)}${suffix}`

  return (
    <Grid item xs={12} md={4} key={stat.id}>
      <Box
        sx={{
          p: 2.5,
          borderRadius: 2,
          border: '1px solid rgba(255,255,255,0.06)',
          backgroundColor: 'rgba(24, 24, 27, 0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: 2.5,
          transition: 'border-color 0.2s ease',
          '&:hover': { borderColor: 'rgba(99, 102, 241, 0.3)' },
        }}
      >
        <Box
          sx={{
            p: 1.5,
            borderRadius: 2,
            bgcolor: shell.bg,
            color: shell.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon />
        </Box>
        <Box>
          <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 800, lineHeight: 1.1, fontSize: '1.75rem' }}>
            {shownValue}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.muted', fontWeight: 500, fontSize: '0.8rem' }}>
            {stat.label}
          </Typography>
          {stat.subLabel && (
            <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block', mt: 0.75 }}>
              {stat.subLabel}
            </Typography>
          )}
        </Box>
      </Box>
    </Grid>
  )
}

export const StatsRow = () => {
  const justifyContent =
    site.stats.length <= 1 ? 'center' : site.stats.length === 2 ? 'space-evenly' : 'space-between'
  const yearsExperience = yearsExperienceFromPeriods(experiences.map((e) => e.period))
  const { ref: sectionRef, isVisible } = useInViewOnce<HTMLElement>({
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.15,
  })

  return (
    <Box
      id="stats"
      ref={sectionRef}
      className={`portfolio-fade${isVisible ? ' portfolio-fade--in' : ''}`}
      sx={{
        maxWidth: 1280,
        mx: 'auto',
        width: '100%',
        py: { xs: 0, md: 1 },
        mb: { xs: 4, md: 6 },
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent={{ xs: 'flex-start', md: justifyContent }}
        sx={{ justifyContent: { xs: 'flex-start', md: justifyContent } }}
      >
        {site.stats.map((s, idx) => (
          <StatCard
            key={s.id}
            stat={s}
            index={idx}
            isActive={isVisible}
            rawValue={s.id === 'years' ? yearsExperience : s.value}
          />
        ))}
      </Grid>
    </Box>
  )
}
