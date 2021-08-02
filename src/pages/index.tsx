import React from 'react'
import { BuilderComponent } from '@builder.io/react'
import 'src/builder/register-components'
import homePageProps, { HomePageProps } from 'src/resolvers/homePageProps'

export default function LandingPage({ builderContent }: HomePageProps): React.ReactElement {
  return <BuilderComponent model="page" content={builderContent} />
}

export const getServerSideProps = homePageProps()
