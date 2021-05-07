// @utils
import { buildHeadObject } from 'utils/lib'

const headConfig = {
  rank: buildHeadObject('1%', '#'),
  name: buildHeadObject('10%', 'Name'),
  price: buildHeadObject('5%', 'Price'),
  hour: buildHeadObject('5%', '1h'),
  day: buildHeadObject('10%', '24h'),
  week: buildHeadObject('10%', '7d'),
  volume: buildHeadObject('10%', 'Volume (24h)'),
}

export { headConfig }
