import React, { useMemo } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

export interface VerticalProductCardProps extends Omit<React.HTMLProps<HTMLDivElement>, 'className'> {
  className?: ClassName
  productImg: string
  productName: string
  productAverageScore: number
  productCountScore: number
  materialType: string
  price: string
  discountPrice?: string
  isNew?: boolean
  membersOnly?: boolean
}

const SCardWrapper = styled.div`
  max-width: 305px;
  -webkit-box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 12px 10px 24px;
  text-align: center;
  font: 400 16px/1.3 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  margin: 5px;
`

const SNewLabel = styled.div`
  width: 40px;
  height: 40px;
  font-size: 10px;
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: #9059c8;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-transform: uppercase;
  z-index: 2;
`

const SProductTopWrapper = styled.div``

const SImageWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
  &:after {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

const SImageWrapperInner = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

const SProductImage = styled.img``

const SProductMaterialType = styled.div`
  text-transform: uppercase;
  padding: 6px 0;
  color: #878787;
  font-size: 10px;
  font-weight: 500;
  margin: 0 0 10px;
  background: linear-gradient(269.97deg, #fff 0.02%, #efefef 13.98%, #efefef 45.51%, #efefef 76.52%, #fff 99.26%);
`

const SMembersLabel = styled.div`
  color: #9059c8;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 700;
  margin: 0 0 7px;
`

const SProductNameLabel = styled.div`
  font-weight: 400;
  margin: 0 0 18px;
  padding: 0 5px;
`

const SProductBottomWrapper = styled.div``

const SRatingWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 0 7px;
`

const SRatingStarWrapper = styled.span`
  margin: 0 1px;
  max-width: 15px;
  svg {
    width: 100%;
    height: auto;
  }
`

const FilledRatingStar = () => (
  <SRatingStarWrapper>
    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
        fill="#9059C8"
      />
    </svg>
  </SRatingStarWrapper>
)

const HalfFilledRatingStar = () => (
  <SRatingStarWrapper>
    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="0.388889"
          y1="6.11111"
          x2="14.6111"
          y2="6.11111"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.5" stopColor="#9059C8" />
          <stop offset="0.5001" stopColor="#DADADA" />
          <stop offset="1" stopColor="#DADADA" />
        </linearGradient>
      </defs>
    </svg>
  </SRatingStarWrapper>
)

const EmptyRatingStar = () => (
  <SRatingStarWrapper>
    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.02447 0.463524C7.17415 0.00286841 7.82585 0.00286996 7.97553 0.463525L9.18386 4.18237C9.25079 4.38838 9.44277 4.52786 9.65938 4.52786H13.5696C14.054 4.52786 14.2554 5.14767 13.8635 5.43237L10.7001 7.73075C10.5248 7.85807 10.4515 8.08375 10.5184 8.28976L11.7268 12.0086C11.8764 12.4693 11.3492 12.8523 10.9573 12.5676L7.79389 10.2693C7.61865 10.1419 7.38135 10.1419 7.20611 10.2693L4.04267 12.5676C3.65081 12.8523 3.12357 12.4693 3.27325 12.0086L4.48157 8.28976C4.54851 8.08375 4.47518 7.85807 4.29994 7.73075L1.1365 5.43237C0.744639 5.14767 0.946028 4.52786 1.43039 4.52786H5.34062C5.55723 4.52786 5.74921 4.38838 5.81614 4.18237L7.02447 0.463524Z"
        fill="#DADADA"
      />
    </svg>
  </SRatingStarWrapper>
)

const SProductPrices = styled.div``

const SProductPriceLabel = styled.span`
  margin: 0 1px;
  vertical-align: middle;
  display: inline-block;
`

export function VerticalProductCard({ className, ...props }: VerticalProductCardProps): React.ReactElement | null {
  const stars = useMemo(
    () => (
      <>
        {Array.from(
          { length: Math.floor(props.productAverageScore) },
          (index: number) => <FilledRatingStar key={index} />,
        )}
        {props.productAverageScore % 1 && <HalfFilledRatingStar />}
        {Array.from(
          { length: Math.floor(5 - props.productAverageScore) },
          (index: number) => <EmptyRatingStar key={index} />,
        )}
      </>
    ),
    [props.productAverageScore]
  )

  return (
    <SCardWrapper className={cn('VerticalProductCard', className)}>
      <SProductTopWrapper>
        {props.isNew && <SNewLabel>New</SNewLabel>}
        <SImageWrapper>
          <SImageWrapperInner>
            <SProductImage src={props.productImg} />
          </SImageWrapperInner>
        </SImageWrapper>
        <SProductMaterialType>{props.materialType}</SProductMaterialType>
        <SMembersLabel style={{ opacity: props.membersOnly ? 1 : 0 }}>MEMBERS ONLY</SMembersLabel>
        <SProductNameLabel>{props.productName}</SProductNameLabel>
      </SProductTopWrapper>
      <SProductBottomWrapper>
        <SRatingWrapper>{stars}</SRatingWrapper>
        <SProductPrices>
          <SProductPriceLabel>
            {props.discountPrice ? (
              <>
                <del>{`$${props.price}`}</del>
                <span>{`$${props.discountPrice}`}</span>
              </>
            ) : (
              <span>{`$${props.price}`}</span>
            )}
          </SProductPriceLabel>
        </SProductPrices>
      </SProductBottomWrapper>
    </SCardWrapper>
  )
}
