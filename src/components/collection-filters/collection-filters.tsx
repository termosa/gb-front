import React, { useState, useEffect } from 'react'
import cn, { Argument as ClassName } from 'classnames'
import styled from 'styled-components'
import usePopper from '../../hooks/use-popper'
import useOnClickOutside from '../../hooks/use-on-click-outside'
import { CollectionProductsFilter } from '../../modules/filter-collection-products'
import alooma from '../../lib/alooma'
import FilterPart from '../../lib/filter-part'
import useScreenSize from '../../lib/use-screen-size'

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
  initialFilter?: CollectionProductsFilter
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
  margin-top: 2.5em;

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

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const SButtonLabelText = styled.span`
  @media (max-width: 768px) {
    margin: 0 12px;
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
    padding: 16px 0;
    margin: 0;
    border: 0;
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

  @media (max-width: 768px) {
    display: block;
  }
`

const SFilterMobileControlButtonsGroup = styled(SFilterGroup)`
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    order: -1;
    padding: 0 16px 16px;
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

  @media (max-width: 768px) {
    display: block;
  }
`

const SCloseButtonWrapper = styled.div`
  width: 73px;
  display: flex;
  justify-content: flex-end;
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
  border-bottom: 0.5px solid #000;
  padding: 16px 0;
  width: 100%;

  @media (max-width: 767px) {
    padding: 0 0 16px;
    border: 0;
  }

  @media (max-width: 1033px) {
    margin: 0 20px;
  }
`

const SSelectedFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SSelectedFilter = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 20px;
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
  initialFilter = createEmptyFilter(),
}: CollectionFiltersProps): React.ReactElement => {
  const screenSize = useScreenSize()
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
    onChangeFilter(createEmptyFilter())
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
            <SButtonLabelText>Filter</SButtonLabelText>
          </SButtonLabel>
        </SButton>
        <SButton
          ref={setReferenceElement}
          onClick={() => setIsSortDropdownOpened(!isSortDropdownOpened)}
          isOpen={isSortDropdownOpened}
        >
          <SButtonLabel>
            <SButtonLabelText>Sort by</SButtonLabelText>
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
            Show Results
          </SShowResultsButton>
        </SFilters>
      )}
      {!isEmptyFilter(selectedFilters) && screenSize.greaterThanMedium && (
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
    </SCollectionFiltersContainer>
  )
}
