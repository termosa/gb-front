import { Dispatch, MutableRefObject, SetStateAction } from 'react'
import { ProductImage } from 'gravity-brands/modules/normalize-product-image'

export const handleGalleryScrolling = (
  myRef: MutableRefObject<HTMLDivElement | null> | null,
  images: Array<ProductImage>,
  setActiveGalleryItem: Dispatch<SetStateAction<number | null>>,
  galleryImageHeight: number,
): void => {
  const initialDistance = 160;
  const arr = images?.map((_: ProductImage, i: number) => initialDistance - (galleryImageHeight * i))
    .filter((el) => myRef?.current && el >= myRef.current.getBoundingClientRect().top - 149)
  setActiveGalleryItem(arr.length - 1)
}
