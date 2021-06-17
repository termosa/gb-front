import api from '@fragrantjewels/gravity-brands.modules.api'

export type Variant = {
  title: string
  variant_id: number
  position: number
  actual_price: number
  compare_at_price: number
  inventory_quantity: number
}

export type Product = {
  title: string
  front_image: {
    src: string
  }
  side_images: [
    {
      id: number
      src: string
    }
  ],
  variants: Array<Variant>,
}

export const loadProduct = (productId: number, base?: string): Promise<Product> =>
  api<Product>({ path: `/inventory/products/${productId}`, ...base && { base } })
