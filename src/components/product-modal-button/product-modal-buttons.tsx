import React from 'react'
import DropAHint from '../../lib/drop-a-hint'
import styled, { css } from 'styled-components'
import { Product } from '../../modules/normalize-product'

const SModalButtonsWrapper = styled.div`
  margin: 16px 0 0;
  padding: 0 0 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e4e4e4;

  svg {
    margin-right: 4px;

    @media (min-width: 768px) {
      width: 27px;
      height: 24px;
    }
  }
`

const modalButtonStyle = () => css`
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.01em;
  margin: 0 2px;
  display: flex;
  align-items: center;
  border-radius: 0;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`
const SDropAHint = styled(DropAHint)`
  ${modalButtonStyle}
`

export type ProductModalButtonsProps = {
  product: Product
}

export function ProductModalButtons({ product }: ProductModalButtonsProps): React.ReactElement {
  return (
    <SModalButtonsWrapper>
      <SDropAHint product={product} />
      {/*<SModalButtonsItem>
        <svg
          width={screenSize.lessThanSmall ? 26 : 34}
          height={screenSize.lessThanSmall ? 14 : 20}
          viewBox="0 0 34 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8175 17.3464H11.6963M11.6963 17.3464C5.55542 17.3464 0.577698 15.8242 0.577698 13.9487V4.12913M11.6963 17.3464C17.7738 17.3464 23.3846 19.8325 33.6685 18.7055V9.13574C23.3846 10.2627 17.7738 7.77663 11.6963 7.77663M22.816 4.75496V9.04972M4.0706 16.42V13.4272M9.00414 17.2456V12.7855M13.9377 17.2377V14.4404M18.8701 18.1143V13.6542M23.8037 18.7712V15.9603M28.7372 19V14.5399M15.5358 4.27426C15.5358 4.85301 13.5866 5.32077 11.6963 5.32077C9.806 5.32077 7.85795 4.85301 7.85795 4.27426C7.85795 3.69551 9.80826 3.22888 11.6963 3.22888C13.5843 3.22888 15.5358 3.69664 15.5358 4.27426ZM22.8161 4.39776C22.8161 6.27559 17.8383 7.79552 11.6963 7.79552C5.5543 7.79552 0.577717 6.27559 0.577717 4.39776C0.577717 2.51993 5.5611 1 11.6963 1C17.8315 1 22.8161 2.51993 22.8161 4.39776Z"
            stroke="#313131"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Size Guide</span>
      </SModalButtonsItem>
      <SModalButtonsItem>
        <svg
          width={screenSize.lessThanSmall ? 17 : 21}
          height={screenSize.lessThanSmall ? 20 : 26}
          viewBox="0 0 21 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6648 15.6791C10.6905 15.6791 10.6423 15.6791 10.6648 15.6791ZM10.6648 15.6791L17.8648 7.87194L14.8399 4.00657H6.43343L3.42781 7.88787M10.6648 15.6791L3.42781 7.88787M10.6648 15.6791L7.72339 7.84166M10.6648 15.6791L13.6061 7.84166M3.42781 7.88787L17.8648 7.87353M9.41495 4.00657L7.72339 7.8576M13.6061 7.8576L11.9146 4.00657M4.09767 18.0086H17.1949M4.09767 19.997H12.2455M4.09767 21.9855H15.0904M0.648682 1V25H20.6487V1H0.648682Z"
            stroke="#414042"
            strokeWidth="0.5"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Care Guide</span>
      </SModalButtonsItem>*/}
    </SModalButtonsWrapper>
  )
}
