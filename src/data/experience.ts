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
    title: 'Software Engineer II',
    company: 'Stably Inc.',
    location: 'Seattle, WA (Remote)',
    period: 'April 2019 - February 2026',
    bullets: [
      'Architected and developed the user-facing fintech portal using ReactJS, NextJS, and TypeScript with Redux-Saga and TanStack Query for USD <> crypto conversions, enabling users to buy and redeem precious metal-backed tokens and stablecoins for a platform handling $1M in average quarterly volume.',
      'Engineered the transition of the primary database from DynamoDB to PostgreSQL for ACID compliance of the core financial ledger.',
      'Reduced average transaction processing time by 60% by supporting migration from AWS Kinesis to Temporal orchestration.',
      'Achieved an 80% decrease in fraud transactions via bank account verification-based risk controls and user-specific transaction limits.',
      'Designed and implemented REST APIs for a multi-stage KYC onboarding flow, orchestrating user metadata and documents via multi-page forms and third-party verification services.',
      'Leveraged Sentry, Mixpanel, and DataDog to pinpoint UX pain points and propose data-driven interface improvements.',
      'Automated testing with Playwright (E2E and unit), increasing code coverage to 60% and reducing production bugs by 30%.',
      'Accelerated MVP development by more than 50% using AI-assisted workflows (Cursor, Copilot, Gemini) while maintaining quality through automated testing.',
      'Led technical mentorship and code reviews for a team of 4 developers.',
    ],
    skills: ['ReactJS', 'NextJS', 'TypeScript', 'NodeJS', 'TanStack Query', 'Redux-Saga', 'Redux-Thunk', 'Golang', 'ProtoBuf', 'PostgreSQL', 'Temporal', 'Playwright', 'AWS'],
  },
  {
    id: 'numie',
    title: 'Full Stack Developer',
    company: 'Numie LLC',
    location: 'Phoenix, AZ (Remote)',
    period: 'August 2018 - March 2019',
    bullets: [
      'Delivered 3+ high-impact web projects in 9 months across financial, sports, and news sectors, ensuring high design fidelity and meeting all project milestones within schedule.',
      'Followed timeline and sprints to achieve deliverables while managing communication effectively across teams (clients, designers, developers).',
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
      'Developed and published npm package for modular third-party integration, managing full lifecycle from coding to deployment.',
      'Mentored and led 2 engineering interns, performing code reviews to validate design and implementation.',
    ],
    skills: ['Javascript', 'ReactJS'],
  },
]
