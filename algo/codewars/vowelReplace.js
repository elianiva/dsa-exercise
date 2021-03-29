function vowelOne(s) {
  return s.replace(/[^aiueo]/gi, 0).replace(/[aiueo]/gi, 1)
}

console.log(vowelOne("vowelOne"))
console.log(vowelOne("abceios"))
console.log(vowelOne("aeiou, abc"))
console.log(vowelOne("123, arou"))
