import React from 'react'

export type JFWildProps = {
  title: string
  subTitle: string
}

export const FjWild = ({ title, subTitle }: JFWildProps): React.ReactElement => {
  return (
    <div className="app-h-section app-h-products-section">
      <div className="app-h-container">
        <h2 className="app-h-section__title">
          <span>
            <span className="app-h-section__title_part">{title}</span>
          </span>
        </h2>
        <div className="app-h-section__text">
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  )
}
