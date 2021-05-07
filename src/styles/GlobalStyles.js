// @vendors
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    padding: 10;
    color: gray;
    background-color: #282828;
    font-family: 'Montserrat', sans-serif;
  }
`
