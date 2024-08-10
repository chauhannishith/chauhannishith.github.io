import { Card } from '@mui/material'
import React from 'react'
import { customTheme } from '../utils'

export const Section = ({children, id, title, isFirst}: {children: React.ReactNode, id: string, title?: string, isFirst?: boolean}) => {
  const {palette} = customTheme
  return (
    <section id={id}
    style={{paddingTop: isFirst ? '2.5rem' : '5.5rem'}}>
        <Card style={{
            height: 'calc(100vh - 8rem)',
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
  )
}