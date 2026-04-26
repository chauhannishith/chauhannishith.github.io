/**
 * Devicon assets (same CDN as the reference site).
 * @see https://devicon.dev
 */
const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}.svg`

export type SkillItem = {
  name: string
  /** If set, shown as a devicon image. Otherwise a short initial fallback is used. */
  iconPath?: string
}

export type SkillGroup = {
  id: string
  title: string
  items: readonly SkillItem[]
}

export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Languages',
    items: [
      { name: 'JavaScript', iconPath: 'javascript/javascript-original' },
      { name: 'TypeScript', iconPath: 'typescript/typescript-original' },
      { name: 'Golang', iconPath: 'go/go-original' },
      { name: 'Python', iconPath: 'python/python-original' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & runtime',
    items: [
      { name: 'React', iconPath: 'react/react-original' },
      { name: 'Next.js', iconPath: 'nextjs/nextjs-original' },
      { name: 'Express', iconPath: 'express/express-original' },
      { name: 'Redux-Thunk', iconPath: 'redux/redux-original' },
      { name: 'Redux-saga', iconPath: 'redux/redux-original' },
    ],
  },
  {
    id: 'data',
    title: 'Data',
    items: [
      { name: 'PostgreSQL', iconPath: 'postgresql/postgresql-original' },
      { name: 'DynamoDB', iconPath: 'amazonwebservices/amazonwebservices-original' },
      { name: 'MongoDB', iconPath: 'mongodb/mongodb-original' },
    ],
  },
] as const

export const skillIconUrl = (item: SkillItem) =>
  item.iconPath ? devicon(item.iconPath) : undefined
