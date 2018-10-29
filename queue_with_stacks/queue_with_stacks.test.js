'use strict';

const Que = require('./queue_with_stacks.js');

let queue = new Que();

describe('Testing then psuedo que and all its features', () => {
  it('should return an empty object when we create the object', () => {
    expect(typeof queue).toBe('object');
  });
  it('should return a stack with arrays when we enqueue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.enqueue(6)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(typeof queue.enqStack).toEqual('object');
    expect(queue.enqStack[5]).toBe(6);
  });
  it('should return the order of deque from last to first if we dequeue', () => {
    expect(queue.dequeue()).toEqual([6, 5, 4, 3, 2]);
    expect(typeof queue.deqStack).toBe('object');
    expect(queue.deqStack[4]).toBe(2);
  });
});
