import React from 'react'
import sourceItems from '../src/**/*.mdx'

interface JSONType<NodeType = null | number | string> {
  [key: string]: NodeType | JSONType | Array<JSONType>
}

export type Module = { __esModule: boolean; default: React.FC }

export type ModulesMap = JSONType<Module>

export type DocModule = {
  name: string
  component: React.FC
}

const pickModules = (source: ModulesMap): Array<DocModule> => {
  return Object.keys(source).reduce<Array<DocModule>>((docs, key) => {
    if ('__esModule' in source[key] && source[key].__esModule) {
      return docs.concat(source[key])
    }
    return docs.concat(pickModules(source[key]))
  }, [])
}

export default function collectDocsModules(modules: ModulesMap = sourceItems): Array<DocModule> {
  return Object.keys(modules).reduce<Array<DocModule>>((docs, key) => {
    if (!modules[key].__esModule) return docs.concat(collectDocsModules(modules[key]))
    return docs.concat({
      name: modules[key].name || key.endsWith('.docs') ? key.slice(0, -5) : key,
      component: modules[key].default,
    })
  }, [])
}
