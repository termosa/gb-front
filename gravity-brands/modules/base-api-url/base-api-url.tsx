export const baseApiUrl = () => {
  if (process.env.BASE_API_URL) return process.env.BASE_API_URL
  throw new Error('BASE_API_URL is not set')
}
