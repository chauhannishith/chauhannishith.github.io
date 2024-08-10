import { Container, ThemeProvider } from '@mui/material'
import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { MainPage } from '../containers/Main'
import {Profile} from '../containers/Profile'
import { customTheme } from '../utils'

const CenterLayout = () => {
  const theme = customTheme
  return (
    <ThemeProvider theme={customTheme}>
      <Container maxWidth={false} 
        style={{
          position: 'relative',
          backgroundColor: theme.palette.background.default,
          color: 'black',
          minHeight: '100vh',
          padding: '0',
        }}>
        <React.Suspense fallback={<></>}>
          <Outlet />
        </React.Suspense>
      </Container>
    </ThemeProvider>
  )
}

export const RoutesContainer = () => {
  const routes = () => {
    return (
      <Route element={<CenterLayout />}>
        <Route path={'/profile'} element={<Profile />} />

        <Route path="*" element={<MainPage />} />
      </Route>
    )
  }
  return (
    <BrowserRouter>
      <Routes>{routes()}</Routes>
    </BrowserRouter>
  )
}
