import data from './input'

const smallSample : Array<string> = [
  'forward 5',
  'down 5',
  'forward 8',
  'up 3',
  'down 8',
  'forward 2'
]

let horizontal = 0
let vertical = 0

data.forEach(movement => {
  const [direction, amountStr] = movement.split(' ')
  const amount = parseInt(amountStr)

  switch(direction){
    case 'forward':
      horizontal += amount
      break
    case 'down':
      vertical += amount
      break
    case 'up':
      vertical -= amount
      break
  }
})

console.log(`Vertical = ${vertical} x Horizontal= ${horizontal} = ${horizontal * vertical}` )