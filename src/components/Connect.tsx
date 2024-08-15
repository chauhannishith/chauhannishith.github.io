import { Typography, Grid } from '@mui/material'
import { Section } from './Section'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'

export const Connect = () => {
  return (
    <Section id="connect">
      <Grid container item xs>
        <Grid container item xs flexDirection={'column'}>
          <Grid container item md={6} flexDirection={'column'} gap={'1rem'}>
            <Typography variant='h2' fontWeight={600} color='text.secondary'>
              Let's Connect
            </Typography>
            <Typography variant='body1' fontSize={'1.125rem'} color='text.secondary'>
              If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.
            </Typography>
            <Grid container item xs flexDirection={'row'}>
              <Grid item marginRight={'1rem'}>
                <a href="mailto:chauhannishith94@gmail.com">
                  <Email color={'primary'}/>
                </a>
              </Grid>
              <Grid item marginRight={'1rem'}>
                <a href="https://github.com/chauhannishith" target='_blank'>
                  <GitHub color={'primary'}/>
                </a>
              </Grid>
              <Grid item marginRight={'1rem'}>
                <a href="https://www.linkedin.com/in/nishith-chauhan-091322b9/" target='_blank'>
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