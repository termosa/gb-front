import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import useScreenSize from '../use-screen-size'
import { Product } from '../../modules/normalize-product'

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  font-size: 1rem;
  font: 400 1rem/1.3 Montserrat, sans-serif;
`

const ModalDialog = styled.div`
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;

  @media (min-width: 992px) {
    margin: 1.75rem auto;
    max-width: 900px;
  }
`

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0;
  outline: 0;
  padding: 15px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
`

const ModalBackdrop = styled.div`
  opacity: 0.8;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #fff;
`

const ModalCloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 2px;
  z-index: 1200;
  font-size: 34px;
  font-weight: 400;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.6;
  background: none;
  border: 0;
  cursor: pointer;

  &:after {
    content: '×';
    font: 200 42px/1 Montserrat, sans-serif;
  }
`

const ModalDahContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  h4 {
    margin: 0;
    line-height: 1.3;
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 22px;
    text-align: center;
  }

  img {
    max-width: 260px;
    margin: 0 auto 10px;
    display: block;
    max-height: 300px;
    width: auto;
    height: auto;

    @media (min-width: 768px) {
      max-width: 300px;
    }
  }
`

const ModalDahContentCol = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 767px) {
    &:first-child {
      order: 2;
    }
  }
`
const ModalDahPreview = styled.div`
  font-size: 1rem;
  line-height: 1.8;
  max-width: 280px;
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 0 auto;
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 15px;
  }
`

const ModalDahPreviewField = styled.span`
  display: inline-block;
  border-bottom: ${(props) => (props.dirty ? 'none' : '1px solid #000')};
  padding-left: 2px;
  min-width: ${(props) => (props.dirty ? '0' : props.md ? '180px' : '50px')};

  @media (min-width: 768px) {
    min-width: ${(props) => (props.dirty ? '0' : props.md ? '130px' : '50px')};
  }
`

const MobileOnlyBlock = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`

const DesktopOnlyBlock = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

const ModalErrorMessage = styled.div`
  display: none;
  color: red;
  margin-bottom: 32px;
`

const ModalBtn = styled.button`
  width: 150px;
  background: #fff;
  color: #9059c8;
  border: 1px solid #9059c8;
  padding: 11px 10px;
  margin: 0 auto 15px;
  display: block;
  transition: all linear 0.3s;
  cursor: pointer;

  &:hover {
    @media (min-width: 768px) {
      background: #9059c8;
      color: #fff;
    }
  }
`
const ModalLoader = styled.div`
  padding: 30px 0;
  text-align: center;
  font-size: 18px;
  display: none;
`

const ModalDahResult = styled.div`
  display: none;
`

const ModalDahResultText = styled.div`
  text-align: center;
`
const ModalDahForm = styled.form`
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  display: block;
  padding: 10px 0;
`

const ModalDahFormItem = styled.div`
  margin-bottom: 35px;

  input {
    width: 100%;
    max-width: 100%;
    display: block;
    border: 0;
    border-bottom: 1px solid #000;
    border-radius: 0;
    padding: 0;
    margin: 0;
    font-size: 16px;

    &:focus {
      outline: 0;
      border: 0;
      border-bottom: 1px solid #000;
    }
  }
`

const ModalDahFormItemError = styled.div`
  display: none;
  color: red;
`

export type DropAHintProps = {
  className?: ClassName
  style?: React.CSSProperties
  product: Product
}

const DropAHintModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  if (typeof document === 'undefined') return null
  return ReactDOM.createPortal(
    <div>
      <Modal>
        <ModalDialog>
          <ModalContent>
            <ModalCloseBtn type="button" onClick={onClose} />
            <ModalDahContent>
              <ModalDahContentCol>
                <img src={product.image?.src} alt={product.image?.alt} draggable={false} />
                <ModalDahPreview>
                  <p>
                    Hey{' '}
                    <ModalDahPreviewField dirty md>
                      NameHere
                    </ModalDahPreviewField>
                    {','}
                    <br /> Why don't you surprise
                    <ModalDahPreviewField md></ModalDahPreviewField> with this? A little birdie told us they would
                    really love it.
                  </p>
                  <p>
                    XOXO, <br />
                    Your FJ Fam <br />
                    P.S. Their ring size is <ModalDahPreviewField></ModalDahPreviewField>
                    {'!'}
                  </p>
                </ModalDahPreview>
                <MobileOnlyBlock>
                  <ModalErrorMessage
                    style={{
                      marginBottom: '25px',
                    }}
                  ></ModalErrorMessage>
                  <ModalBtn type="button">Send</ModalBtn>
                  {/* This mobile ModalBtn should submit form onclick. Or you may use ModalDahContent as form (ModalDahForm) and type submit on this button */}
                  <ModalLoader
                    style={{
                      marginBottom: '10px',
                    }}
                  >
                    Loading...
                  </ModalLoader>
                  <ModalDahResult>
                    <ModalDahResultText>
                      <h4>...</h4>
                    </ModalDahResultText>
                    <ModalBtn type="button" onClick={onClose}>
                      Close
                    </ModalBtn>
                  </ModalDahResult>
                </MobileOnlyBlock>
              </ModalDahContentCol>
              <ModalDahContentCol>
                <ModalDahForm>
                  <h4>Drop a Hint</h4>
                  <div>
                    <ModalDahFormItem>
                      <input type="text" name="r_name" placeholder="Recipient's Name" />
                      <ModalDahFormItemError></ModalDahFormItemError>
                    </ModalDahFormItem>
                    <ModalDahFormItem>
                      <input type="email" name="r_email" placeholder="Recipient's Email" />
                      <ModalDahFormItemError></ModalDahFormItemError>
                    </ModalDahFormItem>
                    <ModalDahFormItem>
                      <input type="text" name="name" placeholder="Your Name" />
                      <ModalDahFormItemError></ModalDahFormItemError>
                    </ModalDahFormItem>
                    <ModalDahFormItem>
                      <input type="email" name="email" placeholder="Your Email" />
                      <ModalDahFormItemError></ModalDahFormItemError>
                    </ModalDahFormItem>
                  </div>
                  <DesktopOnlyBlock
                    style={{
                      marginBottom: '15px',
                    }}
                  >
                    <ModalErrorMessage></ModalErrorMessage>
                    <ModalBtn type="button">Send</ModalBtn>
                  </DesktopOnlyBlock>
                </ModalDahForm>
                <DesktopOnlyBlock>
                  <ModalLoader>Loading...</ModalLoader>
                  <ModalDahResult>
                    <ModalDahResultText>
                      <h4>...</h4>
                    </ModalDahResultText>
                    <ModalBtn type="button" onClick={onClose}>
                      Close
                    </ModalBtn>
                  </ModalDahResult>
                </DesktopOnlyBlock>
              </ModalDahContentCol>
            </ModalDahContent>
          </ModalContent>
        </ModalDialog>
      </Modal>
      <ModalBackdrop />
    </div>,
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
