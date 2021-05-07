import Stack from "../Stack/Stack";

export default class QueueWithTwoStacks {
  constructor() {
    this.stackIn = new Stack();
    this.stackOut = new Stack();
  }

  enqueue(value) {
    this.stackIn.push(value);
  }

  transferStacks() {
    while (this.stackIn.getSize() > 0) {
      this.stackOut.push(this.stackIn.pop());
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.stackOut.isEmpty()) {
      this.transferStacks();
    }
    return this.stackOut.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.stackOut.isEmpty()) {
      this.transferStacks();
    }
    return this.stackOut.peek();
  }

  isEmpty() {
    return this.stackIn.isEmpty() && this.stackOut.isEmpty();
  }

  getSize() {
    return this.stackIn.getSize() + this.stackOut.getSize();
  }
}
