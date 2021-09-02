import http from '../../modules/http'

export interface ILoadPromoResponse {
  body: ReadableStream
  headers: Headers
  redirected: boolean
  status: number
  statusText: string
  type: string
  url: string
}

export interface IPromoProductId {
  available: boolean
  id: number
  title: string
}

export async function loadProductId(productId: string): Promise<IPromoProductId[]> {
  const response = (await http({
    url: `https://fjrecurly.herokuapp.com/shopify_endpoint/get_variants`,
    query: { product_id: productId },
  })) as ILoadPromoResponse
  const responseReader = response?.body.getReader()
  const { value } = await responseReader?.read()
  const htmlString = new TextDecoder().decode(value)
  return JSON.parse(htmlString)
}
