import { Grid, Typography } from '@mui/material'
import { Section } from './Section'

export const Skills = () => {
  const languageSkills = ['Javascript', 'Typescript', 'Golang', 'Python']
  const frameworkSkills = ['React', 'NextJS', 'Express', 'Redux-Thunk', 'Redux-saga']
  const databaseSkills = ['PostgreSQL', 'DynamoDB', 'MongoDB']

  return (
    <Section id="skills">
      <Grid container item xs={12} rowGap={2}>
        <Grid item xs={12} className='fade-list-item' style={{ animationDelay: '40ms' }}>
          <Typography variant='h3' color='text.secondary'>
            Skills
          </Typography>
        </Grid>

        <Grid item xs={12} className='fade-list-item' style={{ animationDelay: '100ms' }}>
          <Typography variant='h5' color='text.secondary'>
            Technologies I've worked with
          </Typography>
        </Grid>
        <Grid container item xs flexWrap={'wrap'} flexDirection={'row'} gap={'1rem'} className='fade-list-item' style={{ animationDelay: '180ms' }}>
          <Grid
            container
            item
            xs
            flexDirection={'column'}
            className='interactive-card'
            sx={{
              border: '1px solid',
              borderColor: 'background.surface3',
              borderRadius: '0.5rem',
              padding: '1rem',
            }}
          >
            <Typography variant='h6' color='text.secondary'>
            Languages
            </Typography>
            <ul style={{ margin: '0.75rem 0 0 0', paddingLeft: '1.25rem' }}>
              {languageSkills.map((skill, index) => (
                <li key={skill} className='fade-list-item' style={{ animationDelay: `${240 + (index * 50)}ms` }}>
                  <Typography variant='body1' color='text.secondary'>{skill}</Typography>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid
            container
            item
            xs
            flexDirection={'column'}
            className='interactive-card'
            sx={{
              border: '1px solid',
              borderColor: 'background.surface3',
              borderRadius: '0.5rem',
              padding: '1rem',
            }}
          >
            <Typography variant='h6' color='text.secondary'>
            Frameworks
            </Typography>
            <ul style={{ margin: '0.75rem 0 0 0', paddingLeft: '1.25rem' }}>
              {frameworkSkills.map((skill, index) => (
                <li key={skill} className='fade-list-item' style={{ animationDelay: `${280 + (index * 50)}ms` }}>
                  <Typography variant='body1' color='text.secondary'>{skill}</Typography>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid
            container
            item
            xs
            flexDirection={'column'}
            className='interactive-card'
            sx={{
              border: '1px solid',
              borderColor: 'background.surface3',
              borderRadius: '0.5rem',
              padding: '1rem',
            }}
          >
            <Typography variant='h6' color='text.secondary'>
            Databases
            </Typography>
            <ul style={{ margin: '0.75rem 0 0 0', paddingLeft: '1.25rem' }}>
              {databaseSkills.map((skill, index) => (
                <li key={skill} className='fade-list-item' style={{ animationDelay: `${320 + (index * 50)}ms` }}>
                  <Typography variant='body1' color='text.secondary'>{skill}</Typography>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Grid>

    </Section>
  )
}