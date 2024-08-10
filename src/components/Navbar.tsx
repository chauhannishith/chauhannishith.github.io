import { Grid, Link } from '@mui/material'
import { customTheme } from '../utils'

export const Navbar = () => {
  const {palette} = customTheme
  return (
    <Grid container 
      flexDirection={'row'} 
      sx={{
        justifyContent: {
          md: 'space-between',
          lg: 'flex-end',
        },
      }}
      style={{
        position: 'sticky',
        top: 0,
        backgroundColor: palette.background.surface,
        padding: '1rem 2rem',
      }}>
      {/* <Grid item xs={4}>
        <Typography variant={'h4'}>Nishith Chauhan</Typography>
      </Grid> */}
      <Grid container item xs={12} md={4} justifyContent={'space-around'} alignItems={'center'}
        flexDirection={'row'}
      >
        <Link href="#about" variant='subtitle1'>
                      About
        </Link>
        <Link href="#skills" variant='subtitle1'>
                      Skills
        </Link>
        <Link href="#experience" variant='subtitle1'>
                      Experience
        </Link>
        <Link href="#contact" variant='subtitle1'>
                      Contact
        </Link>
      </Grid>
    </Grid>
  )
}