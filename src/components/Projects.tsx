import { Box, Card, CardContent, Chip, Grid, Link, Stack, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import GitHubIcon from '@mui/icons-material/GitHub'
import { socialLinks } from '../data/socials'
import { projects } from '../data/projects'
import { site } from '../data/site'
import { ref } from '../theme/tokens'

const githubHref = socialLinks.find((s) => s.id === 'github')?.href

export const Projects = () => {
  if (projects.length === 0) return null

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        maxWidth: 1280,
        mx: 'auto',
        width: '100%',
        mb: { xs: 6, md: 10 },
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'flex-end' }}
        spacing={2}
        sx={{ mb: 3, gap: 3 }}
      >
        <Box sx={{ maxWidth: 640 }}>
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
            }}
          >
            {site.projectsKicker}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: 'text.primary',
              fontWeight: 800,
              lineHeight: 1.1,
              fontSize: { xs: '1.9rem', md: '2.4rem' },
            }}
          >
            {site.projectsTitle}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.5, maxWidth: 560, lineHeight: 1.7 }}>
            {site.projectsLead}
          </Typography>
        </Box>
        {githubHref && (
          <Link
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 1.5,
              borderRadius: 2,
              textDecoration: 'none',
              color: '#fff',
              fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.1)',
              backgroundColor: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(8px)',
              flexShrink: 0,
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' },
            }}
          >
            <GitHubIcon />
            <span>View GitHub</span>
            <ArrowForwardIcon sx={{ fontSize: 18, opacity: 0.9 }} />
          </Link>
        )}
      </Stack>
      <Grid container spacing={2}>
        {projects.map((p) => (
          <Grid item xs={12} md={6} key={p.id}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                borderRadius: 3,
                border: '1px solid rgba(255,255,255,0.08)',
                backgroundColor: ref.cardBg,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                '&:hover': {
                  borderColor: 'rgba(99, 102, 241, 0.35)',
                  boxShadow: '0 0 0 1px rgba(99, 102, 241, 0.1)',
                },
              }}
            >
              {p.image && (
                <Box
                  component="img"
                  src={p.image}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  sx={{
                    width: '100%',
                    aspectRatio: '16 / 10',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    display: 'block',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}
                />
              )}
              <CardContent sx={{ p: 2.5, display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1} sx={{ mb: 1.5 }}>
                  <Box>
                    <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 800, lineHeight: 1.2 }}>
                      {p.title}
                    </Typography>
                    {p.kind === 'placeholder' && (
                      <Typography component="span" variant="caption" sx={{ color: 'secondary.main' }}>
                        {' '}
                        Placeholder — edit in data/projects.ts
                      </Typography>
                    )}
                  </Box>
                  <Typography
                    component="span"
                    variant="caption"
                    sx={{
                      flexShrink: 0,
                      color: 'text.muted',
                      fontWeight: 600,
                      fontFamily: 'ui-monospace, Menlo, Monaco, Consolas, monospace',
                    }}
                  >
                    {p.year}
                  </Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, flex: 1, mb: 2 }}>
                  {p.description}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1} useFlexGap sx={{ mb: p.href ? 1.5 : 0 }}>
                  {p.tags.map((t) => (
                    <Chip
                      key={`${p.id}-${t}`}
                      label={t}
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: 'rgba(99, 102, 241, 0.3)',
                        color: 'text.secondary',
                        backgroundColor: 'rgba(99, 102, 241, 0.06)',
                      }}
                    />
                  ))}
                </Stack>
                {p.href && (
                  <Link
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    sx={{ fontWeight: 700, color: 'primary.main', textDecoration: 'none', alignSelf: 'flex-start' }}
                  >
                    View project
                  </Link>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
