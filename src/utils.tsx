import { createTheme } from '@mui/material'
import { ref } from './theme/tokens'

declare module '@mui/material/styles/createPalette' {
  interface TypeText {
    muted: string
  }

  interface TypeBackground {
    default: string
    paper: string
    surface: string
    surface2: string
    surface3: string
    header: string
    disabled: string
  }

  interface Palette {
    gradients: {
      newGradient: string
    }
    other: {
      standardInputLine: string
    }
  }

}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xsm: true
    xxl: true
  }
}

const darkSurface = {
  default: ref.background,
  paper: ref.cardBg,
  surface: 'rgba(255,255,255,0.04)',
  surface2: 'rgba(255,255,255,0.08)',
  surface3: 'rgba(255,255,255,0.12)',
  header: ref.zinc900,
  disabled: 'rgba(113, 113, 122, 0.45)',
}

export const customTheme = createTheme({
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Outfit", system-ui, -apple-system, sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
  },
  breakpoints: {
    keys: ['xs', 'xsm', 'sm', 'md', 'lg', 'xl', 'xxl'],
    values: { xs: 0, xsm: 640, sm: 760, md: 960, lg: 1280, xl: 1575, xxl: 1800 },
  },
  palette: {
    mode: 'dark',
    primary: { main: ref.primary, light: '#818cf8', dark: '#4f46e5', contrastText: '#ffffff' },
    secondary: { main: ref.accent, light: '#c084fc', dark: '#9333ea', contrastText: '#0a0a0a' },
    text: {
      primary: ref.foreground,
      secondary: ref.zinc400,
      disabled: 'rgba(113, 113, 122, 0.55)',
      muted: ref.zinc500,
    },
    background: {
      ...darkSurface,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: ref.background,
          color: ref.foreground,
        },
        '::selection': {
          backgroundColor: 'color-mix(in srgb, var(--ref-primary) 30%, transparent)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 700, borderRadius: 16, paddingInline: 14 },
        containedPrimary: {
          background: ref.primary,
          boxShadow: '0 8px 32px rgba(99, 102, 241, 0.25)',
          '&:hover': {
            background: '#4f46e5',
            boxShadow: '0 12px 40px rgba(99, 102, 241, 0.3)',
          },
        },
        outlinedPrimary: { borderColor: 'rgba(99, 102, 241, 0.45)' },
        sizeLarge: { padding: '12px 28px', fontSize: '0.95rem' },
      },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 16, backgroundColor: ref.cardBg } },
    },
    MuiLink: {
      variants: [
        {
          props: { variant: 'subtitle1' },
          style: {
            fontSize: '0.95rem',
            textDecoration: 'none',
            fontWeight: 500,
            color: 'rgba(237, 237, 237, 0.88)',
          },
        },
      ],
    },
    MuiChip: { styleOverrides: { root: { fontWeight: 500 } } },
  },
})
