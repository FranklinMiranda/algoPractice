// Name : Franklin Miranda
// Date : 5/21/2023
// Description: An algorithm to find a partial factorial of a array

const arr = [1, 2, 3, 4, 5];

function combinations(arr, n) {
  if (n === 1) {
    return arr.map((el) => {
      return [el];
    });
  }

  const result = [];

  for (let i = 0; i <= arr.length - n; i++) {
    const combArr = combinations(arr.slice(i + 1), n - 1);

    combArr.forEach((el) => {
      result.push([arr[i], ...el]);
    });
  }

  return result;
}
const combArr = combinations(arr, 3);

function permutations(arr) {
  if (arr.length === 1) {
    return [arr];
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let permArr;
    if (i === 0) {
      permArr = permutations(arr.slice(i + 1));
    } else {
      permArr = permutations(arr.slice(0, i).concat(arr.slice(i + 1)));
    }
    permArr.forEach((el) => {
      result.push([arr[i], ...el]);
    });
  }

  return result;
}

const permArr = [];

combArr.forEach((el) => {
  permArr.push(...permutations(el));
});

console.log(JSON.stringify(permArr));
