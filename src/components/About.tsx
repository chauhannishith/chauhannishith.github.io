import { Typography } from '@mui/material'
import { Section } from './Section'

export const About = () => {
  return (
    <Section id="about" dark>
      <Typography fontSize={'1.25rem'} color={'secondary'}>Hi, I'm</Typography>
      <Typography variant='h1' color={'secondary'} marginLeft={'-0.375rem'}
        sx={{
          fontSize: {
            xs: '5rem',
          }
        }}> Nishith Chauhan</Typography>
      <Typography variant='h5' color={'secondary'}>Full Stack Developer based in Surat, India</Typography>
    </Section>
  )
}