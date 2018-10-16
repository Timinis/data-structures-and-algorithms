'use strict';

const insertShiftArray = require('./array_shift.js');

describe('Testing the  insertShiftArray functionj', () => {
  it('the new returned array should have +1 length of the original array', () => {
    let oldArr = [5, 3, 9, 11];
    let newArr = insertShiftArray(oldArr, 29);
    expect(newArr.length).toBe(oldArr.length + 1);
  });
  it('if passing [5,3,9,13] and 29 as the parameter it should return [5,3,29,9,13]', () => {
    let oldArr = [5, 3, 9, 13];
    let newArr = insertShiftArray(oldArr, 29);
    expect(newArr).toEqual([5, 3, 29, 9, 13]);
  });

  it('it should consider an odd number of array, if passing [5,3,9,13,25] and 29 as the parameter it should return [5,3,29,9,13]', () => {
    let oldArr = [5, 3, 9, 13, 25];
    let newArr = insertShiftArray(oldArr, 29);
    expect(newArr).toEqual([5, 3, 9, 29, 13, 25]);
  });
});
