import { builder, Builder } from '@builder.io/react'
// import builderConfig from 'config/builder'
builder.init('81568200280e48849b7bb181d6b7c3cc')
Builder.isStatic = true

export async function resolveBuilderContent(modelName: string, targetingAttributes: any, cachebust?: boolean) {
  let page = await builder
    .get(modelName, {
      userAttributes: targetingAttributes,
      ...(cachebust
        ? {
            cachebust: true,
            noCache: true,
          }
        : {
            staleCacheSeconds: 140,
          }),
    })
    .toPromise()

  return page || null
}
