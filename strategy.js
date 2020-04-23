const Combinatorics = require('js-combinatorics')
const fs = require('fs')

const track = 'Austrália'
const trackLaps = 57
const pitTime = 22
const pits = 3

const tyres = ['SS', 'S', 'M', 'H']
const lapsWithGoodTyresSS = 5
const lapsWithGoodTyresS = 12
const lapsWithGoodTyresM = 14
const lapsWithGoodTyresH = 14
const lapTimeSS = 105
const lapTimeS = 106
const lapTimeM = 107
const lapTimeH = 109

const possibilities = Combinatorics.baseN(tyres, pits + 1)

for (let possibility = 0; possibility < possibilities.length; possibility++) {
  console.log(possibilities.toArray()[possibility])
  const occurrenceSS = getOccurrence(possibilities.toArray()[possibility], 'SS')
  const occurrenceS = getOccurrence(possibilities.toArray()[possibility], 'S')
  const occurrenceM = getOccurrence(possibilities.toArray()[possibility], 'M')
  const occurrenceH = getOccurrence(possibilities.toArray()[possibility], 'H')

  const totalLap = (lapsWithGoodTyresSS * occurrenceSS) + (lapsWithGoodTyresS * occurrenceS) + (lapsWithGoodTyresM * occurrenceM) + (lapsWithGoodTyresH * occurrenceH)

  if ((totalLap < trackLaps) || (totalLap > trackLaps + 2)) {
    continue
  } else {
    const totalTime = ((lapTimeSS * lapsWithGoodTyresSS) * occurrenceSS) + ((lapTimeS * lapsWithGoodTyresS) * occurrenceS) + ((lapTimeM * lapsWithGoodTyresM) * occurrenceM) + ((lapTimeH * lapsWithGoodTyresH) * occurrenceH) + (pitTime * pits)
    const data = `${track}, ${possibilities.toArray()[possibility]}, ${totalTime}, ${totalLap}`

    fs.writeFile('/home/felipe/scripts/igp/src/strategies/strategy.csv', data + '\n', { flag: 'a' }, (error) => {
      if (error) throw error
    })
  }
}

function getOccurrence (array, value) {
  return array.filter((v) => (v === value)).length
}
