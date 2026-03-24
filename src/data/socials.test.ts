import { describe, expect, it } from 'vitest'
import { socialLinks } from './socials'

describe('socialLinks', () => {
  it('contains unique ids', () => {
    const ids = socialLinks.map((link) => link.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('contains valid href by id type', () => {
    for (const link of socialLinks) {
      expect(link.label.length).toBeGreaterThan(0)
      if (link.id === 'email') {
        expect(link.href.startsWith('mailto:')).toBe(true)
      } else {
        expect(link.href.startsWith('https://')).toBe(true)
      }
    }
  })
})
