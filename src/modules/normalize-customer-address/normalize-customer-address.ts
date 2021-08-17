export type ServerCustomerAddress = {
  id: number
  address1: string
  address2: string
  city: string
  country: string
  country_code: string
  country_name: string
  province: string
  province_code: null | string
  zip: string
  default: boolean
  // Customer
  customer_id: number
  name: string
  first_name: string
  last_name: string
  company: null | string
  phone: string
}

export type CustomerAddress = {
  addressId: number
  address1: string
  address2: string
  city: string
  country: string
  countryCode: string
  countryName: string
  province: string
  provinceCode?: string
  zip: string
  phone: string
}

export const normalizeCustomerAddress = (address: ServerCustomerAddress): CustomerAddress => ({
  addressId: address.id,
  address1: address.address1,
  address2: address.address2,
  city: address.city,
  country: address.country,
  countryCode: address.country_code,
  countryName: address.country_name,
  province: address.province,
  ...(address.province_code && { provinceCode: address.province_code }),
  zip: address.zip,
  phone: address.phone,
})
