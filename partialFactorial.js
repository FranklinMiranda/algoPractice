// Name : Franklin Miranda
// Date : 5/13/2023
// Description: An algorithm to find a partial factorial of a array

const arr = [1, 2, 3, 4, 5, 6, 7];

function partialFactorial(arr, resultLength) {
  const perm = [];

  for (let i = 0; i <= arr.length - resultLength; i++) {
    const array = [arr[i]];

    for (let j = i + 1; j <= arr.length - resultLength + 1; j++) {
      array.push(arr[j]);

      for (let k = j + 1; k <= arr.length - resultLength + 2; k++) {
        arr.push(arr[k]);
      }
    }
    perm.push(array);
  }

  return perm;
}

const permutations = partialFactorial(arr, 3);
console.log(JSON.stringify(permutations))