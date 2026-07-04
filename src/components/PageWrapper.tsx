import { Box } from '@mui/material'
import { Navbar } from './Navbar'

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      component="div"
      data-testid="page_wrapper"
      sx={{ minHeight: '100vh', position: 'relative', bgcolor: 'background.default' }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{
          color: 'text.primary',
          px: { xs: 2, md: 3 },
          /* No pt — a top pad here left an empty strip above the full-bleed Hero (body bg). Nav offset lives on Hero. */
          pt: 0,
          pb: { xs: 8, md: 12 },
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
