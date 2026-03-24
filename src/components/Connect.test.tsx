import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Connect } from './Connect'
import { socialLinks } from '../data/socials'

describe('Connect', () => {
  it('renders social links from shared socials data', () => {
    render(<Connect />)

    for (const social of socialLinks) {
      const link = screen.getByRole('link', { name: social.label })
      expect(link).toHaveAttribute('href', social.href)
    }
  })

  it('applies correct target and rel for external links', () => {
    render(<Connect />)

    for (const social of socialLinks) {
      const link = screen.getByRole('link', { name: social.label })
      if (social.id === 'email') {
        expect(link).not.toHaveAttribute('target')
      } else {
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noreferrer')
      }
    }
  })
})
