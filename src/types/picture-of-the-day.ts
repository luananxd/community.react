export interface PictureOfTheDay {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  mediaType: string
  serviceVersion: string
  title: string
  url: string
}

export interface PictureOfTheDayFilter {
  date?: string | null // YYYY-MM-DD
  startDate?: string | null // YYYY-MM-DD
  endDate?: string | null // YYYY-MM-DD
  count?: number | null
  thumbs?: boolean | null
  apiKey: string | null
}
