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

export async function loadPromoDetails(promo: string): Promise<PromoDetails> {
  const promoProduct = await http({
    url: `https://fjrecurly.herokuapp.com/get_promo_product/`,
    query: { promo },
  }).then((r) => r.json())

  const getPromoDetails = http({
    url: `https://fjrecurly.herokuapp.com/shopify_endpoint/get_variants`,
    query: { product_id: promoProduct.id },
  })

  const getPromo = http({
    url: `https://fjrecurly.herokuapp.com/get_promo/?promo=blackcat`,
    query: { product_id: promoProduct.id },
  })
  const [detailsResponse, promoResponse] = await Promise.all([getPromoDetails, getPromo])

  const detailsVariants = await detailsResponse.json()
  const promoJSON = await promoResponse.json()

  return {
    id: Number(promoProduct.id),
    name: promoProduct.name,
    src: promoProduct.src,
    title: promoProduct.title,
    requirements: promoProduct.requirements,
    detailVariants: detailsVariants,
    expiration: promoJSON.expiration,
  }
}
