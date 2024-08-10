import { Card } from '@mui/material'
import React from 'react'

export const Section = ({children, id, title}: {children: React.ReactNode, id: string, title?: string}) => {
  return (
    <section id={id}
    style={{paddingTop: '5.5rem'}}>
        <Card style={{
            height: 'calc(100vh - 6.5rem)',
            width: '100%',
            padding: '0rem',
        }}>
      {title && <h2>{title}</h2>}
      {children}
        </Card>
    </section>
  )
}