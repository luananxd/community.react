import http from './axios.confiig'
import { AxiosResponse } from 'axios'

export const get = async <Response>(
  url: string,
  params?: any,
): Promise<AxiosResponse<Response>> => {
  const response = await http.get(url, params)
  return response as AxiosResponse<Response>
}
