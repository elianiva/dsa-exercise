const assert = require("assert");

// // first attempt
// function howMuchILoveYou(nbPetals) {
//   const choices = [
//     "I love you",
//     "a little",
//     "a lot",
//     "passionately",
//     "madly",
//     "not at all",
//   ];

//   const len = choices.length
//   const getIndex = x => x > len ? getIndex(x - len) : x - 1

//   return choices[getIndex(nbPetals)]
// }

// realising how I could've just use `%` operator
function howMuchILoveYou(nbPetals) {
  const choices = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];

  return choices[(nbPetals - 1) % choices.length]
}


assert.deepStrictEqual(howMuchILoveYou(7), "I love you");
assert.deepStrictEqual(howMuchILoveYou(3), "a lot");
assert.deepStrictEqual(howMuchILoveYou(6), "not at all");
