'use strict';

//binary search with functional style programming

const binarySearch = (array, valueSeeking) => {
  let right = array.length;
  let left = 0;
  if (valueSeeking > array[array.length - 1]) {
    return -1;
  }
  return binaryLooper(right, left, array, valueSeeking);
};

const binaryLooper = (right, left, arr, val) => {
  let mid = Math.floor((right + left) / 2);
  if (val > arr[mid]) {
    left = mid + 1;
  } else if (val < arr[mid]) {
    right = mid - 1;
  } else if (val === arr[mid]) {
    console.log(mid);
    return mid;
  }
  return binaryLooper(right, left, arr, val);
};
binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 8);

module.exports = binarySearch;
