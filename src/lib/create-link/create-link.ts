import baseSiteUrl from '../../modules/base-site-url'
import stringifyQuery, { Query } from '../../modules/stringify-query'

const temporaryNextPrefix = '/ws30'

const patchPathWithQueryAndHash = (path: string, query?: null | Query, hash?: string) => {
  const [pathWithQuery, ...onlyHashes] = path.split('#')
  const [onlyPath, ...onlyQueries] = pathWithQuery.split('?')
  const stringifiedQuery = query ? stringifyQuery(query) : ''
  const queryString =
    stringifiedQuery || onlyQueries.length
      ? `?${onlyQueries.join('?')}${stringifiedQuery && onlyQueries.length ? '&' : ''}${stringifiedQuery}`
      : ''
  const hashString = hash ? `#${hash}` : (onlyHashes.length && `#${onlyHashes.join('#')}`) || ''
  return `${onlyPath}${queryString}${hashString}`
}

const formatPathAndParameters = (path: string, query?: null | Query, hash?: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const pathWithQuery = patchPathWithQueryAndHash(normalizedPath, query, hash)
  if (/^\/(\?|$)/.test(normalizedPath) || /^\/(api|collections|products)\//.test(pathWithQuery))
    return `${temporaryNextPrefix}${pathWithQuery}`
  return
}

export function createLink(path: string, query?: null | Query, hash?: string): string {
  return `${baseSiteUrl}${formatPathAndParameters(path, query, hash)}`
}

createLink.forCollection = (name: string, query?: null | Query, hash?: string) =>
  createLink(`/collections/${name}`, query, hash)

createLink.forProduct = (name: string, query?: null | Query, hash?: string) =>
  createLink(`/products/${name}`, query, hash)

createLink.forPage = (name: string, query?: null | Query, hash?: string) => createLink(`/pages/${name}`, query, hash)
