import data from './input'

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

let gamma = ''

const dataLength = data[0].split('').length

for(let i = 0; i < dataLength; i++) {
  let accu = 0
  for(let j = 0; j < data.length; j++) {
    if (data[j].charAt(i) === '1') accu++
  }
  if(accu > (data.length/2)) {
    gamma += '1'
  } else {
    gamma += '0'
  }
}


let epsilon = ''
gamma.split('').forEach(digit => {
  epsilon += digit === '1' ? '0' : '1'
})

const gammaInt = parseInt(gamma, 2)
const epsilonInt = parseInt(epsilon, 2)

// const epsilon = (~gammaInt) >>> 0

console.log('Gamma Bin: ', gamma, 'Gamma Int: ', gammaInt, 'Epsilon Int: ', epsilonInt, 'Gamma x Epsiolon: ', gammaInt * epsilonInt)