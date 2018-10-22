'use strict';

const SingleList = require('./ll_insertions.js');
let LL = new SingleList();
LL.insert('hello');
LL.insert('world');
LL.insert('again');

// describe('LinkedList', () => {

// });

describe('testing append method', () => {
  it('append attaches value to last node', () => {
    LL.append('Bob');
    expect(LL).toEqual({
      head: {
        next: {
          next: { next: { next: null, value: 'Bob' }, value: 'hello' },
          value: 'world'
        },
        value: 'again'
      }
    });
  });
});

let L1 = new SingleList();
L1.insert('hello');
L1.insert('world');
L1.insert('again');
describe('testing add to before method', () => {
  it('append attaches new value before the selected first value', () => {
    L1.insertBefore('world', 'rabbit');
    expect(L1).toEqual({
      head: {
        next: {
          next: { next: { next: null, value: 'hello' }, value: 'world' },
          value: 'rabbit'
        },
        value: 'again'
      }
    });
  });
});

let L2 = new SingleList();
L2.insert('hello');
L2.insert('world');
L2.insert('again');
describe('testing add to before method', () => {
  it('append attaches new value after the selected first value', () => {
    L2.insertAfter('world', 'rabbit');
    expect(L2).toEqual({
      head: {
        next: {
          next: { next: { next: null, value: 'hello' }, value: 'rabbit' },
          value: 'world'
        },
        value: 'again'
      }
    });
  });
});
