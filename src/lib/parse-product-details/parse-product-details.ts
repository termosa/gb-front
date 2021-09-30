import { Product } from '../../modules/normalize-product'
import { parse } from 'node-html-parser'
import removeNewLineCharacters from '../../modules/remove-new-line-characters'

export type ProductDetail = { title: string; content: string }

export function parseProductDetails(product: Product): Array<ProductDetail> {
  if (!product.body_html) return []

  const setParagraphs = (prev: string, curr: HTMLElement, i: number) => {
    return prev + (i !== 0 ? '\n\n' : '') + removeNewLineCharacters(curr.innerText.trim())
  }

  const trArr = Array.prototype.slice.call(parse(product.body_html).querySelectorAll('tr'))
  return trArr
    .filter((el: HTMLElement) => el.querySelectorAll('td').length === 2)
    .map((el: HTMLElement) => ({
      title: el.querySelectorAll('td')[0].innerText.trim(),
      content: ((el.querySelectorAll('td')[1].querySelectorAll('p') as unknown) as Array<HTMLElement>).reduce(
        setParagraphs,
        ''
      ),
    }))
    .filter((detail) => detail.title && detail.content)
}
