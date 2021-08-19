import loadScript from '../load-script'
import throttle from 'lodash/throttle'
import window from '../window'
import { useLayoutEffect } from 'react'

declare global {
  interface Window {
    yotpo?: {
      refreshWidgets(): void
    }
  }
}

const refreshWidgets = throttle(() => window?.yotpo?.refreshWidgets())

export function useYotpo(deps: undefined | React.DependencyList = []): void {
  // Script loading is memoized, so it is okay to call it every time
  loadScript(`//staticw2.yotpo.com/LDoDRHPmIWai6MD5o41BGukBakwwgtNMncolHubV/widget.js`)
  useLayoutEffect(refreshWidgets, deps)
}
