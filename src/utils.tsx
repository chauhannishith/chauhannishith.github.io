import { createTheme } from '@mui/material'

declare module '@mui/material/styles/createPalette' {
    // interface PaletteColor extends ColorPartial {}
  
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
  
    // interface PaletteOptions {
    //   gradients: {
    //     newGradient: string
    //   }
    // }
  }

// interface TypographyCustomVariants {
//     display1: React.CSSProperties
//     subheader1: React.CSSProperties
//     subheader2: React.CSSProperties
//     description: React.CSSProperties
//     buttonL: React.CSSProperties
//     buttonM: React.CSSProperties
//     buttonS: React.CSSProperties
//     helperText: React.CSSProperties
//     tooltip: React.CSSProperties
//     main21: React.CSSProperties
//     secondary21: React.CSSProperties
//     main16: React.CSSProperties
//     secondary16: React.CSSProperties
//     main14: React.CSSProperties
//     secondary14: React.CSSProperties
//     main12: React.CSSProperties
//     secondary12: React.CSSProperties
//   }
  
declare module '@mui/material/styles' {
    // interface TypographyVariants extends TypographyCustomVariants {}
  
    // allow configuration using `createTheme`
    // interface TypographyVariantsOptions extends TypographyCustomVariants {}
  
    interface BreakpointOverrides {
      xsm: true
      xxl: true
    }
  }

export const customTheme = createTheme({
  breakpoints: {
    keys: ['xs', 'xsm', 'sm', 'md', 'lg', 'xl', 'xxl'],
    values: { xs: 0, xsm: 640, sm: 760, md: 960, lg: 1280, xl: 1575, xxl: 1800 },
  },
  palette: {
    primary: {
      main: '#000000',
      light: '#6B00F0',
      dark: '#D2D4DC',
      contrastText: '#0F121D',
    },
    secondary: {
      main: '#FF0000',
      light: '#FF0000',
      dark: '#FF0000',
      contrastText: '#FF0000',
    },
    text: {
      primary: '#5D576B',
      secondary: '#6B00F0',
      disabled: '#D2D4DC',
      muted: '#D2D4DC',
    },
    background: {
      default: '#FCFCFC',
      paper: '#FFFFFF',
      surface: '#99E1D9',
      surface2: '#FFFAE3',
      surface3: '#E5E7EB',
      header: '#F9FAFB',
      disabled: '#D2D4DC',
    },
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
      },
    },
    MuiLink: {
      variants: [
        {
          props: { variant: 'subtitle1' },
          style: {
            fontSize: '1rem',
            color: 'black',
            textDecoration: 'none',
            fontWeight: 600,
          },
        },
      ]
    },
  }
})