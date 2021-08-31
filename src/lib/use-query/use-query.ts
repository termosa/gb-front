import { useMemo } from 'react'
import window from '../window'

const parseQueryString = () => {
  if (!window) return {}
  return window.location.search
    .slice(1)
    .split('&')
    .filter(Boolean)
    .map((p) => p.split('='))
    .reduce((query, [name, value]) => Object.assign(query, { [name]: value }), {} as Record<string, undefined | string>)
}

export function useQuery(): Record<string, undefined | string> {
  return useMemo(parseQueryString, [window?.location.search])
}
