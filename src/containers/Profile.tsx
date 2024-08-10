import { PageWrapper } from '../components/PageWrapper'
import { About } from '../components/About'
import { Experience } from '../components/Experience'
import { Skills } from '../components/Skills'

export const Profile = () => {
  return (
    <PageWrapper>
      <About />
      <Skills />
      <Experience />
    </PageWrapper>
  )
}