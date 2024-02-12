// // NO.1
// // Write a code to display the multiplication table of a given integer.
// // ○ Example : Number → 9
// // ○ Output :
// // ■ 9 x 1
// // ■ 9 x 2
// // ■ …
// // ■ 9 x 10

// // no. 1
// // let input = 9;
// // let limit = 10;
// // let result = "";
// // let message = "";

// // for (let i = 1; i <= limit; i++) {
// //   result = input * i;
// //   message += `9 x ${i} = ${result}\n`; // \n = new line
// //   console.log(result);
// // }

// // console.log(message);

// //NO.2
// // Write a code to check whether a string is a palindrome or not.
// // ○ Example : ‘madam’ → palindrome
// const palindrome = "madam";
// for (let i = palindrome.length; i >= palindrome.length; i--) {
//   if ((palindrome[i] = palindrome.charAt(palindrome.length) - 1)) {
//     console.log(`${palindrome} is palindrome`);
//   } else console.log(`${palindrome} isn't palindrome`);
// }

// //NO.3
// // ● Write a code to convert centimeter to kilometer.
// // ○ Example : 100000 → “1 km”
// const cm = 100000;
// const km = cm / 10 ** 5;

// console.log(`${km} km`);

// //NO.4
// // ● Write a code to format number as currency (IDR)
// // ○ Example : 1000 → “Rp. 1.000,00”
// let rupiah = 1000;
// const idr = new Intl.NumberFormat("id-ID", {
//   style: "currency",
//   currency: "IDR",
// }).format(rupiah);
// console.log(idr);

// //NO.5
// // ● Write a code to remove the first occurrence of a given “search string” from a string
// // ○ Example : string = “Hello world”, search string = “ell” → “Ho world”

// let originalS = "Hello world";
// const searchS = "ell";
// const index = originalS.indexOf(searchS);
// let result = "";

// if (index !== -1) {
//   result = originalS.slice(0, index) + originalS.slice(index + searchS.length);
// }
// console.log(result);

// // N0.6
// // ● Write a code to capitalize the first letter of each word in a string
// // ○ Example : “hello world” → “Hello World”

// let name = "hello world";
// let split = name.split(" ");
// console.log(name);
// console.log(split[0][0]);
// console.log(split[0].substring(1));

// for (let i = 0; i < split.length; i++) {
//   split[i] = split[i][0].toUpperCase() + split[i].substring(1);
// }
// let capitalizeS = split.join(" ");
// console.log(capitalizeS);

// //NO.7
// // ● Write a code to reverse a string.
// // ○ Example : “hello” → “olleh”
// let words = "hello";
// console.log(words.length);
// let reverse = "";

// for (let i = words.length - 1; i >= 0; i--) {
//   reverse += words[i];
// }
// console.log(reverse);

// //NO. 8
// // ● Write a code to swap the case of each character from string
// // ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
// let sentence1 = "The QuiCk BrOwN Fox";
// let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let lowerCase = "abcdefghijklmnopqrstuwvqyz";
// let otherResults =[];

// for(let i = 0 ; i<sentence1.length;i++){
//   if (upperCase.indexOf(sentence1[i]) !== -1) {
//     otherResults.push(sentence1[i].toLowerCase());
//   } else if (lowerCase.indexOf(sentence1[i] !== -1)){
//   otherResults.push(sentence1[i].toUpperCase());
// } else{
//   otherResults.push(sentence1[i]);
// }
// }

// console.log(otherResults.join(""));

// //NO.9
// //  ● Write a code to find the largest of two given integers
// //  ○ Example : num1 = 42, num2 = 27 → 42
// const num1 = 42;
// const num2 = 27;

// console.log(num1 > num2 ? num1 : num2);

// //NO.10
// //  ● Write a conditional statement to sort three numbers
// //  ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
// let number1 = 42;
// let number2 = 27;
// let number3 = 18;

// if (number1 > number2) {
//   let x = number1;
//   number1 = number2;
//   number2 = x;
// }

// if (number1 > number3) {
//   let x = number1;
//   number1 = number3;
//   number3 = x;
// }

// if (number2 > number3) {
//   let x = number2;
//   number2 = number3;
//   number3 = x;
// }

// console.log(`${number1},  ${number2}, ${number3}`);

// // NO.11
// //  ● Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// // type.
// //  ○ Example : “hello” → 1

// // no.11
// let input = "hello";
// let otherResult = "";

// if (typeof input === "string") {
//   otherResult = 1;
// } else if (typeof input === "number") {
//   otherResult = 2;
// } else {
//   otherResult = 3;
// }

// console.log(otherResult);

// //NO.12
// // ● Write a code to change every letter a into * from a string of input
// // ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`

// let sentence = "An apple a day keeps the doctor away";
// let change = "*";
// let anotherResult = "";

// for (let i = 0; i < sentence.length; i++) {
//   if(sentence[i]==="a"|| sentence[i]==="A"){
//     anotherResult+=change;
//   } else {
//     anotherResult+=sentence[i];
//   }

// }
// console.log(anotherResult);

// ===============================================================================
// No.1

const angka = 9;
for (let i = 1; i <= 10; i++) {
  console.log(`${angka} x ${i} = ${angka * i}`);
}

// No.2
//// build in Method
const word = "jogja";
const isPalindrome = word === word.split("").reverse().join("");

console.log(isPalindrome);

//mengecek satu-satu
console.log(word.split(""));
console.log(word.split("").reverse());
console.log(word.split("").reverse().join(""));

//// tanpa build in method
let reverse = "";
for (let i = word.length - 1; i >= 0; i--) {
  reverse += word[i];
  console.log(word[i]);
}
console.log(reverse);

// no.3
const cm = 100000;
const km = cm / 10 ** 5;
console.log(`${cm} cm = ${km} km`);

// no.4
const harga = 1000;
const rupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0, // untuk menghilangkan ,00
});

console.log(rupiah.format(harga));

// no. 5
const words = "Hello World";
const search = "ell";
const replaceWith = "";

const remove = words.replace(search, replaceWith);
console.log(remove);

//no. 6
const input = "hello world";
let kata = input.split(" ");

console.log(kata);

for (let i = 0; i < kata.length; i++) {
  kata[i] = kata[i][0].toUpperCase() + kata[i].slice(1);

  console.log(kata[i].slice(1));
}
console.log(kata);
console.log(kata.join(" "));

//no.7
//// cara buil in method
const word1 = "hello";
const tryReverse = word1.split("").reverse().join("");

console.log(tryReverse);

////tanpa build in method

let message = "";

for (let i = word1.length - 1; i >= 0; i--) {
  message = message + word1[i];
}

console.log(message);

// no. 8
const sentence = "The QuiCk BrOwN Fox";
let swapString = "";

for (let i = 0; i < sentence.length; i++) {
  const char = sentence[i];

  console.log(sentence[i].toUpperCase());
  console.log(char);

  if (char === sentence[i].toUpperCase()) {
    swapString = swapString + char.toLowerCase();
  } else {
    swapString = swapString + char.toUpperCase();
  }
}

console.log(swapString);

// no. 9

// no .10
const num1 = 42;
const num2 = 27;
const num3 = 18;

const smallest = Math.min(num1, num2, num3);
const largest = Math.max(num1, num2, num3);
const middle = num1 + num2 + num3 - smallest - largest;

console.log(smallest);
console.log(largest);
console.log(middle);

console.log(`${smallest}, ${middle}, ${largest}`);

// no. 11

let input1 = "hello";
let type;

if (typeof input1 === "string") {
  type = 1;
} else if (typeof input1 === "number") {
  type = 2;
} else {
  type = 3;
}

console.log(type);

// no.12

const inputString = "An apple a day keeps the doctor away".toLowerCase();
console.log(inputString);
let replaceWord = "a";
let modifiedString = "";

for (let i = 0; i < inputString.length; i++) {
  if (inputString[i] === replaceWord) {
    modifiedString = modifiedString + "*";
  } else{
    modifiedString = modifiedString+ inputString[i];
  }
}

console.log(modifiedString);
