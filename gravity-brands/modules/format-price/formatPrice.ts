import roundPrice from '@fragrantjewels/gravity-brands.modules.round-price'

export const formatPrice = (price: number) => {
  return `$${roundPrice(price).toFixed(2)}`
}
