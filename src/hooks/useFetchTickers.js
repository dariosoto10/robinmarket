// @vendors
import { useEffect, useState } from 'react'

// @config
import { CONFIG } from 'config'

// @state
const initialState = {
  errors: '',
  data: [],
  loading: false,
}

export default function useFetchPairs() {
  const [tickerState, setTickerState] = useState(initialState)

  useEffect(() => {
    setTickerState({
      ...initialState,
      loading: true,
    })
    const apiCall = async () => {
      await fetch(CONFIG.URL + '/tickers')
        .then((res) => res.json())
        .then((data) => {
          const dataSorted = data
            .sort((a, b) => (a.rank > b.rank ? 1 : -1))
            .slice(0, 15)
          setTickerState({
            ...initialState,
            loading: false,
            data: dataSorted,
          })
        })
        .catch((_) => {
          setTickerState({
            ...initialState,
            loading: false,
            errors: 'Something went wrong',
          })
        })
    }

    apiCall()
  }, [])

  return {
    ...tickerState,
  }
}
