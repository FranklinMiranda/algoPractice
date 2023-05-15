// Name : Franklin Miranda
// Date : 5/9/2023
// Description: A algorithm to determine if a set can be partitioned into two sets, each of which's sum of elements is equal

const arr = [1, 7, 2, 3, 4, 5, 6, 8, 9,10];

function permutation(arr) {
  let tempArr = [arr.slice(0, 1)];

  const remainArr = arr.slice(1);

  function permute(arr) {
    const value = remainArr.shift();

    const result = [];

    arr.forEach((el) => {
      for (let i = 0; i <= el.length; i++) {
        if (i === 0) {
          result.push([value].concat(el));
        } else {
          result.push(el.slice(0, i).concat(value).concat(el.slice(i)));
        }
      }
    });

    tempArr = result;
  }

  for (let i = 1; i < arr.length; i++) {
    permute(tempArr);
  }

  return tempArr;
}

const permutations = permutation(arr);

console.log(permutations.length)

function partition(arr) {
  let sumable = false;
  let result = [];

  arr.forEach((el) => {
    if (result.length < 2) {
      for (let i = 0; i < el.length - 1; i++) {
        const sum1 = el.slice(0, i + 1);
        const sum2 = el.slice(i + 1);

        const total1 = sum1.reduce((total, element) => {
          return (total += element);
        }, 0);

        const total2 = sum2.reduce((total, element) => {
          return (total += element);
        }, 0);

        if (total1 === total2) {
          result.push(sum1, sum2);
          sumable = true;
        }
      }
    }
  });

  if (sumable === true) {
    return [sumable, result];
  }
  return sumable;
}

//console.log(JSON.stringify(partition(permutations)));
