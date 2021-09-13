import React, { useLayoutEffect, useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import debounce from 'lodash/debounce'
import { loadScript } from '../load-script'

export type StarRatingProps = {
  className?: ClassName
  style?: React.CSSProperties
  reviewAverage?: number | null
  reviewCount?: number
  productId?: number
  quantityStars?: number
}

export function StarRating({
  className,
  style,
  productId,
  reviewAverage,
  reviewCount,
  quantityStars = 5,
}: StarRatingProps): React.ReactElement | null {
  const [loadedScript, setLoadedScript] = useState(false)

  const clickReviews = (): boolean => {
    return false
  }

  useLayoutEffect(() => {
    loadScript(`//staticw2.yotpo.com/LDoDRHPmIWai6MD5o41BGukBakwwgtNMncolHubV/widget.js`)
      .then(() => {
        debounce(() => {
          setLoadedScript(true)
        }, 500)()
      })
      .catch(() => setLoadedScript(false))
  }, [loadedScript])

  const stars: Array<string> = Array(quantityStars).fill('empty-star')
  if (reviewAverage) {
    stars.map((_el, i) => (Math.floor(reviewAverage) >= i ? (stars[i] = `star`) : (stars[i] = `empty-star`)))
    if (reviewAverage !== quantityStars) {
      const remainder = Number(reviewAverage.toFixed(1).split('.')[1])
      if (remainder >= 0 && remainder <= 2) {
        stars[Math.floor(reviewAverage)] = 'empty-star'
      }
      if (remainder >= 3 && remainder <= 7) {
        stars[Math.floor(reviewAverage)] = 'half-star'
      }
      if (remainder >= 8) {
        stars[Math.floor(reviewAverage)] = 'star'
      }
    }
  }

  return (
    <div className={cn(className)} style={style}>
      <div className="yotpo bottomLine yotpo-small" data-product-id={productId}>
        <div className="yotpo-display-wrapper">
          <div className="standalone-bottomline" data-source="default">
            <div className="yotpo-bottomline pull-left  star-clickable">
              <span className="yotpo-stars">
                {' '}
                {stars.map((star, i) => (
                  <span key={i} className={`yotpo-icon yotpo-icon-${star} rating-star pull-left`}></span>
                ))}
                <span className="sr-only"> {loadedScript ? reviewAverage + ` star rating` : null}</span>
              </span>
              <a onClick={() => clickReviews()} className="text-m" aria-label={`${reviewCount} reviews`}>
                {loadedScript ? reviewCount : null}
              </a>
              <div className="yotpo-clr"></div>
            </div>
            <div className="yotpo-clr"></div>
          </div>
          <div className="yotpo-clr"></div>
        </div>
      </div>
    </div>
  )
}
