import { Card, Grid } from '@mui/material'
import React from 'react'
import { customTheme } from '../utils'

export const Section = ({children, id, title, dark}: {children: React.ReactNode, dark?: boolean, id: string, title?: string}) => {
  const {palette} = customTheme
  return (
    <Grid container item xs={12}>
      <section id={id}
        style={{
          width: '100%',
        }}
      >
        <Card style={{
          minHeight: 'calc(100vh - 60px)',
          width: '100%',
          backgroundColor: dark ? palette.background.surface2 : palette.background.default,
        }}
        sx={{
          padding: {
            xs:'2rem 2rem',
            md: '6rem 10rem',            
          },
        }}>
          {title && <h2 style={{
            marginTop: '0'
          }}>{title}</h2>}
          {children}
        </Card>
      </section>
    </Grid>
  )
}