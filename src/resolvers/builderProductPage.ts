import { resolveBuilderContent } from 'src/builder/resolve-builder-content'

export default () => async () => {
  const modelName = 'product'
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
