/**
 * Add quotes when you have them. Example:
 * { id: '1', body: '...', name: 'Client', role: 'Product' }
 */
export type Testimonial = {
  id: string
  body: string
  name: string
  role?: string
}

export const testimonials: Testimonial[] = []
