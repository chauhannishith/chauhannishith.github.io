type MonthToken = string

const monthIndex: Record<MonthToken, number> = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11,
}

type MonthSpan = {
  start: number
  end: number
}

const toMonthNumber = (month: string, year: string) => {
  const m = monthIndex[month.trim().toLowerCase()]
  const y = Number(year)
  if (Number.isNaN(y) || m === undefined) return null
  return y * 12 + m
}

const parsePeriodToSpan = (period: string, now = new Date()): MonthSpan | null => {
  const parts = period.split('-').map((p) => p.trim())
  if (parts.length !== 2) return null

  const [startRaw, endRaw] = parts
  const startBits = startRaw.split(/\s+/)
  const endBits = endRaw.split(/\s+/)
  if (startBits.length < 2) return null

  const startMonth = startBits[0]
  const startYear = startBits[1]
  const start = toMonthNumber(startMonth, startYear)
  if (start === null) return null

  const endIsPresent = endRaw.toLowerCase().includes('present')
  if (endIsPresent) {
    const end = now.getFullYear() * 12 + now.getMonth()
    return end > start ? { start, end } : null
  }

  if (endBits.length < 2) return null
  const endMonth = endBits[0]
  const endYear = endBits[1]
  const end = toMonthNumber(endMonth, endYear)
  if (end === null) return null

  return end > start ? { start, end } : null
}

const mergeSpans = (spans: MonthSpan[]) => {
  const sorted = [...spans].sort((a, b) => a.start - b.start)
  const merged: MonthSpan[] = []

  for (const s of sorted) {
    const last = merged[merged.length - 1]
    if (!last) {
      merged.push({ ...s })
      continue
    }

    if (s.start <= last.end) {
      last.end = Math.max(last.end, s.end)
      continue
    }

    merged.push({ ...s })
  }

  return merged
}

export const yearsExperienceFromPeriods = (periods: string[], now = new Date()) => {
  const spans = periods.map((p) => parsePeriodToSpan(p, now)).filter((x): x is MonthSpan => x !== null)
  const merged = mergeSpans(spans)
  const totalMonths = merged.reduce((acc, s) => acc + (s.end - s.start), 0)

  const years = Math.floor(totalMonths / 12)
  const hasExtraMonths = totalMonths % 12 !== 0

  return `${years}${hasExtraMonths ? '+' : ''}`
}

