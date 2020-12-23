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

  test("Constant speed when prepending, should be fast", () => {
    const list = new LinkedList<number>()
    for (let i = 0; i < 10000; i++) {
      list.prepend(i)
    }

    expect(list.size).toBe(10000)
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

  test("Linear speed when appending, should be slow", () => {
    const list = new LinkedList<number>()
    for (let i = 0; i < 10000; i++) {
      list.append(i)
    }

    expect(list.size).toBe(10000)
  })
})

describe("#append + #prepend", () => {
  test("Should work fine if we combine prepend and append", () => {
    const list = new LinkedList<number>()
    list.append(200)
    list.prepend(100)

    expect(list.head.value).toBe(100)
    expect(list.head.next.value).toBe(200)
    expect(list.size).toBe(2)
  })

  test("Should be slow because O(n) preceeds O(1)", () => {
    const list = new LinkedList<number>()
    for (let i = 0; i < 10000; i++) {
      list.append(i)
      list.prepend(i)
    }

    expect(list.size).toBe(20000)
  })
})

describe("#getList", () => {
  test("Should return error message when no item is present", () => {
    const list = new LinkedList<number>()

    // TODO(elianiva): I don't thinkg using this comparison is good
    //                 the string might have been changed and this will fail
    expect(list.getList()).toBe("You must have at least 1 item to get the list")
    expect(list.size).toBe(0)
  })

  test("Should get the list item values", () => {
    const list = new LinkedList<number>()
    // TODO(elianiva): Is using other function allowed? If `append` function breaks
    //                 then this test will also fail
    list.append(100)
    list.append(200)
    list.append(300)
    list.append(400)

    expect(list.getList()).toStrictEqual([100, 200, 300, 400])
    expect(list.size).toBe(4)
  })
})
