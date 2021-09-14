import React, { useMemo } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import useYotpo from '../use-yotpo'
import window from '../window'

const AMOUNT_OF_STARS = 5

export type StarRatingProps = {
  className?: ClassName
  style?: React.CSSProperties
  reviewsAverage?: number | null
  reviewsCount?: number
  quantityStars?: number
}

const goToYotpoReviews = () => {
  const yOffset = -200
  const element = window?.document.querySelector('.yotpo-nav-wrapper')
  if (element) {
    const y = element?.getBoundingClientRect().top + window?.pageYOffset + yOffset
    window?.scrollTo({ top: y })
  }
}

export function StarRating({
  className,
  style,
  reviewsAverage,
  reviewsCount,
}: StarRatingProps): React.ReactElement | null {
  const stylesReady = useYotpo()
  const stars = useMemo(() => {
    const floor = reviewsAverage ? Math.floor(reviewsAverage) : 0
    return Array(AMOUNT_OF_STARS)
      .fill(null)
      .map((_, index) => {
        if (floor > index) return 'star'
        if (floor < index) return 'empty-star'
        const remainder = Number(reviewsAverage && reviewsAverage.toFixed(1).split('.')[1])
        if (remainder <= 2) {
          return 'empty-star'
        }
        if (remainder >= 3 && remainder <= 7) {
          return 'half-star'
        }
        if (remainder >= 8) {
          return 'star'
        }
      })
  }, [reviewsAverage])

  if (!stylesReady) return null

  return (
    <div className={cn(className)} style={style}>
      <div className="yotpo">
        <div className="yotpo-display-wrapper">
          <div className="standalone-bottomline" data-source="default">
            <div className="yotpo-bottomline star-clickable" onClick={(e) => goToYotpoReviews(e)}>
              <span className="yotpo-stars">
                {' '}
                {stars.map((star, i) => (
                  <span key={i} className={`yotpo-icon yotpo-icon-${star}`}></span>
                ))}
              </span>
              <a className="text-m" aria-label={`${reviewsCount} reviews`}>
                {reviewsCount}
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
