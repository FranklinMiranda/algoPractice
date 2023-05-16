// Name : Franklin Miranda
// Date : 5/16/2023
// Description: A algorithm to recursively calculate a n fibonacci number

let counter = 1

function recursiveFibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  const fibonacci1 = recursiveFibonacci(n - 1);
  if (fibonacci1 === 1 && counter === 1) {
    console.log(0);
    console.log(1);
    counter += 1;
  } else if (n - 1 === counter) {
    console.log(fibonacci1);
    counter += 1;
  }

  return recursiveFibonacci(n - 2) + fibonacci1;
}

console.log(recursiveFibonacci(16));
