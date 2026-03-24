import React from 'react'
import { Grid, Container } from '@mui/material'
import { Navbar } from './Navbar'
import { SocialRail } from './SocialRail'

export const PageWrapper = ({children}: {children: React.ReactNode}) => {

  return (
    <>
      <Navbar />
      <SocialRail />
      <Container 
        style={{
          margin: '0rem',
          minWidth: '100%',
          minHeight: '100%',
          boxSizing: 'border-box',
          padding: 0,
        }}
        data-testid='page_wrapper'
      >
        <Grid container flexDirection={'column'} item >
          {children}
        </Grid>
      </Container>
    </>
  )
}