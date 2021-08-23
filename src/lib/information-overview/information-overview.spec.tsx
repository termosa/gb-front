import React from 'react'
import { render } from '@testing-library/react'
import InformationOverview from '.'

describe('<InformationOverview>', () => {
  it('should render with the correct title', () => {
    const { getByText } = render(
      <InformationOverview
        title="Trust us"
        cards={[
          {
            image: 'https://i.ibb.co/QFSL0Xd/Background.jpg',
            title: 'Info Card Title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis.',
          },
          {
            image: 'https://i.ibb.co/QFSL0Xd/Background.jpg',
            title: 'Info Card Title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis.',
          },
          {
            image: 'https://i.ibb.co/QFSL0Xd/Background.jpg',
            title: 'Info Card Title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis.',
          },
        ]}
      />
    )
    expect(getByText('Trust us')).toBeTruthy()
  })

  it('should render all cards', () => {
    const { getByText, container } = render(
      <InformationOverview
        title="Trust us"
        cards={[
          {
            image: 'https://i.ibb.co/QFSL0Xd/first-card-image-link.jpg',
            title: 'First card title',
            description: 'First card description',
          },
          {
            image: 'https://i.ibb.co/QFSL0Xd/second-card-image-link.jpg',
            title: 'Second card title',
            description: 'Second card description',
          },
          {
            image: 'https://i.ibb.co/QFSL0Xd/third-card-image-link.jpg',
            title: 'Third card title',
            description: 'Third card description',
          },
        ]}
      />
    )

    expect(getByText('First card title')).toBeTruthy()
    expect(getByText('First card description')).toBeTruthy()
    expect(container.querySelectorAll('img')[0]).toHaveAttribute(
      'src',
      'https://i.ibb.co/QFSL0Xd/first-card-image-link.jpg'
    )

    expect(getByText('Second card title')).toBeTruthy()
    expect(getByText('Second card description')).toBeTruthy()
    expect(container.querySelectorAll('img')[1]).toHaveAttribute(
      'src',
      'https://i.ibb.co/QFSL0Xd/second-card-image-link.jpg'
    )

    expect(getByText('Third card title')).toBeTruthy()
    expect(getByText('Third card description')).toBeTruthy()
    expect(container.querySelectorAll('img')[2]).toHaveAttribute(
      'src',
      'https://i.ibb.co/QFSL0Xd/third-card-image-link.jpg'
    )
  })
})
