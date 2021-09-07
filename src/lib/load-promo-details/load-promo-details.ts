import http from '../../modules/http'
import setCookie from '../set-cookie'

export interface PromoExpiration {
  seconds: number
  days: number
  hours: number
  total_: number
  sec: number
  minutes: number
}

export interface DetailsVariant {
  available: boolean
  id: number
  title: string
}

export interface PromoDetails {
  id: number
  name: string
  promo?: string
  requirements?: string
  src: string
  title: string
  type?: string
  detailVariants: DetailsVariant[]
  expiration: PromoExpiration
}

const saveSession = (promo: string) => {
  const expires = Date.now() + 3600 * 1000
  setCookie('promo-expiration', expires, 1)
  setCookie('c_promo', promo, 1)
}

export function loadPromoDetails(promo: string): Promise<PromoDetails> {
  return http({
    url: `https://fjrecurly.herokuapp.com/get_promo_product`,
    query: { promo },
  })
    .then((r) => r.json())
    .then((promoProduct) =>
      Promise.all([
        promoProduct,
        http({
          url: `https://fjrecurly.herokuapp.com/shopify_endpoint/get_variants`,
          query: { product_id: promoProduct.id },
        }).then((r) => r.json()),
        http({
          url: `https://fjrecurly.herokuapp.com/get_promo`,
          query: { product_id: promoProduct.id, promo },
        }).then((r) => r.json()),
      ])
    )
    .then(([promoProduct, detailsVariants, promoJSON]) => {
      saveSession(promo)
      return {
        id: Number(promoProduct.id),
        name: promoProduct.name,
        src: promoProduct.src,
        title: promoProduct.title,
        requirements: promoProduct.requirements,
        detailVariants: detailsVariants,
        expiration: promoJSON.expiration,
      }
    })
}
