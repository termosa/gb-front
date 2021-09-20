import setCookie from '../set-cookie'
import api from '../../modules/api'

export interface ServerPromoExpiration {
  seconds: number
  days: number
  hours: number
  total_sec: number
  minutes: number
}

export interface PromoExpiration {
  seconds: number
  days: number
  hours: number
  totalSeconds: number
  minutes: number
}

export interface ServerDetailsVariant {
  available: boolean
  id: number
  title: string
}

export interface ServerPromo {
  id: number
  name: string
  promo?: string
  requirements?: string
  src: string
  title: string
  type?: string
}

export interface ServerPromoDetails extends ServerPromo {
  detailsVariant: Array<ServerDetailsVariant>
  expiration?: PromoExpiration
  sizeOutOfStock: boolean
}

const saveSession = (promo: string) => {
  const expires = Date.now() + 3600 * 1000
  setCookie('promo-expiration', expires, 1)
  setCookie('c_promo', promo, 1)
}

export const normalizeExpiration = (expiration: ServerPromoExpiration): PromoExpiration => ({
  days: expiration.days,
  hours: expiration.hours,
  minutes: expiration.minutes,
  seconds: expiration.seconds,
  totalSeconds: expiration.total_sec,
})

export function loadPromoDetails(promo: string): Promise<ServerPromoDetails> {
  return api<ServerPromo>({
    base: `https://fjrecurly.herokuapp.com`,
    path: '/get_promo_product',
    query: { promo },
  })
    .then((promoProduct) =>
      Promise.all([
        promoProduct,
        api<Array<ServerDetailsVariant>>({
          base: `https://fjrecurly.herokuapp.com`,
          path: '/shopify_endpoint/get_variants',
          query: { product_id: promoProduct.id },
        }),
        api<{ expiration?: ServerPromoExpiration }>({
          base: `https://fjrecurly.herokuapp.com`,
          path: '/get_promo',
          query: { product_id: promoProduct.id, promo },
        }),
      ])
    )
    .then(([promoProduct, detailsVariant, promoJSON]) => {
      saveSession(promo)
      return {
        id: Number(promoProduct.id),
        name: promoProduct.name,
        src: promoProduct.src,
        title: promoProduct.title,
        requirements: promoProduct.requirements,
        detailsVariant: detailsVariant || [],
        sizeOutOfStock: detailsVariant ? detailsVariant.some((variant) => variant.available) : false,
        ...(promoJSON.expiration && { expiration: normalizeExpiration(promoJSON.expiration) }),
      }
    })
}
