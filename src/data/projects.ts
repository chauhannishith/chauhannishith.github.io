export type Project = {
  id: string
  title: string
  year: string
  description: string
  tags: string[]
  href?: string
  image?: string
  /** 'live' = real project; 'placeholder' = to be replaced */
  kind: 'live' | 'placeholder'
}

export const projects: Project[] = [
  {
    id: 'affiliate-checkers',
    title: 'Affiliate Checkers',
    year: '2026',
    description:
      'SaaS that monitors link-in-bio and affiliate URLs around the clock. Detects broken links, server errors, and out-of-stock pages, then alerts creators on Telegram so they can fix issues before losing revenue.',
    tags: ['SaaS', 'Link monitoring', 'Telegram alerts', 'Next.js'],
    href: 'https://affiliatecheckers.com',
    image: '/projects/affiliatecheckers.jpg',
    kind: 'live',
  },
  {
    id: 'get-us-live',
    title: 'Get Us Live',
    year: '2025',
    description:
      'Agency site for contract programming, custom web development, SEO, and vibecode audits. Showcases shipped products, service offerings, and lead capture for businesses bringing their work online.',
    tags: ['Web development', 'SEO', 'Contract programming', 'Next.js'],
    href: 'https://getuslive.com',
    image: '/projects/getuslive.jpg',
    kind: 'live',
  },
]
