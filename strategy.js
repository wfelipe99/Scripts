const Combinatorics = require('js-combinatorics')
const fs = require('fs')

const trackLaps = 61
const pitTime = 17
const pits = 6

const tyres = ['SS', 'S', 'M']
const lapsWithGoodTyresSS = 8
const lapsWithGoodTyresS = 15
const lapsWithGoodTyresM = 17
const lapsWithGoodTyresH = 15
const lapTimeSS = 101.246
const lapTimeS = 101.948
const lapTimeM = 102.923
const lapTimeH = 92.930

const possibilities = Combinatorics.baseN(tyres, pits + 1)

for (let possibility = 0; possibility < possibilities.length; possibility++) {
  const occurrenceSS = getOccurrence(possibilities.toArray()[possibility], 'SS')
  const occurrenceS = getOccurrence(possibilities.toArray()[possibility], 'S')
  const occurrenceM = getOccurrence(possibilities.toArray()[possibility], 'M')
  const occurrenceH = getOccurrence(possibilities.toArray()[possibility], 'H')

  const totalLap = (lapsWithGoodTyresSS * occurrenceSS) + (lapsWithGoodTyresS * occurrenceS) + (lapsWithGoodTyresM * occurrenceM) + (lapsWithGoodTyresH * occurrenceH)

  if ((totalLap < trackLaps)) {
    continue
  } else {
    const totalTime = ((lapTimeSS * lapsWithGoodTyresSS) * occurrenceSS) + ((lapTimeS * lapsWithGoodTyresS) * occurrenceS) + ((lapTimeM * lapsWithGoodTyresM) * occurrenceM) + ((lapTimeH * lapsWithGoodTyresH) * occurrenceH) + (pitTime * pits)
    const data = `${possibilities.toArray()[possibility]}, ${totalTime}, ${totalLap}`

    fs.writeFile('./strategies/strategy.csv', data + '\n', { flag: 'a' }, (error) => {
      if (error) throw error
    })
  }
}

function getOccurrence (array, value) {
  return array.filter((v) => (v === value)).length
}
