import http from '../../modules/http'

export type IPromoProductResponse = Record<'id' | 'name' | 'promo' | 'requirements' | 'src' | 'title' | 'type', string>

export interface ILoadPromoProductResponse {
  body: ReadableStream
  headers: Headers
  redirected: boolean
  status: number
  statusText: string
  type: string
  url: string
}

export async function loadPromoProduct(promo: string): Promise<IPromoProductResponse> {
  const response = (await http({
    url: `https://fjrecurly.herokuapp.com/get_promo_product/`,
    query: { promo },
  })) as ILoadPromoProductResponse
  const responseReader = response.body.getReader()
  const { value } = await responseReader?.read()
  const htmlString = new TextDecoder().decode(value)
  return JSON.parse(htmlString)
}
