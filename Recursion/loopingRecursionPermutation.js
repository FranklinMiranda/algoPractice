// Name : Franklin Miranda
// Date : 5/15/2023
// Description: An recursive algorithm to find all permutations of a array

const arr = [1, 2, 3];

function permute(arr, permutations = [[arr.shift()]]) {
  if (arr.length === 0) {
    return permutations;
  }

  let element = [arr.shift()];

  permutations.forEach((el) => {
    for (let j = el.length; j >= 0; j--) {
      if (j === 0) {
        el.unshift(...element);
      } else {
        permutations.push(el.slice(0, j).concat(element).concat(el.slice(j)));
      }
    }
  });

  return permute(arr, permutations);
}

const arrPermutations = permute(arr);
console.log(JSON.stringify(arrPermutations))
