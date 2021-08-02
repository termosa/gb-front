import { builder } from '@builder.io/react'

export default (modelName: string, fallback: boolean) => async () => {
  const pages = await builder.getAll(modelName, {
    options: { noTargeting: true },
    apiKey: '11f0313bca7a437dbb8b37ee02351718',
  })

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback,
  }
}
