class Stack {
  constructor() {
    this.stackList = [];
  }

  push(value) {
    this.stackList.push(value);
  }

  peek() {
    return this.stackList[this.stackList.length - 1];
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    if (this.first === null && this.last === null) {
      this.first = new Node(value);
      this.last = this.first;
    } else {
      this.last.next = new Node(value);
      this.last = this.last.next;
    }
  }

  dequeue() {
    if (this.first && this.first !== this.last) {
      let deQue = this.first;
      this.first = this.first.next;
      deQue.next = null;
      return deQue;
    } else if (this.first && this.first === this.last) {
      let deQue = this.first;
      this.first = null;
      this.last = null;
      return deQue;
    } else if (this.first === null) {
      return 'Null Exception Error';
    }
  }

  peek() {
    return this.front;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = { Stack: Stack, Queue: Queue, Node: Node };
