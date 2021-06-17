import movePoint from '@fragrantjewels/gravity-brands.modules.move-point'

export const roundPrice = (price: number, precision: number = 2) => {
  if (!price) return price
  const scaled = movePoint(price, precision + 1)
  return Math.round(scaled / 10) / (10 ** (precision))
}
