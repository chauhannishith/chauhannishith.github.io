import { Link, Stack, Typography } from '@mui/material'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import { socialLinks } from '../data/socials'
import { PageSection } from './PageSection'

const iconById = {
  email: Email,
  github: GitHub,
  linkedin: LinkedIn
} as const

export const Connect = () => {
  return (
    <PageSection id="connect" kicker="Contact" title="Let’s connect">
      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, maxWidth: 560, mb: 2 }}>
        If you want to know more about me or my work, or you would just like to say hello, reach out. I will get back
        to you.
      </Typography>
      <Stack direction="row" gap={2} flexWrap="wrap">
        {socialLinks.map((social) => {
          const Icon = iconById[social.id]
          return (
            <Link
              key={social.id}
              href={social.href}
              target={social.id === 'email' ? undefined : '_blank'}
              rel={social.id === 'email' ? undefined : 'noreferrer'}
              aria-label={social.label}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                p: 1.5,
                borderRadius: 2,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'text.primary',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(99, 102, 241, 0.08)',
                  borderColor: 'primary.main',
                }
              }}
            >
              <Icon sx={{ color: 'primary.main' }} />
              <span>{social.label}</span>
            </Link>
          )
        })}
      </Stack>
    </PageSection>
  )
}
