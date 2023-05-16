// Name : Franklin Miranda
// Date : 5/16/2023
// Description: An recursive algorithm to find a factorial of a number

function recursiveFactorial(n, sum = 1) {
  if (n === 1) {
    sum *= n;
    return sum;
  }

  sum *= n

  return recursiveFactorial(n - 1, sum);
}


console.log(recursiveFactorial(5))