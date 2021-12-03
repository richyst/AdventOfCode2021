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
let depth = 0
let aim = 0

data.forEach(movement => {
  const [direction, amountStr] = movement.split(' ')
  const amount = parseInt(amountStr)

  switch(direction){
    case 'forward':
      horizontal += amount
      depth += amount * aim
      break
    case 'down':
      aim += amount

      break
    case 'up':
      aim -= amount
      break
  }
})

console.log(`Depth = ${depth} x Horizontal= ${horizontal} = ${horizontal * depth}` )