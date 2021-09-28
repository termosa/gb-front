import http, { Query, Method } from '../../modules/http'
import createLink from '../create-link'

const prefix = process.env.NODE_ENV === 'development' ? '/ws30/api/shopify' : ''

export type ApiProps = {
  path: string
  query?: Query
  method?: Method
  body?: Record<string, unknown>
}

export function shopifyApi<Response = unknown>({ path, method, query, body }: ApiProps): Promise<Response> {
  return http({
    url: createLink(`${prefix}${path.startsWith('/') ? path : `/${path}`}`),
    query,
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }).then((response) => response.json())
}
