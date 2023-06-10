// Name : Franklin Miranda
// Date : 6/10/2023
// Description: The Euclidean algorithm to calculate the Greatest Common Divisor (GCD) of two positive integers

function gcd(num1, num2) {
  if (num1 === num2) {
    return num1;
  } else if (num1 < 1 || num2 < 1) {return}

  if (num1 > num2) {
    num1 = num1 - num2;
  } else if (num2 > num1) {
    num2 = num2 - num1;
  }

  return gcd(num1, num2);
}

console.log(gcd(-10, 5))