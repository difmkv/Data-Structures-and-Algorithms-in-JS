/*
 * QUEUE
 *
 * Abstract data type
 * FIFO - First in, first out
 * Collection of elements with enqueue and dequeue operations.
 * *** Operations:
 * myQueue.enqueue(value)
 * => count of queue
 * add value to collection
 * myQueue.dequeue()
 * => oldest element added collection
 * Remove item so that it is no longer in collection
 * myQueue.peek()
 * => oldest element added collection
 * Similiar to dequeue, but do not remove element from collection
 * myQueue.getSize()
 * => number of elements in queue
 */

export default class Queue {
  constructor() {
    this.queue = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.queue[this.tail++] = value;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    var item = this.queue[this.head];
    delete this.queue[this.head];
    this.head++;
    return item;
  }

  isEmpty() {
    return this.tail - this.head === 0;
  }

  peek() {
    return this.queue[this.head];
  }

  getSize() {
    return this.tail - this.head;
  }

  contains(value) {
    for (let i = this.head; i < this.tail; i++) {
      if (this.queue[i] === value) return true;
    }
    return false;
  }

  until(value) {
    for (let i = this.head; i < this.tail; i++) {
      if (this.queue[i] === value) {
        return i - this.head + 1;
      }
    }
    return null;
  }
}
