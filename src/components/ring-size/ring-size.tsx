import React, { useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import { ProductVariant } from '../../modules/normalize-product'

export type { ProductVariant } from '../../modules/normalize-product'

export type RingSizeProps = {
  className?: ClassName
  variants: Array<ProductVariant>
  onChange: (variant: ProductVariant) => void
}

const SWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 0 0 10px;
`

const SButton = styled.button<{ selected?: boolean }>`
  box-sizing: border-box;
  width: 43px;
  height: 43px;
  position: relative;
  padding: 10px 5px;
  border: 0.5px solid #000;
  background: ${(props) => (props.selected ? `#000` : '#fff')};
  font-size: 15px;
  margin: 0 3px 6px 0;
  color: ${(props) => (props.selected ? `#fff` : '#000')};
  transition: all linear 0.3s;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  :last-child {
    margin: 0 0 6px;
  }

  :disabled {
    background-color: #bdbdbd;
    color: #ffffff;
    border: 0;
    cursor: default;
  }

  &:hover:not(:disabled) {
    background: #000;
    color: #fff;
  }
`

export function RingSize({ className, variants, onChange }: RingSizeProps): React.ReactElement {
  const [selectedVariant, setVariant] = useState<ProductVariant | undefined>()

  const change = (variant: ProductVariant) => {
    onChange && onChange(variant)
    setVariant(variant)
  }

  return (
    <SWrapper className={cn('RingSize', className)}>
      {variants.map((variant) => (
        <SButton
          key={variant.variant_id}
          selected={selectedVariant?.variant_id === variant.variant_id}
          onClick={() => change(variant)}
          disabled={!variant.available}
        >
          {variant.title}
        </SButton>
      ))}
    </SWrapper>
  )
}
