import { Card, Container } from '@mui/material'
import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { App } from '../App'
import {Profile} from '../containers/Profile'

const CenterLayout = () => {
  return (
    <Container maxWidth="sm" className="context">
      <Card raised={true} className="card-height content-container">
          <React.Suspense fallback={<></>}>
            <Outlet />
          </React.Suspense>
      </Card>
    </Container>
  )
}

export const RoutesContainer = () => {
  const routes = () => {
    return (
      <Route element={<CenterLayout />}>
        <Route path={"/profile"} element={<Profile />} />

        <Route path="*" element={<App />} />
      </Route>
    )
  }
  return (
    <BrowserRouter>
      <Routes>{routes()}</Routes>
    </BrowserRouter>
  )
}
