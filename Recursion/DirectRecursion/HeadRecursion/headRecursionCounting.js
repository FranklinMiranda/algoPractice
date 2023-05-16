// Name : Franklin Miranda
// Date : 5/16/2023
// Description: A head recursion algorithm to count up to a number

function countRecursive(n) {
  if (n > -1) {
    countRecursive(n - 1);

    console.log(n);
  }
}

countRecursive(3);

function countIterative(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}

countIterative(3)