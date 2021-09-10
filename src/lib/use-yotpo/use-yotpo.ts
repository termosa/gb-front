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

const ids: [] = []

console.log(111111111111111)

export function useYotpo(deps: undefined | React.DependencyList = []): void {
  // Script loading is memoized, so it is okay to call it every time
  // console.log(111111, deps[1])
  // ids.includes(deps[1]) ? console.log(1111111, deps[1]) : console.log(2222222, deps[1])
  if (!ids.includes(deps[1]) && deps[1]) {
    ids.push(deps[1])
    if (ids.length == 21) {
      loadScript(`//staticw2.yotpo.com/LDoDRHPmIWai6MD5o41BGukBakwwgtNMncolHubV/widget.js`).catch(() => {})
      window?.yotpo?.refreshWidgets()
      // useEffect(refreshWidgets, deps)
    }

    return
  }
  console.log(33333333, ids)
}
