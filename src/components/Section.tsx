import { Card, Grid } from '@mui/material'
import React from 'react'
import { customTheme } from '../utils'

export const Section = ({children, id, title}: {children: React.ReactNode, id: string, title?: string}) => {
  const {palette} = customTheme
  return (
    <Grid container item xs={12}>
      <section id={id}
        style={{
          width: '100%',
        }}
      >
        <Card style={{
          height: 'calc(100vh - 4rem)',
          width: '100%',
          padding: '2rem',
          backgroundColor: palette.background.surface2,
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