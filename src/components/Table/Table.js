// @vendors
import React from 'react'

// @config
import { headConfig } from './config'

// @components
import LineGraph from '../LineGraph'

// @styles
import { Table as TableStyle, TdStyled, TbodyStyled } from 'styles/Table'

export function Table({ data, setSelectedTicker }) {
  return (
    <TableStyle>
      <thead>
        {Object.entries(headConfig).map(([key, value]) => (
          <th key={key} style={{ ...value.style }}>
            {value.label}
          </th>
        ))}
      </thead>

      {data.map((money, index) => {
        const change1h = money.quotes?.USD?.percent_change_1h
        const change7d = money.quotes?.USD?.percent_change_7d
        const change24 = money.quotes?.USD?.volume_24h_change_24h

        return (
          <TbodyStyled
            key={index}
            onClick={() => {
              console.log(money)
              setSelectedTicker(money)
            }}
          >
            <td>{money.rank}</td>
            <td>{money.name}</td>
            <td>{money.quotes.USD.price.toFixed(2)}</td>
            <TdStyled positive={change1h >= 0}>
              {change1h >= 0 && '+'}
              {change1h.toFixed(2)}
              {' %'}
            </TdStyled>
            <td>{<LineGraph quotes={money.quotes} width="80%" />}</td>
            <TdStyled positive={change7d >= 0}>
              {change7d >= 0 && '+'}
              {change7d.toFixed(2)}
              {' %'}
            </TdStyled>
            <TdStyled positive={change24 >= 0}>
              {change24 >= 0 && '+'}
              {change24.toFixed(2)}
              {' %'}
            </TdStyled>
          </TbodyStyled>
        )
      })}
    </TableStyle>
  )
}
