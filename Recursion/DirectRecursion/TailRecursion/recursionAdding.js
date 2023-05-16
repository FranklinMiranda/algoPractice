// Name : Franklin Miranda
// Date : 5/16/2023
// Description: A algorithm to recursively sum numbers up to n

function iterativeSum(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function recursiveSum(n) {
  if (n === 0) {
    return n;
  }

  return n + recursiveSum(n - 1);
}

console.log(iterativeSum(4));
console.log(recursiveSum(4));
