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
    if (current === null) {
      this.head = new Node(value);
      return;
    }
    while (current !== null) {
      if (current.next === null) {
        current.next = new Node(value);
        return;
      }
      current = current.next;
    }
  }
}

function mergeLinkedList(linkedList1, LinkedList2) {
  let currentL1 = linkedList1.head;
  let currentL2 = LinkedList2.head;
  let newList = new SingleList();
  while (currentL1 !== null || currentL2 !== null) {
    if (currentL1 !== null) {
      newList.append(currentL1.value);
      currentL1 = currentL1.next;
    }
    if (currentL2 !== null) {
      newList.append(currentL2.value);
      currentL2 = currentL2.next;
    }
  }
  return newList;
}

module.exports = {
  Node: Node,
  SingleList: SingleList,
  mergeLinkedList: mergeLinkedList
};
