import createLink from '../create-link'
import window from '../window'

const changeHref = (href: string) => window && (window.location.href = href)

export function navigate(path: string): string | undefined {
  return changeHref(createLink(path))
}
