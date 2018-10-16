// function for the challenge

module.exports = insertShiftArray;

function insertShiftArray(arr, value) {
  let middle = Math.ceil(arr.length / 2);
  const endPoint = arr.length;
  let newArr = [];
  for (let i = 0; i < middle; i++) {
    newArr[i] = arr[i];
  }
  for (let i = middle; i < endPoint; i++) {
    newArr[i + 1] = arr[i];
  }
  newArr[middle] = value;
  return newArr;
}
