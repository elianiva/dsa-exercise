function sumPairs(ints, s) {
  const seen = {};

  for (const x of ints) {
    if (seen.hasOwnProperty(s - x)) return [s - x, x];
    seen[x] = x;
  }

  return undefined;
}

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2));
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6));
