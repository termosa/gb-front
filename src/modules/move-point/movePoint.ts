export const movePoint = (number: number, position: number) => {
  const strNumber = number.toFixed(position + 1).slice(0, -1)
  const [intPart, decPart = '0'] = strNumber.split('.')
  return Number(`${intPart}${decPart.slice(0, position)}.${decPart.slice(-1)}`)
}
