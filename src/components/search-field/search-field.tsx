import React, { useRef, useState, FormEvent, useMemo } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import usePopper from '../../hooks/use-popper'
import useOnClickOutside from '../../hooks/use-on-click-outside'
import { ProductsChunk } from '../../modules/normalize-products-chunk'
import navigate from '../../lib/navigate'
import debounce from 'lodash/debounce'

export type SearchFieldProps = {
  className?: ClassName
  onSearch: (value: string) => void
  searchedProducts?: ProductsChunk
}

const SWrapper = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  @media (max-width: 1199px) {
    padding-top: 15px;
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
  box-shadow: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  ::-webkit-input-placeholder {
    letter-spacing: 0.7px;
  }
  ::-moz-placeholder {
    letter-spacing: 0.7px;
  }
  :-ms-input-placeholder {
    letter-spacing: 0.7px;
  }
  :-moz-placeholder {
    letter-spacing: 0.7px;
  }
`

const SButton = styled.button`
  padding: 0 5px;
  line-height: 1;
  height: 38px;
  border: 1px solid #797979;
  border-left: none;
  background-color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  & > svg {
    width: 1.65em;
  }
`

const SSearchedProducts = styled.div`
  background: #fff;
  z-index: 9999;
  box-shadow: 0 3px 6px rgb(0 0 0 / 10%);
  padding: 12px 0;
`

const SSearchedProductLink = styled.a<{ underline?: boolean }>`
  padding: 10px 15px;
  display: block;
  text-align: left;
  cursor: pointer;
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  color: #000;
`

export function SearchField({ className, onSearch, searchedProducts }: SearchFieldProps): React.ReactElement | null {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [dropdownVisibility, setDropdownVisibility] = useState(true)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate(`/search?type=product&q=${searchInputRef.current?.value || ''}`)
  }

  const handleChange = useMemo(
    () =>
      debounce((event: React.ChangeEvent<HTMLInputElement>) => {
        setDropdownVisibility(true)
        onSearch(event.target.value)
      }, 1e3),
    [onSearch]
  )

  const [referenceElement, setReferenceElement] = useState<HTMLFormElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
  useOnClickOutside({ current: popperElement }, () => setDropdownVisibility(false))

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
  })

  return (
    <SWrapper className={cn('SearchField', className)} ref={setReferenceElement} onSubmit={handleSubmit}>
      <SField
        placeholder="Search..."
        ref={searchInputRef}
        required
        onChange={handleChange}
        onFocus={() => setDropdownVisibility(true)}
      />
      <SButton type="submit">
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23 23L16.26 15.55M18.58 9.79C18.58 14.6446 14.6446 18.58 9.79001 18.58C4.93543 18.58 1 14.6446 1 9.79C1 4.93542 4.93543 1 9.79001 1C14.6446 1 18.58 4.93542 18.58 9.79Z"
            stroke="black"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SButton>
      {searchedProducts && dropdownVisibility && (
        <SSearchedProducts
          ref={setPopperElement}
          style={{ ...styles.popper, width: referenceElement?.clientWidth }}
          {...attributes.popper}
        >
          {searchedProducts.products.map((product) => (
            <SSearchedProductLink key={product.product_id} href={`/products/${product.product_id}`}>
              {product.title}
            </SSearchedProductLink>
          ))}
          {searchedProducts.totalAmount > searchedProducts.products.length ? (
            <SSearchedProductLink href={`/search?type=product&q=${searchInputRef.current?.value || ''}`} underline>
              See all results ({searchedProducts.totalAmount})
            </SSearchedProductLink>
          ) : null}
        </SSearchedProducts>
      )}
    </SWrapper>
  )
}
