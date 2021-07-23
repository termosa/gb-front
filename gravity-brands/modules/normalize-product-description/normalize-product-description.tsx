

export type ProductDescription = {
  title: string
  content: string
}

export const normalizeProductDescription = (htmlStr: string): Array<ProductDescription> => {
  /*console.log([...parse('<div><i>hello</i><i>bye</i></div>').querySelectorAll('i')]
    .map((el) => el.innerText))*/
  return []
}
