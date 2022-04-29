const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = new Node();
  }

  root() {
   return this.tree.data ? this.tree : null
  }

  add(data) {
    if (!+this.tree.data) {
      this.tree.data = data
      return
    }

    let node = this.tree;

    while(node.data) {
      if (node.data >= data) {
        if (node.left === null) {
          node.left = new Node(data)
          break
        } else {
          node = node.left
          continue
        }
      }

      if (node.data < data) {
        if (node.right === null) {
          node.right = new Node(data)
          break
        } else {
          node = node.right
          continue
        }
      }
    }
  }

  has(data) {
    let node = this.tree
    if (data === node.data) {
      return true
    }

    while(node) {
      if (data === node.data) {
        return true
      }

      if (data > node.data) {
        node = node.right
        continue
      } else {
        node = node.left
        continue
      }
    }

    return false
  }

  find(data) {
    let node = this.tree
    if (data === node.data) {
      return node
    }

    while(node) {
      if (data === node.data) {
        return node
      }

      if (data > node.data) {
        node = node.right
        continue
      } else {
        node = node.left
        continue
      }
    }

    return null
  }

  remove(data) {
    let node = this.find(data)
    node.data = node.data + ""
  }

  min() {
    let node = this.tree

    while(node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    let node = this.tree

    while(node.right) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};