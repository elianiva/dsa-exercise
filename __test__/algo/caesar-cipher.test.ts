import { decrypt, encrypt } from "../../algo"

const RAW = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
const RAW_LOWER = "the quick brown fox jumps over the lazy dog"

describe("> Caesar Cipher", () => {
  describe("#uppercase", () => {
    test("should be able to encrypt string", () => {
      expect(encrypt(RAW, 3)).toBe(
        "WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ"
      )
    })

    test("should be able to encrypt with more than 13 shift", () => {
      expect(encrypt(RAW, 14)).toBe(
        "HVS EIWQY PFCKB TCL XIADG CJSF HVS ZONM RCU"
      )
    })

    test("should decrypt just fine", () => {
      expect(decrypt(encrypt(RAW, 14), 14)).toBe(RAW)
    })

    test("should decrypt with stupid amount of key", () => {
      expect(decrypt(encrypt(RAW, 10000), 10000)).toBe(RAW)
    })
  })

  describe("#lowercase", () => {
    test("should be able to encrypt string", () => {
      expect(encrypt(RAW_LOWER, 3)).toBe(
        "wkh txlfn eurzq ira mxpsv ryhu wkh odcb grj"
      )
    })

    test("should be able to encrypt with more than 13 shift", () => {
      expect(encrypt(RAW_LOWER, 14)).toBe(
        "hvs eiwqy pfckb tcl xiadg cjsf hvs zonm rcu"
      )
    })

    test("should decrypt just fine", () => {
      expect(decrypt(encrypt(RAW_LOWER, 14), 14)).toBe(RAW_LOWER)
    })

    test("should decrypt with stupid amount of key", () => {
      expect(decrypt(encrypt(RAW_LOWER, 10000), 10000)).toBe(RAW_LOWER)
    })
  })
})
