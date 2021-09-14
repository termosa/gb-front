import { useEffect } from 'react'
import loadScript from '../load-script'
import throttle from 'lodash/throttle'
import window from '../window'
import useDefer, { Status } from 'use-defer'

declare global {
  interface Window {
    yotpo?: {
      refreshWidgets(): void
    }
  }
}

const YOTPO_SCRIPT_URL = '//staticw2.yotpo.com/LDoDRHPmIWai6MD5o41BGukBakwwgtNMncolHubV/widget.js'

const refreshWidgets = throttle(() => window?.yotpo?.refreshWidgets(), 100)

export function useYotpo(deps: undefined | React.DependencyList = []): boolean {
  // Script loading is memoized, so it is okay to call it every time
  const { status } = useDefer(() => loadScript(YOTPO_SCRIPT_URL), [], [])
  useEffect(refreshWidgets, deps)
  return Status.SUCCESS === status
}
