import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import sprite from 'svg-sprite-loader/runtime/sprite.build'
import { ServerStyleSheet } from 'styled-components'
import React from 'react'
import basePath from 'config/base-path'

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
          <script type="text/javascript" src={`${basePath}/static/jquery-2.2.4.min.js`} />
          <script type="text/javascript" src={`${basePath}/static/slick.min.js`} />
          <script type="text/javascript" async src={`${basePath}/static/header.js`} />
          <script type="text/javascript" async src={`${basePath}/static/home.js`} />
          <script type="text/javascript" async src={`${basePath}/static/footer.js`} />
          <script type="text/javascript" async src={`${basePath}/static/product.js`} />
        </body>
      </Html>
    )
  }
}
