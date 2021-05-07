// @vendors
import React, { useCallback } from 'react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  CartesianGrid,
} from 'recharts'

// @utils
import { buildObjectByPercentChange } from 'utils/lib'
import { COLORS } from 'utils/constants'

//@styles
import {
  LineGraphContainer,
  LineGraph as LineGraphStyled,
} from 'styles/Container'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}`}</p>
      </div>
    )
  }

  return null
}

export function LineGraph({ quotes, height, extended, width }) {
  const quoteFixed = buildObjectByPercentChange(quotes.USD)

  const gradientOffset = useCallback(() => {
    const dataMax = Math.max(...quoteFixed.map((i) => i.value))
    const dataMin = Math.min(...quoteFixed.map((i) => i.value))

    if (dataMax <= 0) {
      return 0
    } else if (dataMin >= 0) {
      return 1
    } else {
      return dataMax / (dataMax - dataMin)
    }
  }, [quotes])

  return (
    <LineGraphContainer>
      <LineGraphStyled width={width}>
        <ResponsiveContainer width="100%" height={height || 35}>
          <AreaChart data={quoteFixed}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset={gradientOffset}
                  stopColor={COLORS.red}
                  stopOpacity={0.05}
                />
                <stop
                  offset={gradientOffset}
                  stopColor={COLORS.green}
                  stopOpacity={0.08}
                />
                <stop offset="100%" stopColor={COLORS.red} stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <Area
              dataKey="value"
              stroke="url(#color)"
              fill="url(#color)"
              strokeWidth={2}
              dot={false}
              activeDot={false}
            />
            {extended && <CartesianGrid opacity={0.1} vertical={false} />}
            {extended && <Tooltip content={CustomTooltip} />}
          </AreaChart>
        </ResponsiveContainer>
      </LineGraphStyled>
    </LineGraphContainer>
  )
}
