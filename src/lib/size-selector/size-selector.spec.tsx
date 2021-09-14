import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import SizeSelector from '.'
import { VariantSize } from '../add-cart-item-with-subscription'

describe('<SizeSelector>', () => {
  const mockedOnSelectFunction = (selectedSize: VariantSize) => selectedSize
  const mockedOnCloseFunction = () => undefined

  it('should select size', () => {
    const { getByText } = render(<SizeSelector onSelect={mockedOnSelectFunction} onClose={mockedOnCloseFunction} />)
    const sizeButton = getByText('5')
    const selectButton = getByText('Select')

    act(() => sizeButton.click())
    waitFor(() => expect(sizeButton).toHaveStyle('background: #9059C8'))

    act(() => selectButton.click())
    waitFor(() => expect(mockedOnSelectFunction).toBeCalledWith(5, 1))
    waitFor(() => expect(mockedOnCloseFunction).toBeCalledTimes(1))
  })

  it('should close selector when user clicked on close button or outside', () => {
    const { getByText } = render(<SizeSelector onSelect={mockedOnSelectFunction} onClose={mockedOnCloseFunction} />)

    fireEvent.mouseDown(document.body)
    waitFor(() => expect(mockedOnCloseFunction).toBeCalledTimes(1))

    act(() => getByText('Select').click())
    waitFor(() => expect(mockedOnCloseFunction).toBeCalledTimes(2))
  })

  it('should render unavailable sizes', () => {
    const { getByText } = render(
      <SizeSelector onSelect={mockedOnSelectFunction} onClose={mockedOnCloseFunction} unavailable={[5, 10]} />
    )

    expect(getByText('5')).toHaveAttribute('disabled')
    expect(getByText('5')).toHaveStyle('opacity: 0.4')

    expect(getByText('10')).toHaveAttribute('disabled')
    expect(getByText('10')).toHaveStyle('opacity: 0.4')

    act(() => getByText('Select').click())
    waitFor(() => expect(mockedOnSelectFunction).toBeCalledTimes(0))
  })
})
