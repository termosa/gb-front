import React from 'react'
import { BuilderComponent } from '@builder.io/react'
import registerComponents from '../builder/register-components'
import homePageProps, { HomePageProps } from '../resolvers/homePageProps'
import CustomerContext from '../modules/customer-context'

registerComponents()

export default function HomePage({ builderContent, activeCustomer }: HomePageProps): React.ReactElement {
  return (
    <CustomerContext.Provider value={activeCustomer || undefined}>
      <BuilderComponent model="Home" content={builderContent} />
    </CustomerContext.Provider>
  )
}

export const getServerSideProps = homePageProps()
