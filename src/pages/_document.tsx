import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import sprite from 'svg-sprite-loader/runtime/sprite.build'
import React from 'react'

interface CustomDocumentProps {
  spriteContent: string
}

export default class CustomDocument extends Document<CustomDocumentProps> {
  public static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<CustomDocumentProps & DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    const spriteContent = sprite.stringify()

    return {
      spriteContent,
      ...initialProps,
    }
  }

  public render(): JSX.Element {
    return (
      <Html>
        <Head>
          <script type="text/javascript" src="/static/jquery-2.2.4.min.js" />
          <script
            type="text/javascript"
            src="https://s3.amazonaws.com/pages.fragrantjewels.com/lps/static-assets/js/slick.min.js"
          />
          <script type="text/javascript" src="/static/header.js" />
          <script type="text/javascript" src="/static/home.js" />
          <script type="text/javascript" src="/static/footer.js" />
          <link rel="stylesheet" href="/src/common/css/styles.css" />
          <link rel="stylesheet" href="/src/common/css/normalize.css" />
          <link rel="stylesheet" href="/src/pages/Home/styles/home.scss" />
        </Head>
        <body>
          <div dangerouslySetInnerHTML={{ __html: this.props.spriteContent }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
