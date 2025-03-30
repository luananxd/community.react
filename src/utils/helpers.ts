import type { ClassesOptions } from '@/types/utils'
import { MONTHS } from './constants'

// Date to YYYY-MM-DD
export const getDateStringFromDate = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${year}-${month}-${day}`
}

// 2021-02-12 to 12 Feb.
export const getCalendarDateFromString = (date: string | undefined) => {
  if (!date) return ''

  const _date = new Date(date)
  const day = _date.getDate()
  const month = _date.getMonth()

  return `${day} ${MONTHS[month]}`
}

export const classes = (data: ClassesOptions) => {
  const activeClasses = []
  for (const [key, value] of Object.entries(data)) {
    if (value) activeClasses.push(key)
  }
  return activeClasses.join(' ')
}
