import { Box, Link, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { site } from '../data/site'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#connect', label: 'Contact' },
] as const

const first = site.name.split(' ')[0] ?? site.name

export const Navbar = () => {
  useEffect(() => {
    const nav = document.getElementById('navbar')
    const onScroll = () => {
      if (nav) {
        if (window.scrollY > 12) {
          nav.classList.add('scrolled')
        } else {
          nav.classList.remove('scrolled')
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Box id="navbar" component="header">
      <Box className="nav-pill" component="nav" aria-label="Primary">
        <Link
          href="#top"
          color="inherit"
          sx={{
            textDecoration: 'none',
            pl: { md: 0.5 },
            flexShrink: 0,
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Typography component="span" variant="h6" sx={{ fontWeight: 800, color: 'text.primary', fontSize: '1rem' }}>
            {first}
            <Typography
              component="span"
              variant="h6"
              sx={{ fontWeight: 500, color: 'text.secondary', ml: 0.25, fontSize: '1rem' }}
            >
              .dev
            </Typography>
          </Typography>
        </Link>
        <Stack
          direction="row"
          gap={0.25}
          flexWrap="wrap"
          justifyContent={{ xs: 'center', md: 'flex-end' }}
          alignItems="center"
          sx={{ rowGap: 0.5, minWidth: 0 }}
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link" underline="none">
              {l.label}
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}
