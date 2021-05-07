/*
 * STACK
 *
 * Abstract data type
 * LIFO - Last in, first out
 * Collection of elements with push and pop operations.
 *
 * *** Operations:
 * myStack.push(value)
 * => count of stack
 * add value to collection
 * myStack.pop()
 * => most recent element added collection
 * Remove item so that it is no longer in collection
 * myStack.peek()
 * => most recent element added collection
 * Similiar to pop, but do not remove element from collection
 * myStack.getSize()
 * => number of elements in stack
 */

export default class Stack {
  constructor() {
    this.size = 0;
    this.stack = {};
  }

  push(item) {
    this.stack[this.size] = item;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.size--;
    const poppedItem = this.stack[this.size];
    delete this.stack[this.size];
    return poppedItem;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack[this.size - 1];
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  clear() {
    this.stack = {};
    this.size = 0;
  }
}
