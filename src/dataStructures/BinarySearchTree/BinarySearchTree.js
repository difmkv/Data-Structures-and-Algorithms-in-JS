/*
 * BINARY SEARCH TREES
 *
 * A binary search tree is a tree with the additional constraints:
 * - each node has only two child nodes (node.left and node.right)
 * - all the values in the left subtree of a node are less than or
 * equal to the value of the node
 * - all the values in the right subtree of a node are greater
 * than the value of the node
 */

import Queue from "../Queue/Queue";
import Stack from "../Stack/Stack";

export default class BinarySearchTree {
  constructor(value) {
    if (value === undefined) throw "Must specify value.";
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value === undefined) throw "Must specify value.";
    if (this.value === null) {
      this.value = value;
      return this;
    } else if (value <= this.value) {
      if (this.left) this.left.insert(value);
      else this.left = new BinarySearchTree(value);
    } else if (value >= this.value) {
      if (this.right) this.right.insert(value);
      else this.right = new BinarySearchTree(value);
    }
    return this;
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }
    if (value < this.value) {
      return !!this.left && this.left.contains(value);
    }
    if (value > this.value) {
      return !!this.right && this.right.contains(value);
    }
    return false;
  }

  traverseDepthFirst_inOrder(fn) {
    if (!this.left && !this.right) return fn(this);
    if (this.left) this.left.traverseDepthFirst_inOrder(fn);
    fn(this);
    if (this.right) this.right.traverseDepthFirst_inOrder(fn);
  }

  traverseDepthFirst_preOrder(fn) {
    fn(this);
    if (this.left) this.left.traverseDepthFirst_preOrder(fn);
    if (this.right) this.right.traverseDepthFirst_preOrder(fn);
  }

  traverseDepthFirst_postOrder(fn) {
    if (this.left) this.left.traverseDepthFirst_postOrder(fn);
    if (this.right) this.right.traverseDepthFirst_postOrder(fn);
    fn(this);
  }

  traverseDepthFirst(fn) {
    const s = new Stack();
    s.push(this);

    while (!s.isEmpty()) {
      let node = s.pop();
      fn(node);
      node.left && s.push(node.left);
      node.right && s.push(node.right);
    }
  }

  traverseBreadthFirst(fn) {
    const q = new Queue();
    q.enqueue(this);

    while (!q.isEmpty()) {
      let node = q.dequeue();
      fn(node);
      node.left && q.enqueue(node.left);
      node.right && q.enqueue(node.right);
    }
  }

  checkIfFull() {
    var result = true;
    this.traverseBreadthFirst(function (node) {
      if ((!node.left && node.right) || (node.left && !node.right)) {
        result = false;
      }
    });
    return result;
  }

  checkIfBalanced() {
    var heights = [];
    var recurse = function (node, height) {
      if (!node.left && !node.right) return heights.push(height);
      node.left && recurse(node.left, height + 1);
      node.right && recurse(node.right, height + 1);
    };
    recurse(this, 1);
    var min = Math.min.apply(null, heights);
    var max = Math.max.apply(null, heights);
    return max - min <= 1;
  }

  deleteMin(parent) {
    if (!this.left && !this.right) {
      if (parent) parent.left = null;
      else this.value = null;
    }
    if (!this.left && this.right) {
      if (parent) {
        parent.left = this.right;
      } else {
        this.value = this.right.value;
        let tempNode = this.right;
        this.left = tempNode.left;
        this.right = tempNode.right;
        return this;
      }
    }
    if (this.left) this.left.deleteMin(this);
  }

  deleteMax(parent) {
    if (!this.right && !this.left) {
      if (parent) parent.right = null;
      else this.value = null;
    }
    if (!this.right && this.left) {
      if (parent) {
        parent.right = this.left;
      } else {
        this.value = this.left.value;
        let tempNode = this.left;
        this.left = tempNode.left;
        this.right = tempNode.right;
        return this;
      }
    }
    if (this.right) this.right.deleteMax(this);
  }

  remove(data) {
    var result = this._removeNode(this, data);

    if (result) {
      [this.value, this.right, this.left] = [result.value, result.right, result.left];
    } else this.value = null;
  }

  _removeNode(node, value) {
    if (node === null) {
      return null;
    } else if (value < node.value) {
      node.left = this._removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value);
      return node;
    } else {
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      var aux = this._findMinNode(node.right);
      node.value = aux.value;

      node.right = this._removeNode(node.right, aux.value);
      return node;
    }
  }

  _findMinNode(node) {
    if (node.left === null) return node;
    else return this._findMinNode(node.left);
  }
}
