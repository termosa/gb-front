import roundPrice from '../round-price'

export const formatPrice = (price: number): string => {
  return `$${roundPrice(price).toFixed(2)}`
}
