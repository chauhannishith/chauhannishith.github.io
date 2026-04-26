/** Site copy — replace TBD/placeholder values when you have them */

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
    'I focus on end-to-end delivery: from React/TypeScript front-ends to APIs, data stores, and production operations. I care about clarity, performance, and maintainability. Add more bio, education, and links here when you are ready.',

  /** Stats — use real numbers or leave placeholders */
  stats: [
    { id: 'projects', label: 'Projects', value: 'TBD', hint: 'Set a count or remove this cell' },
    { id: 'certs', label: 'Certificates', value: 'TBD', hint: 'Add certifications section later' },
    { id: 'years', label: 'Years experience', value: '8+', hint: 'Approx. from your roles (adjust)' },
  ] as const,

  /** Testimonials: empty until you have quotes */
  testimonialsPlaceholder:
    'Testimonials and client quotes can go here. See src/data/testimonials.ts (placeholder) when you are ready.',
}
