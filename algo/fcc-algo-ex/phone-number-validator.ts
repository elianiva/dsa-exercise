// valid patterns
//
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

/**
 * Validate string matching a valid phone number pattern
 *
 * @param {string} raw - Raw phone number to test
 * @return {boolean} true if valid, false if invalid
 */
export const validate = (raw: string): boolean => {
  // use multiple regexes because I don't like long regex that ended up to be
  // a write only regex (very hard to read)
  const patterns = [
    /^1?\s?(\d{3})-(\d{3})-(\d{4})$/,
    /^1?\s?\((\d{3})\)(\d{3})-(\d{4})$/,
    /^1?\s?\((\d{3})\)\s(\d{3})-(\d{4})$/,
    /^1?\s?(\d{3})\s(\d{3})\s(\d{4})$/,
    /^1?\s?(\d{10})$/,
  ]

  // check if the raw string matches *one of* the given pattern
  return patterns.some(regex => regex.test(raw))
}
