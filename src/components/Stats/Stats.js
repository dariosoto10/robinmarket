// @vendors
import React, { useEffect } from 'react'

// @components
import Table from '../Table'
import Loader from '../Loader'

// @hooks
import useFetchTickers from 'hooks/useFetchTickers'

// @styles
import { StatsContainer } from 'styles/Container'

export function Stats({ setSelectedTicker, selectedTicker }) {
  const { loading, errors, data } = useFetchTickers()

  useEffect(() => {
    if (data.length && !selectedTicker) setSelectedTicker(data[0])
  }, [data, selectedTicker])

  if (loading || !data.length || errors) return <Loader />

  return (
    <StatsContainer>
      <Table data={data} setSelectedTicker={setSelectedTicker} />
    </StatsContainer>
  )
}
