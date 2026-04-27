import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

describe('StatsRow', () => {
  it('does not render hint, but renders subLabel when present', async () => {
    vi.resetModules()
    vi.doMock('../data/site', () => ({
      site: {
        stats: [
          { id: 'certs', label: 'Certificates', value: '1', hint: 'internal only', subLabel: 'AWS' },
        ],
      },
    }))
    vi.doMock('../data/experience', () => ({ experiences: [] }))
    const { StatsRow } = await import('./StatsRow')
    render(<StatsRow />)

    expect(screen.queryByText(/internal only/i)).not.toBeInTheDocument()
    expect(screen.getByText('AWS')).toBeInTheDocument()
  })
})

