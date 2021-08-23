import React from 'react'
import styled from 'styled-components'

const SModalButtonsWrapper = styled.div`
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e4e4e4;

  svg {
    margin-right: 5px;

    @media (min-width: 768px) {
      width: 27px;
      height: 24px;
    }
  }
`

const SModalButtonsItem = styled.button`
  margin: 0 5px;
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

export function ProductModalButtons(): React.ReactElement {
  return (
    <SModalButtonsWrapper>
      <SModalButtonsItem>
        <svg width={27} height={24} viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.9244 7.93567L1 6.07062H3.9244V7.93567Z"
            stroke="#0B0B0B"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5606 6.07062V17.0297L17.6362 15.1646L11.9664 11.5539L17.6362 7.93567L20.5606 6.07062Z"
            stroke="#0B0B0B"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5608 6.07062L17.6364 7.93567V6.07062H20.5608Z"
            stroke="#0B0B0B"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.60163 11.5539L3.9244 15.1646L1 17.0297V6.07062L3.9244 7.93567L9.60163 11.5539Z"
            stroke="#0B0B0B"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.92444 0.445648V7.90587L9.60166 11.5166L10.7804 12.2626L11.9591 11.5166L17.6363 7.90587V0.445648H3.92444Z"
            stroke="#0B0B0B"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.9244 6.07062V7.93567L1 6.07062H3.9244Z"
            stroke="#0B0B0B"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5608 6.07062L17.6364 7.93567V6.07062H20.5608Z"
            stroke="#0B0B0B"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5607 17.0297H1L3.9244 15.1646L9.60163 11.5539L10.7803 12.2999L11.9665 11.5539L17.6363 15.1646L20.5607 17.0297Z"
            stroke="#0B0B0B"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 6.07064L3.9244 4.21304V6.07064H1Z"
            stroke="#0B0B0B"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5608 6.07064H17.6364V4.21304L20.5608 6.07064Z"
            stroke="#0B0B0B"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.2045 5.47383C14.1745 5.67272 14.1695 5.87702 14.115 6.07065C13.4212 8.49522 10.7728 10.032 10.7728 10.032C8.41541 8.43554 7.66192 6.89127 7.41574 6.07065C7.35742 5.87878 7.3199 5.68119 7.30383 5.48129C7.30465 5.07469 7.44158 4.68006 7.69278 4.36034C7.94399 4.04062 8.29501 3.8142 8.68987 3.7172C9.08474 3.6202 9.50071 3.6582 9.87147 3.82514C10.2422 3.99208 10.5464 4.27834 10.7355 4.63829V4.72781C10.9047 4.34765 11.1996 4.03728 11.5705 3.84879C11.9415 3.6603 12.3661 3.60517 12.7729 3.69265C13.1797 3.78014 13.544 4.00492 13.8047 4.32925C14.0654 4.65358 14.2066 5.05772 14.2045 5.47383Z"
            fill="#9952BD"
          />
        </svg>
        <span>Drop a Hint</span>
      </SModalButtonsItem>
      <SModalButtonsItem>
        <svg width={34} height={20} viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg width={21} height={26} viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      </SModalButtonsItem>
    </SModalButtonsWrapper>
  )
}
