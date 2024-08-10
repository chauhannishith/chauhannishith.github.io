import { createTheme } from '@mui/material'

export const customTheme = createTheme({
    components: {
      // Name of the component
      MuiButtonBase: {
        defaultProps: {
          // The props to change the default for.
        },
      },
    }
})