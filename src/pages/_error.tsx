import { NextPageContext } from 'next'

type ErrorProps = {
  ctx: NextPageContext
}

function Error({ ctx }: ErrorProps) {
  if (!ctx) {
    return <h2>No context</h2>
  }

  return (
    <>
      <h1>{ctx.res?.statusCode}</h1>
      <p>
        {ctx.err}
      </p>
    </>
  )
}

Error.getInitialProps = (ctx: NextPageContext) => {
  return ctx
}

export default Error
