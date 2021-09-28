import window from '../../lib/window'

export const baseSiteUrl =
  (process.env.SITE_URL &&
    (process.env.SITE_URL === 'https://fragrantjewels.com'
      ? 'https://www.fragrantjewels.com'
      : process.env.SITE_URL)) ||
  window?.location.origin
