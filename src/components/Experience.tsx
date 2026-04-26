import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { experiences, type ExperienceEntry } from '../data/experience'
import { PageSection } from './PageSection'
import { styled } from '@mui/material/styles'

const Company = styled('span')(({ theme }) => ({
  color: theme.palette.text.secondary,
}))

const BulletList = styled('ul')({
  listStyle: 'disc',
  paddingLeft: '1.25rem',
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  color: 'rgba(226, 232, 240, 0.85)',
  fontSize: '0.95rem',
  lineHeight: 1.6
})

const SkillList = styled('ul')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  listStyle: 'none',
  padding: 0,
  margin: 0
})

const SkillLi = styled('li')({
  fontSize: '0.8rem',
  padding: '0.25rem 0.5rem',
  borderRadius: '0.5rem',
  backgroundColor: 'rgba(99, 102, 241, 0.08)',
  border: '1px solid rgba(99, 102, 241, 0.22)',
  color: 'rgba(226, 232, 240, 0.9)'
})

export const Experience = () => {
  return (
    <PageSection id="experience" kicker="Career" title="Experience">
      <Box sx={{ maxWidth: 800 }}>
        {experiences.map((entry, index) => (
          <ExperienceAccordion key={entry.id} entry={entry} index={index} />
        ))}
      </Box>
    </PageSection>
  )
}

const ExperienceAccordion = ({ entry, index }: { entry: ExperienceEntry; index: number }) => (
  <Accordion
    defaultExpanded={index === 0}
    disableGutters
    sx={{
      mb: 1.5,
      backgroundColor: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px !important',
      overflow: 'hidden',
      '&:before': { display: 'none' }
    }}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon sx={{ color: 'text.secondary' }} />}
      aria-controls={`panel-${entry.id}-content`}
      id={`panel-${entry.id}-header`}
    >
      <Typography sx={{ color: 'text.primary', fontWeight: 600 }}>
        {entry.title} at <Company>{entry.company}</Company> — {entry.location}
      </Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ pt: 0, pb: 2 }}>
      <Stack spacing={2}>
        <Typography fontSize="0.9rem" fontWeight={500} sx={{ color: 'primary.main' }}>
          {entry.period}
        </Typography>
        <BulletList>
          {entry.bullets.map((b, i) => (
            <li key={`${entry.id}-b-${i}`}>{b}</li>
          ))}
        </BulletList>
        <SkillList>
          {entry.skills.map((skill) => (
            <SkillLi key={`${entry.id}-s-${skill}`}>{skill}</SkillLi>
          ))}
        </SkillList>
      </Stack>
    </AccordionDetails>
  </Accordion>
)
