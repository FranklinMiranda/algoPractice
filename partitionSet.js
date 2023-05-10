// Name : Franklin Miranda
// Date : 5/9/2023
// Description: A algorithm to determine if a set can be partitioned into two sets, each of which's sum of elements is equal

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function permutation(arr) {
  let permArr = [];
  let tempArr = [arr.slice(0, 1)];

  const remainArr = arr.slice(1);

  function permute(arr) {
    const value = remainArr.shift();

    const result = [];

    arr.forEach((el) => {
      for (let i = 0; i <= el.length; i++) {
        if (i === 0) {
          const permutation = [value].concat(el);
          result.push(permutation);
        } else {
          const permutation = el.slice(0, i).concat(value).concat(el.slice(i));

          result.push(permutation);
        }
      }
    });

    tempArr = result;
  }

  for (let i = 1; i < arr.length; i++) {
    permute(tempArr);
  }

  permArr = tempArr;

  return permArr;
}

const permutations = permutation(arr);

function partition(arr) {
  const len = arr.length;
}

console.log(permutations.length);



