import React from 'react'
import { BuilderComponent } from '@builder.io/react'
import 'src/builder/register-components'
import homePageProps, { HomePageProps } from 'src/resolvers/homePageProps'
import CustomerContext from 'gravity-brands/modules/customer-context'

export default function HomePage({ builderContent, activeCustomer }: HomePageProps): React.ReactElement {
  if (!builderContent) throw new Error('Builder content is missing')

  console.log({ activeCustomer })

  return (
    <CustomerContext.Provider value={activeCustomer || undefined}>
      <BuilderComponent model="Home" content={builderContent} />
    </CustomerContext.Provider>
  )
}

export const getServerSideProps = homePageProps()
