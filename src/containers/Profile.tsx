import { PageWrapper } from '../components/PageWrapper'
import { About } from '../components/About'
import { Experience } from '../components/Experience'
import { Skills } from '../components/Skills'
import { Connect } from '../components/Connect'

export const Profile = () => {
  return (
    <PageWrapper>
      <About />
      <Skills />
      <Experience />
      <Connect />
    </PageWrapper>
  )
}