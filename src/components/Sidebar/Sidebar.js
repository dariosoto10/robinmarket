// @vendors
import React from 'react'

// @components
import LineGraph from '../LineGraph'

// @styles
import { SidebarContainer } from 'styles/Container'

export function Sidebar({ ticker }) {
  if (!ticker) return null

  return (
    <SidebarContainer>
      <p>Name: {ticker.name}</p>
      <p>Symbol: {ticker.symbol}</p>
      <p>Price: {ticker.quotes.USD.price.toFixed(2)}</p>
      <LineGraph quotes={ticker.quotes} height={150} extended />
    </SidebarContainer>
  )
}
