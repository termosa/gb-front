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
  return {
    statusCode: ctx.res?.statusCode,
    err: ctx.err?.toString()
  }
}

export default Error
