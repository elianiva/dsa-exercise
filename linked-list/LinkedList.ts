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
    // initial iteration is the thead
    let current = this.head

    // set head to new node when there's no items inside the list
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
}

export { LinkedList, LinkedListNode }
