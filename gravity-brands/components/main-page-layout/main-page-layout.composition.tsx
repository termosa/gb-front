import React from 'react'
import { MainPageLayout } from './main-page-layout'

export const BasicMainPageLayout = (): React.ReactElement => (
  <MainPageLayout userName="Kelya">
    <div
      style={{
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#e79ea6',
        color: '#fff',
        fontSize: 20,
      }}
    >
      Content
    </div>
  </MainPageLayout>
)
