import http, { Query, Method } from 'gravity-brands/modules/http'
import baseApiUrl from 'gravity-brands/modules/base-api-url'

const defaultParseResponse = <APIResponse>(response: Response): Promise<APIResponse> =>
  response
    .text()
    .then((text) => {
      if (!text) return null
      return JSON.parse(text)
    })
    .then((result) => {
      if (response.status < 400) return result
      return Promise.reject(result)
    })

export const api = <Response = Record<string, unknown>, Body = Record<string, unknown>>({
  method,
  path,
  base = baseApiUrl() || '',
  query,
  body,
  headers,
  parseResponse,
}: Props<Response, Body>): Promise<Response> =>
  http({
    url: `${base}${path.startsWith('/') ? path : `/${path}`}`,
    query,
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  }).then((response) => {
    if (parseResponse) return parseResponse(response, defaultParseResponse)
    return defaultParseResponse<Response>(response)
  })

export type Props<APIResponse, Body> = {
  path: string
  base?: string
  query?: Query
  method?: Method
  headers?: Headers | string[][] | Record<string, string>
  body?: Body
  parseResponse?: (response: Response, defaultParser: (response: Response) => Promise<APIResponse>) => APIResponse
}

export type { Query, Method }
