import React from 'react'
import PresentationCanvas from 'gravity-brands/helpers/presentation-canvas'
import { InformationOverview } from './information-overview'

export const BasicInformationCard = (): React.ReactElement => (
  <PresentationCanvas>
    <InformationOverview
      titleFirst={'The most fun you’ve'}
      titleSecond={'ever had relaxing'}
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
  </PresentationCanvas>
)
