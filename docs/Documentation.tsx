import React, { useState, useMemo, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { MDXProvider, mdx } from '@mdx-js/react'
import Highlight, { defaultProps as highlightProperties, Language } from 'prism-react-renderer'
import highlightTheme from 'prism-react-renderer/themes/vsLight'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import collectDocsModules from './collect-docs-modules'

export type Module = {
  name: string
  component: React.FC
}

export type MDXMeta = { name?: string; tags?: string[]; scope?: Record<string, React.FC> }

const MetaContext = React.createContext<MDXMeta | undefined>({})

const pushStateListeners: Array<React.Dispatch<React.SetStateAction<string>>> = []
const useHistoryPathname = (): [string, (pathname: string) => void] => {
  const [value, set] = useState(() => location.pathname)

  useEffect(() => {
    if (typeof window === 'undefined') return

    pushStateListeners.push(set)
    if (pushStateListeners.length > 1) return

    const handler = () => pushStateListeners.forEach((set) => set(location.pathname))

    window.addEventListener('popstate', handler)
    return () => (pushStateListeners.length === 0 ? window.removeEventListener('popstate', handler) : undefined)
  }, [])

  const setPathname = (newPathname: string) => {
    history.pushState({}, '', newPathname)
    set(newPathname)
  }

  return [value, setPathname]
}

const useModule = (modules: Array<Module>): [Module | undefined, (module: Module) => void] => {
  const [pathname, setPathname] = useHistoryPathname()

  const module = useMemo(() => {
    const selected = pathname.split('/')[1]
    return modules.find((m) => m.name === selected)
  }, [pathname])

  const setModule = (module: Module) => setPathname(`/${module.name}`)

  return [module, setModule]
}

const Page = styled.div`
  font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  height: 100%;
`

const Code = styled.pre`
  background: ghostwhite;
  padding: 10px;
`

const components = {
  wrapper: ({ children, meta }: { children: React.ReactNode; meta?: MDXMeta }) => (
    <MetaContext.Provider value={meta}>
      <div
        style={{
          flex: '1 0 auto',
          height: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {meta && (
          <header style={{ background: 'whitesmoke', padding: '.5em 2em 1em' }}>
            {meta.name && (
              <h1 style={{ margin: 0 }}>
                {meta.name} {meta.tags?.length ? <small style={{ color: 'gray' }}>{meta.tags[0]}</small> : null}
              </h1>
            )}
            {meta.tags?.reduce<Array<string | React.ReactNode>>(
              (elements, tag, index) =>
                elements.concat([
                  index ? ', ' : '',
                  <a key={tag} href={`#${tag}`}>
                    {tag}
                  </a>,
                ]),
              []
            )}
          </header>
        )}
        <div style={{ padding: '2em 1em', flex: '1 0 auto', overflow: 'auto' }}>{children}</div>
      </div>
    </MetaContext.Provider>
  ),
  code: ({
    live,
    render,
    className,
    children,
    style,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & { live?: boolean; render?: boolean; children: string }) => {
    const meta = useContext(MetaContext)
    const language = (className?.match(/language-([^\s]+)/)?.[1] as Language) || 'jsx'

    if (live) {
      return (
        <LiveProvider
          code={children.trim()}
          transformCode={(code) => '/** @jsx mdx */\n' + code}
          scope={{ ...(meta && meta.scope), mdx }}
          noInline={render}
          theme={highlightTheme}
        >
          <LiveEditor />
          <LivePreview />
          <LiveError />
        </LiveProvider>
      )
    }

    return (
      <Highlight {...highlightProperties} theme={highlightTheme} code={children.trim()} language={language}>
        {({ className, style: highlightStyle, tokens, getLineProps, getTokenProps }) => (
          <Code className={className} style={{ ...style, ...highlightStyle }} {...props}>
            {tokens.map((line, index) => (
              <div key={index} {...getLineProps({ line, key: index })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Code>
        )}
      </Highlight>
    )
  },
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <table style={{ width: '100%', borderCollapse: 'collapse', boxSizing: 'border-box' }} {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th style={{ border: '1px solid black', padding: '.2em .3em' }} {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td style={{ border: '1px solid black', padding: '.2em .3em' }} {...props} />
  ),
}

export default function Documentation({
  modules = collectDocsModules(),
}: {
  modules: Array<Module>
}): React.ReactElement {
  const [current, setCurrent] = useModule(modules)

  const sorted = useMemo(() => modules.sort((a, b) => (a.name < b.name ? -1 : 1)), [modules])
  return (
    <Page>
      <div
        style={{
          padding: '1em',
          borderRight: '1px solid lightgray',
          width: '250px',
          maxWidth: '250px',
          flex: '1 0 auto',
          height: '100%',
          overflow: 'auto',
          boxSizing: 'border-box',
        }}
      >
        <h2>List</h2>
        {sorted.map((item) => (
          <p
            key={item.name}
            title={item.name}
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              cursor: 'pointer',
              fontWeight: item.name === current?.name ? 'bold' : 'normal',
            }}
            onClick={() => setCurrent(item)}
          >
            {item.name}
          </p>
        ))}
      </div>

      {current ? (
        <MDXProvider components={components}>{React.createElement(current.component)}</MDXProvider>
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p style={{ fontSize: '2em', color: 'grey' }}>Click on any module to see its docs</p>
        </div>
      )}
    </Page>
  )
}
