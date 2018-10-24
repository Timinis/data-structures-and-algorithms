'use strict';

const LL = require('./ll_kth_from_end.js');

let ll = new LL.SingleList();

ll.insert(4);
ll.insert(3);
ll.insert(2);
ll.insert(1);

describe('Testing the single List methods and kth from end method', () => {
  it('should return an object when called the constructor single list', () => {
    expect(typeof ll).toBe('object');
  });

  it('should return the value when we use the kth-from end method', () => {
    expect(ll.kthFromEnd(1)).toBe(3);
  });

  it('should return the string exception when we use the kth-from end method with number larger than the length', () => {
    expect(ll.kthFromEnd(6)).toBe('Exception');
  });
});
