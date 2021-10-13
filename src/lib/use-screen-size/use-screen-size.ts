import { useCallback, useEffect, useState } from 'react'
import window from '../window/window'
import throttle from 'lodash/throttle'

export type ScreenSize = {
  width: number | null
  height: number | null
  lessThanSmall: boolean | null
  lessThanLarge: boolean | null
  lessThanExtraLarge: boolean | null
  greaterThanSmall: boolean | null
  greaterThanMedium: boolean | null
  greaterThanLarge: boolean | null
  greaterThanExtraLarge: boolean | null
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
    handleResize()
    window?.addEventListener('resize', throttledResize)
    return () => window?.removeEventListener('resize', throttledResize)
  }, [])

  return {
    width: windowSize?.width ? windowSize?.width : null,
    height: windowSize?.height ? windowSize?.height : null,
    lessThanSmall: windowSize?.width ? windowSize?.width < 576 : null,
    lessThanLarge: windowSize?.width ? windowSize?.width < 992 : null,
    lessThanExtraLarge: windowSize?.width ? windowSize?.width < 1200 : null,
    greaterThanSmall: windowSize?.width ? windowSize?.width >= 576 : null,
    greaterThanMedium: windowSize?.width ? windowSize?.width >= 768 : null,
    greaterThanLarge: windowSize?.width ? windowSize?.width >= 992 : null,
    greaterThanExtraLarge: windowSize?.width ? windowSize?.width >= 1200 : null,
  }
}
