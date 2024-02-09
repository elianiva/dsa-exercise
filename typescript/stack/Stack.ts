export abstract class Stack<T> {
  public size: number
  public stack: { [key: number]: T }

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

  abstract pop(): T | null
  abstract peek(): T | null

  /**
   * Get all items from the stack
   * @return {T[]} all items in the stack
   */
  all(): T[] | null {
    if (!this.size) return null
    return Object.values(this.stack)
  }
}
