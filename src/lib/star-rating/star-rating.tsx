import React, { useMemo } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

const AMOUNT_OF_STARS = 5

const SContainer = styled.div<{ onClick?: () => unknown }>`
  cursor: ${(p) => (p.onClick ? 'pointer' : 'default')};
`

const SStars = styled.span`
  /*line-height: 20px;*/
`

const SSvg = styled.svg<{ emptyStarColor?: string }>`
  width: 12px;
  margin: 0 1.5px;
  fill: ${(props) => props.emptyStarColor || '#9059c8'};
  vertical-align: middle;

  @media (min-width: 768px) {
    width: 15px;
    margin: 0 2px;
  }
`

const FullStar = () => (
  <SSvg viewBox="0 0 37 35" enable-background="new 0 0 37 35" xmlns="http://www.w3.org/2000/svg">
    <polygon points="19,0.791 24.646,12.229 37.27,14.064 28.135,22.968 30.291,35.541 19,29.604 7.709,35.541 9.865,22.968 0.73,14.064 13.354,12.229" />
  </SSvg>
)

const HalfStar = () => (
  <SSvg viewBox="0 0 16 15" enable-background="new 0 0 16 15" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.35772 0.463526C7.5074 0.0028708 8.1591 0.00286996 8.30878 0.463525L9.74162 4.87336C9.80856 5.07937 10.0005 5.21885 10.2171 5.21885H14.8539C15.3383 5.21885 15.5397 5.83865 15.1478 6.12336L11.3966 8.84878C11.2213 8.9761 11.148 9.20179 11.215 9.4078L12.6478 13.8176C12.7975 14.2783 12.2702 14.6613 11.8784 14.3766L8.12714 11.6512C7.9519 11.5239 7.7146 11.5239 7.53936 11.6512L3.78813 14.3766C3.39628 14.6613 2.86904 14.2783 3.01871 13.8176L4.45155 9.4078C4.51849 9.20179 4.44516 8.9761 4.26992 8.84878L0.518693 6.12336C0.126836 5.83866 0.328224 5.21885 0.812585 5.21885H5.44935C5.66597 5.21885 5.85795 5.07937 5.92488 4.87336L7.35772 0.463526Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient id="paint0_linear" x1="-0.166748" y1="7" x2="15.8333" y2="7" gradientUnits="userSpaceOnUse">
        <stop offset="0.5" stop-color="#9059C8" />
        <stop offset="0.5001" stop-color="#DADADA" />
        <stop offset="1" stop-color="#DADADA" />
      </linearGradient>
    </defs>
  </SSvg>
)

const EmptyStar = () => (
  <SSvg
    viewBox="0 0 37 35"
    emptyStarColor="#dadada"
    enable-background="new 0 0 37 35"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="19,0.791 24.646,12.229 37.27,14.064 28.135,22.968 30.291,35.541 19,29.604 7.709,35.541 9.865,22.968 0.73,14.064 13.354,12.229" />
  </SSvg>
)

const SReviews = styled.a`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 12px;
  padding-left: 4px;
  color: #000000;
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
