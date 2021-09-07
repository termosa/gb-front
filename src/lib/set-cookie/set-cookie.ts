import window from '../window'

export function setCookie(name: string, value: string | number, hours: number): void {
  if (!window) return
  const d = new Date()
  d.setTime(d.getTime() + hours * 60 * 60 * 1000)
  const expires = `expires=${d.toUTCString()}`
  window.document.cookie = `${name}=${value}; ${expires}; path=/; domain=${window?.location.hostname}`
}
