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

  append(value) {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
      if (current.next === null) {
        current.next = new Node(value);
        return;
      }
    }
  }

  insertBefore(value, newValue) {
    let current = this.head;
    if (current.head.value === value) {
      current = new Node(newValue, this.head);
    } else {
      while (current.next !== null) {
        if (current.next.value === value) {
          let storedNode = current.next;
          console.log(storedNode);
          current.next = new Node(newValue, storedNode);
          console.log(current.next);
          return;
        }
        current = current.next;
      }
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;
    while (current.next !== null) {
      if (current.value === value) {
        let storedNode = current.next;
        current.next = new Node(newValue, storedNode);
        return;
      }
      current = current.next;
    }
  }

  reverse() {
    let updatingValue = this.head;
    let remainingValues = updatingValue.next;

    this.head = updatingValue;
    updatingValue = updatingValue.next;
    remainingValues = remainingValues.next;
    console.log(LL, 'this is LL');
    console.log(updatingValue, 'this is the value intended to update');
    console.log(remainingValues, 'this is the remianing values');
  }
}

let LL = new SingleList();
LL.insert(4);
LL.insert(3);
LL.insert(2);
LL.insert(1);
LL.reverse();

console.log(LL);
// module.exports = SingleList;
