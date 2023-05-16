// Name : Franklin Miranda
// Date : 5/16/2023
// Description: A algorithm to recursively calculate a n fibonacci number

function recursiveFibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}


console.log(recursiveFibonacci(16))