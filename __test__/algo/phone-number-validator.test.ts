import { validate } from "../../algo/fcc-algo-ex/phone-number-validator"

describe("> Phone number validator", () => {
  test("555-555-5555", () => expect(validate("555-555-5555")).toBe(true))
  test("1 555-555-5555", () => expect(validate("5555555555")).toBe(true))
  test("1 (555) 555-5555", () => expect(validate("1 (555) 555-5555")).toBe(true))
  test("5555555555", () => expect(validate("5555555555")).toBe(true))
  test("555-555-5555", () => expect(validate("555-555-5555")).toBe(true))
  test("(555)555-5555", () => expect(validate("(555)555-5555")).toBe(true))
  test("555-5555", () => expect(validate("555-5555")).toBe(false))
  test("5555555", () => expect(validate("5555555")).toBe(false))
  test("1 555)555-5555", () => expect(validate("1 555)555-5555")).toBe(false))
  test("1 555 555 5555", () => expect(validate("1 555 555 5555")).toBe(true))
  test("1 456 789 4444", () => expect(validate("1 456 789 4444")).toBe(true))
  test("123**&!!asdf", () => expect(validate("123**&!!asdf")).toBe(false))
  test("6054756961", () => expect(validate("(6054756961)")).toBe(false))
  test("2 (757) 622-7382", () => expect(validate("2 (757) 622-7382")).toBe(false))
  test("0 (757) 622-7382", () => expect(validate("0 (757) 622-7382")).toBe(false))
  test("-1 (757) 622-7382", () => expect(validate("-1 (757) 622-7382")).toBe(false))
  test("2 757 622-7382", () => expect(validate("2 757 622-7382")).toBe(false))
  test("10 (757) 622-7382", () => expect(validate("10 (757) 622-7382")).toBe(false))
  test("27576227382", () => expect(validate("27576227382")).toBe(false))
  test("(275)76227382", () => expect(validate("(275)76227382")).toBe(false))
  test("2(757)6227382", () => expect(validate("2(757)6227382")).toBe(false))
  test("2(757)622-7382", () => expect(validate("2(757)622-7382")).toBe(false))
  test("555)-555-5555", () => expect(validate("555)-555-5555")).toBe(false))
  test("(555-555-5555", () => expect(validate("(555-555-5555")).toBe(false))
  test("(555)5(55?)-5555", () => expect(validate("(555)5(55?)-5555")).toBe(false))
})