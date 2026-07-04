import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

describe('Hero', () => {
  it('hides the View projects button when projects list is empty', async () => {
    vi.resetModules()
    vi.doMock('../data/projects', () => ({ projects: [] }))
    vi.doMock('../data/site', () => ({
      site: {
        name: 'Test',
        role: 'Dev',
        location: 'X',
        heroTitle: 'Title',
        heroSubtitle: 'Subtitle',
        kicker: 'Hi',
        availabilityBadge: 'Badge',
        heroAvatarUrl: null,
      },
    }))
    const { Hero } = await import('./Hero')
    render(<Hero />)
    expect(screen.queryByRole('link', { name: /view projects/i })).not.toBeInTheDocument()
  })
})

