import { NextPageContext } from 'next'

type ErrorProps = {
  ctx: NextPageContext
}

function Error({ ctx }: ErrorProps) {
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
  if (ctx.err) {
    console.log(ctx.err)
  }
  return ctx
}

export default Error
