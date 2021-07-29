import React from 'react'
import { Builder, BuilderComponent, BuilderContent } from '@builder.io/react'
import { useRouter } from 'next/router'

const BuilderIoPage = ({ content, modelName }: { content: BuilderContent; modelName: string }): React.ReactElement => {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
  const isLive = !Builder.isEditing && !Builder.isPreviewing
  if (!content && isLive) {
    return (
      <>
        <h2>ERROR 404</h2>
      </>
    )
  }

  return <BuilderComponent model="home" entry="e07aaf1fc28d49189cf94860a51229d6" content={content} />
}

export default BuilderIoPage
