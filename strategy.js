const Combinatorics = require('js-combinatorics')
const fs = require('fs')

const trackLaps = 57
const pitTime = 13
const pits = 7

const tyres = ['SS', 'S']
const lapsWithGoodTyresSS = 8
const lapsWithGoodTyresS = 12
const lapsWithGoodTyresM = 14
const lapsWithGoodTyresH = 15
const lapTimeSS = 99
const lapTimeS = 100
const lapTimeM = 101
const lapTimeH = 92

const possibilities = Combinatorics.baseN(tyres, pits + 1)

for (let possibility = 0; possibility < possibilities.length; possibility++) {
  const occurrenceSS = getOccurrence(possibilities.toArray()[possibility], 'SS')
  const occurrenceS = getOccurrence(possibilities.toArray()[possibility], 'S')
  const occurrenceM = getOccurrence(possibilities.toArray()[possibility], 'M')
  const occurrenceH = getOccurrence(possibilities.toArray()[possibility], 'H')

  const totalLap = (lapsWithGoodTyresSS * occurrenceSS) + (lapsWithGoodTyresS * occurrenceS) + (lapsWithGoodTyresM * occurrenceM) + (lapsWithGoodTyresH * occurrenceH)

  if ((totalLap < trackLaps - 3) || (totalLap > trackLaps + 3)) {
    continue
  } else {
    let totalTime = ((lapTimeSS * lapsWithGoodTyresSS) * occurrenceSS) + ((lapTimeS * lapsWithGoodTyresS) * occurrenceS) + ((lapTimeM * lapsWithGoodTyresM) * occurrenceM) + ((lapTimeH * lapsWithGoodTyresH) * occurrenceH) + (pitTime * pits)
    totalTime = totalTime.toFixed(3)
    const data = `${possibilities.toArray()[possibility]}, ${totalTime}, ${totalLap}`

    fs.writeFile('./strategies/strategy.csv', data + '\n', { flag: 'a' }, (error) => {
      if (error) throw error
    })
  }
}

function getOccurrence (array, value) {
  return array.filter((v) => (v === value)).length
}
