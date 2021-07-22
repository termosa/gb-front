import React, { useState, useLayoutEffect } from 'react'
import loadScript from '@fragrantjewels/gravity-brands.modules.load-script'

export type Yotpo = {
  refreshWidgets: () => void
}

export type YotpoCommentsProps = {
  id: number
  title: string
  imageUrl: string
  productUrl?: string
  description?: string
}

let loadingPromise: null | Promise<Yotpo> = null

const loadYotpo = () => {
  if (!loadingPromise) {
    loadingPromise = loadScript('//staticw2.yotpo.com/LDoDRHPmIWai6MD5o41BGukBakwwgtNMncolHubV/widget.js').then(
      () => ((window as unknown) as { yotpo: Yotpo }).yotpo
    )
  }
  return loadingPromise
}

export function YotpoComments({
  id,
  title,
  imageUrl,
  productUrl,
  description,
}: YotpoCommentsProps): React.ReactElement {
  const [visible, setVisibility] = useState(false)

  useLayoutEffect(() => {
    let countdown = 1000
    loadYotpo().then((yotpo) => {
      const interval = setInterval(() => {
        const reviews = document.querySelector('.yotpo-main-widget .reviews-qa-label')
        if (reviews || --countdown < 1) clearInterval(interval)
        if (reviews) {
          setVisibility(true)
          yotpo.refreshWidgets()
        }
      }, 100)
    })
  }, [id, title, description, imageUrl, productUrl])

  return (
    <div
      className="yotpo yotpo-main-widget"
      style={{ display: visible ? '' : 'none' }}
      data-product-id={id}
      data-name={title}
      data-url={productUrl}
      data-image-url={imageUrl}
      data-description={description}
    />
  )
}

export default YotpoComments
