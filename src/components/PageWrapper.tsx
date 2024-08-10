import React from 'react'
import { Container, Grid, Link, Typography } from '@mui/material'

export const PageWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <Container style={{
      padding: '1rem 2rem',
      margin: '0rem',
      minWidth: '100%',
      minHeight: '100%',
    }}>
      <Grid container flexDirection={'row'} justifyContent={'space-between'}>
        <Grid item xs={4}>
          <Typography variant={'h4'}>Nishith Chauhan</Typography>
        </Grid>
        <Grid container item xs={4} justifyContent={'space-around'}>
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
      {children}
    </Container>
  )
}