import { Product } from '../../modules/normalize-product'
import { parse } from 'node-html-parser'

export type ProductDetail = {
  title: string
  content: string
}

export function parseProductDetails(product: Product): Array<ProductDetail> {
  if (!product.body_html) return []

  const trArr = Array.prototype.slice.call(parse(product.body_html).querySelectorAll('tr'))

  return trArr
    .filter((el: HTMLElement) => el.querySelectorAll('td').length === 2)
    .map((el: HTMLElement) => ({
      title: el.querySelectorAll('td')[0].innerText.trim(),
      content: el.querySelectorAll('td')[1].innerHTML.toString().trim(),
    }))
    .filter((detail) => detail.title && detail.content)
}
