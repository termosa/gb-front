import { useEffect } from 'react'
import useDefer from 'use-defer'
import window from '../../lib/window'
import http from '../../modules/http'

export type RemotePageProps = {
  url: string
}

export function RemotePage({ url }: RemotePageProps): null {
  const pageRequest = useDefer(
    () => (window ? http({ url, headers: { 'X-Site-Version': '1' } }).then((r) => r.text()) : null),
    [url],
    []
  )
  useEffect(() => {
    if (!pageRequest.value || !window) return
    document.open()
    document.write(pageRequest.value)
    document.close()
  }, [pageRequest.value])
  return null
}
