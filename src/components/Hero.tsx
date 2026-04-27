import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import CodeIcon from '@mui/icons-material/Code'
import MemoryIcon from '@mui/icons-material/Memory'
import { site } from '../data/site'
import { projects } from '../data/projects'
import { ref } from '../theme/tokens'

const initials = site.name
  .split(' ')
  .map((p) => p[0])
  .join('')
  .slice(0, 2)
  .toUpperCase()

export const Hero = () => {
  return (
    <Box
      id="top"
      component="section"
      aria-label="Intro"
      sx={{
        /* Full-bleed: background + bloom start at top of main (no gap above from main padding) */
        position: 'relative',
        left: '50%',
        width: '100vw',
        maxWidth: '100vw',
        marginLeft: '-50vw',
        /* Nav clearance: same as old main pt — background + bloom include this area */
        pt: { xs: 10, md: 12 },
        /* One full viewport for first screen (no short strip of body bg below hero) */
        minHeight: '100dvh',
        boxSizing: 'border-box',
        overflow: 'hidden',
        mb: { xs: 2, md: 4 },
        isolation: 'isolate',
        bgcolor: ref.background,
      }}
    >
      <Box
        className="ref-hero-glow"
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <div className="ref-hero-glow__a" />
        <div className="ref-hero-glow__b" />
        <div className="ref-hero-glow__c" />
      </Box>
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1280,
          mx: 'auto',
          /* Fill area below section pt (10/12 × 8px) so column meets full first screen */
          minHeight: { xs: 'calc(100dvh - 5rem)', md: 'calc(100dvh - 6rem)' },
          display: 'flex',
          alignItems: 'center',
          px: { xs: 2, md: 3 },
          py: { xs: 2, md: 2 },
        }}
      >
        <Grid container spacing={{ xs: 4, lg: 6 }} alignItems="center" sx={{ width: '100%' }}>
          <Grid item xs={12} lg={6} sx={{ order: { xs: 2, lg: 1 } }}>
            <Box
              component="span"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 1.5,
                py: 0.5,
                mb: 2,
                borderRadius: 9999,
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
                color: 'primary.main',
                border: '1px solid rgba(99, 102, 241, 0.22)',
                bgcolor: 'rgba(99, 102, 241, 0.1)',
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  animation: 'ref-dot 2s ease-in-out infinite',
                  '@keyframes ref-dot': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.35 },
                  },
                }}
              />
              {site.availabilityBadge}
            </Box>
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', mb: 0.5, fontSize: '0.95rem' }}
            >
              {site.kicker} <strong style={{ color: ref.foreground }}>{site.name}</strong>
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.25rem', md: '3.75rem', lg: '4.5rem' },
                fontWeight: 800,
                lineHeight: 1.05,
                mb: 2,
                background: 'linear-gradient(90deg, #ffffff 0%, #c7d2ff 40%, #7d87ff 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {site.heroTitle}
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1.05rem', md: '1.15rem' },
                lineHeight: 1.7,
                mb: 3,
                maxWidth: 520,
              }}
            >
              {site.heroSubtitle}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.muted', mb: 3 }}>
              {site.role} · {site.location}
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={2}>
              {projects.length > 0 && (
                <Button
                  href="#projects"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ChevronRightIcon />}
                  sx={{ borderRadius: 2 }}
                >
                  View projects
                </Button>
              )}
              <Button
                href="#connect"
                size="large"
                sx={{
                  borderRadius: 2,
                  color: ref.zinc400,
                  bgcolor: ref.zinc900,
                  border: '1px solid',
                  borderColor: ref.zinc800,
                  fontWeight: 700,
                  '&:hover': {
                    bgcolor: '#1f1f24',
                    borderColor: 'rgba(255,255,255,0.12)',
                  },
                }}
              >
                Contact me
              </Button>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ order: { xs: 1, lg: 2 }, display: 'flex', justifyContent: { xs: 'center', lg: 'flex-end' } }}
          >
            <Box sx={{ position: 'relative', width: { xs: 220, sm: 280, md: 320 }, height: { xs: 220, sm: 280, md: 320 } }}>
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 4,
                  filter: 'blur(48px)',
                  bgcolor: 'rgba(99, 102, 241, 0.3)',
                  opacity: 0.5,
                  animation: 'ref-avatar-glow 5s ease-in-out infinite',
                  '@keyframes ref-avatar-glow': {
                    '0%, 100%': { opacity: 0.4 },
                    '50%': { opacity: 0.75 },
                  },
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: 4,
                  border: '4px solid #18181b',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                  outline: '1px solid rgba(255,255,255,0.1)',
                  overflow: 'hidden',
                  bgcolor: ref.zinc900,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {site.heroAvatarUrl ? (
                  <Box
                    component="img"
                    src={site.heroAvatarUrl}
                    alt={site.name}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <Typography
                    variant="h2"
                    sx={{ fontWeight: 800, color: 'text.muted', fontSize: { xs: '2.5rem', md: '3.25rem' } }}
                  >
                    {initials}
                  </Typography>
                )}
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: -12,
                  right: -12,
                  width: 48,
                  height: 48,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxSizing: 'border-box',
                  borderRadius: '12px',
                  bgcolor: ref.zinc900,
                  border: '1px solid #27272a',
                  boxShadow: '0 20px 25px -5px rgba(0,0,0,0.4)',
                  color: 'primary.main',
                }}
              >
                <CodeIcon fontSize="medium" />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 24,
                  left: -20,
                  width: 48,
                  height: 48,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxSizing: 'border-box',
                  borderRadius: '12px',
                  bgcolor: ref.zinc900,
                  border: '1px solid #27272a',
                  boxShadow: '0 20px 25px -5px rgba(0,0,0,0.4)',
                  color: ref.secondary,
                }}
              >
                <MemoryIcon fontSize="medium" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
