import { resolveBuilderContent } from '../../../lib/resolve-builder-content'

export default () => async () => {
  const modelName = 'collection'
  const page = await resolveBuilderContent(modelName, {
    urlPath: '/' + modelName,
  })

  return {
    props: {
      content: page,
      modelName,
    },
    revalidate: 5,
  }
}
