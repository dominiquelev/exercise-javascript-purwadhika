// Write a code to convert celsius to fahrenheit
// ○ Example: 60 Celcius → 140 Fahrenheit

const celcius = 60;
const farenheit = (celcius * 9) / 5 + 32;
console.log(farenheit);

// ● Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number

const number = 25;
const number2 = 2;

// if (number % 2 == 0) {
//   console.log("even number");
// } else {
//   console.log("odd number");
// }

// console.log(number % 2 == 0);
// if (number2 % 2 == 0) {
//   console.log("even number");
// } else {
//   console.log("odd number");
// }

//cara lain
console.log(number % 2 == 0 ? "even number":"odd number");
console.log(number2 % 2 == 0 ? "even number":"odd number");

// ● Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number

// const num = 7;

// if ((num / 2) % 1) {
//   console.log("prime number");
// } else {
//   console.log("not a prime number");
// }

// jawaban no 3
const num = 7;
let isPrime = true;

//3.1
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime);

//3.2
// const num2 = 6;

// if ((num2 / 2) % 1) {
//   console.log("prime number");
// } else {
//   console.log("not a prime number");
// }

const num2 = 6;
let itsPrime = true;

for (let i = 2; i < num2; i++) {
  if (num2 % i == 0) {
    itsPrime = false;
    break;
  }
}

console.log(itsPrime);

// ● Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 7

// let n = 5;
// let sum = 0;
// let i = 1;

// while (i <= n) {
//   sum = sum + i;
//   i++;
// }
// console.log(sum);

//cara 2 dengan looping (untuk dapat mengeluarkan jumlah dan juga hitungan)

// const n = 5;
// let sum = 0;
// let message = "";

// for (let i = 1; i <= n; i++) {
//   sum += i;

//   message += i + (i !== n ? " + " : "");
// }

// console.log(sum);
// console.log(message + " = " + sum);

// let n1 = 3;
// let i1 = 1;
// let sum1 = 0;

// while (i1 <= n1) {
//   sum1 += i1;
//   i1++;
// }
// console.log(sum1);

// no.5
// ● Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 4 x 3 x 2 x 1 = 720

// let fact = 1;
// let nu = 4;
// let j = 1;

// while (j <= nu) {
//   fact = fact * j;
//   j++;
// }

// console.log(fact);

const num4 = 5;
let result = 1;
let message1 = "";

for (let i = 5; i >= 1; i--) {
  result *= i;
  message1 += i + (i === 1 ? "" : " x ");
}

console.log(result);
console.log(message1 + " = " + result);

let factor = 1;
let nu1 = 6;
let j1 = 1;

for (let j1 = 1; j1 <= nu1; j1++) {
  factor = factor * j1;
}

console.log(factor);



// ● Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610

// rumus finobacci Fn = F(n-1)+(fn-2)
// f15 = f14+13
// f3 = f2+f1

let x = 0; //urutan 1
let y = 1; // urutan 2
const n = 15;

for (let i = 0; i < n; i++) {
  let z = x + y; //menentukan rumus untuk jumlah urutan selanjutnya
  y = x;
  x = z;
  
}

console.log(x);


