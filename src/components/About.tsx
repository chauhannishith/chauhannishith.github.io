import { Typography } from '@mui/material'
import { Section } from './Section'

export const About = () => {
  return (
    <Section id="about" dark>
      <Typography fontSize={'1.25rem'} color={'secondary'} className='fade-list-item' style={{ animationDelay: '60ms' }}>
        Hi, I'm
      </Typography>
      <Typography variant='h1' color={'secondary'} marginLeft={'-0.375rem'}
        className='fade-list-item'
        style={{ animationDelay: '140ms' }}
        sx={{
          fontSize: {
            xs: '5rem',
          }
        }}> Nishith Chauhan
      </Typography>
      <Typography variant='h5' color={'secondary'} className='fade-list-item' style={{ animationDelay: '220ms' }}>
        Full Stack Developer based in Surat, India
      </Typography>
    </Section>
  )
}