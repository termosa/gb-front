import React, { useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import usePopper from '@fragrantjewels/gravity-brands.hooks.use-popper'

export type CollectionFiltersProps = {
  className?: ClassName
}

const SCollectionFiltersContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts.familyMain};
`

const SButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 284px;
  padding-bottom: 16px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-bottom: 0;
  }
`

const SButton = styled.button`
  padding: 16px;
  font-size: 16px;
  text-transform: uppercase;
  background-color: #fff;
  border: 0.5px solid #000;
  width: 100%;
  max-width: 138px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 768px) {
    border-right: none;
    border-left: none;
    max-width: 100%;

    &:not(:last-of-type) {
      border-right: 0.5px solid #000;
    }
  }
`

const SButtonLabel = styled.div`
  width: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SSortDropdown = styled.div`
  padding: 24px 0;
  border: 0.5px solid #000;
  width: 100%;
  max-width: 284px;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 2;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const SSortDropdownFilters = styled.p`
  cursor: pointer;
  text-align: center;
  margin: 0;

  &:not(:last-of-type) {
    padding-bottom: 16px;
  }

  &:hover {
    font-weight: 600;
  }
`

const SFilters = styled.div`
  display: flex;
  padding: 24px;
  justify-content: space-between;
  border: 0.5px solid #000;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px 0;
    border-right: none;
    border-left: none;
    border-top: none;
  }
`

const SFilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
`

const SFilter = styled.label<{ noProduct?: boolean }>`
  padding: 0 0 16px 30px;
  color: ${({ noProduct }) => noProduct && '#dadada'};
  cursor: pointer;
  position: relative;

  @media (max-width: 768px) {
    margin: 0 24px;
  }
`

const SFilterGroupName = styled.span`
  text-transform: uppercase;
  padding-bottom: 16px;

  @media (max-width: 768px) {
    border-bottom: 0.5px solid #000;
    margin-bottom: 16px;
    padding: 0 24px 16px;
  }
`

const SProductsQuantity = styled.span`
  font-size: 12px;
  color: #c2c2c2;
  font-weight: 500;
`

const SCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 0;
  height: 0;
  user-select: none;

  &::before {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    width: 20px;
    height: 20px;
    border: 0.5px solid #000;
    cursor: pointer;
  }

  &:disabled::before {
    opacity: 0.2;
  }

  &:checked::before {
    background-color: #9952bd;
  }
`

const SMetalColorIcon = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
`

const SShowResultsButton = styled.button`
  text-transform: uppercase;
  border: none;
  padding: 17px 60px;
  background-color: #9952bd;
  font-weight: 700;
  color: #fff;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

const SFilterControlButtonsGroup = styled(SFilterGroup)`
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    order: -1;
    padding: 0 24px 16px 24px;
    margin-bottom: 16px;
    border-bottom: 0.5px solid #000;
    flex: 1 1 0;
  }
`

const SCloseButton = styled.svg`
  cursor: pointer;
`

const SFilterControlButtonsGroupLabel = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

const SClearFiltersButton = styled.span`
  text-decoration: underline;
  font-weight: 400;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

const name = 'CollectionFilters'

export const CollectionFilters = ({ className }: CollectionFiltersProps): React.ReactElement => {
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-end',
    modifiers: [
      {
        name: 'offset',
        options: { offset: [0, -1] },
      },
    ],
  })

  const [isSortDropdownOpened, setIsSortDropdownOpened] = useState(false)
  const [isFiltersDropdownOpened, setIsFiltersDropdownOpened] = useState(false)

  return (
    <SCollectionFiltersContainer className={cn(name, className)}>
      <SButtons>
        <SButton onClick={() => setIsFiltersDropdownOpened(!isFiltersDropdownOpened)}>
          <SButtonLabel>
            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
              <path
                d="M1 1h16M1 5h12M1 9h8"
                stroke="#000"
                strokeWidth={0.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Filter
          </SButtonLabel>
        </SButton>
        <SButton ref={setReferenceElement} onClick={() => setIsSortDropdownOpened(!isSortDropdownOpened)}>
          <SButtonLabel>
            Sort by
            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
              <path
                d="M17 1L9 9 1 1"
                stroke="#000"
                strokeWidth={0.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SButtonLabel>
        </SButton>
        {isSortDropdownOpened && (
          <SSortDropdown ref={setPopperElement} style={styles.popper} {...attributes.popper}>
            <SSortDropdownFilters>New Arrivals</SSortDropdownFilters>
            <SSortDropdownFilters>Price: Low to High</SSortDropdownFilters>
            <SSortDropdownFilters>Price: High to Low</SSortDropdownFilters>
          </SSortDropdown>
        )}
      </SButtons>
      {isFiltersDropdownOpened && (
        <SFilters>
          <SFilterGroup>
            <SFilterGroupName>Fragrance</SFilterGroupName>
            <SFilter>
              Aquatic<SProductsQuantity> (12)</SProductsQuantity>
              <SCheckbox />
            </SFilter>
            <SFilter>
              Citrus<SProductsQuantity> (12)</SProductsQuantity>
              <SCheckbox />
            </SFilter>
            <SFilter>
              Floral<SProductsQuantity> (12)</SProductsQuantity>
              <SCheckbox />
            </SFilter>
            <SFilter>
              Floral Woods<SProductsQuantity> (12)</SProductsQuantity>
              <SCheckbox />
            </SFilter>
            <SFilter>
              Fresh<SProductsQuantity> (12)</SProductsQuantity>
              <SCheckbox />
            </SFilter>
            <SFilter>
              Fruity<SProductsQuantity> (12)</SProductsQuantity>
              <SCheckbox />
            </SFilter>
            <SFilter>
              Gourmand<SProductsQuantity> (12)</SProductsQuantity>
              <SCheckbox />
            </SFilter>
            <SFilter>
              Green<SProductsQuantity> (12)</SProductsQuantity>
              <SCheckbox />
            </SFilter>
            <SFilter>
              Musky<SProductsQuantity> (12)</SProductsQuantity>
              <SCheckbox />
            </SFilter>
            <SFilter>
              Spicy / Smoky<SProductsQuantity> (12)</SProductsQuantity>
              <SCheckbox />
            </SFilter>
          </SFilterGroup>
          <SFilterGroup>
            <SFilterGroupName>Size</SFilterGroupName>
            <SFilter>
              Size 5<SProductsQuantity> (12)</SProductsQuantity>
              <SCheckbox />
            </SFilter>
            <SFilter>
              Size 6<SProductsQuantity> (12)</SProductsQuantity>
              <SCheckbox />
            </SFilter>
            <SFilter>
              Size 7<SProductsQuantity> (12)</SProductsQuantity>
              <SCheckbox />
            </SFilter>
            <SFilter>
              Size 8<SProductsQuantity> (12)</SProductsQuantity>
              <SCheckbox />
            </SFilter>
            <SFilter>
              Size 9<SProductsQuantity> (12)</SProductsQuantity>
              <SCheckbox />
            </SFilter>
            <SFilter>
              Size 10<SProductsQuantity> (12)</SProductsQuantity>
              <SCheckbox />
            </SFilter>
          </SFilterGroup>
          <SFilterGroup>
            <SFilterGroupName>Material</SFilterGroupName>
            <SFilter noProduct>
              18K Gold Plated<SProductsQuantity></SProductsQuantity>
              <SCheckbox disabled />
            </SFilter>
            <SFilter>
              925 Sterling Silver<SProductsQuantity> (12)</SProductsQuantity>
              <SCheckbox />
            </SFilter>
            <SFilter>
              Rhodium Plated<SProductsQuantity> (12)</SProductsQuantity>
              <SCheckbox />
            </SFilter>
          </SFilterGroup>
          <SFilterGroup>
            <SFilterGroupName>Metal color</SFilterGroupName>
            <SFilter>
              <SMetalColorIcon
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x={0.25}
                  y={0.25}
                  width={19.5}
                  height={19.5}
                  rx={9.75}
                  fill="url(#prefix__paint0_linear)"
                  stroke="#000"
                  strokeWidth={0.5}
                />
                <defs>
                  <linearGradient
                    id="prefix__paint0_linear"
                    x1={1.706}
                    y1={2.368}
                    x2={21.507}
                    y2={10.765}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D08E17" />
                    <stop offset={0.02} stopColor="#D89C29" />
                    <stop offset={0.06} stopColor="#E6B248" />
                    <stop offset={0.101} stopColor="#F1C460" />
                    <stop offset={0.145} stopColor="#F9D072" />
                    <stop offset={0.193} stopColor="#FED87C" />
                    <stop offset={0.251} stopColor="#FFDE8D" />
                    <stop offset={0.362} stopColor="#FFDE93" />
                    <stop offset={0.54} stopColor="#F1C875" />
                    <stop offset={0.744} stopColor="#D8A549" />
                    <stop offset={0.808} stopColor="#BE9030" />
                    <stop offset={0.898} stopColor="#99740F" />
                  </linearGradient>
                </defs>
              </SMetalColorIcon>
              Gold<SProductsQuantity> (12)</SProductsQuantity>
            </SFilter>
            <SFilter>
              <SMetalColorIcon
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x={0.25}
                  y={0.25}
                  width={19.5}
                  height={19.5}
                  rx={9.75}
                  fill="url(#prefix__paint1_linear)"
                  stroke="#000"
                  strokeWidth={0.5}
                />
                <defs>
                  <linearGradient
                    id="prefix__paint1_linear"
                    x1={1.706}
                    y1={2.368}
                    x2={21.507}
                    y2={10.765}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0.02} stopColor="#D3A29D" />
                    <stop offset={0.276} stopColor="#E1B5AC" />
                    <stop offset={0.448} stopColor="#EAC2B8" />
                    <stop offset={0.661} stopColor="#BF8A7F" />
                    <stop offset={0.729} stopColor="#D7A8A0" />
                    <stop offset={0.898} stopColor="#BF9388" />
                  </linearGradient>
                </defs>
              </SMetalColorIcon>
              Rose Gold<SProductsQuantity> (12)</SProductsQuantity>
            </SFilter>
            <SFilter>
              <SMetalColorIcon
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <rect
                  x={0.25}
                  y={0.25}
                  width={19.5}
                  height={19.5}
                  rx={9.75}
                  fill="url(#prefix__paint2_linear)"
                  stroke="#000"
                  strokeWidth={0.5}
                />
                <defs>
                  <linearGradient
                    id="prefix__paint2_linear"
                    x1={1.706}
                    y1={2.368}
                    x2={21.507}
                    y2={10.765}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A8AEB6" />
                    <stop offset={0.02} stopColor="#BCC1C7" />
                    <stop offset={0.06} stopColor="#C3C7CC" />
                    <stop offset={0.101} stopColor="#D3D6DA" />
                    <stop offset={0.145} stopColor="#EEEFF0" />
                    <stop offset={0.193} stopColor="#F8F8F9" />
                    <stop offset={0.251} stopColor="#F8F8F9" />
                    <stop offset={0.362} stopColor="#F8F8F8" />
                    <stop offset={0.54} stopColor="#E4E5E8" />
                    <stop offset={0.744} stopColor="#D3D6DA" />
                    <stop offset={0.808} stopColor="#C3C7CC" />
                    <stop offset={0.898} stopColor="#A8AEB6" />
                  </linearGradient>
                </defs>
              </SMetalColorIcon>
              Silver<SProductsQuantity> (12)</SProductsQuantity>
            </SFilter>
          </SFilterGroup>
          <SFilterControlButtonsGroup>
            <SClearFiltersButton>Clear All</SClearFiltersButton>
            <SFilterControlButtonsGroupLabel>Refine</SFilterControlButtonsGroupLabel>
            <SCloseButton
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 22 22"
              fill="none"
              onClick={() => setIsFiltersDropdownOpened(false)}
            >
              <path
                d="M21 1L1 21M1 1l20 20"
                stroke="#000"
                strokeWidth={0.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </SCloseButton>
          </SFilterControlButtonsGroup>
          <SShowResultsButton>Show Results</SShowResultsButton>
        </SFilters>
      )}
    </SCollectionFiltersContainer>
  )
}
