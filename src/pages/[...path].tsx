import { builder } from '@builder.io/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import builderConfig from 'config/builder'
import builderIoProps from './resolvers/builderIoProps'
import builderIoPaths from './resolvers/builderIoPaths'
import BuilderIoPage from './BuilderIoPage'

builder.init(builderConfig.apiKey)

export const getStaticProps: GetStaticProps = builderIoProps('home', 5)

export const getStaticPaths: GetStaticPaths = builderIoPaths('home', true)

export default BuilderIoPage
