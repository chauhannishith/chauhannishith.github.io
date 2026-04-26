import { PageWrapper } from '../components/PageWrapper'
import { Hero } from '../components/Hero'
import { StatsRow } from '../components/StatsRow'
import { GitHubActivity } from '../components/GitHubActivity'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { Experience } from '../components/Experience'
import { Connect } from '../components/Connect'
import { SiteFooter } from '../components/SiteFooter'

export const Profile = () => {
  return (
    <PageWrapper>
      <Hero />
      <StatsRow />
      <GitHubActivity />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Connect />
      <SiteFooter />
    </PageWrapper>
  )
}
