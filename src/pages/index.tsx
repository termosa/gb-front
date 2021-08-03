import React from 'react'
import { BuilderComponent } from '@builder.io/react'
import 'src/builder/register-components'
import homePageProps, { HomePageProps } from 'src/resolvers/homePageProps'

export default function LandingPage({ builderContent }: HomePageProps): React.ReactElement {
  if (!builderContent) {
    console.error('Builder content is missing')
    return <h1>404 Not found</h1>
  }

  return <BuilderComponent model="Home" content={builderContent} />
}

export const getServerSideProps = homePageProps()
