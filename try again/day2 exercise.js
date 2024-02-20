// ● Write a code to convert celsius to fahrenheit
// ○ Example: 60 Celcius → 140 Fahrenheit

// const celcius = 60;
// const farenheit = (celcius * 9) / 5 + 32;

// console.log(farenheit);

// ● Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number

// const num1 = 25;
// const num2 = 2;

// console.log(num1 % 2 !== 0 ? "odd number" : "even number");
// console.log(num2 % 2 === 0 ? "even number" : "odd number");

// ● Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number

// const number1 = 7;
// const number2 = 6;

// function checkPrime(number) {
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// console.log(checkPrime(number1));
// console.log(checkPrime(number2));

// ● Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 7

// function sumNumber(n) {
//   let sum = 0;
//   let message = "";
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//     message += i + (i !== n ? "+" : " ");
//   }
//   return [sum, message];
// }
// const numberA = 5;
// const numberB = 3;
// const [sumFinal, message] = sumNumber(numberB);

// console.log(`${message} = ${sumFinal}`);
// ● Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 4 x 3 x 2 x 1 = 720

const fact1 = 4;
let fact2 = 6;
let times = 1;

// function Factorial(factor) {
//     for (let i = factor; i >= 1; i--) {
//        times*=i ;
//     }
//     return times;

// }
function factorial2(fact) {
  for (let i = fact2; i >= 1; i--) {
    times *= i;
  }
  return times;
}

console.log(factorial2(fact2));

// ● Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610

function finNumber(fin) {
  let firsTerm = 0;
  let secondTerm = 1;


  for (let i = 1; i <= n; i++) {
    let nextTerm = firsTerm + secondTerm;
    firsTerm = secondTerm;
    secondTerm = nextTerm;
  }
  return firsTerm;
}
const n = 15;
console.log(finNumber(n));

