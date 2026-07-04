import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

vi.mock('react-github-calendar', () => ({
  GitHubCalendar: ({ data }: { data: unknown[] }) => <div data-testid="calendar">{String(data?.length ?? 0)}</div>,
}))

describe('GitHubActivity', () => {
  it('caches per-year fetch results', async () => {
    const fetchMock = vi.fn(async () => ({
      ok: true,
      json: async () => ({ contributions: [{ date: '2026-01-01', count: 1, level: 1 }] }),
    }))

    // @ts-expect-error - test override
    globalThis.fetch = fetchMock

    vi.resetModules()
    vi.doMock('../data/socials', () => ({
      socialLinks: [{ id: 'github', href: 'https://github.com/testuser', label: 'GitHub' }],
    }))

    const { GitHubActivity } = await import('./GitHubActivity')
    render(<GitHubActivity />)

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))

    const thisYear = new Date().getFullYear()
    const prevYear = thisYear - 1

    fireEvent.click(screen.getByRole('button', { name: String(prevYear) }))
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2))

    fireEvent.click(screen.getByRole('button', { name: String(thisYear) }))
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2))
  })
})

