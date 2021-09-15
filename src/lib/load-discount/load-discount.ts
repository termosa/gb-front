import setCookie from '../set-cookie'

export interface ServerDiscountImg {
  desktop: string
  mobile: string
}

export interface ServerDiscountData {
  available: true
  code: string
  countDownEnabled: boolean
  description: string
  duration: number
  enabled: boolean
  image: ServerDiscountImg
  requirements_copy: string
  title: string
}

export interface ServerDiscount {
  discount: ServerDiscountData
  msg: string
  success: boolean
}

export function loadDiscount(discount: string): Promise<ServerDiscount> {
  const formData = new FormData()
  formData.append('discount_code', discount)
  return fetch('https://fjrecurly.herokuapp.com/discount_status/', {
    method: 'POST',
    body: formData,
  })
    .then((r) => r.json())
    .then((data: ServerDiscount) => {
      if (data.success) {
        const expire_time = new Date(new Date().getTime() + 3600 * 1000)
        const t_now = new Date()
        setCookie('discount-expiration', String(expire_time.getTime()), 1)
        setCookie('promo-discount', data.discount.code, 1)
        setCookie('d_age', String(t_now.getTime()), 1)
      }
      return data
    })
}
