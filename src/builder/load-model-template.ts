import https from 'https'
import qs from 'qs'

const apiKey = process.env.BUILDER_KEY

const defaultTemplateName = 'Default'

export type ModelName = 'home' | 'product' | 'collection'

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
    const path = `/api/v2/content/${modelName}`
    const query = qs.stringify({ apiKey, limit: 1, ...(templateName && { 'query.name': templateName }) })
    https.get(`${origin}${path}?${query}`, (response) => {
      const chunks: Array<Uint8Array> = []
      response.on('data', (chunk: Uint8Array) => chunks.push(chunk))
      response.on('end', () => {
        try {
          const responseData = JSON.parse(Buffer.concat(chunks).toString())
          if (!response.statusCode || response.statusCode >= 400) reject(responseData)
          else if (responseData.status >= 400) reject(responseData)
          else if (responseData.results?.length) resolve(responseData.results[0])
          else if (templateName === defaultTemplateName) reject({ status: 404, message: 'Template not found' })
          else resolve(loadModelTemplate(modelName, defaultTemplateName))
        } catch (error) {
          reject(error)
        }
      })
    })
  })
}
