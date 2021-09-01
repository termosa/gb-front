import http from '../../modules/http'

interface ILoadPromoProductResponse {
  body: ReadableStream
  headers: Headers
  redirected: boolean
  status: number
  statusText: string
  type: string
  url: string
}

export interface IPromoProductResponse {
  id: string
  name: string
  promo: string
  requirements: string
  src: string
  title: string
  type: string
}

export function loadPromo(promoName: string): any {
  return http({
    url: `https://fjrecurly.herokuapp.com/get_promo/?promo=${promoName}`,
  }).then(async (response) => {
    const responseReader = response?.body.getReader()
    const { value } = await responseReader?.read()
    const htmlString = new TextDecoder().decode(value)
    const res = JSON.parse(htmlString)
    return res
  })
}

export function loadPromoProduct(promoName: string): IPromoProductResponse {
  return http({
    url: `https://fjrecurly.herokuapp.com/get_promo_product/?promo=${promoName}`,
  }).then(async (response: ILoadPromoProductResponse) => {
    const responseReader = response.body.getReader()
    const { value } = await responseReader?.read()
    const htmlString = new TextDecoder().decode(value)
    const res = JSON.parse(htmlString)
    return res
  })
}
