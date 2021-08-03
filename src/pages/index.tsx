import React from 'react'
import { BuilderComponent } from '@builder.io/react'
import 'src/builder/register-components'
import homePageProps, { HomePageProps } from 'src/resolvers/homePageProps'

export default function HomePage({ builderContent }: HomePageProps): React.ReactElement {
  if (!builderContent) throw new Error('Builder content is missing')

  return <BuilderComponent model="Home" content={builderContent} />
}

export const getServerSideProps = homePageProps()
