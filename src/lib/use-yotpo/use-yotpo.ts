import loadScript from '../load-script'
import useDefer, { Status } from 'use-defer'

declare global {
  interface Window {
    yotpo?: {
      refreshWidgets(): void
    }
  }
}

export function useYotpo(deps: undefined | React.DependencyList = []): boolean {
  // Script loading is memoized, so it is okay to call it every time
  const { status } = useDefer(
    () => loadScript(`//staticw2.yotpo.com/LDoDRHPmIWai6MD5o41BGukBakwwgtNMncolHubV/widget.js`),
    [],
    []
  )
  return Status.SUCCESS === status
}
