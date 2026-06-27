export interface ExperienceEntry {
  id: string
  title: string
  company: string
  location: string
  period: string
  bullets: string[]
  skills: string[]
}

export const experiences: ExperienceEntry[] = [
  {
    id: 'stably',
    title: 'Senior Software Engineer',
    company: 'Stably Inc.',
    location: 'Seattle, WA (Remote)',
    period: 'April 2019 - February 2026',
    bullets: [
      'Leveraged Mixpanel funnels and Sentry rage-click data to diagnose KYC latency as an activation bottleneck; led cross-functional initiative to decouple onboarding from verification, boosting conversions by 30%.',
      'Decreased fraud transactions by 80% by implementing automated bank account verification and user risk controls via Plaid and Checkout.com.',
      'Slashed P95 transaction processing latency by 60% by transitioning from AWS Kinesis event-streaming to Temporal orchestration, eliminating message polling bottlenecks.',
      'Migrated primary ledger database from DynamoDB to PostgreSQL to establish strict ACID compliance and guarantee data consistency for high-volume financial transactions.',
      'Architected user-facing fintech portal using React, Next.js, and TypeScript with Redux-Saga and TanStack Query for multi-currency workflows handling $1M+ quarterly volume.',
      'Designed and built REST APIs and complex frontend form states for multi-stage KYC onboarding flows integrating third-party identity verification services.',
      'Automated end-to-end testing suites using Playwright and Jest to boost code coverage, reducing production bugs by 30% within the CI/CD pipeline.',
      'Accelerated feature development cycles by more than 50% by pioneering AI-assisted workflows using Cursor and Copilot to safely generate React components and SQL queries.',
      'Mentored 4 engineers through code reviews and pair programming, improving team deployment frequency.',
    ],
    skills: ['ReactJS', 'NextJS', 'TypeScript', 'TanStack Query', 'Redux-Saga', 'Redux-Thunk', 'Golang', 'ProtoBuf', 'PostgreSQL', 'DynamoDB', 'Temporal', 'Playwright', 'AWS', 'NodeJS', 'Python', 'Sentry', 'Mixpanel', 'DataDog', 'Docker', 'Github Actions'],
  },
  {
    id: 'numie',
    title: 'Full Stack Developer',
    company: 'Numie LLC',
    location: 'Phoenix, AZ (Remote)',
    period: 'August 2018 - March 2019',
    bullets: [
      'Architected an e-commerce platform allowing users to purchase retail gift cards via digital assets and alternative payment methods.',
      'Deployed high-fidelity, performant web applications for commercial brands (All American Gold, ZBODS, Clique Meet), optimizing asset delivery to maximize user conversions.',
    ],
    skills: ['ReactJS', 'NextJS', 'SASS/SCSS', 'NodeJS', 'MongoDB', 'Heroku', 'Netlify'],
  },
  {
    id: 'groceristar',
    title: 'Full Stack Developer',
    company: 'Groceristar',
    location: 'Kiev, Ukraine (Remote)',
    period: 'March 2018 - July 2018',
    bullets: [
      'Engineered a modular NPM library for third-party integrations, effectively isolating core data-retrieval mechanics from database dependencies into a reusable utility package.',
      'Mentored 2 engineering interns through architectural design sessions and rigorous code reviews.',
    ],
    skills: ['Javascript', 'ExpressJS', 'ReactJS', 'MongoDB', 'Netlify'],
  },
]
