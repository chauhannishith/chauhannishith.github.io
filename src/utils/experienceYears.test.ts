import { describe, expect, it } from 'vitest'
import { yearsExperienceFromPeriods } from './experienceYears'

describe('yearsExperienceFromPeriods', () => {
  it('adds + when there are extra months', () => {
    const now = new Date('2026-04-27T00:00:00Z')
    expect(yearsExperienceFromPeriods(['April 2019 - Feb 2026'], now)).toBe('6+')
  })

  it('uses today for Present', () => {
    const now = new Date('2026-04-27T00:00:00Z')
    expect(yearsExperienceFromPeriods(['April 2019 - Present'], now)).toBe('7')
  })

  it('merges overlapping spans (no double counting)', () => {
    const now = new Date('2026-04-27T00:00:00Z')
    const periods = ['Jan 2020 - Jan 2022', 'Jan 2021 - Jan 2023']
    expect(yearsExperienceFromPeriods(periods, now)).toBe('3')
  })
})

