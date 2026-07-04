import { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, FormControlLabel, Stack, Switch, Tooltip, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { experiences, type ExperienceEntry } from '../data/experience'
import { ExperienceSkillsPhysics } from './ExperienceSkillsPhysics'
import { PageSection } from './PageSection'
import { styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference'

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

const ExperienceAccordion = ({ entry, index }: { entry: ExperienceEntry; index: number }) => {
  const [expanded, setExpanded] = useState(index === 0)
  const { forcedReduced, systemPrefersReduced, toggleForced } = useReducedMotionPreference()
  const isDesktop = useMediaQuery('(pointer: fine) and (hover: hover)')

  return (
    <Accordion
      expanded={expanded}
      onChange={(_, next) => setExpanded(next)}
      disableGutters
      sx={{
        mb: 1.5,
        backgroundColor: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px !important',
        overflow: 'hidden',
        '&:before': { display: 'none' },
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
          {isDesktop ? (
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: -0.75 }}>
              <Tooltip
                title={
                  systemPrefersReduced
                    ? 'Your OS prefers reduced motion. Toggle to further reduce motion in interactive sections'
                    : 'Reduce motion in interactive and animated sections'
                }
                placement="top"
                arrow
              >
                <FormControlLabel
                  label="Reduced motion"
                  control={<Switch size="small" checked={forcedReduced} onChange={toggleForced} />}
                  sx={{
                    m: 0,
                    '.MuiFormControlLabel-label': { fontSize: '0.85rem', color: 'text.secondary', userSelect: 'none' },
                  }}
                />
              </Tooltip>
            </Box>
          ) : null}
          {expanded ? (
            <ExperienceSkillsPhysics entryId={entry.id} skills={entry.skills} />
          ) : null}
        </Stack>
      </AccordionDetails>
    </Accordion>
  )
}
