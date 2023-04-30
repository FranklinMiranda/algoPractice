// Name : Franklin Miranda
// Date : 4/29/2023
// Description: A binary search algorithm

function arrCreator(input) {
  const arr = [];

  for (let i = 0; i <= input; i++) {
    arr.push(i);
  }

  return arr;
}

const numArr = arrCreator(100);

function binarySearch(arr, left, right, x) {
  if (left >= right) {
    return -1;
  }

  const mid = left !== right - 1 ? Math.floor((right - left) / 2 + left) : right;

  if (x === arr[mid]) {
    return x;
  } else if (x > arr[mid]) {
    return binarySearch(arr, mid, right, x);
  }

  return binarySearch(arr, left, mid, x);
}

console.log(binarySearch(numArr, 0, numArr[numArr.length - 1], 98));
