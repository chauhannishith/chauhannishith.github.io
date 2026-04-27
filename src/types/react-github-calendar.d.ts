declare module 'react-github-calendar' {
  import * as React from 'react'

  export type Activity = {
    date: string
    count: number
    level: number
  }

  export type GitHubCalendarProps = {
    username: string
    year?: number
    blockMargin?: number
    blockRadius?: number
    blockSize?: number
    colorScheme?: 'light' | 'dark'
    fontSize?: number
    loading?: boolean
    data?: Activity[]
    transformData?: (data: Activity[]) => Activity[]
    showColorLegend?: boolean
    showMonthLabels?: boolean
    showTotalCount?: boolean
    showWeekdayLabels?: boolean | string[]
    weekStart?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  }

  export const GitHubCalendar: React.ComponentType<GitHubCalendarProps>
}

