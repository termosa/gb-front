import React, { useEffect, useState } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import usePopper from '../../hooks/use-popper'
import useOnClickOutside from '../../hooks/use-on-click-outside'
import { CollectionProductsFilter } from '../../modules/filter-collection-products'
import alooma from '../../lib/alooma'
import FilterPart from '../../lib/filter-part'

export { filterCollectionProducts } from '../../modules/filter-collection-products'
export type { CollectionProductsFilter } from '../../modules/filter-collection-products'

export interface Filter {
  name: string
  amount: number
}

export interface Filters {
  fragrances: Array<Filter>
  materials: Array<Filter>
  sizes: Array<Filter>
  colors: Array<Filter>
}

export enum SelectedSorting {
  NEW = 'new',
  LOW_TO_HIGH = 'low-to-high',
  HIGH_TO_LOW = 'high-to-low',
}

export type CollectionFiltersProps = {
  className?: ClassName
  children?: React.ReactNode
  filters: Filters
  onChangeFilter: (selectedFilters: CollectionProductsFilter) => void
  onChangeSorting: (sorting: SelectedSorting) => void
  initialSorting: SelectedSorting
}

const SCollectionFiltersContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts.familyMain};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const SButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 284px;
  margin-left: auto;

  @media (max-width: 1033px) {
    padding-right: 20px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0;
  }
`

const SButton = styled.button<{
  isOpen?: boolean
}>`
  padding: 16px;
  font-size: 16px;
  text-transform: uppercase;
  background-color: ${(props) => (props.isOpen ? '#9952bd' : '#fff')};
  color: ${(props) => (props.isOpen ? '#fff' : '#000')};
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

  path {
    stroke: ${(props) => (props.isOpen ? '#fff' : '#000')};
  }
`

const SButtonLabel = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.05em;
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
    border-right: none;
    border-left: none;
    border-top: none;
    margin-top: 1px;
  }
`

const SSortDropdownFilters = styled.p<{ selected?: boolean }>`
  cursor: pointer;
  text-align: center;
  margin: 0;
  font-weight: ${(p) => (p.selected ? 600 : 400)};

  &:not(:last-of-type) {
    padding-bottom: 20px;
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
  margin: 10px 0 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px 0;
    margin: 0;
    border-right: none;
    border-left: none;
    border-top: none;
  }

  @media (max-width: 1033px) {
    margin: 10px 20px 0;
  }
`

const SFilterGroup = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-bottom: 24px;
  }
`

const SShowResultsButton = styled.button`
  text-transform: uppercase;
  border: none;
  padding: 17px 60px;
  background-color: #9952bd;
  font-weight: 600;
  color: #fff;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

const SFilterMobileControlButtonsGroup = styled(SFilterGroup)`
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

const SCloseIcon = styled.svg`
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

const SClearFiltersButton = styled.span<{ mobile?: boolean }>`
  cursor: pointer;
  text-decoration: underline;
  font-size: 16px;
  font-weight: 400;
  display: ${({ mobile }) => (mobile ? 'none' : 'block')};
  white-space: nowrap;

  @media (max-width: 768px) {
    display: ${({ mobile }) => (mobile ? 'block' : 'none')};
  }
`

const SFilterDesktopControlButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #000;
  padding: 16px 0;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`

const SSelectedFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SSelectedFilter = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  padding-bottom: 4px;
`

const SSelectedFilterInfo = styled.div`
  font-size: 14px;
  padding-right: 4px;
`

const sorts: Array<{ label: string; code: SelectedSorting }> = [
  { label: 'New Arrivals', code: SelectedSorting.NEW },
  { label: 'Price: Low to High', code: SelectedSorting.LOW_TO_HIGH },
  { label: 'Price: High to Low', code: SelectedSorting.HIGH_TO_LOW },
]

const CloseButton = ({ onClick, small }: { onClick: () => void; small?: boolean }) => (
  <SCloseIcon
    xmlns="http://www.w3.org/2000/svg"
    width={small ? 10 : 22}
    height={small ? 10 : 22}
    viewBox="0 0 22 22"
    fill="none"
    onClick={onClick}
  >
    <path d="M21 1L1 21M1 1l20 20" stroke="#000" strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="round" />
  </SCloseIcon>
)

export type FilterGroup = 'fragrances' | 'materials' | 'sizes' | 'colors'

const isEmptyFilter = (filters: CollectionProductsFilter) =>
  Object.values(filters).every((values) => {
    return values && !values.length
  })

const createEmptyFilter = () => ({
  fragrances: [],
  materials: [],
  sizes: [],
  colors: [],
})

const name = 'CollectionFilters'

export const CollectionFilters = ({
  className,
  children,
  filters,
  onChangeFilter,
  onChangeSorting,
  initialSorting,
}: CollectionFiltersProps): React.ReactElement => {
  const [selectedSorting, setSelectedSorting] = useState<SelectedSorting>(initialSorting)

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
  const [isFiltersDropdownOpened, setIsFiltersDropdownOpened] = useState<boolean>()

  useEffect(() => {
    if (typeof isFiltersDropdownOpened !== 'undefined')
      alooma(isFiltersDropdownOpened ? 'dropdown opened' : 'dropdown closed')
  }, [isFiltersDropdownOpened])

  const [selectedFilters, setSelectedFilters] = useState<CollectionProductsFilter>(createEmptyFilter)

  const handleFilterChange = (filterGroup: FilterGroup, filterName: string, enabled: boolean) => {
    const selectedFilterName = filters[filterGroup].find((filter) => filter.name === filterName)?.name
    if (!selectedFilterName) return

    alooma(`${filterGroup.slice(0, -1)} ${enabled ? 'selected' : 'unselected'}`, { details: `choice: ${filterName}` }) // TODO: Stop slicing
    setSelectedFilters({
      ...selectedFilters,
      [filterGroup]: enabled
        ? (selectedFilters[filterGroup] || []).concat(selectedFilterName)
        : selectedFilters[filterGroup]?.filter((name) => name !== filterName) || [],
    })
  }

  useEffect(() => onChangeFilter(selectedFilters), [selectedFilters])

  const getListOfSelectedFilters = (selectedFilters: CollectionProductsFilter) => [
    ...(selectedFilters.sizes?.map((filter) => ({ name: filter, filterGroup: 'sizes' })) || []),
    ...(selectedFilters.fragrances?.map((filter) => ({ name: filter, filterGroup: 'fragrances' })) || []),
    ...(selectedFilters.colors?.map((filter) => ({ name: filter, filterGroup: 'colors' })) || []),
    ...(selectedFilters.materials?.map((filter) => ({ name: filter, filterGroup: 'materials' })) || []),
  ]

  useOnClickOutside({ current: popperElement }, ({ target }) => {
    if (target === referenceElement || target === referenceElement?.firstElementChild) return
    setIsSortDropdownOpened(false)
  })

  const changeSorting = (sorting: SelectedSorting) => {
    setSelectedSorting(sorting)
    onChangeSorting(sorting)
    setIsSortDropdownOpened(false)
  }

  const handleClearing = () => {
    alooma('clear filters')
    setSelectedFilters(createEmptyFilter())
  }

  return (
    <SCollectionFiltersContainer className={cn(name, className)}>
      {children}
      <SButtons>
        <SButton onClick={() => setIsFiltersDropdownOpened(!isFiltersDropdownOpened)} isOpen={isFiltersDropdownOpened}>
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
        <SButton
          ref={setReferenceElement}
          onClick={() => setIsSortDropdownOpened(!isSortDropdownOpened)}
          isOpen={isSortDropdownOpened}
        >
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
            {sorts.map((sorting) => (
              <SSortDropdownFilters
                key={sorting.code}
                onClick={() => changeSorting(sorting.code)}
                selected={sorting.code === selectedSorting}
              >
                {sorting.label}
              </SSortDropdownFilters>
            ))}
          </SSortDropdown>
        )}
      </SButtons>
      {isFiltersDropdownOpened && (
        <SFilters>
          {!!filters.fragrances.length && (
            <FilterPart
              itemsArray={filters.fragrances}
              filterGroup={'fragrances'}
              handleFilterChange={handleFilterChange}
              selectedFilters={selectedFilters}
              visibleByDefault
            >
              Fragrance
            </FilterPart>
          )}
          {!!filters.sizes.length && (
            <FilterPart
              itemsArray={filters.sizes}
              filterGroup={'sizes'}
              handleFilterChange={handleFilterChange}
              selectedFilters={selectedFilters}
            >
              Size
            </FilterPart>
          )}
          {!!filters.materials.length && (
            <FilterPart
              itemsArray={filters.materials}
              filterGroup={'materials'}
              handleFilterChange={handleFilterChange}
              selectedFilters={selectedFilters}
            >
              Material
            </FilterPart>
          )}
          {!!filters.colors.length && (
            <FilterPart
              itemsArray={filters.colors}
              filterGroup={'colors'}
              handleFilterChange={handleFilterChange}
              selectedFilters={selectedFilters}
            >
              Metal color
            </FilterPart>
          )}
          {/*{!!filters.colors.length && (
            <SFilterGroup>
              <SFilterGroupName>Metal color</SFilterGroupName>
              {filters.colors.map(({ name, amount }, index) => (
                <SFilter key={name}>
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
                  {name}
                  <SProductsQuantity> ({amount})</SProductsQuantity>
                  <input
                    type="checkbox"
                    hidden
                    onChange={(event) => handleFilterChange('colors', name, event.target.checked)}
                    checked={!!selectedFilters.colors?.includes(name)}
                  />
                </SFilter>
              ))}
            </SFilterGroup>
          )}*/}
          <SFilterMobileControlButtonsGroup>
            <SClearFiltersButton mobile onClick={handleClearing}>
              Clear All
            </SClearFiltersButton>
            <SFilterControlButtonsGroupLabel>Refine</SFilterControlButtonsGroupLabel>
            <CloseButton onClick={() => setIsFiltersDropdownOpened(false)} />
          </SFilterMobileControlButtonsGroup>
          <SShowResultsButton onClick={() => setIsFiltersDropdownOpened(false)}>Show Results</SShowResultsButton>
        </SFilters>
      )}
      {!isEmptyFilter(selectedFilters) && !isFiltersDropdownOpened && (
        <SFilterDesktopControlButtonsGroup>
          <SSelectedFilters>
            {getListOfSelectedFilters(selectedFilters).map(({ name, filterGroup }) => (
              <SSelectedFilter>
                <SSelectedFilterInfo>{name}</SSelectedFilterInfo>
                <CloseButton onClick={() => handleFilterChange(filterGroup as FilterGroup, name, false)} small />
              </SSelectedFilter>
            ))}
          </SSelectedFilters>
          <SClearFiltersButton onClick={handleClearing}>Clear All</SClearFiltersButton>
        </SFilterDesktopControlButtonsGroup>
      )}
    </SCollectionFiltersContainer>
  )
}
