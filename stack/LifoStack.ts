export class Stack<T> {
  size: number
  stack: { [key: number]: T }

  constructor() {
    this.size = 0
    this.stack = {}
  }

  /**
   * Add a new item to the stack
   * @param {T} item The inserted item at the end of the stack
   * @return {void}
   */
  add(item: T): void {
    this.stack[this.size + 1] = item
    this.size++
  }

  /**
   * Get last item and remove it from the stack
   * @param {T} item The inserted item at the end of the stack
   * @return {T} Last stack item
   */
  pop(): T | null {
    if (!this.size) return null

    // store the last item before we delete it because we want to return it
    const temp = this.stack[this.size]
    delete this.stack[this.size]
    this.size--
    return temp
  }

  /**
   * Get last item without removing it from the stack
   * @return {T} Last stack item
   */
  peek(): T | null {
    if (!this.size) return null
    return this.stack[this.size]
  }

  /**
   * Get all items from the stack
   * @return {T[]} all items in the stack
   */
  all(): T[] | null {
    if (!this.size) return null
    return Object.values(this.stack)
  }
}
