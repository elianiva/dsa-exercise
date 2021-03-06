/**
 * Creates a new node for Singly Linked List
 */
class LinkedListNode<T> {
  value: T
  next: LinkedListNode<T> | null

  constructor(value: T, next: LinkedListNode<T> | null) {
    this.value = value
    this.next = next
  }
}

/**
 * Singly Linked List constructor to create a new Singly Linked List data structure
 *
 * @return {SinglyLinkedList<T>}
 */
class SinglyLinkedList<T> {
  head: LinkedListNode<T> | null
  size: number

  constructor() {
    this.head = null
    this.size = 0
  }

  /**
   * Will add new item at the start of the list, constant time O(1)
   *
   * @param {T} data that will get inserted
   * @return void
   */
  prepend(data: T): void {
    // replace the head with new node containing previous head as its next item
    this.head = new LinkedListNode(data, this.head)
    this.size++
  }

  /*
   * Will add new item at the end of the list, linear time O(n)
   *
   * @param {T} data that will get inserted
   * @return void
   */
  append(data: T): void {
    // initial iteration is the head
    let current = this.head

    // set head to new node when there's no item inside the list
    if (!this.head) {
      this.head = new LinkedListNode(data, null)
      this.size++
      return
    }

    // walk through the list if the next item is available
    while (current?.next) {
      current = current.next
    }

    if (current) current.next = new LinkedListNode(data, null)
    this.size++
  }

  /**
   * Will delete an item at the start of the list, constant time O(1)
   *
   * @return void
   */
  removeFirst(): void {
    if (!this.head) return

    // replace the head with the next item of the head
    this.head = this.head.next
    this.size--
  }

  /**
   * Will delete an item at the end of the list, linear time O(n)
   *
   * @return void
   */
  removeLast(): void {
    if (!this.head) return

    let current: LinkedListNode<T> | null = this.head

    // traverse the list
    for (let i = 1; i < this.size - 1; i++) current &&= current.next

    if (current) current.next = null
    this.size--
  }

  /**
   * Will get the list, O(1) if you get the first item, O(n) for the rest.
   * Returns all items if no argument is provided
   *
   * @param {T} data that will get inserted
   * @return T[]
   */
  getList(n?: number): T[] {
    if (n === 0 || !this.head) return []

    let current = this.head
    let result: T[] = []

    let limit = n || this.size + 1
    for (let i = 0; i < limit; i++) {
      if (current) {
        result.push(current.value)
        if (!current.next) break
        current = current.next
      }
    }

    return result
  }

  /**
   * Will get the reference to nth node, O(1) if you get the first item,
   * O(n) for the rest.
   *
   * @param {number} n node position
   * @return void
   */
  getNode(n?: number): LinkedListNode<T> | null {
    if (!n || !this.head || n > this.size) return null

    let current = this.head
    let result = null

    let limit = n || this.size
    for (let i = 0; i < limit; i++) {
      result = current
      if (!current?.next) break
      current = current.next
    }

    return result
  }

  /**
   * Will insert a node at the specified index O(n)
   *
   * @param {T} node that will get inserted
   * @return void
   */
  insertAt({ data, idx }: { data: T; idx: number }): void | null {
    if (!idx || !data) return null

    if (!this.head) {
      this.head = new LinkedListNode(data, null)
      this.size++
      return
    }

    const prevReplaced = this.getNode(idx - 1)
    const replaced = this.getNode(idx)

    if (prevReplaced) prevReplaced.next = new LinkedListNode(data, replaced)
    this.size++
  }
}

export { SinglyLinkedList, LinkedListNode }
