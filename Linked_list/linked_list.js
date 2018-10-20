class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.chainLength = 0;
  }

  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.chainLength++;
  }

  includes(value) {
    let testingList = this.head;
    let tracker = 0;
    while (tracker < this.chainLength) {
      if (value === testingList.value) {
        return true;
      } else {
        testingList = testingList.next;
        tracker++;
      }
      if (tracker === this.chainLength) {
        return false;
      }
    }
  }

  print() {
    let linkReader = this.head;
    let printList = 'Linked list:';
    let tracker = 0;
    while (tracker < this.chainLength) {
      printList = printList + ` ${linkReader.value}`;
      linkReader = linkReader.next;
      tracker++;
      if (tracker === this.chainLength) {
        return printList;
      }
    }
  }
}

module.exports = { linkedList: LinkedList, Node: Node };
