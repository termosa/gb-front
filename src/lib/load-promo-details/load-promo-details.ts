import setCookie from '../set-cookie'
import api from '../../modules/api'

export interface PromoExpiration {
  seconds: number
  days: number
  hours: number
  total_sec: number
  sec: number
  minutes: number
}

export interface DetailsVariant {
  available: boolean
  id: number
  title: string
}

export interface Promo {
  id: number
  name: string
  promo?: string
  requirements?: string
  src: string
  title: string
  type?: string
}

export interface PromoExpiration {
  expiration: PromoExpiration
}

export interface PromoDetails extends Promo {
  detailsVariant: Array<DetailsVariant>
  expiration: PromoExpiration
  sizeOutOfStock: boolean
}

const saveSession = (promo: string) => {
  const expires = Date.now() + 3600 * 1000
  setCookie('promo-expiration', expires, 1)
  setCookie('c_promo', promo, 1)
}

export function loadPromoDetails(promo: string): Promise<PromoDetails> {
  return api<Promo>({
    base: `https://fjrecurly.herokuapp.com/get_promo_product`,
    path: '',
    query: { promo },
  })
    .then((promoProduct) =>
      Promise.all([
        promoProduct,
        api<Array<DetailsVariant>>({
          base: `https://fjrecurly.herokuapp.com/shopify_endpoint/get_variants`,
          path: '',
          query: { product_id: promoProduct.id },
        }),
        api<PromoExpiration>({
          base: `https://fjrecurly.herokuapp.com/get_promo`,
          path: '',
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
        detailsVariant,
        sizeOutOfStock: detailsVariant && detailsVariant.some((variant) => variant.available),
        expiration: promoJSON.expiration,
      }
    })
}
