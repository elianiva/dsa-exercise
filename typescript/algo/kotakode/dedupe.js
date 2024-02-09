const assert = require("assert")

// the `kinda traditional` way
// function hilangkanDuplikat(inputList) {
//   let result = []
//   let seen = []

//   for (const val of inputList) {
//     if (!seen.includes(val)) {
//       seen.push(val)
//       result.push(val)
//     } else {
//       result.push(0)
//     }
//   }

//   return result
// }

// the `modern` way
function hilangkanDuplikat(inputList) {
  return inputList.reduce(
    (acc, curr) => (acc.includes(curr) ? [...acc, 0] : [...acc, curr]), []
  );
}

assert.deepStrictEqual((hilangkanDuplikat([1, 1, 2, 2, 3, 4, 5])), [1, 0, 2, 0, 3, 4, 5])
assert.deepStrictEqual((hilangkanDuplikat([1, 1, 1, 1, 1, 1, 1])), [1, 0, 0, 0, 0, 0, 0])
assert.deepStrictEqual((hilangkanDuplikat([1, 2, 3, 4, 5, 6, 7])), [1, 2, 3, 4, 5, 6, 7])
assert.deepStrictEqual((hilangkanDuplikat([1, 2, 3, 4, 4, 5, 5])), [1, 2, 3, 4, 0, 5, 0])
assert.deepStrictEqual((hilangkanDuplikat([0, 0, 2, 2, 0, 1, 5])), [0, 0, 2, 0, 0, 1, 5])
