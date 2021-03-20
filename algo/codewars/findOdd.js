function findOdd(numbers) {
  const result = new Map()

  numbers.forEach(num => {
    result.has(num)
      ? result.set(num, result.get(num) + 1)
      : result.set(num, 1)
  })

  for ([key, val] of result) {
    if (val % 2 != 0) return key
  }
}

// this is the *best* solution, though I don't understand how XOR works
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5))
