import movePoint from '../move-point'

export const roundPrice = (price: number, precision = 2): number => {
  if (!price) return price
  const scaled = movePoint(price, precision + 1)
  return Math.round(scaled / 10) / 10 ** precision
}
