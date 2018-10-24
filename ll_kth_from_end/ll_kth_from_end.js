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

  kthFromEnd(value) {
    let lengthCounter = 0;
    let lead = this.head;
    let follower = this.head;

    while (this.next !== null) {
      lead = lead.next;
      lengthCounter++;
      if (lengthCounter > value) {
        console.log(follower.value);
        follower = follower.next;
      }
      if (lead.next === null) {
        if (lengthCounter < value) {
          return 'Exception';
        }
        return follower.value;
      }
    }
  }
}

module.exports = { SingleList: SingleList, Node: Node };
