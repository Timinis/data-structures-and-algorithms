'use strict';

const LinkedPackage = require('./linked_list.js');

describe('Testing each method for Linked Lists', () => {
  console.log(LinkedPackage.linkedList);
  const LL = new LinkedPackage.linkedList();
  LL.insert('bob');
  LL.insert('Tim');
  LL.insert('tom');
  it('We should return a linked list when we run the functions', () => {
    expect(LL).toEqual({
      chainLength: 3,
      head: {
        next: { next: { next: null, value: 'bob' }, value: 'Tim' },
        value: 'tom'
      }
    });
  });
  it('We should return false if none of the item matches with the include method', () => {
    expect(LL.includes('rob')).toBe(false);
  });

  it('Print out the list with the print method', () => {
    expect(LL.print()).toBe('Linked list: tom Tim bob');
  });
});
