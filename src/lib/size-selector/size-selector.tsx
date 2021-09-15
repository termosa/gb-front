import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import useOnClickOutside from '../../hooks/use-on-click-outside'
import { VariantSize } from '../add-cart-item-with-subscription'

const SSizeSelector = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: auto;
  height: auto;
  padding: 16px;
  background: #fff;
  border: 1px solid #000000;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.35);
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 560px;
    margin: 0 auto 48px;
  }
`

const SSizeSelectorTitle = styled.h3`
  font: 400 16px/1.5 'Montserrat', sans-serif;
  text-align: center;
  margin: 0 auto 12px;
  width: 70%;
`

const SRingSizeContainer = styled.div`
  font: 400 16px/1 'Montserrat', sans-serif;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`

const SBtnHolder = styled.div`
  margin: 0 4px;
  width: 43px;

  &:after {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

const SRingSizeBtn = styled.button<{ isActive: boolean }>`
  font: 400 16px/1 'Montserrat', sans-serif;
  letter-spacing: 0.05em;
  background: ${(props) => (props.isActive ? '#9059C8' : '#fff')};
  border: ${(props) => (props.isActive ? '0.5px solid #9059C8' : '0.5px solid #000')};
  padding: 10px 5px;
  font-size: 15px;
  margin: 0;
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  transition: all linear 0.3s;
  outline: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
  }
`

const SRingSizeError = styled.div`
  text-align: center;
  color: #ee67a0;
  margin-bottom: 12px;
`

const SSizeSelectorAddBtn = styled.button`
  display: flex;
  justify-content: center;
  padding: 19px 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 0.5px solid #000;
  border-radius: 0;
  font: 600 16px/1 'Montserrat', sans-serif;
  text-decoration: none;
  transition: all linear 0.2s;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  width: auto;
  min-height: 55px;

  &:not(.pdp-btn_disabled):hover {
    @media (min-width: 1200px) {
      color: #000;
      background: #fff;
    }
  }
`

const SSizeSelectorCloseBtn = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`

export const SIZES: Array<VariantSize> = [5, 6, 7, 8, 9, 10]

export type SiteSelectorProps = {
  onSelect: (currentRingSize: VariantSize) => void
  onClose: () => void
  title?: string
  buttonLabel?: string
  unavailable?: Array<VariantSize>
  errorMessage?: string
}

export function SizeSelector({
  onSelect,
  onClose,
  title = 'Select ring size',
  buttonLabel = 'Select',
  errorMessage = 'Please select ring size',
  unavailable,
}: SiteSelectorProps): React.ReactElement {
  const [currentRingSize, setCurrentRingSize] = useState<VariantSize>()
  const [isSelectRingError, setSelectRingError] = useState<boolean>(false)

  const sizeSelectorRef = useRef(null)
  useOnClickOutside(sizeSelectorRef, () => onClose())

  return (
    <SSizeSelector ref={sizeSelectorRef}>
      <SSizeSelectorTitle>{title}</SSizeSelectorTitle>
      <SRingSizeContainer>
        {SIZES.map((size) => (
          <SBtnHolder key={size + Math.random()}>
            <SRingSizeBtn
              isActive={size === currentRingSize}
              value={size}
              onClick={() => {
                setSelectRingError(false)
                setCurrentRingSize(size)
              }}
              disabled={unavailable?.includes(size)}
            >
              {size}
            </SRingSizeBtn>
          </SBtnHolder>
        ))}
      </SRingSizeContainer>
      {isSelectRingError && <SRingSizeError>{errorMessage}</SRingSizeError>}
      <SSizeSelectorAddBtn
        onClick={() => {
          if (!currentRingSize) {
            setSelectRingError(true)
          } else {
            onSelect(currentRingSize)
            onClose()
          }
        }}
      >
        {buttonLabel}
      </SSizeSelectorAddBtn>
      <SSizeSelectorCloseBtn onClick={onClose}>
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.6487 1L0.648682 21M0.648682 1L20.6487 21"
            stroke="black"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SSizeSelectorCloseBtn>
    </SSizeSelector>
  )
}
