// Name : Franklin Miranda
// Date : 5/16/2023
// Description: A algorithm to recursively count down from a number n

function countRecursive(n) {
  if (n === 0) {
    console.log(n);
    return;
  }

  console.log(n);

  return countRecursive(n - 1);
}

countRecursive(3);

function countIterative(n) {
  for (n; n >= 0; n--) {
    console.log(n);
  }
}

countIterative(3);
