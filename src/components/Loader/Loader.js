// @vendors
import React from 'react'

// @styles
import { SpinnerContainer } from 'styles/Container'

export function Loader() {
  return (
    <SpinnerContainer>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </SpinnerContainer>
  )
}
