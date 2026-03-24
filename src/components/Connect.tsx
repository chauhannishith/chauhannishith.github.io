import { Typography, Grid } from '@mui/material'
import { Section } from './Section'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'

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
              <Grid item marginRight={'1rem'} className='interactive-icon'>
                <a href="mailto:chauhannishith94@gmail.com">
                  <Email color={'primary'}/>
                </a>
              </Grid>
              <Grid item marginRight={'1rem'} className='interactive-icon'>
                <a href="https://github.com/chauhannishith" target='_blank' rel='noreferrer'>
                  <GitHub color={'primary'}/>
                </a>
              </Grid>
              <Grid item marginRight={'1rem'} className='interactive-icon'>
                <a href="https://www.linkedin.com/in/nishith-chauhan-091322b9/" target='_blank' rel='noreferrer'>
                  <LinkedIn color={'primary'}/>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  )
}