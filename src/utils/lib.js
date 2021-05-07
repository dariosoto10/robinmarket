function filterPairsUsd(pairs) {
  return pairs.filter((pair) => {
    if (pair.quote_currency === 'USD') {
      return pair
    }
  })
}

function sortPairsBaseCurrency(pairs) {
  return pairs.sort((a, b) => {
    if (a.base_currency < b.base_currency) {
      return -1
    }
    if (a.base_currency > b.base_currency) {
      return 1
    }
    return 0
  })
}

function fixPairs(pairs) {
  return filterPairsUsd(sortPairsBaseCurrency(pairs))
}

function buildHeadObject(width, label) {
  return {
    style: { width },
    label,
  }
}

function buildObjectByPercentChange(quote) {
  let objectArr = []

  objectArr.push({
    date: 1,
    value: quote['percent_change_15m'],
  })

  objectArr.push({
    date: 2,
    value: quote['percent_change_30m'],
  })

  objectArr.push({
    date: 3,
    value: quote['percent_change_1h'],
  })

  objectArr.push({
    date: 4,
    value: quote['percent_change_6h'],
  })

  objectArr.push({
    date: 5,
    value: quote['percent_change_12h'],
  })

  objectArr.push({
    date: 6,
    value: quote['percent_change_24h'],
  })

  return objectArr
}

export { fixPairs, buildHeadObject, buildObjectByPercentChange }
