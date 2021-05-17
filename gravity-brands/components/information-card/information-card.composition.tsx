import React from 'react'
import { InformationCard } from './information-card'

export const BasicInformationCard = (): React.ReactElement => (
  <InformationCard
    image={`https://i.ibb.co/QFSL0Xd/Background.jpg`}
    title={'Info Card Title'}
    description={
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis.'
    }
  />
)
