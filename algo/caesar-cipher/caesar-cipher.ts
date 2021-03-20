/**
 * True `modulo` in math, why Javascript doesn't have this
 *
 * @param {number} x - LHS number
 * @param {number} y - RHS number
 * @return number
 */
const mod = (x: number, y: number): number => x - y * Math.floor(x / y)

/**
 * Returns an encrypted string
 * @param {string[]} rawStr - String
 * @return (number|string)[]
 */
export const encrypt = (raw: string, shift: number): string => {
  return raw
    .split("")
    .map((char: string) => {
      const charCode = char.charCodeAt(0)
      const asciiShift = char === char.toUpperCase() ? 65 : 97
      return char === " "
        ? " "
        : String.fromCharCode(
            mod(charCode - asciiShift + shift, 26) + asciiShift
          )
    })
    .join("")
}

/**
 * Returns a decrypted string
 * @param {string[]} rawStr - String
 * @return (number|string)[]
 */
export const decrypt = (raw: string, shift: number): string => {
  return raw
    .split("")
    .map((char: string) => {
      const charCode = char.charCodeAt(0)
      const asciiShift = char === char.toUpperCase() ? 65 : 97
      return char === " "
        ? " "
        : String.fromCharCode(
            mod(charCode - asciiShift - shift, 26) + asciiShift
          )
    })
    .join("")
}
