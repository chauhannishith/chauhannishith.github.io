import { Grid, Link } from '@mui/material'
import { customTheme } from '../utils'
import { useEffect } from 'react'

export const Navbar = () => {
  const { palette } = customTheme

  useEffect(() => {
    const nav = document.getElementById('navbar')
    const onScroll = () => {
      if (nav) {
        if (window.scrollY > 100) {
          nav.classList.add('scrolled')
        } else {
          nav.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <Grid container 
      flexDirection={'row'} 
      sx={{
        justifyContent: 'flex-end',
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
      <Grid container item xs={12} md={4} justifyContent={'flex-end'} alignItems={'center'}
        flexDirection={'row'}
        columnGap={'2rem'}
        sx={{
          visibility: {
            md: 'visible',
          },
        }}
      >
        <Link href="#about" variant='subtitle1' className='nav-link'>
          About
        </Link>
        <Link href="#skills" variant='subtitle1' className='nav-link'>
          Skills
        </Link>
        <Link href="#experience" variant='subtitle1' className='nav-link'>
          Experience
        </Link>
        <Link href="#connect" variant='subtitle1' className='nav-link'>
          Contact
        </Link>
      </Grid>
    </Grid>
  )
}