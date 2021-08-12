import React from 'react'
import sourceItems from '../gravity-brands/**/*.mdx'

export default function collectDocs(
  items = sourceItems
): Array<{ name: string; component: () => React.ReactElement; tags: string[] }> {
  return Object.keys(items).reduce((docs, key) => {
    if (!items[key].__esModule) return docs.concat(collectDocs(items[key]))
    return docs.concat({
      name: items[key].name || key.endsWith('.docs') ? key.slice(0, -5) : key,
      component: items[key].default,
      tags: items[key].tags || [],
    })
  }, [])
}
