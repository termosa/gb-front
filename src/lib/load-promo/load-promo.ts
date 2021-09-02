import http from '../../modules/http'

export type IPromoExpiration = Record<'seconds' | 'days' | 'hours' | 'total_sec' | 'minutes', number>
export interface ILoadPromoResponse {
  body: ReadableStream
  headers: Headers
  redirected: boolean
  status: number
  statusText: string
  type: string
  url: string
}
export interface IPromoLinkDevice {
  desktop: string
  mobile: string
}

export interface IPromoGift {
  name: string
  variant: string
  image_link: IPromoLinkDevice
}

export interface IPromoPopup {
  desktop: string
  mobile: string
}
export interface IPromoResponse {
  countDownEnabled: boolean
  enabled: boolean
  expiration: IPromoExpiration
  gift: IPromoGift
  popup: IPromoPopup
  requirements: string
  title: string
}

export async function loadPromo(promo: string): Promise<IPromoResponse> {
  const response = (await http({
    url: `https://fjrecurly.herokuapp.com/get_promo/`,
    query: { promo },
  })) as ILoadPromoResponse
  const responseReader = response?.body.getReader()
  const { value } = await responseReader?.read()
  const htmlString = new TextDecoder().decode(value)
  return JSON.parse(htmlString)
}
