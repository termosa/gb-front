import createLink from '../create-link'
import window from '../window'

const changeHref = (href: string) => window && (window.location.href = href)

export function navigate(url: string): string | undefined {
  return changeHref(/^(?:https?:)?\/\//.test(url) ? url : createLink(url))
}
