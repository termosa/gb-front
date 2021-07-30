import { useMemo } from 'react'

export const useQuery = (): Record<string, undefined | string> =>
  useMemo(() => {
    if (typeof window === 'undefined') return {}

    return window.location.search
      .slice(1)
      .split('&')
      .filter(Boolean)
      .map((p) => p.split('='))
      .reduce(
        (query, [name, value]) => Object.assign(query, { [name]: value }),
        {} as Record<string, undefined | string>
      )
  }, [typeof window])
