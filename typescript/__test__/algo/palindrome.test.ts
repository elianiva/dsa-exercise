import { isPalindrome } from "../../algo"

describe("> Palindrome Checker", () => {
  test("eye", () => expect(isPalindrome("eye")).toBe(true))
  test("nope", () => expect(isPalindrome("nope")).toBe(false))
  test("almostomla", () => expect(isPalindrome("almostomla")).toBe(false))
  test("_eye", () => expect(isPalindrome("_eye")).toBe(true))
  test("race car", () => expect(isPalindrome("race car")).toBe(true))

  test("not a palindrome", () =>
    expect(isPalindrome("not a palindrome")).toBe(false))

  test("A man, a plan, a canal. Panama", () =>
    expect(isPalindrome("A man, a plan, a canal. Panama")).toBe(true))

  test("never odd or even", () =>
    expect(isPalindrome("never odd or even")).toBe(true))

  test("My age is 0, 0 si ega ym.", () =>
    expect(isPalindrome("My age is 0, 0 si ega ym.")).toBe(true))

  test("1 eye for of 1 eye.", () =>
    expect(isPalindrome("1 eye for of 1 eye.")).toBe(false))

  test("0_0 (: /- :) 0-0", () =>
    expect(isPalindrome("0_0 (: /- :) 0-0")).toBe(true))

  test("five|_/|four", () => expect(isPalindrome("five|_/|four")).toBe(false))
})
