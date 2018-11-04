'use strict';
//creating a tree;

class Tree {
  constructor() {
    this.root = null;
    this.height = 0;
  }

  preorder(nodeToTraverse, emptyArray) {
    if (nodeToTraverse === undefined) {
      nodeToTraverse = this.root;
    }
    if (emptyArray === undefined) {
      emptyArray = [];
    }
    emptyArray.push(nodeToTraverse.value);
    if (nodeToTraverse.leftChild !== null) {
      this.preorder(nodeToTraverse.leftChild, emptyArray);
    }
    if (nodeToTraverse.rightChild !== null) {
      this.preorder(nodeToTraverse.rightChild, emptyArray);
    }
    return emptyArray;
  }

  inorder(nodeToTraverse, emptyArray) {
    if (nodeToTraverse === undefined) {
      nodeToTraverse = this.root;
    }
    if (emptyArray === undefined) {
      emptyArray = [];
    }
    if (nodeToTraverse.leftChild !== null) {
      this.inorder(nodeToTraverse.leftChild, emptyArray);
    }
    emptyArray.push(nodeToTraverse.value);
    if (nodeToTraverse.rightChild !== null) {
      this.inorder(nodeToTraverse.rightChild, emptyArray);
    }
    return emptyArray;
  }

  postorder(nodeToTraverse, emptyArray) {
    if (nodeToTraverse === undefined) {
      nodeToTraverse = this.root;
    }
    if (emptyArray === undefined) {
      emptyArray = [];
    }
    if (nodeToTraverse.leftChild !== null) {
      this.postorder(nodeToTraverse.leftChild, emptyArray);
    }

    if (nodeToTraverse.rightChild !== null) {
      this.postorder(nodeToTraverse.rightChild, emptyArray);
    }
    emptyArray.push(nodeToTraverse.value);
    return emptyArray;
  }

  add(value, nodeToTraverse, insertHeight) {
    if (insertHeight === undefined) {
      insertHeight = 0;
    }
    if (nodeToTraverse === undefined) {
      nodeToTraverse = this.root;
    }
    if (nodeToTraverse === null) {
      this.root = new Node(value);
      this.root.depth = insertHeight;
      return this.root;
    }
    if (value > nodeToTraverse.value) {
      if (nodeToTraverse.rightChild === null) {
        nodeToTraverse.rightChild = new Node(value);
        insertHeight++;
        if (insertHeight > this.height) {
          this.height = insertHeight;
        }
        nodeToTraverse.rightChild.depth = insertHeight;
        return nodeToTraverse.rightChild;
      } else {
        nodeToTraverse = nodeToTraverse.rightChild;
        insertHeight++;
        if (insertHeight > this.height) {
          this.height = insertHeight;
        }
        return this.add(value, nodeToTraverse, insertHeight);
      }
    }
    if (value < nodeToTraverse.value) {
      if (nodeToTraverse.leftChild === null) {
        nodeToTraverse.leftChild = new Node(value);
        insertHeight++;
        if (insertHeight > this.height) {
          this.height = insertHeight;
        }
        nodeToTraverse.leftChild.depth = insertHeight;
        return nodeToTraverse.leftChild;
      } else {
        nodeToTraverse = nodeToTraverse.leftChild;
        insertHeight++;
        if (insertHeight > this.height) {
          this.height = insertHeight;
        }
        return this.add(value, nodeToTraverse, insertHeight);
      }
    }
  }

  search(value, nodeToTraverse) {
    if (nodeToTraverse === undefined) {
      nodeToTraverse = this.root;
    }
    if (nodeToTraverse === null) {
      return 'does not exist';
    }
    if (nodeToTraverse.value === value) {
      return nodeToTraverse;
    }
    if (value > nodeToTraverse.value) {
      {
        nodeToTraverse = nodeToTraverse.rightChild;
        return this.search(value, nodeToTraverse);
      }
    }
    if (value < nodeToTraverse.value) {
      nodeToTraverse = nodeToTraverse.leftChild;
      return this.search(value, nodeToTraverse);
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.depth;
    this.leftChild = null;
    this.rightChild = null;
  }
}

module.exports = Tree;
