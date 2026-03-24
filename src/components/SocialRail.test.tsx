import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SocialRail } from './SocialRail'
import { socialLinks } from '../data/socials'

describe('SocialRail', () => {
  it('renders a social link for each social item', () => {
    render(<SocialRail />)

    for (const social of socialLinks) {
      const link = screen.getByRole('link', { name: social.label })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', social.href)
    }
  })

  it('renders the vertical line element', () => {
    const { container } = render(<SocialRail />)
    expect(container.querySelector('.social-rail-line')).toBeInTheDocument()
  })
})
