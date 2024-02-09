function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return ""

  return strarr
    .reduce((acc, _, idx) => acc.concat(strarr.slice(idx, idx+k).join("")), [])
    .reduce((acc, curr) => curr.length > acc.length ? curr : acc, "")
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
