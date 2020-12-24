class LinkedListNode<T> {
  value: T
  next: LinkedListNode<T>

  constructor(value: T, next: LinkedListNode<T>) {
    this.value = value
    this.next = next
  }
}

/*
 * Singly Linked List constructor to create a new Singly Linked List data structure
 *
 * @return {SinglyLinkedList<T>}
 */
class SinglyLinkedList<T> {
  head: LinkedListNode<T>
  size: number

  constructor() {
    this.head = null
    this.size = 0
  }

  /*
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
    while (current.next) {
      current = current.next
    }

    current.next = new LinkedListNode(data, null)
    this.size++
  }

  /*
   * Will add new item at the end of the list, linear time O(n)
   *
   * @param {T} data that will get inserted
   * @return void
   */
  getList(n?: number): string | T[] {
    let current = this.head
    let result: T[] = []

    if (!this.head) {
      return "You must have at least 1 item to get the list"
    }

    if (n == 0) return []

    let limit = n || this.size
    for (let i = 0; i < limit; i++) {
      result.push(current.value)
      if (!current.next) break
      current = current.next
    }

    return result
  }
}

export { SinglyLinkedList, LinkedListNode }
