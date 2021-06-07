import React, { useCallback, useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'

export type SearchFieldProps = {
  className?: ClassName
  onSubmit: (value: string) => void
}

const SWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  @media (max-width: 1199px) {
    padding: 0 15px;
  }
`

const SField = styled.input`
  font-family: 'Montserrat', sans-serif;
  border-radius: 0;
  border: 1px solid #797979;
  height: 38px;
  width: 100%;
  border-right: none;
  padding: 0 0.9em;
  font-size: 14px;
  color: #000;
  line-height: 19px;
  box-sizing: border-box;
`

const SButton = styled.button`
  padding: 0 5px;
  line-height: 1;
  height: 38px;
  border: 1px solid #797979;
  border-left: none;
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  & > svg {
    width: 1.65em;
  }
`

export function SearchField({ className, onSubmit }: SearchFieldProps): React.ReactElement | null {
  const [value, setValue] = useState<string>('')

  const handleChange = useCallback(
    (e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.currentTarget.value)
    },
    [setValue]
  )

  const handleSubmit = useCallback(() => {
    onSubmit(value)
  }, [onSubmit])

  return (
    <SWrapper className={cn('SearchField', className)}>
      <SField onChange={handleChange} onSubmit={handleSubmit} />
      <SButton onClick={handleSubmit}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23 23L16.26 15.55M18.58 9.79C18.58 14.6446 14.6446 18.58 9.79001 18.58C4.93543 18.58 1 14.6446 1 9.79C1 4.93542 4.93543 1 9.79001 1C14.6446 1 18.58 4.93542 18.58 9.79Z"
            stroke="black"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </SButton>
    </SWrapper>
  )
}
