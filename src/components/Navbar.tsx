import { Grid, Link } from '@mui/material'
import { customTheme } from '../utils'
import { useEffect } from 'react'

export const Navbar = () => {
  const {palette} = customTheme

  useEffect(() => {
    const nav = document.getElementById('navbar')
    window.onscroll = () => {
      if (nav) {
        if (window.scrollY > 100) {
          nav.classList.add('scrolled')
        } else {
          nav.classList.remove('scrolled')
        }
      }
    }
  }, [])

  return (
    <Grid container 
      flexDirection={'row'} 
      sx={{
        justifyContent: {
          md: 'space-between',
          lg: 'flex-end',
        },
      }}
      style={{
        position: 'sticky',
        top: 0,
        backgroundColor: palette.background.surface2,
        padding: '1rem 2rem',
        zIndex: 10,
      }}
      id='navbar'
    >
      {/* <Grid item xs={4}>
        <Typography variant={'h4'}>Nishith Chauhan</Typography>
      </Grid> */}
      <Grid container item xs={12} md={4} justifyContent={'space-around'} alignItems={'center'}
        flexDirection={'row'}
        sx={{
          visibility: {
            sm: 'hidden',
            md: 'visible',
          },
        }}
      >
        <Link href="#about" variant='subtitle1'>
          About
        </Link>
        <Link href="#skills" variant='subtitle1'>
          Skills
        </Link>
        <Link href="#experience" variant='subtitle1'>
          Experience
        </Link>
        <Link href="#connect" variant='subtitle1'>
          Contact
        </Link>
      </Grid>
    </Grid>
  )
}