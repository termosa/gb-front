import { resolveBuilderContent } from '../../../lib/resolve-builder-content'

export default (modelName: string, revalidate: number) => async () => {
  const page = await resolveBuilderContent(modelName, {
    urlPath: '/' + modelName,
  })

  return {
    props: {
      content: page,
      modelName,
    },
    revalidate: revalidate,
  }
}
