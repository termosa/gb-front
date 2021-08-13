import React from 'react'
import sourceItems from '../src/**/*.mdx'

interface JSONType<NodeType = null | number | string> {
  [key: string]: NodeType | JSONType | Array<JSONType>
}

export type ModulesMap = JSONType<{ __esModule: boolean; default: React.FC }>

export type Module = {
  name: string
  component: React.FC
}

export default function collectDocsModules(modules: Array<ModulesMap> = sourceItems): Array<Module> {
  return Object.keys(modules).reduce<Array<Module>>((docs, key) => {
    if (!modules[key].__esModule) return docs.concat(collectDocsModules(modules[key]))
    return docs.concat({
      name: modules[key].name || key.endsWith('.docs') ? key.slice(0, -5) : key,
      component: modules[key].default,
    })
  }, [])
}
