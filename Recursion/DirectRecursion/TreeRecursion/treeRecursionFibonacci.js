// Name : Franklin Miranda
// Date : 5/16/2023
// Description: A tail tree recursive algorithm to calculate a n fibonacci number

function tailTreeRecursiveFibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  return tailTreeRecursiveFibonacci(n - 1) + tailTreeRecursiveFibonacci(n - 2);
}

console.log(tailTreeRecursiveFibonacci(16));
