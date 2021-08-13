import { MainRuntime } from '@teambit/cli'
import { GeneratorMain, GeneratorAspect, ComponentContext } from '@teambit/generator'
import { ComponentAspect } from './component.aspect'

interface TemplateProps {
  fileName: string
  componentName: string
}

const indexContent = (names: TemplateProps) =>
  `export * from './${names.fileName}'
export { ${names.componentName} as default } from './${names.fileName}'
`

const componentContent = (names: TemplateProps) =>
  `import React from 'react'
import cn, { Argument as ClassName } from 'classnames'

export type ${names.componentName}Props = {
  className?: ClassName
  children?: React.ReactNode
}

export function ${names.componentName}({
  className,
  children,
}: ${names.componentName}Props): React.ReactElement {
  return <div className={cn('${names.componentName}', className)}>{children}</div>
}
`

const compositionContent = (names: TemplateProps) =>
  `import React from 'react'
import { ${names.componentName} } from './${names.fileName}'
import PresentationCanvas from '../../helpers/presentation-canvas'

export const Basic${names.componentName} = (): React.ReactElement => (
  <PresentationCanvas>
    <${names.componentName}>${names.componentName} content</${names.componentName}>
  </PresentationCanvas>
)
`

const specContent = (names: TemplateProps) =>
  `import React from 'react'
import { render } from '@testing-library/react'
import { Basic${names.componentName} } from './${names.fileName}.composition'

describe('${names.componentName}', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<Basic${names.componentName} />)
    const rendered = getByText('${names.componentName} content')
    expect(rendered).toBeTruthy()
  })
})
`

const docsContent = (names: TemplateProps) =>
  `---
labels: ['ui', 'react']
description: 'Renders given content in a block'
---

import { ${names.componentName} } from './${names.fileName}'
import PresentationCanvas from '../../helpers/presentation-canvas'

Basic example:
\`\`\`js live
<PresentationCanvas>
  <${names.componentName} className="Component-Content">Content</${names.componentName}>
</PresentationCanvas>
\`\`\`
`

export class ComponentMain {
  static slots = []
  static dependencies = [GeneratorAspect]
  static runtime = MainRuntime
  static async provider([generator]: [GeneratorMain]): Promise<ComponentMain> {
    generator.registerComponentTemplate([
      {
        name: 'generators/component',
        generateFiles: (context: ComponentContext) => {
          const componentName = context.namePascalCase
          const fileName = context.name

          return [
            {
              relativePath: 'index.ts',
              content: indexContent({ componentName, fileName }),
              isMain: true,
            },
            {
              relativePath: `${fileName}.tsx`,
              content: componentContent({ componentName, fileName }),
            },
            {
              relativePath: `${fileName}.composition.tsx`,
              content: compositionContent({ componentName, fileName }),
            },
            {
              relativePath: `${fileName}.spec.tsx`,
              content: specContent({ componentName, fileName }),
            },
            {
              relativePath: `${fileName}.docs.mdx`,
              content: docsContent({ componentName, fileName }),
            },
          ]
        },
      },
    ])

    return new ComponentMain()
  }
}

ComponentAspect.addRuntime(ComponentMain)
