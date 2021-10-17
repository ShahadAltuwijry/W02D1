let sum = function (a, b) {
  sum = a + b;
};
console.log(sum);

sum(5, 10);

let average = function (c, d) {
  average = (c + d) / 2;
};

console.log(average);

average(20, 5);

/*  
   5! = 5 * 4 * 3 * 2 * 1
 */

let findFactorial = function (num1) {
  if (num1 == 0 || num1 == 1) {
    return 1;
  } else {
    return num1 * findFactorial(num1 - 1);
  }
};

num1 = 3;
findFactorial = findFactorial(num1);
console.log(findFactorial);
/*
Examples:
findFactorial(1) // => 1
findFactorial(3) // => 6
findFactorial(4) // => 24
findFactorial(6) // => 720
findFactorial(11) // => 39916800
*/

let round = function (number) {
  console.log(Math.round(number));
};

round(0.8);
console.log(round);

let toThePowerOf = function (base, exponent) {
  console.log(Math.pow(base, exponent));
};

toThePowerOf(2, 3);
console.log(toThePowerOf);
