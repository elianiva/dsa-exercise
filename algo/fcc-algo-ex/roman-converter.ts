/**
 * Convert a non-negative integer to roman number notation
 * @param {number} num - Initial number
 * @return {string} roman number
 */
export const convertToRoman = (num: number): string => {
  // don't accept negative numbers
  if (num < 1) return ""

  // I like to make this variable scope local to this function
  // to other piece of code doesn't interact with it
  const roman: { [key: string]: string } = {
    "1": "I",
    "4": "IV",
    "5": "V",
    "9": "IX",
    "10": "X",
    "40": "XL",
    "50": "L",
    "90": "XC",
    "100": "C",
    "400": "CD",
    "500": "D",
    "900": "CM",
    "1000": "M",
  }

  let result = ""
  let diff = 0

  for (const [key, value] of Object.entries(roman)) {
    if (num === +key) return roman[key]

    if (num > +key) {
      result = value
      diff = +key
    }
  }

  return result + convertToRoman(num - diff)
}
