import roundPrice from '../round-price'

export const formatPrice = (price: number) => {
  return `$${roundPrice(price).toFixed(2)}`
}
