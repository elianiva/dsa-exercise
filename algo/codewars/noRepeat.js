// TODO(elianiva): do this later
// letter
// ->   -> []
// -> l -> [l]
// -> e -> [l,e]
// -> t -> [l,e,t]
// -> t -> [l,e]
// -> e -> [l]
// -> r -> [l,r]

/**
 * @param {string} s - The string
 * @return {string} - a letter
 */
function firstNonRepeatingLetter(s) {
  const tmp = s

  s.split('').forEach(x => {
    if (tmp.has(x)) tmp.delete(x)
    else tmp.add(x)
  })

  console.log(tmp)

  return [...tmp][0]
}

console.log(firstNonRepeatingLetter("stress"))
console.log(firstNonRepeatingLetter("moonmen"))
console.log(firstNonRepeatingLetter("eee"))
