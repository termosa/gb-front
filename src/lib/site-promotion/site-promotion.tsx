import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import cn, { Argument as ClassName } from 'classnames'
import PromotionBanner from '../promotion-banner'
import useQuery from '../use-query'
import getCookie from '../get-cookie'
import BannerDiscount from '../banner-discount'

interface WrapperProps {
  error: boolean
}

const gwpDiscount = (): boolean => {
  const age = getCookie('d_age')
  const promoDiscount = getCookie('promo-discount')
  const discountExpiration = getCookie('discount-expiration')
  if (age && promoDiscount && discountExpiration) {
    return false
  }
  return true
}

const gwpPresent = (): boolean => {
  const promo = getCookie('c_promo')
  const exp = getCookie('promo-expiration')
  const variant = getCookie('promo_variant')
  if (promo && exp && variant) {
    return false
  }
  return true
}

const getDiscountCookie = (): string => {
  return getCookie('promo-discount') || ''
}

const getPromoCookie = (): string => {
  return getCookie('c_promo') || ''
}

const getIsLatestCookie = (): boolean => {
  return Number(getCookie('promo-expiration')) - Number(getCookie('discount-expiration')) < 0
}

export type SitePromotionProps = {
  className?: ClassName
  style?: React.CSSProperties
}

export function SitePromotion({ style, className }: SitePromotionProps): React.ReactElement | null {
  const { promo } = useQuery()
  const isGwpPresent = gwpPresent()

  if (promo || !isGwpPresent) {
    return (
      <PromotionBanner
        className={cn(className)}
        style={style}
        promo={promo || getPromoCookie()}
        visibleBanner={isGwpPresent}
      />
    )
  }
  return null
}


//
// export function SitePromotion({ style, className }: SitePromotionProps): React.ReactElement {
//   const { promo, d } = useQuery()
//   const [isPromo, setPromo] = useState<boolean | null>(null)
//
//   useEffect(() => {
//     if (promo || d) {
//       setPromo(!promo)
//       return
//     }
//     if (getCookie('discount-expiration') && getCookie('promo-expiration')) {
//       setPromo(getIsLatestCookie())
//       return
//     }
//     if (getCookie('discount-expiration')) {
//       setPromo(true)
//       return
//     }
//     if (getCookie('promo-expiration')) {
//       setPromo(false)
//       return
//     }
//   }, [promo, d])
//   const isGwpPresent = gwpPresent()
//   const stateError = [promo, getPromoCookie(), d, getDiscountCookie()]
//   const [isError, setIsError] = useState(stateError.every((el) => !el))
//   return (
//     <>
//       {isPromo === null
//         ? null
//         : !isError && (
//         <PromotionContainer className={cn(className)} style={style} error={isError}>
//           {isPromo ? (
//             <BannerDiscount discountStatus={d || getDiscountCookie()} errorDiscount={() => setIsError(true)} />
//           ) : (
//             <PromotionBanner
//               promo={promo || getPromoCookie()}
//               visibleBanner={isGwpPresent}
//               errorPromoDetails={() => setIsError(true)}
//             />
//           )}
//         </PromotionContainer>
//       )}
//     </>
//   )
// }
//



// export function SitePromotion({ style, className }: SitePromotionProps): React.ReactElement {
//   const { promo } = useQuery()
//   const isGwpPresent = gwpPresent()
//   const [isError, setIsError] = useState(false)
//
//   useEffect(() => {
//     if (!promo && !!isGwpPresent) {
//       setIsError(true)
//     }
//   }, [promo, isGwpPresent])
//
//   return (
//     <>
//       {(promo || !isGwpPresent) && (
//         <PromotionContainer className={cn(className)} style={style} error={isError}>
//           <PromotionBanner
//             promo={promo || getPromoCookie()}
//             visibleBanner={isGwpPresent}
//             errorPromoDetails={() => setIsError(true)}
//           />
//         </PromotionContainer>
//       )}
//     </>
//   )
// }
