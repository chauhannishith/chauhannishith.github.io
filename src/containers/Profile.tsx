import { PageWrapper } from '../components/PageWrapper'
import { Section } from '../components/Section'

export const Profile = () => {
  return (
    <PageWrapper>
      <Section id="about">
      <h1>Hi, I am Nishith</h1>
      <p>Full Stack Developer based in Surat, India</p>
        </Section>
        <Section id="skills" title='Skills'>
          <ul>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Typescript</li>
          </ul>
        </Section>
        <Section id="experience" title='Experience'>
          <p>Worked at a startup as a full stack developer</p>
        </Section>
    </PageWrapper>
  )
}