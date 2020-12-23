import { LinkedList } from "../linked-list/LinkedList"

describe("#prepend", () => {
  test("Should be able to insert a new item when no item is present", () => {
    const list = new LinkedList<number>()
    list.prepend(100)

    expect(list.head.value).toBe(100)
    expect(list.size).toBe(1)
  })

  test("Should be able to insert multiple items when no item is present", () => {
    const list = new LinkedList<number>()
    list.prepend(100)
    list.prepend(200)
    list.prepend(300)

    expect(list.head.value).toBe(300)
    expect(list.head.next.value).toBe(200)
    expect(list.head.next.next.value).toBe(100)
    expect(list.size).toBe(3)
  })
})

describe("#append", () => {
  test("Should be able to insert new item when no item is present", () => {
    const list = new LinkedList<number>()
    list.append(100)

    expect(list.head.value).toBe(100)
    expect(list.size).toBe(1)
  })

  test("Should be able to insert multiple items when no item is present", () => {
    const list = new LinkedList<number>()
    list.append(100)
    list.append(200)
    list.append(300)

    expect(list.head.value).toBe(100)
    expect(list.head.next.value).toBe(200)
    expect(list.head.next.next.value).toBe(300)
    expect(list.size).toBe(3)
  })
})
