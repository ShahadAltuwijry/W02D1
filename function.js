// 1. sumation of two numbers

const sum = function (a, b) {
  console.log(a + b);
};

sum(5, 10);

// 2. average numbers

const average = function (c, d) {
  console.log((c + d) / 2);
};

average(20, 5);

// 3. factorial

let findFactorial = function (num1) {
  if (num1 == 0 || num1 == 1) {
    return 1;
  } else {
    return num1 * findFactorial(num1 - 1);
  }
};

num1 = 6; // => 720
findFactorial = findFactorial(num1);
console.log(findFactorial);

// 4. round number

const round = function (number) {
  console.log(Math.round(number));
};

round(0.8);
console.log(round);

// 5. power of number

const toThePowerOf = function (base, exponent) {
  console.log(Math.pow(base, exponent));
};

toThePowerOf(2, 3); // => 8
console.log(toThePowerOf);

// 6. random number

const randomNumber = function () {
  console.log(Math.random());
};

randomNumber();

// 7. one or zero

const oneOrZero = function (min, max) {
  min = Math.ceil(0);
  max = Math.floor(1);
  console.log(Math.floor(Math.random() * (2 - 0)));
};

oneOrZero();

// 8. number from a range

const randomRange = function (number) {
  console.log(Math.floor(Math.random() * number));
};

randomRange(10);

// 9. include

const includeOf = function (string, character) {
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === character) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
};

includeOf("Hello", "h"); // => false
