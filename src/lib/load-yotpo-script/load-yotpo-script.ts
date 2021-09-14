import loadScript from '../load-script'
import useDefer, { Status } from 'use-defer'

const YOTPO_SCRIPT_URL = '//staticw2.yotpo.com/LDoDRHPmIWai6MD5o41BGukBakwwgtNMncolHubV/widget.js'

export function loadYotpoScript(): boolean {
  const { status } = useDefer(() => loadScript(YOTPO_SCRIPT_URL), [], [])
  return Status.SUCCESS === status
}
