import React from 'react'
import { render } from '@testing-library/react'
import { BasicInlineSignUpForm } from './inline-sign-up-form.composition'

describe('InlineSignUpForm', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicInlineSignUpForm />)
    const rendered = getByText('InlineSignUpForm content')
    expect(rendered).toBeTruthy()
  })
})
