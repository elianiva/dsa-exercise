function twoSum(numbers, target) {
  const tmp = new Map();

  for (const [idx, num] of numbers.entries()) {
    if (tmp.has(target - num)) return [tmp.get(target - num), idx];
    tmp.set(num, idx);
  }
}

console.log(twoSum([1, 2, 3], 4));
