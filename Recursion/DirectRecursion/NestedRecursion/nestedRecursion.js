// Name : Franklin Miranda
// Date : 5/16/2023
// Description: A nested recursive function

function nestedRecursive(n) {
  if (n > 20) {
    return n - 5;
  } else {
    return nestedRecursive(nestedRecursive(n + 10));
  }
}

console.log(nestedRecursive(10));
console.log(counter);
