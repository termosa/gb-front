import Error from 'next/error'

function ErrorPage({ statusCode, title }: { statusCode: number; title?: string }): React.ReactElement {
  return <Error statusCode={statusCode} title={title} />
}

ErrorPage.getInitialProps = ({
  res,
  err,
}: {
  res?: { statusCode: number }
  err?: { statusCode: number; message?: string; stack?: string }
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  const title = err?.message
  const message = err
    ? (err.message && `${err.message}${err.stack ? `\n${err.stack}` : ''}`) || err
    : 'Unknown problem this time'
  console.error({ status: statusCode, message })
  return { statusCode, title }
}

export default ErrorPage
