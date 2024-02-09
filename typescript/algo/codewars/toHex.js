const assert = require("assert");

// this looks overly complicated, but oh well ツ
function rgb(r, g, b) {
  const round = x => x > 255 ? 255 : x < 0 ? 0 : x
  const toHex = x => x.toString(16).length < 2 ? "0" + x.toString(16) : x.toString(16)

  return (toHex(round(r)) + toHex(round(g)) + toHex(round(b))).toUpperCase()
}

assert.deepStrictEqual(rgb(0, 0, 0), "000000");
assert.deepStrictEqual(rgb(0, 0, -20), "000000");
assert.deepStrictEqual(rgb(300, 255, 255), "FFFFFF");
assert.deepStrictEqual(rgb(173, 255, 47), "ADFF2F");
