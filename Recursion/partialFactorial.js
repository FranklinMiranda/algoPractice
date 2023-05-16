// Name : Franklin Miranda
// Date : 5/14/2023
// Description: An algorithm to find a partial factorial of a array

const arr = [1, 2, 3, 4, 5, 6];

function combinations(arr, resultLength) {
  const combinationsArr = [];
  const array = new Array(...arr);
  const n = resultLength;
  const indexArr = [];
  let loopCounter = 0;

  for (let i = array.length - 1; i >= array.length - n; i--) {
    indexArr.push(i);
  }

  function loop(n, k) {
    for (let i = k; i > 0; i--) {
      if (n > 0) {
        if (n === 1) {
          const permutation = [];

          for (let j = 0; j < indexArr.length; j++) {
            permutation.unshift(array[indexArr[j]]);
          }

          console.log(indexArr);
          indexArr[indexArr.length - 1] -= 1;

          loopCounter += 1;
        }
        loop(n - 1, i - 1);
      }
    }

    return;
  }

  loop(n, array.length);

  console.log(loopCounter);
  console.log(JSON.stringify(combinationsArr));

  return combinationsArr;
}

combinations(arr, 3);

// if (n <= 0) {
//     return [];
//   } else if (n > array.length) {
//     n = array.length;
//   }
