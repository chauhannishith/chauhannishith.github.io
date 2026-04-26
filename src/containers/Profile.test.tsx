import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Profile } from './Profile'

describe('Profile', () => {
  it('renders all major sections', () => {
    const { container } = render(<Profile />)

    expect(container.querySelector('#top')).toBeInTheDocument()
    expect(container.querySelector('#stats')).toBeInTheDocument()
    expect(container.querySelector('#about')).toBeInTheDocument()
    expect(container.querySelector('#projects')).toBeInTheDocument()
    expect(container.querySelector('#github-activity')).toBeInTheDocument()
    expect(container.querySelector('#skills')).toBeInTheDocument()
    expect(container.querySelector('#experience')).toBeInTheDocument()
    expect(container.querySelector('#connect')).toBeInTheDocument()
  })
})
