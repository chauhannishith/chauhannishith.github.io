import { PageWrapper } from '../components/PageWrapper'
import { About } from '../components/About'
import { Experience } from '../components/Experience'
import { Skills } from '../components/Skills'
import { Connect } from '../components/Connect'

export const Profile = () => {
  // reference: https://cade.codes/
  // https://github.com/emmabostian/developer-portfolios?tab=readme-ov-file

  return (
    <PageWrapper>
      <About />
      <Skills />
      <Experience />
      <Connect />
    </PageWrapper>
  )
}