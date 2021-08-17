let url: string | null = null

export const baseApiUrl = (newBaseApiUrl?: string | null): string | null => {
  if (typeof newBaseApiUrl !== 'undefined') {
    url = newBaseApiUrl
  }
  return url
}
