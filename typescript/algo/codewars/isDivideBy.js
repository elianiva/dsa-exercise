function isDivideBy(number, a, b) {
  return ((number % a) + (number % b)) === 0
}

console.log(isDivideBy(45, 5, 15))
