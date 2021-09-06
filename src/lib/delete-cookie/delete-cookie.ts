export function deleteCookie(name: string): void {
  const expired = new Date('01/01/1970').toUTCString()
  document.cookie = `${name}=;expires=${expired};path=/;domain=${window.location.hostname}`
}
