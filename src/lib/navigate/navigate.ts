import window from '../window'

const changeHref = (href: string) => window && (window.location.href = href)

export function navigate(path: string): string | undefined {
  if (path === '/') return changeHref('/ws30')
  if (path.match(/^\/(products|collections)\/[-\w]+$/)) return changeHref(`/ws30${path}`)
  return changeHref(path)
}
