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

export interface Discount {
  image: string
  code: string
  description: string
  title: string
}

export const normalizeDiscount = (data: ServerDiscount): Discount => {
  const { discount } = data
  return (
    discount && {
      image: discount.image.mobile,
      code: discount.code,
      description: discount.requirements_copy,
      title: discount.title,
    }
  )
}

export function loadDiscount(discount: string): Promise<Discount> {
  const formData = new FormData()
  formData.append('discount_code', discount)
  return fetch('https://fjrecurly.herokuapp.com/discount_status/', {
    method: 'POST',
    body: formData,
  })
    .then((r) => r.json())
    .then((data: ServerDiscount) => normalizeDiscount(data))
}
