import { Builder } from '@builder.io/react'
import HeroGallery from '.'

export default function registerHeroGallery(): void {
  Builder.registerComponent(HeroGallery, {
    name: 'Hero gallery',
    inputs: [
      {
        name: 'slides',
        type: 'list',
        subFields: [
          {
            name: 'topText',
            type: 'string',
            defaultValue: '',
          },
          {
            name: 'centerFirstText',
            type: 'string',
            defaultValue: '',
          },
          {
            name: 'centerSecondText',
            type: 'string',
            defaultValue: '',
          },
          {
            name: 'bottomText',
            type: 'string',
            defaultValue: '',
          },
          {
            name: 'buttonText',
            type: 'string',
            defaultValue: '',
          },
          {
            name: 'buttonLink',
            type: 'string',
            defaultValue: '',
          },
          {
            name: 'backgroundImg',
            type: 'file',
            defaultValue: '',
          },
        ],
        defaultValue: [
          {
            topText: 'MINISUBLINER',
            centerFirstText: 'SAVOR the',
            centerSecondText: 'MOMENTS',
            bottomText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque.',
            buttonText: 'SHOP NOW',
            buttonLink: 'https://www.fragrantjewels.com/pages/inner-circle#how-it-works',
            backgroundImg: '',
          },
        ],
      },
    ],
  })
}
