'use strict';

const LinkedList = require('./ll_merge.js');

let LL1 = new LinkedList.SingleList();
LL1.insert(5);
LL1.insert(4);
LL1.insert(3);
LL1.insert(2);
LL1.insert(1);

let LL2 = new LinkedList.SingleList();
LL2.insert(9);
LL2.insert(8);
LL2.insert(7);

describe('Testing the single List methods and kth from end method', () => {
  it('should return an object when called the constructor single list', () => {
    expect(typeof LL1).toBe('object');
  });

  it('should return the a new list with its value when we use the merge linke list function', () => {
    expect(LinkedList.mergeLinkedList(LL1, LL2)).toEqual({
      head: {
        next: {
          next: {
            next: {
              next: {
                next: {
                  next: { next: { next: null, value: 5 }, value: 4 },
                  value: 9
                },
                value: 3
              },
              value: 8
            },
            value: 2
          },
          value: 7
        },
        value: 1
      }
    });
  });

  it('should return an object with merge Linked List', () => {
    expect(typeof LinkedList.mergeLinkedList(LL1, LL2)).toBe('object');
  });
});
