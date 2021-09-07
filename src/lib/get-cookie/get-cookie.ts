import window from '../window'

export function getCookie(cname: string): string | undefined {
  if (!window) return

  const name = `${cname}=`
  const ca = window.document.cookie.split('; ')
  let cvalue = undefined

  ca.forEach((c) => {
    let cc = c

    while (cc.charAt(0) === ' ') {
      cc = cc.substring(1)
    }

    if (cc.indexOf(name) !== -1) {
      cvalue = c.substring(name.length)
    }
  })
  return cvalue
}
