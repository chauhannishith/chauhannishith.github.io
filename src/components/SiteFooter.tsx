import { Box, Link, Stack, Typography } from '@mui/material'
import { site } from '../data/site'

export const SiteFooter = () => {
  const y = new Date().getFullYear()
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        py: 4,
        px: 2,
        mt: 4
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ maxWidth: 1280, mx: 'auto', px: { xs: 1, sm: 0 } }}
      >
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          © {y} {site.name}. All rights reserved.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <Link href="#connect" color="primary" sx={{ textDecoration: 'none', fontWeight: 600 }}>
            Get in touch
          </Link>
        </Typography>
      </Stack>
    </Box>
  )
}
