export const stringifyQuery = (query: Query): string => {
  return Object.keys(query)
    .map((key) => {
      const value = query[key]
      if (typeof value === 'undefined') return null
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    })
    .filter(Boolean)
    .join('&')
}

export type Query = Record<string, string | number | boolean | undefined>
