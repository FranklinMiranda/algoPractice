// Name : Franklin Miranda
// Date : 7/6/2023
// Description: The Euclidean algorithm to calculate the Greatest Common Divisor (GCD) of any sequence of numbers

let numArr = [72, 96, 120, 24];

function greatestCommonDivisor(array, gcd = array.shift()) {
  if (array.length === 0) {
    return gcd;
  }

  let result = array.shift();

  function euclideanAlgorithm(gcd, result) {
    if (gcd === result) {
      return gcd;
    }

    if (gcd > result) {
      gcd = gcd - result;
    } else if (gcd < result) {
      result = result - gcd;
    }

    return euclideanAlgorithm(gcd, result);
  }

  gcd = euclideanAlgorithm(gcd, result);

  return greatestCommonDivisor(array, gcd);
}

console.log(greatestCommonDivisor(numArr));
