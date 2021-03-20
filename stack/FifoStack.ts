import { Stack } from "./Stack"

export class FifoStack<T> extends Stack<T> {
  constructor() {
    super()
  }

  /**
   * Get the first item and remove it from the stack
   *
   * @return {T | null} First item in the stack
   */
  pop(): T | null {
    if (!this.size) return null

    // store the last item before we delete it because we want to return it
    const temp = this.stack[1]
    delete this.stack[1]
    this.size--
    return temp
  }

  /**
   * Get the first item without removing it from the stack
   * @return {T} Last stack item
   */
  peek(): T | null {
    if (!this.size) return null
    return this.stack[1]
  }
}
