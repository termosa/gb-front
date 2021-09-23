import React, { useMemo } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

const AMOUNT_OF_STARS = 5

const SContainer = styled.div<{ onClick?: () => unknown }>`
  cursor: ${(p) => (p.onClick ? 'pointer' : 'default')};
`

const SStars = styled.span`
  line-height: 20px;
`

const SSvg = styled.svg`
  width: 15px;
  margin: 0 2px;
  fill: #9059c8;
  vertical-align: middle;
`

const FullStar = () => (
  <SSvg viewBox="0 0 37 35" enable-background="new 0 0 37 35" xmlns="http://www.w3.org/2000/svg">
    <polygon points="19,0.791 24.646,12.229 37.27,14.064 28.135,22.968 30.291,35.541 19,29.604 7.709,35.541 9.865,22.968 0.73,14.064 13.354,12.229" />
  </SSvg>
)

const HalfStar = () => (
  <SSvg viewBox="0 0 67 63" enable-background="new 0 0 67 63" xmlns="http://www.w3.org/2000/svg">
    <path d="M66.27,23.696L43.28,20.355L33-0.475L22.719,20.355L-0.27,23.696L16.365,39.91l-3.927,22.896L33,51.996 l20.562,10.811L49.635,39.91L66.27,23.696z M35.327,47.57L33,46.348V10.822l5.797,11.746l1.163,2.357l2.602,0.378l12.963,1.884 l-9.38,9.143l-1.882,1.835l0.444,2.591l2.214,12.91L35.327,47.57z" />
  </SSvg>
)

const EmptyStar = () => (
  <SSvg viewBox="0 0 67 63" enable-background="new 0 0 67 63" xmlns="http://www.w3.org/2000/svg">
    <path d="M33,10.822l5.797,11.746l1.163,2.357l2.602,0.378l12.963,1.884l-9.38,9.143l-1.882,1.835l0.444,2.591 l2.214,12.91L35.327,47.57L33,46.348l-2.327,1.223l-11.594,6.096l2.214-12.91l0.444-2.591l-1.882-1.835l-9.38-9.143l12.962-1.884 l2.602-0.378l1.163-2.357L33,10.822 M33-0.475L22.719,20.355L-0.27,23.696L16.365,39.91l-3.927,22.896L33,51.996l20.562,10.811 L49.635,39.91L66.27,23.696L43.28,20.355L33-0.475L33-0.475z" />
  </SSvg>
)

const SReviews = styled.a`
  padding-left: 4px;
  text-decoration: underline;
  color: #9059c8;
  vertical-align: bottom;
`

export type StarRatingProps = {
  className?: ClassName
  style?: React.CSSProperties
  reviewsAverage: number
  reviewsCount?: number
  onClick?: () => unknown
}

export function StarRating({
  className,
  style,
  reviewsAverage,
  reviewsCount,
  onClick,
}: StarRatingProps): React.ReactElement | null {
  const stars = useMemo(() => {
    console.warn(reviewsAverage)
    return Array(AMOUNT_OF_STARS)
      .fill(null)
      .map((_, index) => {
        if (reviewsAverage < index + 0.25) return 'empty'
        if (reviewsAverage < index + 0.75) return 'half'
        return 'full'
      })
  }, [reviewsAverage])

  return (
    <SContainer className={cn(className)} style={style} onClick={onClick}>
      <SStars>
        {' '}
        {stars.map((star, i) => {
          if (star === 'full') return <FullStar key={i} />
          if (star === 'half') return <HalfStar key={i} />
          return <EmptyStar key={i} />
        })}
      </SStars>
      {typeof reviewsCount !== 'undefined' ? (
        <SReviews aria-label={`${reviewsCount} reviews`}>{reviewsCount}</SReviews>
      ) : null}
    </SContainer>
  )
}
