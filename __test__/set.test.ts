import { CustomSet } from "../set/Set"

describe("> Set", () => {
  describe("#add", () => {
    test("Should be able to insert data if no item is present", () => {
      const set = new CustomSet<number>()
      set.add(100)

      expect(set.get(1)).toBe(100)
      expect(set.size).toBe(1)
    })

    test("Should not insert duplicate items", () => {
      const set = new CustomSet<number>()
      set.add(100)
      set.add(100)
      set.add(100)

      expect(set.get(1)).toBe(100)
      expect(set.get(3)).toBeUndefined()
      expect(set.size).toBe(1)
    })

    test("Should be able to insert multiple items", () => {
      const set = new CustomSet<number>()
      set.add(100)
      set.add(200)
      set.add(300)

      expect(set.get(1)).toBe(100)
      expect(set.get(2)).toBe(200)
      expect(set.get(3)).toBe(300)
      expect(set.size).toBe(3)
    })
  })

  describe("#get", () => {
    test("Returns undefined on empty set", () => {
      const set = new CustomSet<number>()

      expect(set.get(1)).toBeUndefined()
      expect(set.size).toBe(0)
    })

    test("Returns data correctly when there's a duplicate inserted", () => {
      const set = new CustomSet<number>()
      set.add(100)
      set.add(100)
      set.add(300)

      expect(set.get(1)).toBe(100)
      expect(set.get(2)).toBe(300)
      expect(set.size).toBe(2)
    })
  })

  describe("#all", () => {
    test("Returns empty array on an empty set", () => {
      const set = new CustomSet<number>()

      expect(set.all()).toStrictEqual([])
      expect(set.size).toBe(0)
    })

    test("Returns all items as an array", () => {
      const set = new CustomSet<number>()
      set.add(100)
      set.add(200)
      set.add(300)

      expect(set.all()).toStrictEqual([100, 200, 300])
      expect(set.size).toBe(3)
    })
  })
})
