import { Accordion, AccordionSummary, Typography, AccordionDetails, Grid, styled } from '@mui/material'
import { Section } from './Section'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const Experience = () => {
  return (
    <Section id="experience" dark>
      <Grid container item xs={12} rowGap={2}>
        <Grid item xs={12}>
          <Typography variant='h3' color='secondary'>
          Experience
          </Typography>
        </Grid>
        <Stably/>
        <Numie/>
        <Groceristar/>
      </Grid>
    </Section>
  )
}

const Stably = () => {
  return (
    <Accordion defaultExpanded sx={{
      width: {
        sm: '100%',
        md: '80%',
      }
    }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color={'secondary'} />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography>Software Developer at <Company>Stably Inc.</Company></Typography>
      </AccordionSummary>
      <AccordionDetails>

        <Grid container item xs={12} gap={'1rem'}>
          <Grid item xs={12}>
            <Typography fontSize={'1.125rem'} fontWeight={500}>April 2019 - Present</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
            At Stably I worked as a full stack developer to create responsive web applications and on the backend created APIs which interacted with third-party-apis and integrated them with the frontend. I also worked on improving the code quality and user experience of the applications.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <UList>
              {
                ['Golang', 'ProtoBuf', 'ReactJS', 'Typescript', 'NodeJS', 'Playwright', 'Redux-Saga', 'Redux-Thunk ', ' PostgreSQL' ].map((item, index) => (
                  <li key={`stably-${index}`}>
                    {item}
                  </li>
                ))
              }
            </UList>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

const Numie = () => {
  return (
    <Accordion sx={{
      width: {
        sm: '100%',
        md: '80%',
      }
    }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color={'secondary'} />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Typography>Full Stack Developer at <Company>Numie LLC</Company></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container item xs={12} gap={'1rem'}>
          <Grid item xs={12}>
            <Typography fontSize={'1.125rem'} fontWeight={500}>August 2018 - March 2019</Typography>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography>
                A creative, full-service studio. I worked as a full stack developer converting wireframes into responsive web applications. I also worked on the backend to create APIs and integrate them with the frontend.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <UList>
                {
                  ['ReactJS', 'NextJS', 'SASS/SCSS', 'NodeJs', 'MongoDB', 'Heroku', 'Netlify' ].map((item, index) => (
                    <li key={`numie-${index}`}>
                      {item}
                    </li>
                  ))
                }
              </UList>
            </Grid>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

const Groceristar = () => {
  return (
    <Accordion sx={{
      width: {
        sm: '100%',
        md: '80%',
      }
    }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color={'secondary'} />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        <Typography>Intern at <Company>Groceristar</Company></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container item xs={12} gap={'1rem'}>
          <Grid item xs={12}>
            <Typography fontSize={'1.125rem'} fontWeight={500}>March 2018 - July 2018</Typography>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography>
              A platform for recipe creators and other people, related to food. Users could upload their recipes, create shopping lists, and share their recipes with others.
              I developed and published npm package for modules available to third parties and learned best practices and got hands-on experience from coding to deployment.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <UList>
                {
                  ['Javascript', 'ReactJS'].map((item, index) => (
                    <li key={`groceristar-${index}`}>
                      {item}
                    </li>
                  ))
                }
              </UList>
            </Grid>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

const Company = styled('span')(({ theme }) => ({
  color: theme.palette.text.muted,
}))

const UList = styled('ul')({
  display: 'grid',
  gridGap: '1rem',
  gridTemplateColumns: 'repeat(auto-fill, 8rem)',

})