/**
 * Not mounted in Profile (hidden until you have real quotes). Re-add in containers/Profile.tsx when ready.
 */
import { Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import { site } from '../data/site'
import { testimonials } from '../data/testimonials'

export const Testimonials = () => {
  if (testimonials.length === 0) {
    return (
      <Stack sx={{ maxWidth: 1120, mx: 'auto', px: { xs: 2, sm: 3, md: 4 }, py: 4 }} spacing={1}>
        <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em' }}>
          Testimonials
        </Typography>
        <Typography variant="h4" component="h2" sx={{ color: 'text.primary', fontWeight: 700, mb: 1 }}>
          What people say
        </Typography>
        <Card
          variant="outlined"
          sx={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(24,24,27,0.4)' }}
        >
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
              {site.testimonialsPlaceholder}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block', mt: 1 }}>
              Add entries in src/data/testimonials.ts when you have quotes.
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    )
  }
  return (
    <Stack sx={{ maxWidth: 1120, mx: 'auto', px: { xs: 2, sm: 3, md: 4 }, py: 4 }} spacing={2}>
      <Typography variant="h4" component="h2" sx={{ color: 'text.primary', fontWeight: 700 }}>
        Testimonials
      </Typography>
      <Grid container spacing={2}>
        {testimonials.map((t) => (
          <Grid item xs={12} md={6} key={t.id}>
            <Card variant="outlined" sx={{ borderColor: 'rgba(255,255,255,0.08)', height: '100%', bgcolor: 'rgba(24,24,27,0.35)' }}>
              <CardContent>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontStyle: 'italic', mb: 2 }}>
                  “{t.body}”
                </Typography>
                <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                  {t.name}
                </Typography>
                {t.role && (
                  <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                    {t.role}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}
