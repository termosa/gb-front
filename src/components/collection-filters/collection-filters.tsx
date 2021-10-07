import React, { useState, useEffect } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import usePopper from '../../hooks/use-popper'
import useOnClickOutside from '../../hooks/use-on-click-outside'
import { CollectionProductsFilter } from '../../modules/filter-collection-products'
import alooma from '../../lib/alooma'
import FilterPart from '../../lib/filter-part'
import useScreenSize from '../../lib/use-screen-size'
import { Product } from '../../modules/normalize-product'

export { filterCollectionProducts } from '../../modules/filter-collection-products'
export type { CollectionProductsFilter } from '../../modules/filter-collection-products'

export interface Filter {
  name: string
  amount: number
  availableAmount?: number
}

export interface Filters {
  fragrances: Array<Filter>
  materials: Array<Filter>
  sizes: Array<Filter>
  colors: Array<Filter>
}

export enum SelectedSorting {
  NEW = 'new-arrivals',
  LOW_TO_HIGH = 'low-to-high',
  HIGH_TO_LOW = 'high-to-low',
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
  max-width: 324px;
  margin: 16px 0 16px auto;

  @media (max-width: 1033px) {
    padding-right: 20px;
    margin: 20px 0 20px auto;
  }

  @media (max-width: 767px) {
    max-width: 100%;
    padding: 0;
    margin: 24px 0 0 auto;
  }
`

const SButton = styled.button<{
  isActive?: boolean
}>`
  padding: 16px;
  font-size: 16px;
  text-transform: uppercase;
  background-color: ${(props) => (props.isActive ? '#9952bd' : '#fff')};
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  border: 0.5px solid #000;
  width: 100%;
  max-width: 158px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 767px) {
    border-right: none;
    border-left: none;
    max-width: 100%;
    padding: 16px 6px;

    &:not(:last-of-type) {
      border-right: 0.5px solid #000;
    }
  }

  path {
    stroke: ${(props) => (props.isActive ? '#fff' : '#000')};
  }
`

const SButtonLabel = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.05em;

  @media (max-width: 767px) {
    justify-content: center;
  }
`

const SFilterLabelText = styled.span`
  @media (max-width: 767px) {
    margin-left: 12px;
  }
`

const SSortLabelText = styled.span`
  @media (max-width: 767px) {
    margin-right: 12px;
  }
`

const SSortDropdown = styled.div`
  padding: 24px 0;
  border: 0.5px solid #000;
  width: 100%;
  max-width: 284px;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 2;

  @media (max-width: 767px) {
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
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 5fr 2fr 6fr 4fr 1fr;
    margin: 0 20px;
    padding: 24px;
    border: 0.5px solid #000;
  }

  @media (min-width: 1033px) {
    margin: 0;
    grid-template-columns: 4fr 2fr 4fr 4fr 1fr;
  }
`

const SFilterPart = styled(FilterPart)<{
  minWidth?: string
}>``

const SFilterGroup = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    padding-bottom: 24px;
  }
`

const SShowResultsButton = styled.button<{
  isActive?: boolean
}>`
  text-transform: uppercase;
  border: none;
  padding: 17px 60px;
  background-color: ${(props) => (props.isActive ? '#9952bd' : '#808080')};
  font-weight: 600;
  color: #fff;
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`

const SFilterMobileControlButtonsGroup = styled(SFilterGroup)`
  @media (max-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    order: -1;
    padding: 16px;
    margin-bottom: 16px;
    border-bottom: 0.5px solid #000;
    flex: 1 1 0;
  }
`

const SCloseIcon = styled.svg`
  cursor: pointer;
`

const SFilterControlButtonsGroupLabel = styled.div`
  font-weight: 500;
  text-transform: uppercase;
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`

const SCloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 767px) {
    width: 73px;
  }
`

const SClearFiltersButton = styled.span<{ mobile?: boolean }>`
  width: 73px;
  border-bottom: 1px solid #000;
  letter-spacing: 0.05em;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  display: block;
  white-space: nowrap;
`

const SFilterDesktopControlButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 0.5px solid #000;
  padding: 16px 0;
  width: 100%;

  @media (max-width: 1033px) {
    margin: 0 20px;
  }

  @media (max-width: 767px) {
    padding: 0 16px 16px;
    border: 0;
    margin: 0;
  }
`

const SSelectedFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SSelectedFilter = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 10px 4px 0;

  &:last-child {
    padding-right: 0;
  }

  @media (max-width: 767px) {
    padding: 4px 20px 4px 0;
  }
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

export type CollectionFiltersProps = {
  className?: ClassName
  children?: React.ReactNode
  filters: Filters
  onChangeFilter: (selectedFilters: CollectionProductsFilter) => void
  onChangeSorting: (sorting: SelectedSorting) => void
  initialSorting: SelectedSorting
  initialFilter?: CollectionProductsFilter
  filteredProducts: Array<Product>
}

export const CollectionFilters = ({
  className,
  children,
  filters,
  onChangeFilter,
  onChangeSorting,
  initialSorting,
  initialFilter = createEmptyFilter(),
  filteredProducts,
}: CollectionFiltersProps): React.ReactElement => {
  const screenSize = useScreenSize()
  const [selectedSorting, setSelectedSorting] = useState<SelectedSorting>(initialSorting)

  const calculateAvailableFilters = (arr: Array<Filter>, name: string) => {
    return arr.map((el: Filter) => {
      const productsWithFilter =
        name === 'size'
          ? filteredProducts.filter((product: Product) => {
              return product.variants.some((variant) => variant.size === parseInt(el.name) && variant.available)
            })
          : filteredProducts.filter(
              (product: Product) => product[name as 'fragrance' | 'color' | 'material'] === el.name
            )
      return {
        name: el.name,
        amount: el.amount,
        availableAmount: productsWithFilter.length,
      }
    })
  }

  const filtersCopy = {
    sizes: filters.sizes
      ? React.useMemo(() => calculateAvailableFilters(filters.sizes, 'size'), [filters.sizes, filteredProducts])
      : [],
    fragrances: filters.fragrances
      ? React.useMemo(() => calculateAvailableFilters(filters.fragrances, 'fragrance'), [
          filters.fragrances,
          filteredProducts,
        ])
      : [],
    colors: filters.colors
      ? React.useMemo(() => calculateAvailableFilters(filters.colors, 'color'), [filters.colors, filteredProducts])
      : [],
    materials: filters.materials
      ? React.useMemo(() => calculateAvailableFilters(filters.materials, 'material'), [
          filters.materials,
          filteredProducts,
        ])
      : [],
  }

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

  const [isSortDropdownOpened, setIsSortDropdownOpened] = useState<boolean>()
  const [isFiltersDropdownOpened, setIsFiltersDropdownOpened] = useState<boolean>()

  useEffect(() => {
    if (typeof isFiltersDropdownOpened !== 'undefined')
      alooma(isFiltersDropdownOpened ? 'dropdown opened' : 'dropdown closed')
  }, [isFiltersDropdownOpened])

  const [selectedFilters, setSelectedFilters] = useState<CollectionProductsFilter>(initialFilter)

  const handleFilterChange = (filterGroup: FilterGroup, filterName: string, enabled: boolean) => {
    const selectedFilterName = filters[filterGroup].find((filter) => filter.name === filterName)?.name
    if (!selectedFilterName) return

    alooma(`${filterGroup.slice(0, -1)} ${enabled ? 'selected' : 'unselected'}`, { details: `choice: ${filterName}` }) // TODO: Stop slicing
    onChangeFilter({
      ...selectedFilters,
      [filterGroup]: enabled
        ? (selectedFilters[filterGroup] || []).concat(selectedFilterName)
        : selectedFilters[filterGroup]?.filter((name) => name !== filterName) || [],
    })
    setSelectedFilters({
      ...selectedFilters,
      [filterGroup]: enabled
        ? (selectedFilters[filterGroup] || []).concat(selectedFilterName)
        : selectedFilters[filterGroup]?.filter((name) => name !== filterName) || [],
    })
  }

  const getListOfSelectedFilters = (selectedFilters: CollectionProductsFilter) => [
    ...(selectedFilters.sizes?.map((filter) => ({ name: filter, filterGroup: 'sizes' })) || []),
    ...(selectedFilters.fragrances?.map((filter) => ({ name: filter, filterGroup: 'fragrances' })) || []),
    ...(selectedFilters.colors?.map((filter) => ({ name: filter, filterGroup: 'colors' })) || []),
    ...(selectedFilters.materials?.map((filter) => ({ name: filter, filterGroup: 'materials' })) || []),
  ]

  useOnClickOutside({ current: popperElement }, ({ target }) => {
    if (target === referenceElement || referenceElement?.contains(target as Node)) return
    setIsSortDropdownOpened(false)
  })

  const changeSorting = (sorting: SelectedSorting) => {
    setSelectedSorting(sorting)
    onChangeSorting(sorting)
    setIsSortDropdownOpened(false)
  }

  const handleClearing = () => {
    alooma('clear filters')
    onChangeFilter(createEmptyFilter())
    setSelectedFilters(createEmptyFilter())
  }

  return (
    <SCollectionFiltersContainer className={cn(name, className)}>
      {children}
      <SButtons>
        <SButton
          onClick={() => setIsFiltersDropdownOpened(!isFiltersDropdownOpened)}
          isActive={!isEmptyFilter(selectedFilters)}
        >
          <SButtonLabel>
            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
              <path
                d="M1 1h16M1 5h12M1 9h8"
                stroke={isEmptyFilter(selectedFilters) ? '#000' : '#fff'}
                strokeWidth={0.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <SFilterLabelText>
              Filter {!isEmptyFilter(selectedFilters) && `(${filteredProducts.length})`}
            </SFilterLabelText>
          </SButtonLabel>
        </SButton>
        <SButton
          ref={setReferenceElement}
          onClick={() => setIsSortDropdownOpened(!isSortDropdownOpened)}
          isActive={isSortDropdownOpened}
        >
          <SButtonLabel>
            <SSortLabelText>Sort by</SSortLabelText>
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
            <SFilterPart
              itemsArray={filtersCopy.fragrances.sort((a, b) => a.name.localeCompare(b.name))}
              filterGroup={'fragrances'}
              handleFilterChange={handleFilterChange}
              selectedFilters={selectedFilters}
              visibleByDefault
              minWidth={'200px'}
            >
              Fragrance
            </SFilterPart>
          )}
          {!!filters.sizes.length && (
            <SFilterPart
              itemsArray={filtersCopy.sizes}
              filterGroup={'sizes'}
              handleFilterChange={handleFilterChange}
              selectedFilters={selectedFilters}
              minWidth={'140px'}
            >
              Size
            </SFilterPart>
          )}
          {!!filters.materials.length && (
            <SFilterPart
              itemsArray={filtersCopy.materials.sort((a, b) => a.name.localeCompare(b.name))}
              filterGroup={'materials'}
              handleFilterChange={handleFilterChange}
              selectedFilters={selectedFilters}
              minWidth={'250px'}
            >
              Material
            </SFilterPart>
          )}
          {!!filters.colors.length && (
            <SFilterPart
              itemsArray={filtersCopy.colors.sort((a, b) => a.name.localeCompare(b.name))}
              filterGroup={'colors'}
              handleFilterChange={handleFilterChange}
              selectedFilters={selectedFilters}
              minWidth={'220px'}
            >
              Metal color
            </SFilterPart>
          )}
          <SFilterMobileControlButtonsGroup>
            {!screenSize.greaterThanMedium && (
              <SClearFiltersButton mobile onClick={handleClearing}>
                Clear All
              </SClearFiltersButton>
            )}
            <SFilterControlButtonsGroupLabel>Refine</SFilterControlButtonsGroupLabel>
            <SCloseButtonWrapper>
              <CloseButton onClick={() => setIsFiltersDropdownOpened(false)} />
            </SCloseButtonWrapper>
          </SFilterMobileControlButtonsGroup>
          {!isEmptyFilter(selectedFilters) && !screenSize.greaterThanMedium && (
            <SFilterDesktopControlButtonsGroup>
              <SSelectedFilters>
                {getListOfSelectedFilters(selectedFilters).map(({ name, filterGroup }) => (
                  <SSelectedFilter>
                    <SSelectedFilterInfo>{name}</SSelectedFilterInfo>
                    <CloseButton onClick={() => handleFilterChange(filterGroup as FilterGroup, name, false)} small />
                  </SSelectedFilter>
                ))}
              </SSelectedFilters>
              {(!isFiltersDropdownOpened || screenSize.greaterThanMedium) && (
                <SClearFiltersButton onClick={handleClearing}>Clear All</SClearFiltersButton>
              )}
            </SFilterDesktopControlButtonsGroup>
          )}
          <SShowResultsButton
            onClick={() => setIsFiltersDropdownOpened(false)}
            isActive={!isEmptyFilter(selectedFilters)}
          >
            Show Results {!isEmptyFilter(selectedFilters) && `(${filteredProducts.length})`}
          </SShowResultsButton>
        </SFilters>
      )}
      {!isEmptyFilter(selectedFilters) && isFiltersDropdownOpened && screenSize.greaterThanMedium && (
        <SFilterDesktopControlButtonsGroup>
          <SSelectedFilters>
            {getListOfSelectedFilters(selectedFilters).map(({ name, filterGroup }) => (
              <SSelectedFilter>
                <SSelectedFilterInfo>{name}</SSelectedFilterInfo>
                <svg
                  width="10"
                  height="10"
                  onClick={() => handleFilterChange(filterGroup as FilterGroup, name, false)}
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L1 9M1 1L9 9"
                    stroke="black"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </SSelectedFilter>
            ))}
          </SSelectedFilters>
          {(!isFiltersDropdownOpened || screenSize.greaterThanMedium) && (
            <SClearFiltersButton onClick={handleClearing}>Clear All</SClearFiltersButton>
          )}
        </SFilterDesktopControlButtonsGroup>
      )}
    </SCollectionFiltersContainer>
  )
}
