import { SinglyLinkedList } from "../linked-list/SinglyLinkedList"

describe("> SinglyLinkedList", () => {
  describe("#prepend", () => {
    test("Should be able to insert a new item when no item is present", () => {
      const list = new SinglyLinkedList<number>()
      list.prepend(100)

      expect(list.head?.value).toBe(100)
      expect(list.size).toBe(1)
    })

    test("Should be able to insert multiple items when no item is present", () => {
      const list = new SinglyLinkedList<number>()
      list.prepend(100)
      list.prepend(200)
      list.prepend(300)

      expect(list.head?.value).toBe(300)
      expect(list.head?.next?.value).toBe(200)
      expect(list.head?.next?.next?.value).toBe(100)
      expect(list.size).toBe(3)
    })

    test("Constant speed when prepending, should be fast", () => {
      const list = new SinglyLinkedList<number>()
      for (let i = 0; i < 10000; i++) {
        list.prepend(i)
      }

      expect(list.size).toBe(10000)
    })
  })

  describe("#append", () => {
    test("Should be able to insert new item when no item is present", () => {
      const list = new SinglyLinkedList<number>()
      list.append(100)

      expect(list.head?.value).toBe(100)
      expect(list.size).toBe(1)
    })

    test("Should be able to insert multiple items when no item is present", () => {
      const list = new SinglyLinkedList<number>()
      list.append(100)
      list.append(200)
      list.append(300)

      expect(list.head?.value).toBe(100)
      expect(list.head?.next?.value).toBe(200)
      expect(list.head?.next?.next?.value).toBe(300)
      expect(list.size).toBe(3)
    })

    test("Linear speed when appending, should be slow", () => {
      const list = new SinglyLinkedList<number>()
      for (let i = 0; i < 10000; i++) {
        list.append(i)
      }

      expect(list.size).toBe(10000)
    })
  })

  describe("#append + #prepend", () => {
    test("Should work fine if we combine prepend and append", () => {
      const list = new SinglyLinkedList<number>()
      list.append(200)
      list.prepend(100)

      expect(list.head?.value).toBe(100)
      expect(list.head?.next?.value).toBe(200)
      expect(list.size).toBe(2)
    })

    test("Should be slow because O(n) preceeds O(1)", () => {
      const list = new SinglyLinkedList<number>()
      for (let i = 0; i < 10000; i++) {
        list.append(i)
        list.prepend(i)
      }

      expect(list.size).toBe(20000)
    })
  })

  describe("#getList", () => {
    test("Should return empty array if no item is present", () => {
      const list = new SinglyLinkedList<number>()

      expect(list.getList()).toStrictEqual([])
      expect(list.size).toBe(0)
    })

    test("Should get the list item values", () => {
      const list = new SinglyLinkedList<number>()
      list.append(100)
      list.append(200)
      list.append(300)
      list.append(400)

      expect(list.getList()).toStrictEqual([100, 200, 300, 400])
      expect(list.size).toBe(4)
    })

    test("Should get 2 items from the list", () => {
      const list = new SinglyLinkedList<number>()
      list.append(100)
      list.append(200)
      list.append(300)
      list.append(400)

      expect(list.getList(2)).toStrictEqual([100, 200])
      expect(list.size).toBe(4)
    })

    test("Should return all items if index is out of bound", () => {
      const list = new SinglyLinkedList<number>()
      list.append(100)
      list.append(200)
      list.append(300)
      list.append(400)

      expect(list.getList(6)).toStrictEqual([100, 200, 300, 400])
      expect(list.size).toBe(4)
    })

    test("Should return 0 items if index is 0", () => {
      const list = new SinglyLinkedList<number>()
      list.append(100)
      list.append(200)

      expect(list.getList(0)).toStrictEqual([])
      expect(list.size).toBe(2)
    })
  })

  describe("#getNode", () => {
    test("Should return null if no item is present", () => {
      const list = new SinglyLinkedList<number>()

      expect(list.getNode(1)).toBeNull()
      expect(list.size).toBe(0)
    })

    test("Should get the second node", () => {
      const list = new SinglyLinkedList<number>()
      list.append(100)
      list.append(200)
      list.append(300)
      list.append(400)

      expect(list.getNode(2)?.value).toBe(200)
      expect(list.size).toBe(4)
    })

    test("Should return null if index is out of bound", () => {
      const list = new SinglyLinkedList<number>()
      list.append(100)
      list.append(200)

      expect(list.getNode(5)).toBeNull()
      expect(list.size).toBe(2)
    })

    test("Should return null if no index is passed", () => {
      const list = new SinglyLinkedList<number>()
      list.append(100)
      list.append(200)

      expect(list.getNode()).toBeNull()
      expect(list.size).toBe(2)
    })
  })

  describe("#removeFirst", () => {
    test("Should remove the first item on the list", () => {
      const list = new SinglyLinkedList<number>()
      list.append(100)
      list.append(200)
      list.append(300)
      list.removeFirst()

      expect(list.getList()).toStrictEqual([200, 300])
      expect(list.size).toBe(2)
    })
  })

  describe("#removeLast", () => {
    test("Should remove the last item on the list", () => {
      const list = new SinglyLinkedList<number>()
      list.append(100)
      list.append(200)
      list.append(5000)
      list.removeLast()

      expect(list.getList()).toStrictEqual([100, 200])
      expect(list.size).toBe(2)
    })

    test("Should do nothing when list contains nothing", () => {
      const list = new SinglyLinkedList<number>()
      list.removeLast()

      expect(list.getList()).toStrictEqual([])
      expect(list.size).toBe(0)
    })
  })
})
