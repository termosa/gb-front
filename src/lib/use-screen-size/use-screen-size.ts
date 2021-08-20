import { useCallback, useEffect, useState } from 'react'
import window from '../window/window'
import throttle from 'lodash/throttle'

export type ScreenSize = {
  width: number | null
  height: number | null
  lessThenSmall: boolean | null
  greaterThenSmall: boolean | null
  greaterThenMedium: boolean | null
  greaterThenLarge: boolean | null
  greaterThenExtraLarge: boolean | null
}

type windowSizeType = {
  width: number | undefined
  height: number | undefined
}

export function useScreenSize(): ScreenSize {
  const [windowSize, setWindowSize] = useState<windowSizeType>({
    width: undefined,
    height: undefined,
  })

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window?.innerWidth,
      height: window?.innerHeight,
    })
  }, [])

  useEffect(() => {
    const throttledResize = throttle(handleResize, 500)
    window?.addEventListener('resize', throttledResize)
    handleResize()
    return () => window?.removeEventListener('resize', throttledResize)
  }, [])

  return {
    width: windowSize?.width ? windowSize?.width : null,
    height: windowSize?.height ? windowSize?.height : null,
    lessThenSmall: windowSize?.width ? windowSize?.width < 576 : null,
    greaterThenSmall: windowSize?.width ? windowSize?.width >= 576 : null,
    greaterThenMedium: windowSize?.width ? windowSize?.width >= 768 : null,
    greaterThenLarge: windowSize?.width ? windowSize?.width >= 992 : null,
    greaterThenExtraLarge: windowSize?.width ? windowSize?.width >= 1200 : null,
  }
}
