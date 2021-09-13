import React, { useMemo } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import { useYotpo } from '../use-yotpo'

const AMOUNT_OF_STARS = 5

export type StarRatingProps = {
  className?: ClassName
  style?: React.CSSProperties
  reviewsAverage?: number | null
  reviewsCount?: number
  quantityStars?: number
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
        if (reviewsAverage !== AMOUNT_OF_STARS) {
          const remainder = Number(reviewsAverage && reviewsAverage.toFixed(1).split('.')[1])
          if (remainder >= 0 && remainder <= 2) {
            return 'empty-star'
          }
          if (remainder >= 3 && remainder <= 7) {
            return 'half-star'
          }
          if (remainder >= 8) {
            return 'star'
          }
        }
      })
  }, [reviewsAverage])

  return (
    <div className={cn(className)} style={style}>
      <div className="yotpo bottomLine yotpo-small">
        <div className="yotpo-display-wrapper">
          <div className="standalone-bottomline" data-source="default">
            <div className="yotpo-bottomline pull-left  star-clickable">
              <span className="yotpo-stars">
                {' '}
                {stars.map((star, i) => (
                  <span key={i} className={`yotpo-icon yotpo-icon-${star} rating-star pull-left`}></span>
                ))}
                <span className="sr-only"> {stylesReady ? reviewsAverage + ` star rating` : null}</span>
              </span>
              <a onClick={(e) => e.preventDefault()} className="text-m" aria-label={`${reviewsCount} reviews`}>
                {stylesReady ? reviewsCount : null}
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
