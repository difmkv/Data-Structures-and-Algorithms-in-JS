/*
 * DOUBLY LINKED LIST
 *
 * For Doubly linked lists pointers go both ways.
 * This allows us to traverse the list in both directions,
 * and it also makes operations such as deletion easier.
 * Because we have pointers to both the nodes before and after
 * the node we'd like to delete, we don't need any more
 * information beyond our target node. In a singly linked list,
 * we also need the pointer to the node we'd like to delete.
 */

class Node {
  constructor(value) {
    if (value === undefined) throw "Must provide value for node";
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class DoublyLinkedList {
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
    newNext.prev = node;
    newNext.next = oldNext;
    oldNext && (oldNext.prev = newNext);
    if (this.tail === node) this.tail = newNext;
    return newNext;
  }

  removeAfter(node) {
    var removedNode = node.next;
    if (!removedNode) return "Nothing to remove";
    var newNext = removedNode.next;
    node.next = newNext;
    newNext && (newNext.prev = node);
    removedNode.next = null;
    removedNode.prev = null;
    if (removedNode === this.tail) this.tail = node;
    return removedNode;
  }

  insertHead(value) {
    var newHead = new Node(value);
    var oldHead = this.head;
    this.head = newHead;
    newHead.next = oldHead;
    oldHead.prev = newHead;
    return this.head;
  }

  removeHead() {
    var oldHead = this.head;
    var newHead = oldHead.next;
    this.head = newHead;
    newHead.prev = null;
    oldHead.next = null;
    return oldHead;
  }

  findNode(value) {
    var node = this.head;
    while (node) {
      if (node.value === value) return node;
      node = node.next;
    }
    return `No node with value: ${value} found`;
  }

  appendToTail(value) {
    var newTail = new Node(value);
    var oldTail = this.tail;
    oldTail.next = newTail;
    newTail.prev = oldTail;
    this.tail = newTail;
    return newTail;
  }

  insertBefore(node, value) {
    var oldPrev = node.prev;
    var newPrev = new Node(value);
    node.prev = newPrev;
    newPrev.next = node;
    newPrev.prev = oldPrev;
    oldPrev && (oldPrev.next = newPrev);
    if (node === this.head) this.head = newPrev;
    return newPrev;
  }

  removeBefore(node) {
    var removedNode = node.prev;
    if (!removedNode) return "Nothing to remove";
    var newPrev = removedNode.prev;
    if (!newPrev) this.head = node;
    newPrev && (newPrev.next = node);
    node.prev = newPrev;
    removedNode.next = null;
    removedNode.prev = null;
    return removedNode;
  }
}
