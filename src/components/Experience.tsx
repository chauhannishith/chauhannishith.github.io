import { Accordion, AccordionSummary, Typography, AccordionDetails, Grid, styled } from '@mui/material'
import { Section } from './Section'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { experiences, type ExperienceEntry } from '../data/experience'

const accordionSx = {
  width: {
    sm: '100%',
    md: '80%',
  },
}

export const Experience = () => {
  return (
    <Section id="experience" dark>
      <Grid container item xs={12} rowGap={2}>
        <Grid item xs={12} className='fade-list-item' style={{ animationDelay: '40ms' }}>
          <Typography variant='h3' color='secondary'>
            Experience
          </Typography>
        </Grid>
        {experiences.map((entry, index) => (
          <ExperienceAccordion key={entry.id} entry={entry} index={index} />
        ))}
      </Grid>
    </Section>
  )
}

const ExperienceAccordion = ({ entry, index }: { entry: ExperienceEntry; index: number }) => (
  <Accordion
    defaultExpanded={index === 0}
    sx={accordionSx}
    className='interactive-card fade-list-item'
    style={{ animationDelay: `${120 + (index * 100)}ms` }}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon color={'secondary'} />}
      aria-controls={`panel-${entry.id}-content`}
      id={`panel-${entry.id}-header`}
    >
      <Typography>
        {entry.title} at <Company>{entry.company}</Company> — {entry.location}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Grid container item xs={12} gap={'1rem'}>
        <Grid item xs={12}>
          <Typography fontSize={'1.125rem'} fontWeight={500}>{entry.period}</Typography>
        </Grid>
        <Grid item xs={12}>
          <BulletList>
            {entry.bullets.map((bullet, i) => (
              <li key={`${entry.id}-bullet-${i}`}>{bullet}</li>
            ))}
          </BulletList>
        </Grid>
        <Grid item xs={12}>
          <SkillList>
            {entry.skills.map((skill, i) => (
              <li key={`${entry.id}-skill-${i}`}>{skill}</li>
            ))}
          </SkillList>
        </Grid>
      </Grid>
    </AccordionDetails>
  </Accordion>
)

const Company = styled('span')(({ theme }) => ({
  color: theme.palette.text.muted,
}))

const BulletList = styled('ul')({
  listStyle: 'disc',
  paddingLeft: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})

const SkillList = styled('ul')({
  display: 'grid',
  gridGap: '1rem',
  gridTemplateColumns: 'repeat(auto-fill, 7rem)',
})
