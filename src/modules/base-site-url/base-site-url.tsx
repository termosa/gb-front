let url: string | null = null

export const baseSiteUrl = (newBaseSiteUrl?: string | null): string | null => {
  if (typeof newBaseSiteUrl !== 'undefined') {
    url = newBaseSiteUrl
  }
  return url
}
