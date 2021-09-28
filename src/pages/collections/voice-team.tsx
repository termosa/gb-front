import React from 'react'
import RemotePage from '../../lib/remote-page'
import createLink from '../../lib/create-link'

export default function VoiceTeamCollectionPage(): null | React.ReactElement {
  return <RemotePage url={createLink.forCollection('voice-team')} />
}
