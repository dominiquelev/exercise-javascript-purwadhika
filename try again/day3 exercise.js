// ● Write a code to display the multiplication table of a given integer.
// ○ Example : Number → 9
// ○ Output :
// ■ 9 x 1
// ■ 9 x 2
// ■ …
// ■ 9 x 10

// let result = "";
// let limit = 10;
// let num = 9;

// for (let i = 1; i <= limit; i++) {
//   result = num * i;
//   console.log(`${num} x ${i} = ${num * i}`);
// }

// ● Write a code to check whether a string is a palindrome or not.
// ○ Example : ‘madam’ → palindrome
// let word = "madam";
// const palindrome = {};
// function isPalindrome(word) {
//   let palindrome = word === word.split("").reverse().join("");
//   return palindrome;
// }

// console.log(isPalindrome(word));
// ● Write a code to convert centimeter to kilometer.
// ○ Example : 100000 → “1 km”

// const cm = 100000;
// let km = {};
// function convert(cm) {
//   let km = cm / 10 ** 5;
//   return `${km} km`;
// }
// console.log(convert(cm));

// ● Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,00”

// const price = 1000;
// let currency = {};

// function formatNum(price) {
//   currency = new Intl.NumberFormat("id-ID", {
//     style: "currency",
//     currency: "IDR",
//     maximumSignificantDigits: 1
//   });
//   return currency;
// }

// console.log(formatNum(price).format(price));
// ● Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”
// const words = "Hello world";
// const search = "ell";
// const replaceWith = "";

// function searchWord(words) {
//   const remove = words.replace(search,replaceWith);
//  return remove;
// }

// console.log(searchWord(words));

// ● Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”

const words = "hello world";
  const input = words.split(" ");
function upperCase(words) {

for (const key in words) {
  if (Object.hasOwnProperty.call(object, key)) {
      kata = input[0].toUpperCase() 
    
  }
}

  
}
console.log(input);


// ● Write a code to reverse a string.
// ○ Example : “hello” → “olleh”
// ● Write a code to swap the case of each character from string
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
//  ● Write a code to find the largest of two given integers
//  ○ Example : num1 = 42, num2 = 27 → 42
//  ● Write a conditional statement to sort three numbers
//  ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
//  ● Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.
//  ○ Example : “hello” → 1
//  ● Write a code to change every letter a into * from a string of input
//  ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y
