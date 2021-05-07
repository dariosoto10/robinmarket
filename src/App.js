// @vendors
import React from 'react'

// @components
import { Header } from './components'

// @pages
import Home from 'pages/Home'

// @styles
import { GlobalStyle } from './styles/GlobalStyles'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  )
}
