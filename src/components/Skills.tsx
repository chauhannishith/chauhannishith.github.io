import { Grid, Typography } from '@mui/material'
import { Section } from './Section'

export const Skills = () => {
  return (
    <Section id="skills">
      <Grid container item xs={12} rowGap={2}>
        <Grid item xs={12}>
          <Typography variant='h3' color='text.secondary'>
          Skills
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='h5' color='text.secondary'>
        Technologies I've worked with
          </Typography>
        </Grid>
        <Grid container item xs flexDirection={'column'}>
          <Typography variant='h6' color='text.secondary'>
        Languages
          </Typography>
          <ul>
            <li><Typography variant='body1' color='text.secondary'>React</Typography></li>
            <li><Typography variant='body1' color='text.secondary'>Node</Typography></li>
            <li><Typography variant='body1' color='text.secondary'>Express</Typography></li>
            <li><Typography variant='body1' color='text.secondary'>PostgreSQL</Typography></li>
            <li><Typography variant='body1' color='text.secondary'>Typescript</Typography></li>
          </ul>
        </Grid>
        <Grid container item xs flexDirection={'column'}>
          <Typography variant='h6' color='text.secondary'>
        Frameworks
          </Typography>
          <ul>
            <li><Typography variant='body1' color='text.secondary'>React</Typography></li>
            <li><Typography variant='body1' color='text.secondary'>Node</Typography></li>
            <li><Typography variant='body1' color='text.secondary'>Express</Typography></li>
            <li><Typography variant='body1' color='text.secondary'>PostgreSQL</Typography></li>
            <li><Typography variant='body1' color='text.secondary'>Typescript</Typography></li>
          </ul>
        </Grid>
        <Grid container item xs flexDirection={'column'}>
          <Typography variant='h6' color='text.secondary'>
        Databases
          </Typography>
          <ul>
            <li><Typography variant='body1' color='text.secondary'>PostgreSQL</Typography></li>
            <li><Typography variant='body1' color='text.secondary'>DynamoDB</Typography></li>
            <li><Typography variant='body1' color='text.secondary'>MongoDB</Typography></li>
          </ul>
        </Grid>
      </Grid>

    </Section>
  )
}