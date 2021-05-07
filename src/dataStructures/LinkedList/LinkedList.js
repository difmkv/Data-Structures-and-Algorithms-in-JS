/*
 * LINKED LIST
 *
 * Linked lists are linear data structures that hold data in
 * individual objects called nodes. These nodes hold both the
 * data and a reference to the next node in the list.
 *
 * Linked lists are often used because of their efficient
 * insertion and deletion. They can be used to implement
 * stacks, queues, and other abstract data types.
 */

class Node {
  constructor(value) {
    if (value === undefined) throw "Must provide value for node.";
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
  }

  forEach(cb) {
    var node = this.head;
    while (node) {
      cb(node.value);
      node = node.next;
    }
  }

  print() {
    var result = [];
    this.forEach((value) => result.push(value));
    return result.join(", ");
  }

  insertAfter(node, value) {
    var oldNext = node.next;
    var newNext = new Node(value);
    node.next = newNext;
    newNext.next = oldNext;
    if (this.tail === node) this.tail = newNext;
    return newNext;
  }

  removeAfter(node) {
    var removedNode = node.next;
    if (!removedNode) return "Nothing to remove.";
    var newNext = removedNode.next;
    node.next = newNext;
    removedNode.next = null;
    if (removedNode === this.tail) this.tail = node;
    return removedNode;
  }

  insertHead(value) {
    var newHead = new Node(value);
    var oldHead = this.head;
    this.head = newHead;
    newHead.next = oldHead;
    return this.head;
  }

  removeHead() {
    var oldHead = this.head;
    var newHead = oldHead.next;
    this.head = newHead;
    oldHead.next = null;
    return oldHead;
  }

  contains(value) {
    var node = this.head;
    while (node) {
      if (node.value === value) return true;
      node = node.next;
    }
    return false;
  }

  appendToTail(value) {
    var newTail = new Node(value);
    this.tail.next = newTail;
    this.tail = newTail;
    return newTail;
  }
}
