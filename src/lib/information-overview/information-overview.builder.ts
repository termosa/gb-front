import { Builder } from '@builder.io/react'
import InformationOverview from '.'

export default function registerInformationOverview(): void {
  Builder.registerComponent(InformationOverview, {
    name: 'Information overview',
    inputs: [
      {
        name: 'title',
        type: 'string',
        defaultValue: '',
      },
      {
        name: 'cards',
        type: 'list',
        subFields: [
          {
            name: 'image',
            type: 'file',
            defaultValue: '',
          },
          {
            name: 'title',
            type: 'string',
            defaultValue: '',
          },
          {
            name: 'description',
            type: 'string',
            defaultValue: '',
          },
        ],
        defaultValue: [
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
        ],
      },
    ],
  })
}
