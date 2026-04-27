/** Site copy — replace TBD/placeholder values when you have them */

export type SiteStat = {
  id: string
  label: string
  value: string
  /** Internal note only (not rendered in UI) */
  hint?: string
  /** Optional visible line under label */
  subLabel?: string
}

export const site = {
  name: 'Nishith Chauhan',
  role: 'Full Stack Developer',
  location: 'Surat, India',
  /** Hero headline (reference-style) */
  heroTitle: 'Building reliable web products',
  /** Supporting line under the title */
  heroSubtitle:
    'Full stack developer with experience in fintech, APIs, and user-facing products. Turning complex requirements into shippable software.',
  /** Small kicker above title */
  kicker: 'Hi, I\'m',
  /** Optional badge (placeholder until you set availability) */
  availabilityBadge: 'Availability — TBD (update in src/data/site.ts)',

  /** Set a URL to show your photo in the hero (right column). Null shows initials. */
  heroAvatarUrl: null as string | null,

  projectsKicker: 'Latest projects',
  projectsTitle: 'A selection of software work I am proud to ship',
  projectsLead:
    'Replace placeholder cards in src/data/projects.ts with your real work, years, and links when ready.',

  /** Short “about” for the dedicated section (expand when ready) */
  aboutParagraph:
    'I’m a full stack engineer focused on building reliable, user-friendly web products. I’ve shipped fintech and API-heavy systems end-to-end across React/TypeScript frontends and backend services. I care about clear UX, performance, and maintainable code, and I enjoy taking ownership from problem definition to production.',

  /** Stats — use real numbers or leave placeholders */
  stats: [
    // { id: 'projects', label: 'Projects', value: 'TBD', hint: 'Set a count or remove this cell' },
    { id: 'certs', label: 'Certificates', value: '1', hint: 'Add certifications section later' },
    { id: 'years', label: 'Years experience', value: '—', hint: 'Auto-calculated from experience history' },
  ] as SiteStat[],

  /** Testimonials: empty until you have quotes */
  testimonialsPlaceholder:
    'Testimonials and client quotes can go here. See src/data/testimonials.ts (placeholder) when you are ready.',
}
