import { Typography } from '@mui/material'
import { site } from '../data/site'
import { PageSection } from './PageSection'

export const About = () => {
  return (
    <PageSection id="about" kicker="About" title="A bit more about me">
      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85, maxWidth: 720 }}>
        {site.aboutParagraph}
      </Typography>
    </PageSection>
  )
}
