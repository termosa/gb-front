import React, { useMemo, useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

export type Variant = {
  title: string
  variant_id: number
  position: number
  actual_price: number
  compare_at_price: number
  inventory_quantity: number
}

export type RingSizeProps = {
  className?: ClassName
  variants: Array<Variant>
  onChange?: (variant: Variant) => void
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
  margin: 0 6px 6px 0;
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

export function RingSize({ className, variants, onChange }: RingSizeProps): React.ReactElement | null {
  const [selectedVariant, setVariant] = useState<Variant | undefined>()
  const orderedVariants = useMemo(() => variants.sort((a, b) => a.position - b.position), [variants])

  const change = (variant: Variant) => {
    onChange && onChange(variant)
    setVariant(variant)
  }

  return (
    <SWrapper className={cn('RingSize', className)}>
      {orderedVariants.map((variant) => (
        <SButton
          key={variant.variant_id}
          selected={selectedVariant?.variant_id === variant.variant_id}
          onClick={() => change(variant)}
          disabled={variant.inventory_quantity < 1}
        >
          {variant.title}
        </SButton>
      ))}
    </SWrapper>
  )
}
