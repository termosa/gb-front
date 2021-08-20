import React from 'react'
import cn, { Argument as ClassName } from 'classnames'
import useYotpo from '../use-yotpo'

export type YotpoGalleryProps = {
  className?: ClassName
  style?: React.CSSProperties
  galleryId: string
}

export function YotpoGallery({ className, style, galleryId }: YotpoGalleryProps): React.ReactElement {
  useYotpo([galleryId])
  return <div className={cn(className, 'yotpo', 'yotpo-pictures-widget')} style={style} data-gallery-id={galleryId} />
}
