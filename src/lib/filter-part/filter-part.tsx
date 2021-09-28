import React, { useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled, { css } from 'styled-components'
import useScreenSize from '../use-screen-size'
import { CollectionProductsFilter, Filter, FilterGroup } from '../../components/collection-filters'

const Wrapper = styled.div``

const SFilter = styled.label<{
  noProduct?: boolean
  isCollapsed?: boolean
}>`
  display: ${(props) => (props.isCollapsed ? 'none' : 'flex')};
  padding: 3px 0 20px 30px;
  color: ${({ noProduct }) => noProduct && '#dadada'};
  cursor: pointer;
  position: relative;
  letter-spacing: 0.05em;

  @media (max-width: 767px) {
    margin: 0 16px;
  }

  &:last-child {
    padding: 3px 0 0 30px;
  }
`

const SMetalColorIcon = styled.svg<{ checked: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: 100%;

  ${(p) =>
    p.checked
      ? css`
          border-color: #9059c8;
          box-shadow: inset 0 0 2px #fff;
        `
      : ''}
`

const SFilterGroup = styled.div<{
  isCollapsed?: boolean
}>`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 767px) {
    padding-bottom: ${(props) => (props.isCollapsed ? '0' : '24px')};
  }
`

const SFilterGroupName = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  padding-bottom: 16px;
  letter-spacing: 0.05em;

  @media (max-width: 767px) {
    border-bottom: 0.5px solid #000;
    margin-bottom: 16px;
    padding: 0 16px 14px;
  }
`

const SProductsQuantity = styled.span`
  font-size: 12px;
  color: #c2c2c2;
  font-weight: 500;
`

const SFilterItemName = styled.span<{
  isDisable?: boolean
}>`
  color: ${(props) => (props.isDisable ? '#cccccc' : '#000000')};
`

const SCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 0;
  height: 0;
  user-select: none;
  outline: none;
  border: none;

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

const SCollapseButton = styled.span<{
  isOpen?: boolean
}>`
  cursor: pointer;
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : '')};
`

export type ColorGradient = Array<{ offset?: number; stopColor: string }>

const gradients: Record<string, ColorGradient> = {
  Black: [
    { stopColor: '#1A1B1A' },
    { offset: 0.2, stopColor: '#DFE0DF' },
    { offset: 0.4, stopColor: '#585756' },
    { offset: 0.6, stopColor: '#3C3938' },
    { offset: 0.8, stopColor: '#3C3938' },
  ],
  Gold: [
    { stopColor: '#D08E17' },
    { offset: 0.02, stopColor: '#D89C29' },
    { offset: 0.06, stopColor: '#E6B248' },
    { offset: 0.101, stopColor: '#F1C460' },
    { offset: 0.145, stopColor: '#F9D072' },
    { offset: 0.193, stopColor: '#FED87C' },
    { offset: 0.251, stopColor: '#FFDE8D' },
    { offset: 0.362, stopColor: '#FFDE93' },
    { offset: 0.54, stopColor: '#F1C875' },
    { offset: 0.744, stopColor: '#D8A549' },
    { offset: 0.808, stopColor: '#BE9030' },
    { offset: 0.898, stopColor: '#99740F' },
  ],
  'Rose Gold': [
    { offset: 0.02, stopColor: '#D3A29D' },
    { offset: 0.276, stopColor: '#E1B5AC' },
    { offset: 0.448, stopColor: '#EAC2B8' },
    { offset: 0.661, stopColor: '#BF8A7F' },
    { offset: 0.729, stopColor: '#D7A8A0' },
    { offset: 0.898, stopColor: '#BF9388' },
  ],
  Silver: [
    { stopColor: '#A8AEB6' },
    { offset: 0.02, stopColor: '#BCC1C7' },
    { offset: 0.06, stopColor: '#C3C7CC' },
    { offset: 0.101, stopColor: '#D3D6DA' },
    { offset: 0.145, stopColor: '#EEEFF0' },
    { offset: 0.193, stopColor: '#F8F8F9' },
    { offset: 0.251, stopColor: '#F8F8F9' },
    { offset: 0.362, stopColor: '#F8F8F8' },
    { offset: 0.54, stopColor: '#E4E5E8' },
    { offset: 0.744, stopColor: '#D3D6DA' },
    { offset: 0.808, stopColor: '#C3C7CC' },
    { offset: 0.898, stopColor: '#A8AEB6' },
  ],
}

const CollapseButton = () => (
  <SCollapseButton>
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
  </SCollapseButton>
)

export type FilterPartProps = {
  children: React.ReactNode
  className?: ClassName
  style?: React.CSSProperties
  itemsArray: Array<Filter> | undefined
  filterGroup: FilterGroup
  handleFilterChange?: (filterGroup: FilterGroup, filterName: string, enabled: boolean) => void
  selectedFilters: CollectionProductsFilter
  visibleByDefault?: boolean
}

export function FilterPart({
  children,
  className,
  style,
  itemsArray,
  filterGroup,
  handleFilterChange,
  selectedFilters,
  visibleByDefault,
}: FilterPartProps): React.ReactElement {
  const screenSize = useScreenSize()
  const [isCollapsed, setCollapsed] = useState(!visibleByDefault)
  return (
    <Wrapper className={cn(className)} style={style}>
      <SFilterGroup isCollapsed={isCollapsed && !screenSize.greaterThanMedium}>
        <SFilterGroupName onClick={() => setCollapsed(!isCollapsed)}>
          <span>{children}</span>
          {!screenSize.greaterThanMedium && <CollapseButton />}
        </SFilterGroupName>
        {itemsArray &&
          itemsArray.map(({ name, amount, availableAmount }, index) => (
            <SFilter key={name} isCollapsed={isCollapsed && !screenSize.greaterThanMedium}>
              {filterGroup === 'colors' && (
                <SMetalColorIcon
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  checked={!!selectedFilters.colors?.includes(name)}
                >
                  <rect
                    x={0.25}
                    y={0.25}
                    width={19.5}
                    height={19.5}
                    rx={9.75}
                    fill={`url(#${index}-color)`}
                    stroke="#000"
                    strokeWidth={0.5}
                  />
                  <defs>
                    <linearGradient
                      id={`${index}-color`}
                      x1={1.706}
                      y1={2.368}
                      x2={21.507}
                      y2={10.765}
                      gradientUnits="userSpaceOnUse"
                    >
                      {gradients[name]?.map(({ stopColor, offset }) => (
                        <stop stopColor={stopColor} offset={offset} key={stopColor + Math.random()} />
                      ))}
                    </linearGradient>
                  </defs>
                </SMetalColorIcon>
              )}
              <SFilterItemName isDisable={!availableAmount && !selectedFilters[filterGroup]?.length}>
                {name}
                {!selectedFilters[filterGroup]?.includes(name) && (
                  <SProductsQuantity>
                    {filterGroup !== 'sizes'
                      ? `(${selectedFilters[filterGroup]?.length ? ` + ` + amount : availableAmount})`
                      : ''}
                  </SProductsQuantity>
                )}
              </SFilterItemName>
              <SCheckbox
                onChange={(event) => handleFilterChange && handleFilterChange(filterGroup, name, event.target.checked)}
                checked={!!selectedFilters[filterGroup]?.includes(name)}
                disabled={!availableAmount && !selectedFilters[filterGroup]?.length}
                hidden={filterGroup === 'colors'}
              />
            </SFilter>
          ))}
      </SFilterGroup>
    </Wrapper>
  )
}
