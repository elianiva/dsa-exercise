import { LifoStack, FifoStack } from "../stack"

describe("> LifoStack", () => {
  describe("#add", () => {
    test("should be able to add some item if no item is present", () => {
      const stack = new LifoStack<number>()
      stack.add(1)
      stack.add(2)
      stack.add(3)

      expect(stack.size).toBe(3)
    })
  })

  describe("#pop", () => {
    test("returns null if no item is present in the stack", () => {
      const stack = new LifoStack<number>()

      expect(stack.pop()).toBe(null)
      expect(stack.size).toBe(0)
    })

    test("should be able to get the last item and remove it", () => {
      const stack = new LifoStack<number>()
      stack.add(1)
      stack.add(2)
      stack.add(3)

      expect(stack.pop()).toBe(3)
      expect(stack.size).toBe(2)
    })
  })

  describe("#peek", () => {
    test("returns null if no item is present in the stack", () => {
      const stack = new LifoStack<number>()

      expect(stack.peek()).toBe(null)
      expect(stack.size).toBe(0)
    })

    test("should be able to get the last item without removing it", () => {
      const stack = new LifoStack<number>()
      stack.add(1)
      stack.add(2)
      stack.add(3)

      expect(stack.peek()).toBe(3)
      expect(stack.size).toBe(3)
    })
  })

  describe("#all", () => {
    test("returns null if no item is present in the stack", () => {
      const stack = new LifoStack<number>()

      expect(stack.all()).toBe(null)
      expect(stack.size).toBe(0)
    })

    test("should be able to retrieve all items", () => {
      const stack = new LifoStack<number>()
      stack.add(1)
      stack.add(2)
      stack.add(3)

      expect(stack.all()).toStrictEqual([1, 2, 3])
      expect(stack.size).toBe(3)
    })
  })
})

describe("> FifoStack", () => {
  describe("#add", () => {
    test("should be able to add some item if no item is present", () => {
      const stack = new FifoStack<number>()
      stack.add(1)
      stack.add(2)
      stack.add(3)

      expect(stack.size).toBe(3)
    })
  })

  describe("#pop", () => {
    test("returns null if no item is present in the stack", () => {
      const stack = new FifoStack<number>()

      expect(stack.pop()).toBe(null)
      expect(stack.size).toBe(0)
    })

    test("should be able to get the first item and remove it", () => {
      const stack = new FifoStack<number>()
      stack.add(1)
      stack.add(2)
      stack.add(3)

      expect(stack.pop()).toBe(1)
      expect(stack.size).toBe(2)
    })
  })

  describe("#peek", () => {
    test("returns null if no item is present in the stack", () => {
      const stack = new FifoStack<number>()

      expect(stack.peek()).toBe(null)
      expect(stack.size).toBe(0)
    })

    test("should be able to get the first item without removing it", () => {
      const stack = new FifoStack<number>()
      stack.add(1)
      stack.add(2)
      stack.add(3)

      expect(stack.peek()).toBe(1)
      expect(stack.size).toBe(3)
    })
  })

  describe("#all", () => {
    test("returns null if no item is present in the stack", () => {
      const stack = new FifoStack<number>()

      expect(stack.all()).toBe(null)
      expect(stack.size).toBe(0)
    })

    test("should be able to retrieve all items", () => {
      const stack = new FifoStack<number>()
      stack.add(1)
      stack.add(2)
      stack.add(3)

      expect(stack.all()).toStrictEqual([1, 2, 3])
      expect(stack.size).toBe(3)
    })
  })
})
