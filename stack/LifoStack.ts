import { Stack } from "./Stack"

export class LifoStack<T> extends Stack<T> {
  constructor() {
    super()
  }

  /**
   * Get the last item and remove it from the stack
   * @param {T} item The inserted item at the end of the stack
   * @return {T} Last item in the stack
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
   * Get the last item without removing it from the stack
   * @return {T} Last item in the stack
   */
  peek(): T | null {
    if (!this.size) return null
    return this.stack[this.size]
  }
}
