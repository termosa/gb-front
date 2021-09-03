import http from '../../modules/http'

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

export function loadPromoDetails(promo: string): Promise<PromoDetails> {
  return http({
    url: `https://fjrecurly.herokuapp.com/get_promo_product/`,
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
          url: `https://fjrecurly.herokuapp.com/get_promo/?promo=blackcat`,
          query: { product_id: promoProduct.id },
        }).then((r) => r.json()),
      ])
    )
    .then(([promoProduct, detailsVariants, promoJSON]) => {
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
