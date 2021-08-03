import { NextPageContext } from 'next'

type ErrorProps = {
  statusCode: number
  err: string
}

function Error({ err, statusCode }: ErrorProps) {
  return (
    <>
      <h1>{statusCode ? statusCode : "No status code"}</h1>
      <p>
        {err}
      </p>
    </>
  )
}

Error.getInitialProps = (ctx: NextPageContext) => {
  console.log(ctx.err)

  return {
    statusCode: ctx.res?.statusCode,
    err: ctx.err ? JSON.stringify(ctx.err) : ''
  }
}

export default Error
