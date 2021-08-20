import { Dispatch, MutableRefObject, SetStateAction } from 'react'
import { ProductImage } from '../normalize-product-image'

export const handleGalleryScrolling = (
  myRef: MutableRefObject<HTMLDivElement | null> | null,
  images: Array<ProductImage>,
  setActiveGalleryItem: Dispatch<SetStateAction<number | null>>
): void => {
  const dimensions = {
    m: 270,
    l: 450,
    xl: 473,
  }
  const initialDistance = 160
  let distanceFromTop = 0
  const listOfCheckpoints = images
    ?.reduce((arr: Array<number>, curr: ProductImage) => {
      const ratio = (Math.round(curr.height / 10) * 10) / (Math.round(curr.width / 10) * 10)
      const galleryImageHeight = ratio === 1 ? dimensions.xl : Math.round(dimensions.xl * ratio)
      arr.push(initialDistance - distanceFromTop)
      distanceFromTop = distanceFromTop + galleryImageHeight
      return arr
    }, [])
    .filter((el: number) => myRef?.current && el >= myRef.current.getBoundingClientRect().top - 149)
  setActiveGalleryItem(listOfCheckpoints.length - 1)
}
