// Name : Franklin Miranda
// Date : 5/16/2023
// Description: A algorithm to recursively calculate a n factorial

function iterativeFactorial(n) {
  let sum = 1;

  for (let i = 2; i <= n; i++) {
    sum *= i;
  }
  return sum;
}

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
}

console.log(iterativeFactorial(5));
console.log(recursiveFactorial(5));
