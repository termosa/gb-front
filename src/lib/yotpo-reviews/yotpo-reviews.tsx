import React, { useContext } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import useYotpo from '../use-yotpo'
import ProductContext from '../../modules/product-context'
import window from '../window'

export type YotpoReviewsProps = {
  className?: ClassName
  style?: React.CSSProperties
  productId?: number
  productTitle?: string
  productUrl?: string
  productImageUrl?: string
}

export function YotpoReviews({
  className,
  style,
  productId,
  productTitle,
  productUrl,
  productImageUrl,
}: YotpoReviewsProps): null | React.ReactElement {
  // TODO: check if it still needed to hide reviews when they are empty
  // const [visible, setVisibility] = useState(false)
  // useEffect(() => {
  //   let countdown = 1000
  //   loadYotpo().then((yotpo) => {
  //     const interval = setInterval(() => {
  //       const reviews = document.querySelector('.yotpo-main-widget .reviews-qa-label')
  //       if (reviews || --countdown < 1) clearInterval(interval)
  //       if (reviews) {
  //         setVisibility(true)
  //         yotpo.refreshWidgets()
  //       }
  //     }, 100)
  //   })
  // }, [id, title, description, imageUrl, productUrl])

  const product = useContext(ProductContext)
  useYotpo([product, productId, productTitle, productUrl, productImageUrl])
  if (!productId && !product) return null
  return (
    <div
      className={cn(className, 'yotpo', 'yotpo-main-widget')}
      style={style}
      data-product-id={productId || product?.product_id}
      data-name={productTitle || product?.title}
      data-url={productUrl || `${window?.location.origin || ''}/products/${product?.handle || productId}`}
      data-image-url={productImageUrl || product?.image?.src}
    />
  )
}
