'use strict';

function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

class SingleList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
}

let LL = new SingleList();

for (let i = 5; i > 0; i++) {
  LL.insert(i);
}
