export interface Action {
  type: string
  payload: any
}

export interface Meta {
  page: number
  perPage: number
  total: number
}
