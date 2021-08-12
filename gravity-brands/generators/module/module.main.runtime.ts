import { MainRuntime } from '@teambit/cli'
import { GeneratorMain, GeneratorAspect, ComponentContext } from '@teambit/generator'
import { ModuleAspect } from './module.aspect'

interface TemplateProps {
  moduleName: string
  moduleNamePascal: string
  fileName: string
}

const indexContent = (names: TemplateProps) =>
  `export * from './${names.fileName}'
export { ${names.moduleName} as default } from './${names.fileName}'
`

const moduleContent = (names: TemplateProps) =>
  `import log from 'gravity-brands/modules/log'

export function ${names.moduleName}(): void {
  log('${names.moduleName} is executed')
}
`

const specContent = (names: TemplateProps) =>
  `import log from 'gravity-brands/modules/log'
jest.mock('gravity-brands/modules/log')

describe('${names.moduleName}', () => {
  beforeEach(() => {
    log.mockReset()
  })

  it('should log execution', () => {
    expect(log).toBeCalledWith('${names.moduleName} is executed')
  })
})
`

const docsContent = (names: TemplateProps) =>
  `---
labels: ['modules']
description: 'Renders given content in a block'
---

Basic example:
\`\`\`js
import ${names.moduleName} from 'gravity-brands/modules/${names.fileName}'

${names.moduleName}()
\`\`\`
`

export class ModuleMain {
  static slots = []
  static dependencies = [GeneratorAspect]
  static runtime = MainRuntime
  static async provider([generator]: [GeneratorMain]): Promise<ModuleMain> {
    generator.registerComponentTemplate([
      {
        name: 'generators/module',
        generateFiles: (context: ComponentContext) => {
          const moduleName = context.nameCamelCase
          const moduleNamePascal = context.namePascalCase
          const fileName = context.name

          return [
            {
              relativePath: 'index.ts',
              content: indexContent({ moduleName, moduleNamePascal, fileName }),
              isMain: true,
            },
            {
              relativePath: `${fileName}.tsx`,
              content: moduleContent({ moduleName, moduleNamePascal, fileName }),
            },
            {
              relativePath: `${fileName}.spec.tsx`,
              content: specContent({ moduleName, moduleNamePascal, fileName }),
            },
            {
              relativePath: `${fileName}.docs.mdx`,
              content: docsContent({ moduleName, moduleNamePascal, fileName }),
            },
          ]
        },
      },
    ])

    return new ModuleMain()
  }
}

ModuleAspect.addRuntime(ModuleMain)
