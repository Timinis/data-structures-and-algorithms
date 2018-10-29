'use strict';

class PsudeoQue {
  constructor() {
    (this.enqStack = []), (this.deqStack = []), this.hasEnq;
  }

  enqueue(value) {
    if (this.hasEnq === undefined || this.hasEnq === true) {
      this.hasEnq = true;
      this.enqStack.push(value);
      return this.enqStack;
    } else {
      this.hasEnq = true;
      for (let i = this.deqStack.length; i > 0; i--) {
        //this is peek method
        let topVal = this.deqStack[i - 1];
        this.enqStack.push(topVal);
        this.deqStack.pop();
      }
      this.enqStack.push(value);
      return this.enqStack;
    }
  }

  dequeue() {
    if (this.hasEnq === true) {
      this.hasEnq === false;
      for (let i = this.enqStack.length; i > 0; i--) {
        //this is peek method
        let topVal = this.enqStack[i - 1];
        this.deqStack.push(topVal);
        this.enqStack.pop();
      }
      this.deqStack.pop();
      return this.deqStack;
    } else if (this.hasEnq === false) {
      this.deqStack.pop();
      return this.deqStack;
    } else {
      return 'The que has no value, please enqueue values in';
    }
  }
}

module.exports = PsudeoQue;
