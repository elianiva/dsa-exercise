class LinkedListNode<T> {
  value: T
  next: LinkedListNode<T>

  constructor(value: T, next: LinkedListNode<T>) {
    this.value = value
    this.next = next
  }
}

class LinkedList<T> {
  head: LinkedListNode<T>
  size: number

  constructor() {
    this.head = null
    this.size = 0
  }

  prepend(data: T) {
    // replace the head with new node containing previous head as its next item
    this.head = new LinkedListNode(data, this.head)
    this.size++
  }

  append(data: T) {
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

  getList() {
    let current = this.head
    let result: T[] = []

    if (!this.head) {
      return "You must have at least 1 item to get the list"
    }

    for (let i = 0; i < this.size; i++) {
      result.push(current.value)
      if (!current.next) break
      current = current.next
    }

    return result
  }
}

export { LinkedList, LinkedListNode }
