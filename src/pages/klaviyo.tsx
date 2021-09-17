import React, { useState } from 'react'
import useDefer from 'use-defer'
import homePageProps from '../resolvers/homePageProps'
import MainPageLayout from '../lib/main-page-layout'
import loadScript from '../lib/load-script'
import styled from 'styled-components'

export const KLAVIYO_API_KEY = 'HsK4TE'
export const KLAVIYO_ACCOUNT = 'bhN59v'
export const KLAVIYO_SHOP = 'fragrantjewels.myshopify.com'

const Content = styled.div`
  margin: 80px auto;
  max-width: 600px;
  text-align: center;
  font-size: 22px;
`

const Label = styled.label`
  margin-bottom: 0.5em;
  display: block;
`

const klaviyoScriptUrl = `//static.klaviyo.com/onsite/js/klaviyo.js?company_id=${KLAVIYO_API_KEY}&shop=${KLAVIYO_SHOP}`

const Event = ({ defaultValue = '' }: { defaultValue?: string }) => {
  const [state, setState] = useState({
    error: false,
    sent: false,
    value: defaultValue,
  })

  const handleSubmit = () => {
    try {
      if (!window._learnq) throw new Error('_learnq() is missing')
      const value = JSON.parse(state.value)
      console.log(`_learnq(${JSON.stringify(value)})`)
      window._learnq.push(value)
      setState((s) => ({ ...s, sent: true }))
    } catch (error) {
      console.error(error)
      setState((s) => ({ ...s, error: true }))
    }
  }

  return (
    <Label>
      <input
        value={state.value}
        placeholder="Command"
        style={{ fontFamily: 'monospace', fontSize: 16, lineHeight: '26px', verticalAlign: 'bottom', width: 500 }}
        onChange={(e) => setState((s) => ({ ...s, error: false, sent: false, value: e.target.value }))}
      />
      <input type="button" value={state.sent ? '✓ Sent' : 'Send'} onClick={handleSubmit} />
    </Label>
  )
}

export default function KlaviyoPage(): React.ReactElement {
  const klaviyoRequest = useDefer(() => loadScript(klaviyoScriptUrl), [], [])
  return (
    <MainPageLayout>
      <Content>
        <p>
          Klaviyo script loading status: <strong>{klaviyoRequest.status}</strong>
          <br />
          <code style={{ fontSize: 16 }}>{klaviyoScriptUrl}</code>
        </p>
        <Event defaultValue={`["account", "${KLAVIYO_ACCOUNT}"]`} />
        <Event defaultValue={`["identify", { "$email": "g.akimovs@gmail.com" }]`} />
        <Event
          defaultValue={`["track", "Viewed Product", { "Name": "Life in Full Bloom - Body Scrub", "ProductID": 4747231461454 }]`}
        />
        <Event
          defaultValue={`["trackViewedItem", { "Title": "Life in Full Bloom - Body Scrub", "ItemId": 4747231461454 }]`}
        />
      </Content>
    </MainPageLayout>
  )
}

export const getServerSideProps = homePageProps()
