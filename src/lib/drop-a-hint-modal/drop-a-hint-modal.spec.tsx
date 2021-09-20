import React from 'react'
import { render } from '@testing-library/react'
import DropAHintModal from '.'

describe('<DropAHintModal>', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<DropAHintModal>Component content</DropAHintModal>)
    const rendered = getByText('Component content')
    expect(rendered).toBeTruthy()
  })
})
