// @vendors
import React from 'react'

// @styles
import { Header as HeaderStyle, Logo as LogoStyle } from 'styles/Header'

// @assets
import Logo from 'robinmarket.svg'

export function Header() {
  return (
    <HeaderStyle>
      <LogoStyle>
        <span>Market</span>
        <img src={Logo} alt="Robin Market" width={25} />
      </LogoStyle>
    </HeaderStyle>
  )
}
