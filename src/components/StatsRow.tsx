import { Box, Grid, Typography } from '@mui/material'
import LayersIcon from '@mui/icons-material/Layers'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { site } from '../data/site'
import { ref } from '../theme/tokens'

const icons = [LayersIcon, EmojiEventsIcon, CalendarMonthIcon] as const
const iconShell = [
  { bg: 'rgba(48, 128, 255, 0.1)', color: '#54a2ff' },
  { bg: 'rgba(0, 187, 127, 0.1)', color: ref.secondary },
  { bg: 'rgba(168, 85, 247, 0.1)', color: '#c07eff' },
] as const

export const StatsRow = () => {
  return (
    <Box
      id="stats"
      sx={{
        maxWidth: 1280,
        mx: 'auto',
        width: '100%',
        py: { xs: 0, md: 1 },
        mb: { xs: 4, md: 6 },
      }}
    >
      <Grid container spacing={2}>
        {site.stats.map((s, i) => {
          const Icon = icons[i] ?? icons[0]
          const shell = iconShell[i] ?? iconShell[0]
          return (
            <Grid item xs={12} md={4} key={s.id}>
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
                    {s.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.muted', fontWeight: 500, fontSize: '0.8rem' }}>
                    {s.label}
                  </Typography>
                  {s.hint && (
                    <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block', mt: 0.75 }}>
                      {s.hint}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
