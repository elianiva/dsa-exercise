const assert = require("assert");

function moveZeros(arr) {
  return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0))
}

assert.deepStrictEqual(
  moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]),
  [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0, ],
  "Should equal"
);
