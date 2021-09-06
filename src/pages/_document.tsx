import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import sprite from 'svg-sprite-loader/runtime/sprite.build'
import { ServerStyleSheet } from 'styled-components'
import React from 'react'

interface CustomDocumentProps {
  spriteContent: string
}

export default class CustomDocument extends Document<CustomDocumentProps> {
  public static async getInitialProps(ctx: DocumentContext): Promise<CustomDocumentProps & DocumentInitialProps> {
    const spriteContent = sprite.stringify()
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        spriteContent,
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  public render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <div dangerouslySetInnerHTML={{ __html: this.props.spriteContent }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
