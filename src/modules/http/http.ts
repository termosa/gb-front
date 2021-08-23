import stringifyQuery, { Query } from '../stringify-query'
import console from '../../lib/console'

const patchURLWithQuery = (path: string, query?: Query) =>
  query ? `${path}${path.includes('?') ? '&' : '?'}${stringifyQuery(query)}` : path

export const http = ({ method = 'GET', url, query, body, headers, mode }: Props): Promise<Response> => {
  console?.log(`Request ${method} ${url}`)
  return fetch(patchURLWithQuery(url, query), { method, headers, body, mode }).then(
    (response) => {
      console?.log(`Success ${response.status} ${method} ${url}`)
      return response
    },
    (error) => {
      console?.log(`Failed ${method} ${url}:\n\t${error}`)
      return Promise.reject(error)
    }
  )
}

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type Body =
  | string
  | Blob
  | ArrayBufferView
  | ArrayBuffer
  | FormData
  | URLSearchParams
  | ReadableStream<Uint8Array>
  | null

export type Props = {
  url: string
  query?: Query
  method?: Method
  headers?: Headers | string[][] | Record<string, string>
  mode?: 'cors' | 'no-cors' | 'same-origin'
  body?: Body
}

export type { Query }
