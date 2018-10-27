const stackAndQueues = require('./stack_and_queues.js');

let stack = new stackAndQueues.Stack();

stack.push(1);
stack.push(3);
stack.push(5);

describe('testing the stack method', () => {
  it('is checking the datastructure of the stack', () => {
    expect(stack).toEqual({ stackList: [1, 3, 5] });
    expect(typeof stack).toBe('object');
    expect(stack == true).toBe(false);
  });

  it('is checking the push method', () => {
    expect(stack.stackList[2]).toEqual(5);
    expect(stack.stackList[1]).toEqual(3);
    expect(stack.stackList[0]).toEqual(1);
  });

  it('is checking the pop method', () => {
    expect(typeof stack.pop).toEqual('undefined');
    expect(stack.pop).toEqual(undefined);
    expect(stack.pop).toEqual(undefined);
  });

  it('is checking the peek method', () => {
    expect(stack.peek()).toEqual(5);
    expect(typeof stack.peek()).toEqual('number');
    expect(stack.peek() == true).toBe(false);
  });
});

let queue = new stackAndQueues.Queue();

queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);

describe('testing the queue object', () => {
  it('is checking the datastructure of the stack', () => {
    expect(queue).toEqual({
      first: { next: { next: { next: null, value: 5 }, value: 3 }, value: 1 },
      last: { next: null, value: 5 }
    });
    expect(typeof queue).toBe('object');
    expect(stack == true).toBe(false);
  });

  it('is checking the enque method', () => {
    expect(queue.first).toEqual({
      next: { next: { next: null, value: 5 }, value: 3 },
      value: 1
    });
    expect(queue.last).toEqual({ next: null, value: 5 });
    expect(typeof queue.first).toEqual('object');
  });

  it('is checking the deque method', () => {
    expect(queue.dequeue()).toEqual({ next: null, value: 1 });
    expect(typeof queue.dequeue()).toEqual('object');
    expect(queue.dequeue() == false).toBe(false);
  });

  it('is checking the peek method', () => {
    expect(queue.peek()).toEqual(undefined);
    expect(typeof queue.peek()).toEqual('undefined');
    expect(queue.peek() == false).toBe(false);
  });
});
