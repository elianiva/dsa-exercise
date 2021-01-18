/**
 * Check if a sentence is palindrome or not. Will only check the alphanumeric
 * letters. Spaces and symbols will be removed.
 *
 * @param {string} str - String to check
 * @return {boolean}
 */
export const isPalindrome = (str: string): boolean => {
  const sanitise = (input: string) =>
    input.toLowerCase().replace(/[^a-z0-9]/g, "")
  return sanitise(str).split("").reverse().join("") === sanitise(str)
}
