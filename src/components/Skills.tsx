import { Grid, Typography } from '@mui/material'
import { Section } from './Section'

export const Skills = () => {
  return (
    <Section id="skills">
      <Grid container item xs={12} rowGap={2}>
        <Grid item xs={12}>
        <Typography variant='h3'>
          Skills
        </Typography>
      </Grid>

        <Grid item xs={12}>
        <Typography variant='h5'>
        Technologies I've worked with
      </Typography>
      </Grid>
      <Grid container item xs flexDirection={'column'}>
      <Typography variant='h6'>
        Languages
      </Typography>
      <ul>
        <li><Typography variant='body1'>React</Typography></li>
        <li><Typography variant='body1'>Node</Typography></li>
        <li><Typography variant='body1'>Express</Typography></li>
        <li><Typography variant='body1'>PostgreSQL</Typography></li>
        <li><Typography variant='body1'>Typescript</Typography></li>
      </ul>
      </Grid>
      <Grid container item xs flexDirection={'column'}>
      <Typography variant='h6'>
        Frameworks
      </Typography>
      <ul>
        <li><Typography variant='body1'>React</Typography></li>
        <li><Typography variant='body1'>Node</Typography></li>
        <li><Typography variant='body1'>Express</Typography></li>
        <li><Typography variant='body1'>PostgreSQL</Typography></li>
        <li><Typography variant='body1'>Typescript</Typography></li>
      </ul>
      </Grid>
      <Grid container item xs flexDirection={'column'}>
      <Typography variant='h6'>
        Databases
      </Typography>
      <ul>
        <li><Typography variant='body1'>PostgreSQL</Typography></li>
        <li><Typography variant='body1'>DynamoDB</Typography></li>
        <li><Typography variant='body1'>MongoDB</Typography></li>
      </ul>
      </Grid>
      </Grid>

    </Section>
  )
}