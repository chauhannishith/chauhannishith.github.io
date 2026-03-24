import '@testing-library/jest-dom/vitest'

class IntersectionObserverMock implements IntersectionObserver {
  readonly root = null
  readonly rootMargin = ''
  readonly thresholds = []

  disconnect() {}
  observe() {}
  takeRecords() {
    return []
  }
  unobserve() {}
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
})
