'use strict';

const reverseArray = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[arr.length - i - 1] = arr[i];
  }
  console.log(newArr);
  return newArr;
};

/* stretch goal with recursion */

let count = 0;
let newArr2;
const reverseArray2 = arr => {
  if (count === 0) {
    newArr2 = [];
  }
  newArr[arr.length - 1 - count] = arr[count];
  count++;
  if (count < arr.length) {
    return reverseArray2(arr);
  } else {
    count = 0;
    return newArr2;
  }
};

// stretch goal with recursion without global variables

//for this function use array with intended to be used, the count with 0 and newArr with [];
const reverseArray3 = (arr, count, newArr) => {
  newArr[arr.length - 1 - count] = arr[count];
  count++;
  if (count < arr.length) {
    return reverseArray3(arr, count, newArr);
  } else {
    return newArr;
  }
};
