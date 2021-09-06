import React from 'react'
import styled from 'styled-components'
import { useScreenSize } from '../../lib/use-screen-size'

const SModalButtonsWrapper = styled.div`
  padding: 16px 0;
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

const SModalButtonsItem = styled.button`
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

export function ProductModalButtons(): React.ReactElement {
  const screenSize = useScreenSize()

  return (
    <SModalButtonsWrapper>
      <SModalButtonsItem>
        <svg
          width={screenSize.lessThanSmall ? 20 : 27}
          height={screenSize.lessThanSmall ? 17 : 24}
          viewBox="0 0 27 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.37944 10.9361L0.5 8.46194H4.37944V10.9361Z"
            stroke="#0B0B0B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.4487 8.46194V23L22.5693 20.5258L15.0479 15.7359L22.5693 10.9361L26.4487 8.46194Z"
            stroke="#0B0B0B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.4488 8.46194L22.5693 10.9361V8.46194H26.4488Z"
            stroke="#0B0B0B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.9107 15.7359L4.37944 20.5258L0.5 23V8.46194L4.37944 10.9361L11.9107 15.7359Z"
            stroke="#0B0B0B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.37949 1V10.8965L11.9108 15.6865L13.4744 16.6761L15.0381 15.6865L22.5693 10.8965V1H4.37949Z"
            stroke="#0B0B0B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.4487 23H0.5L4.37944 20.5258L11.9107 15.7359L13.4744 16.7256L15.0479 15.7359L22.5693 20.5258L26.4487 23Z"
            stroke="#0B0B0B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0.5 8.46197L4.37944 5.99773V8.46197H0.5Z"
            stroke="#0B0B0B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.4488 8.46197H22.5693V5.99773L26.4488 8.46197Z"
            stroke="#0B0B0B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.0168 7.67027C17.977 7.93412 17.9703 8.20513 17.8981 8.462C16.9777 11.6784 13.4644 13.7171 13.4644 13.7171C10.3371 11.5992 9.33755 9.55062 9.01097 8.462C8.93361 8.20746 8.88384 7.94535 8.86252 7.68017C8.8636 7.14078 9.04524 6.61728 9.37849 6.19314C9.71173 5.769 10.1774 5.46865 10.7012 5.33997C11.225 5.2113 11.7768 5.2617 12.2687 5.48316C12.7605 5.70461 13.164 6.08436 13.4149 6.56186V6.68062C13.6394 6.17631 14.0305 5.76457 14.5226 5.51452C15.0148 5.26448 15.5779 5.19134 16.1176 5.3074C16.6573 5.42346 17.1406 5.72164 17.4864 6.15189C17.8322 6.58215 18.0195 7.11827 18.0168 7.67027Z"
            fill="#9952BD"
          />
        </svg>
        <span>Drop a Hint</span>
      </SModalButtonsItem>
      <SModalButtonsItem>
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
      </SModalButtonsItem>
    </SModalButtonsWrapper>
  )
}
