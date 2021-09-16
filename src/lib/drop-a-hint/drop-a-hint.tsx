import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import useScreenSize from '../use-screen-size'
import { Product } from '../../modules/normalize-product'

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 150;
  background: #ffffffb2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export type DropAHintProps = {
  className?: ClassName
  style?: React.CSSProperties
  product: Product
}

const DropAHintModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  if (typeof document === 'undefined') return null
  return ReactDOM.createPortal(
    <Modal>
      <h1>{product.title}</h1>
      <input type="button" value="close" onClick={onClose} />
    </Modal>,
    document.body
  )
}

export function DropAHint({ className, style, product }: DropAHintProps): React.ReactElement {
  const screenSize = useScreenSize()
  const [isModalVisible, setModalVisibility] = useState(false)

  return (
    <React.Fragment>
      <button className={cn('DropAHint', className)} style={style} onClick={() => setModalVisibility(true)}>
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
      </button>
      {isModalVisible && <DropAHintModal product={product} onClose={() => setModalVisibility(false)} />}
    </React.Fragment>
  )
}
