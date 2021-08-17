import React from 'react'
import { render } from '@testing-library/react'
import { BasicInlineSignupForm } from './inline-signup-form.composition'

describe('InlineSignupForm', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicInlineSignupForm />)
    const rendered = getByText('Thanks for signing up!')
    expect(rendered).toBeTruthy()
  })
})
