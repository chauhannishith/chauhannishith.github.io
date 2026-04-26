export type Project = {
  id: string
  title: string
  year: string
  description: string
  tags: string[]
  href?: string
  /** 'live' = real project; 'placeholder' = to be replaced */
  kind: 'live' | 'placeholder'
}

/** Replace or extend with your real work; placeholders keep the layout filled */
export const projects: Project[] = [
  {
    id: 'p-portfolio',
    title: 'This portfolio (placeholder entry)',
    year: '2025',
    description: 'Describe a flagship project: problem, your role, stack, and outcome. Link to the repo or demo when ready.',
    tags: ['React', 'TypeScript', 'MUI', 'Vite'],
    kind: 'placeholder',
  },
  {
    id: 'p-saas',
    title: 'Product / app — TBD',
    year: 'TBD',
    description: 'Add a second featured project: name, 1–2 lines, and tech tags. Use href for live URL or GitHub.',
    tags: ['Stack', 'Goes', 'Here'],
    kind: 'placeholder',
  },
  {
    id: 'p-api',
    title: 'Service or API work — TBD',
    year: 'TBD',
    description: 'Optional third card for another highlight (open source, tool, or client work).',
    tags: ['Node', 'PostgreSQL', 'AWS'],
    kind: 'placeholder',
  },
]
