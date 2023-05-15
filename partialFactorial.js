// Name : Franklin Miranda
// Date : 5/14/2023
// Description: An algorithm to find a partial factorial of a array

const arr = [1, 2, 3, 4, 5];

function combinations(arr, resultLength) {
  const combinationsArr = [];
  const array = new Array(...arr);
  const arrayLength = array.length;
  const n = resultLength;
  let loopCounter = 0;

  function loop(n, k) {
    for (let i = 0; i < k; i++) {
      if (n > 0) {
        if (n === 1) {
          loopCounter += 1;
          const permutation = [];

          for (let i = 0; i < resultLength; i++) {
            if (i === 0) {
              const index = (loopCounter - 1) % k;
              permutation.unshift(array[index]);
            } else {
              const index = Math.trunc((loopCounter - 1) / k ** i) % k;

              permutation.unshift(array[index]);
            }
          }
          combinationsArr.push(permutation);
        }
        loop(n - 1, k);
      }
    }

    return;
  }

  loop(n, arrayLength);

  console.log(JSON.stringify(combinationsArr));

  return combinationsArr;
}

combinations(arr, 3);

// if (n <= 0) {
//     return [];
//   } else if (n > array.length) {
//     n = array.length;
//   }
