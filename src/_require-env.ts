if (typeof window === 'undefined') {
  if (!process.env.SITE_URL) throw new Error('SITE_URL is not specified')
  if (!process.env.BASE_API_URL) throw new Error('BASE_API_URL is not specified')
  if (!process.env.CLIENT_API_URL) throw new Error('CLIENT_API_URL is not specified')
}

export {}
