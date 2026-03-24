import { Typography, Grid } from '@mui/material'
import { Section } from './Section'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import { socialLinks } from '../data/socials'

const iconById = {
  email: Email,
  github: GitHub,
  linkedin: LinkedIn,
}

export const Connect = () => {
  return (
    <Section id="connect">
      <Grid container item xs>
        <Grid container item xs flexDirection={'column'}>
          <Grid container item md={6} flexDirection={'column'} gap={'1rem'}>
            <Typography variant='h2' fontWeight={600} color='text.secondary' className='fade-list-item' style={{ animationDelay: '50ms' }}>
              Let's Connect
            </Typography>
            <Typography variant='body1' fontSize={'1.125rem'} color='text.secondary' className='fade-list-item' style={{ animationDelay: '130ms' }}>
              If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.
            </Typography>
            <Grid container item xs flexDirection={'row'} className='fade-list-item' style={{ animationDelay: '210ms' }}>
              {socialLinks.map((social) => {
                const Icon = iconById[social.id]
                return (
                  <Grid item marginRight={'1rem'} className='interactive-icon' key={social.id}>
                    <a
                      href={social.href}
                      target={social.id === 'email' ? undefined : '_blank'}
                      rel={social.id === 'email' ? undefined : 'noreferrer'}
                      aria-label={social.label}
                      title={social.label}
                    >
                      <Icon color={'primary'}/>
                    </a>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  )
}