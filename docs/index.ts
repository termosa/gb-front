import React from 'react'
import { render } from 'react-dom'
import Gallery from './Gallery'
import collectDocs from './collect-docs'

console.log(collectDocs())

render(React.createElement(Gallery, { items: collectDocs() }), document.querySelector('#application'))
