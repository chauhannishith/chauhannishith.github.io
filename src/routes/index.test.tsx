import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { RoutesContainer } from './index'

describe('RoutesContainer', () => {
  it('renders Profile on unknown route', () => {
    window.history.pushState({}, '', '/some-unknown-path')
    const { container } = render(<RoutesContainer />)
    expect(container.querySelector('#about')).toBeInTheDocument()
    expect(container.querySelector('#connect')).toBeInTheDocument()
  })

  it('renders Profile on /profile route', () => {
    window.history.pushState({}, '', '/profile')
    const { container } = render(<RoutesContainer />)
    expect(container.querySelector('#skills')).toBeInTheDocument()
    expect(container.querySelector('#experience')).toBeInTheDocument()
  })
})
