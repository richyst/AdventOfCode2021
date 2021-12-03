import bigSample from './input'

const smallSample : Array<string> = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010'
]

const evalData = (data : Array<string>, scenario : 'most' | 'least', index : number = 0) : string => {
  if(data.length === 1) {
    return data[0]
  }

  const bits0 = []
  const bits1 = []
  for(let j = 0; j < data.length; j++) {
    if (data[j].charAt(index) === '1') {
      bits1.push(data[j])
    } else {
      bits0.push(data[j])
    }
  }
  switch(scenario) {
    case 'most':
      return evalData(bits1.length >= bits0.length ? bits1 : bits0, scenario, index+1)
    case 'least':
      return evalData(bits1.length >= bits0.length ? bits0 : bits1, scenario, index+1)
  }
}

const oxygenRating = parseInt(evalData(bigSample, 'most'), 2)
const co2ScrubberRating = parseInt(evalData(bigSample, 'least'), 2)

console.log('Oxygen Rating: ', oxygenRating, 'CO2 Scrubber Rating: ', co2ScrubberRating, 'O x C02: ', oxygenRating * co2ScrubberRating)


