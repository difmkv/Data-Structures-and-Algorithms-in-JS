/*
 * PRIORITY QUEUE
 *
 * A kind of abstract data type that generalizes the queue.
 * Their principles are exactly the same except that they also include a
 * priority for every value in the queue. When a value is inserted,
 * a priority is assigned to it. The value with the highest priority is
 * always removed first. You can think of priority queues like a hospital.
 * Treating patients in a first-in-first-out (FIFO) approach isn't always
 * a good idea because some patients may be in critical condition.
 * So, a patient who has a cough may come in and be assigned a low priority.
 * Then a patient may come in later who has a gunshot wound, and they would
 * be given a high priority and then be treated first. Priority queues are
 * very important to systems that juggle multiple programs and their execution
 * (like your laptop). They are also very important to networking systems like
 * the Internet because they can help prioritize important data to make sure
 * it gets through faster.
 */

class Node {
  constructor(value, priority = 0) {
    this.value = value;
    this.priority = priority;
  }
}

export default class PriorityQueue {
  constructor(maxSize = 10) {
    this.maxSize = maxSize;
    this.pq = [];
  }

  enqueue(value, priority) {
    if (this.isFull()) return "Queue Overflow!";

    let current = new Node(value, priority);
    let index = this.binaryIndexSearch(this.pq, priority);
    this.pq.splice(index, 0, current);
    return this.pq;
  }

  binaryIndexSearch(arr, p) {
    var lowIdx = 0;
    var highIdx = arr.length - 1;
    var midIdx;

    if (!arr.length || arr[lowIdx].priority <= p) return 0;
    if (arr[highIdx].priority >= p) return arr.length;

    while (lowIdx <= highIdx) {
      midIdx = Math.floor((lowIdx + highIdx) / 2);
      if (arr[midIdx].priority >= p && p >= arr[midIdx + 1].priority) {
        return midIdx + 1;
      } else if (arr[midIdx].priority > p) {
        lowIdx = midIdx + 1;
      } else if (arr[midIdx].priority < p) {
        highIdx = midIdx - 1;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) return "Queue Underflow!";
    return this.pq.shift();
  }

  peek() {
    if (this.isEmpty()) return "Queue Underflow!";
    return this.pq[0];
  }

  display() {
    let result = "";

    for (let i = 0; i < this.pq.length; i++) {
      result += `${this.pq[i].value} ${this.pq[i].priority}`;
      i !== this.pq.length - 1 && (result += " <- ");
    }
    return result;
  }

  isEmpty() {
    return this.pq.length === 0;
  }

  isFull() {
    return this.pq.length >= this.maxSize;
  }

  clear() {
    this.pq = [];
  }
}
