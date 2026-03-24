import { Box, Link } from '@mui/material'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import { socialLinks } from '../data/socials'

const iconById = {
  email: Email,
  github: GitHub,
  linkedin: LinkedIn,
}

export const SocialRail = () => {
  return (
    <Box
      className='social-rail'
      sx={{
        display: {
          xs: 'none',
          md: 'flex',
        },
      }}
    >
      {socialLinks.map((social) => {
        const Icon = iconById[social.id]
        return (
          <Link
            key={social.id}
            href={social.href}
            aria-label={social.label}
            title={social.label}
            target={social.id === 'email' ? undefined : '_blank'}
            rel={social.id === 'email' ? undefined : 'noreferrer'}
            className='interactive-icon social-rail-link'
          >
            <Icon fontSize='small' />
          </Link>
        )
      })}
      <div className='social-rail-line' />
    </Box>
  )
}
