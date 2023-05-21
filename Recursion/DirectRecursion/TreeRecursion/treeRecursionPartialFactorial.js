// Name : Franklin Miranda
// Date : 5/14/2023
// Description: An algorithm to find a partial factorial of a array

const arr = [1, 2, 3, 4, 5, 6, 7];
let invoked = false

function combinations(array, n) {
  if (n === 1) {
    return [[array[0]]];
  }

  if (invoked === false) {
    invoked = true
    const resultArr = [];
    for (let i = 0; i <= array.length - n; i++) {
      resultArr.push(...combinations(array.slice(i), n));
    }
    return resultArr
  }

    const result = [];

    for (let i = 1; i <= array.length - (n - 1); i++) {
      const combArr = combinations(array.slice(i), n - 1);

      combArr.forEach((el) => {
        result.push([array[0], ...el]);
      });
    }
    return result
}
const combArr = combinations(arr, 5);

console.log(JSON.stringify(combArr))