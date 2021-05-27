import React, { useCallback, useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

export type RingSizeProps = {
  className?: ClassName
  defaultSize?: number
}

const SWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  margin: 0 -4px 10px;
`

const SButtonWrapper = styled.div<{
  selected?: boolean
}>`
  box-sizing: border-box;
  max-width: 43px;
  max-height: 43px;
  position: relative;
  width: 100%;
  padding: 10px 5px;
  border: 0.5px solid #000;
  background: ${(props) => (props.selected ? `#000` : '#fff')};
  font-size: 15px;
  max-width: 43px;
  margin: 0 4px 6px;
  color: ${(props) => (props.selected ? `#fff` : '#000')};
  -webkit-transition: all linear 0.3s;
  transition: all linear 0.3s;
  outline: 0;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    background: #000;
    color: #fff;
  }
`

const SButton = styled.div`
  padding: 6px 0px;
`

const SIZE_OPTIONS = [5, 6, 7, 8, 9, 10]

export function RingSize({ className, defaultSize }: RingSizeProps): React.ReactElement | null {
  const [size, setSize] = useState<number>(defaultSize || 5)

  const handleChangeSize = useCallback((value: number) => setSize(value), [setSize])

  return (
    <SWrapper className={cn('RingSize', className)}>
      {SIZE_OPTIONS.map((value) => (
        <SButtonWrapper selected={size === value} onClick={() => handleChangeSize(value)}>
          <SButton>{value}</SButton>
        </SButtonWrapper>
      ))}
    </SWrapper>
  )
}
