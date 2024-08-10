import React from 'react'
import { Container, Grid, Link } from '@mui/material'
import { customTheme } from '../utils'

export const PageWrapper = ({children}: {children: React.ReactNode}) => {
  const {palette} = customTheme
  return (
    <>
    <Grid container flexDirection={'row'} justifyContent={'flex-end'}
      style={{
          position: 'sticky',
          top: 0,
          backgroundColor: palette.background.surface,
          padding: '1rem 2rem',
      }}>
      {/* <Grid item xs={4}>
        <Typography variant={'h4'}>Nishith Chauhan</Typography>
      </Grid> */}
      <Grid container item xs={4} justifyContent={'space-around'} alignItems={'center'}>
        <Link href="#about" variant='subtitle1'>
                      About
        </Link>
        <Link href="#skills" variant='subtitle1'>
                      Skills
        </Link>
        <Link href="#experience" variant='subtitle1'>
                      Experience
        </Link>
        <Link href="#contact" variant='subtitle1'>
                      Contact
        </Link>
      </Grid>
    </Grid>
    <Container 
        style={{
      padding: '0rem 2rem 2rem',
      margin: '0rem',
      minWidth: '100%',
      minHeight: '100%',
      boxSizing: 'border-box',
    }}
        data-testid='page_wrapper'
    >
      {children}
    </Container>
    </>
  )
}