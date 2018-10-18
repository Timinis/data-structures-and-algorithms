const binarySearch = require('./array_binary_search.js');

describe('Binary Search', () => {
  it('should return the index of a number search if it exists in the array', () => {
    let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(binarySearch(testArr, 8)).toStrictEqual(7);
    expect(binarySearch(testArr, 10)).toStrictEqual(9);
  });
  it('should return -1 if the searched num does not appear in array', () => {
    let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(binarySearch(testArr, 14)).toStrictEqual(-1);
  });
});
