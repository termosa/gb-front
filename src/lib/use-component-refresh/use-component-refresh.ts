import { useCallback, useState } from 'react'

export function useComponentRefresh(): () => void {
  const setValue = useState(0)[1]
  return useCallback(() => setValue((value) => value + 1), [setValue])
}
