export interface SocialLink {
  id: 'email' | 'github' | 'linkedin'
  href: string
  label: string
}

export const socialLinks: SocialLink[] = [
  {
    id: 'email',
    href: 'mailto:nishithc.dev@gmail.com',
    label: 'Email',
  },
  {
    id: 'github',
    href: 'https://github.com/chauhannishith',
    label: 'GitHub',
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/nishith-chauhan-091322b9/',
    label: 'LinkedIn',
  },
]
