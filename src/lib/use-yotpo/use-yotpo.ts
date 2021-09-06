import { useEffect } from 'react'
import loadScript from '../load-script'
import throttle from 'lodash/throttle'
import window from '../window'

declare global {
  interface Window {
    yotpo?: {
      refreshWidgets(): void
    }
  }
}

const refreshWidgets = throttle(() => window?.yotpo?.refreshWidgets(), 100)

export function useYotpo(deps: undefined | React.DependencyList = []): void {
  // Script loading is memoized, so it is okay to call it every time
  loadScript(`//staticw2.yotpo.com/LDoDRHPmIWai6MD5o41BGukBakwwgtNMncolHubV/widget.js`).catch(() => {})
  useEffect(refreshWidgets, deps)
}
