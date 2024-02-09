// this requires the input to be strictly 3
function compareTriplets(a, b) {
  let _a = 0, _b = 0

  if (a[0] > b[0]) _a++ ;else _b++
  if (a[1] > b[1]) _a++ ;else _b++
  if (a[2] > b[2]) _a++ ;else _b++

  return [_a, _b]
}

/* another one, more flexible
function compareTriplets(a, b) {
  let _a = 0, _b = 0
  a.forEach((x, i) => x > b[i] ? _a++ : x < b[i] ? _b++ : 0)
  return [_a, _b]
}
*/

console.log(compareTriplets([1,2,3], [1,2,3]))
