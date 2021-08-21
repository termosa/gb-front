import https from 'https'
import stringifyQuery from '../modules/stringify-query'
// import { BuilderContent } from '@builder.io/sdk' should I extend ModelTemplate with this object?

const apiKey = process.env.BUILDER_KEY

const defaultTemplateName = 'Default'

export type ModelName = 'Home' | 'Product' | 'Collection'

export type ModelTemplate = {
  createdBy: string
  createdDate: number
  data: {
    title: string
    blocks: Array<
      Record<string, unknown> & {
        '@type': string
        '@version': number
        id: string
      }
    >
    url: string
    state: {
      deviceSize: 'large' | string
      location: {
        path: string
        query: Record<string, string>
      }
    }
  }
  id: string
  lastUpdatedBy: string
  meta: {
    hasLinks: boolean
    kind: 'page' | string
    needsHydration: boolean
  }
  modelId: string
  name: string
  published?: 'published' | 'draft' | 'archived'
  query: Array<{
    operator: 'is' | string
    property: 'urlPath' | string | null
    value: string | null
  }>
  testRatio: number
  variations: Record<string, unknown>
  lastUpdated: number
  screenshot: string // url
  rev: string
}

export default function loadModelTemplate(modelName: ModelName, templateName?: string): Promise<ModelTemplate> {
  return new Promise((resolve, reject) => {
    const origin = 'https://cdn.builder.io'
    const path = `/api/v2/content/${modelName.toLowerCase()}`
    const query = stringifyQuery({ apiKey, limit: 1, 'query.name': templateName || defaultTemplateName })
    const fail = (reason?: any) => {
      console.error(`Could not load template for ${modelName}${templateName ? `:${templateName}` : ''}`, reason)
      return reject(reason)
    }
    https.get(`${origin}${path}?${query}`, (response) => {
      const chunks: Array<Uint8Array> = []
      response.on('data', (chunk: Uint8Array) => chunks.push(chunk))
      response.on('end', () => {
        try {
          const responseData = JSON.parse(Buffer.concat(chunks).toString())
          if (!response.statusCode || response.statusCode >= 400) fail(responseData)
          else if (responseData.status >= 400) fail(responseData)
          else if (responseData.results?.length) resolve(responseData.results[0])
          else if (templateName === defaultTemplateName) fail({ status: 404, message: 'Template not found' })
          else loadModelTemplate(modelName, defaultTemplateName).then(resolve, fail)
        } catch (error) {
          fail(error)
        }
      })
    })
  })
}
