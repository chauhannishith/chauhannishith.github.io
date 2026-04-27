import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

describe('Projects', () => {
  it('hides the section when projects list is empty', async () => {
    vi.resetModules()
    vi.doMock('../data/projects', () => ({ projects: [] }))
    vi.doMock('../data/socials', () => ({ socialLinks: [] }))
    const { Projects } = await import('./Projects')
    const { container } = render(<Projects />)
    expect(container.querySelector('#projects')).not.toBeInTheDocument()
  })

  it('shows the section when projects list is not empty', async () => {
    vi.resetModules()
    vi.doMock('../data/projects', () => ({
      projects: [
        { id: 'p1', title: 'P1', year: '2026', description: 'D', tags: ['React'], kind: 'live', href: 'https://example.com' },
      ],
    }))
    vi.doMock('../data/socials', () => ({ socialLinks: [] }))
    const { Projects } = await import('./Projects')
    const { container } = render(<Projects />)
    expect(container.querySelector('#projects')).toBeInTheDocument()
  })
})

