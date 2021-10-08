import React from 'react'
import { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

const Modal = styled.div<{
  isVisible?: boolean
}>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  align-items: center;
  justify-content: center;
  transition: opacity linear 0.2s;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  pointer-events: ${(props) => (props.isVisible ? 'all' : 'none')};
`

const ModalContent = styled.div<{ isVisible?: boolean }>`
  padding: 30px 15px;
  background: white;
  border-radius: 0;
  min-width: 250px;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  transition: all ease-out 0.3s;
  transform: scale(${(props) => (props.isVisible ? '1' : '0.9')});
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  margin: 15px;
  width: 100%;
  max-width: 400px;
  position: relative;
`

const ModalCloseButton = styled.button`
  position: absolute;
  right: 3px;
  top: 3px;
  line-height: 1;
  font-size: 28px;
  box-sizing: border-box;
  border-radius: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity linear 0.2s;

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
  return (
    <Modal onClick={() => setModal(false)} isVisible={isModalShow}>
      <ModalContent onClick={(e) => e.stopPropagation()} isVisible={isModalShow}>
        <ModalCloseButton type="button">&times;</ModalCloseButton>
        {children}
      </ModalContent>
    </Modal>
  )
}
