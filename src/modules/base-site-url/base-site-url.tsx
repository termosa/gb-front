import window from '../../lib/window'

export const baseSiteUrl = process.env.SITE_URL || window?.location.origin
