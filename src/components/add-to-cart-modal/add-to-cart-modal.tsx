import React from 'react'
import { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

const Modal = styled.div<{
  isVisible?: boolean
}>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  z-index: 100;
  display: flex;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  align-items: flex-end;
  justify-content: center;
  transition: opacity linear 0.2s;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  pointer-events: ${(props) => (props.isVisible ? 'all' : 'none')};
  font: 400 16px/1.2 'Montserrat', sans-serif;
  overflow: hidden;
`

const ModalContent = styled.div<{ isVisible?: boolean }>`
  padding: 40px 12px 12px;
  background: white;
  border-radius: 0;
  min-width: 250px;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  transition: all ease-out 0.3s;
  transform: translateY(${(props) => (props.isVisible ? '0' : '100%')});
  margin: 0;
  width: 100%;
  max-width: 400px;
  position: relative;
  cursor: auto;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.15);
`

const ModalCloseButton = styled.button`
  position: absolute;
  line-height: 1;
  font-size: 28px;
  box-sizing: border-box;
  border-radius: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity linear 0.2s;
  right: 10px;
  top: 10px;
  padding: 0;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: 0;
    box-shadow: none;
  }
`

export type AddToCartModalProps = {
  children?: React.ReactNode
  className?: ClassName
  style?: React.CSSProperties
  isModalShow: boolean
  setModal: (arg: boolean) => void
}

export function AddToCartModal({ children, isModalShow, setModal }: AddToCartModalProps): React.ReactElement {
  const onCloseModal = (event: any) => {
    event.stopPropagation()
    setModal(false)
  }

  return (
    <Modal onClick={(e) => onCloseModal(e)} isVisible={isModalShow}>
      <ModalContent onClick={(e) => e.stopPropagation()} isVisible={isModalShow}>
        <ModalCloseButton onClick={() => setModal(false)} type="button">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 1.09381L1 21.0938M1 1.09381L21 21.0938"
              stroke="black"
              stroke-width="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </ModalCloseButton>
        {children}
      </ModalContent>
    </Modal>
  )
}
