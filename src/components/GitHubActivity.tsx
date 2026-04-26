import { Box, Button, Stack, Typography } from '@mui/material'
import { ref } from '../theme/tokens'

const years = ['2026', '2025', '2024', '2023'] as const

const PlaceholderGraph = () => {
  const cols = 24
  const rows = 7
  const cells: boolean[] = []
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      cells.push((c + r) % 4 === 0)
    }
  }
  return (
    <Box
      role="img"
      aria-label="GitHub activity placeholder. Connect a live calendar later."
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 12px)`,
        gap: '4px',
        justifyContent: 'center',
        width: '100%',
        overflow: 'auto',
        py: 1,
      }}
    >
      {cells.map((on, i) => (
        <Box
          key={i}
          sx={{
            width: 12,
            height: 12,
            borderRadius: '4px',
            bgcolor: on ? 'rgba(99, 102, 241, 0.35)' : '#1e1e24',
            border: '1px solid rgba(255,255,255,0.04)',
          }}
        />
      ))}
    </Box>
  )
}

export const GitHubActivity = () => {
  return (
    <Box
      id="github-activity"
      component="section"
      sx={{ maxWidth: 1120, mx: 'auto', mb: { xs: 6, md: 10 }, position: 'relative', zIndex: 1, width: '100%' }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          color: 'text.primary',
          fontWeight: 800,
          fontSize: { xs: '1.5rem', md: '1.75rem' },
          mb: 3,
        }}
      >
        GitHub activity
      </Typography>
      <Box
        sx={{
          position: 'relative',
          p: { xs: 2, md: 4 },
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'rgba(255,255,255,0.08)',
          background: 'rgba(24, 24, 27, 0.6)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -32,
            right: -32,
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: 'rgba(99, 102, 241, 0.1)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />
        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1} sx={{ mb: 2 }}>
          {years.map((y) => (
            <Button
              key={y}
              size="small"
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                borderRadius: 9999,
                px: 1.5,
                color: ref.zinc400,
                backgroundColor: 'rgba(255,255,255,0.04)',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' },
              }}
            >
              {y}
            </Button>
          ))}
        </Stack>
        <PlaceholderGraph />
        <Typography
          variant="body2"
          sx={{ textAlign: 'center', color: 'text.muted', mt: 2, lineHeight: 1.6, maxWidth: 560, mx: 'auto' }}
        >
          This is a visual placeholder. Wire it to the GitHub contributions API (or a static JSON export) when you
          are ready. Until then, it keeps the same layout as the reference site.
        </Typography>
      </Box>
    </Box>
  )
}
