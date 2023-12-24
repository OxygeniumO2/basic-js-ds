const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addData(this.rootNode, data)
  }

  has(data) {
    return searchData(this.rootNode, data, 'has');
  }

  find(data) {
    return searchData(this.rootNode, data, 'find')
  }

  remove(data) {
    this.rootNode = removeData(this.rootNode, data);
  }

  min() {
    let currNode = this.rootNode;
    while (currNode) {
      if (!currNode.left) {
        return currNode.data;
      }
      currNode = currNode.left;
    }
  }

  max() {
    let currNode = this.rootNode;
    while (currNode) {
      if (!currNode.right) {
        return currNode.data;
      }
      currNode = currNode.right;
    }
  }
}

function addData(node, data) {
  if (!node) {
    return new Node(data);
  }

  if (node.data === data) {
    return node;
  }

  if (data < node.data) {
    node.left = addData(node.left, data);
  }
  else {
    node.right = addData(node.right, data);
  }

  return node;

}

function searchData(node, data, findParam) {
  if (!node) {
    return findParam === 'find' ? null : false;
  }

  if (node.data === data) {
    return findParam === 'find' ? node : true;
  }

  return data < node.data ? searchData(node.left, data, findParam) : searchData(node.right, data, findParam);
}

function removeData(node, data) {
  if (!node) {
    return null;
  }

  if (data < node.data) {
    node.left = removeData(node.left, data);
    return node;
  }
  else if (data > node.data) {
    node.right = removeData(node.right, data);
    return node;
  }
  else {

    if (!node.left && !node.right) {
      return null;
    }
    if (!node.left) {
      return node.right;
    }
    if (!node.right) {
      return node.left;
    }

    let maxFromLeft = node.left;
    while (maxFromLeft.right) {
      maxFromLeft = maxFromLeft.right;
    }

    node.data = maxFromLeft.data;
    node.left = removeData(node.left, maxFromLeft.data);

    return node;
  }
}

module.exports = {
  BinarySearchTree
};