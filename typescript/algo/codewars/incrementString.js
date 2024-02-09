// TODO(elianiva): finish this later

const assert = require("assert")

function incrementString(str) {
  const match = str.match(/\d+$/g)
  return match ? str.replace(/\d+$/g, parseInt(match) + 1) : `${str}1`
}

console.log(incrementString("foobar000"), "foobar001")

// assert.deepStrictEqual(incrementString("foobar000"), "foobar001");
// assert.deepStrictEqual(incrementString("foo"), "foo1");
// assert.deepStrictEqual(incrementString("foobar001"), "foobar002");
// assert.deepStrictEqual(incrementString("foobar99"), "foobar100");
// assert.deepStrictEqual(incrementString("foobar099"), "foobar100");
// assert.deepStrictEqual(incrementString(""), "1");
