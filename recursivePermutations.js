// Name : Franklin Miranda
// Date : 5/10/2023
// Description: A algorithm to recursively generate permutations

const arr = [1, 2, 3, 4, 5];

function permutations(arr) {
  if (arr.length > 2) {
    let permArr = [];
    let tempArr = arr.slice(-1);
    const remainArr = arr.slice(0, -1);

    let result = permutations(remainArr);

    result.forEach((el) => {
      for (let i = 0; i <= el.length; i++) {
        if (i === 0) {
          permArr.push(tempArr.concat(el));
        } else {
          const permutation = el.slice(0, i).concat(tempArr).concat(el.slice(i));

          permArr.push(permutation);
        }
      }
    });

    return permArr;
  } else {
    const permArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        permArr.push(arr);
      } else {
        const value = [arr[i]];
        permArr.push(value.concat(arr.slice(0, i)));
      }
    }
    return permArr;
  }
}

const perm = permutations(arr);
