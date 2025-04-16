export interface TechnologiesFilter {
  apiKey: string
  page: number
  perPage: number
}

export type PatentRAW = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  number,
]

export interface PatentData {
  results: PatentRAW[]
  count: number
  total: number
  perpage: number
  page: number
}

export interface Patent {
  id: string
  number: string
  title: string
  description: string
  type: string
  tag: string
  url: string
}
