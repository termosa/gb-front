import stringifyQuery, { Query } from '@fragrantjewels/gravity-brands.modules.stringify-query'

const patchURLWithQuery = (path: string, query?: Query) =>
  query ? `${path}${path.includes('?') ? '&' : '?'}${stringifyQuery(query)}` : path

export const http = ({ method = 'GET', url, query, body, headers, mode }: Props): Promise<Response> => {
  return fetch(patchURLWithQuery(url, query), { method, headers, body, mode })
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
