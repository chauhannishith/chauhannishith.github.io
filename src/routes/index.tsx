import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Profile } from '../containers/Profile'
import { customTheme } from '../utils'

const CenterLayout = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline enableColorScheme />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          position: 'relative',
          backgroundColor: 'background.default',
          color: 'text.primary',
          minHeight: '100vh',
        }}
      >
        <React.Suspense fallback={null}>
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
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Profile />} />
      </Route>
    )
  }
  return (
    <BrowserRouter>
      <Routes>{routes()}</Routes>
    </BrowserRouter>
  )
}
