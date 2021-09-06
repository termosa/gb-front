import window from '../window'

export function deleteCookie(name: string): void {
  if (!window) {
    return
  }
  const expired = new Date('01/01/1970').toUTCString()
  window.document.cookie = `${name}=;expires=${expired};path=/;domain=${window.location.hostname}`
}
