// @vendors
import React, { useState } from 'react'

// @components
import { Stats, Sidebar } from 'components'

// @styles
import { MainContainer } from 'styles/Container'

export function Home() {
  const [selectedTicker, setSelectedTicker] = useState()

  return (
    <MainContainer>
      <Stats
        setSelectedTicker={setSelectedTicker}
        selectedTicker={selectedTicker}
      />
      <Sidebar ticker={selectedTicker} />
    </MainContainer>
  )
}
