// Name : Franklin Miranda
// Date : 7/6/2023
// Description: The Euclidean algorithm to calculate the Greatest Common Divisor (GCD) of two positive integers using the remainder

let counter = 0;

function gcd (num1, num2) {
    if (num1 % num2 === 0 && num2 <= num1) {return num2}
    else if (num2 % num1 === 0 && num1 <= num2) {return num1}

    if (num1 >= num2) {num1 = num1 % num2}
    else if (num2 >= num1) {num2 = num2 % num1}
    
    counter++

   return gcd(num1, num2)
}



console.log(gcd(6765, 10946))
console.log(counter)