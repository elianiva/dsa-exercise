/**
 * Constructor for a custom Set data structure
 * @return Set
 */
export class CustomSet<T> {
  items: { [key: number]: T }
  size: number

  constructor() {
    this.items = {}
    this.size = 0
  }

  /**
   * Add new item to the Set
   * @param {T} data An item that you want to insert
   * @return void
   */
  add(data: T): void {
    if (Object.values(this.items).indexOf(data) !== -1) return

    this.items[this.size + 1] = data
    this.size++
  }

  /**
   * Get the item based on index from the set
   * @param {number} data An item that you want to insert
   * @return T
   */
  get(idx: number): T {
    return this.items[idx]
  }

  /**
   * Add new item to the Set
   * @param {T} data An item that you want to insert
   * @return T[]
   */
  all(): T[] {
    return Object.values(this.items)
  }
}
