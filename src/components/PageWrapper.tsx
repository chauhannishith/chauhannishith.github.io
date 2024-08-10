import React from 'react'
import { Grid, Container } from '@mui/material'
import { Navbar } from './Navbar'

export const PageWrapper = ({children}: {children: React.ReactNode}) => {

  return (
    <>
      <Navbar />
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
        <Grid container flexDirection={'column'} item gap={8} marginTop={'1rem'}>
          {children}
        </Grid>
      </Container>
    </>
  )
}