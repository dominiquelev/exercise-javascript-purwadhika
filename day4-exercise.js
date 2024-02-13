// // no.1
// // ● Create a function that can create a triangle pattern according to the height we provide like the
// // following :
// //  01
// //  02  03
// //  04  05  06
// //  07  08  09  10
// //  ● Parameters : height → triangle height

// function triangle(height) {
//   let num = 1;

//   for (let i = 1; i <= height; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += (num < 10 ? "0" : "") + num + " ";
//       num++;
//     }
//     console.log(row);
//   }
// }

// triangle(4);

// // // no.2
// // ● Create a function that can loop the number of times according to the input we provide, and will
// // replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// // "FizzBuzz".
// //  ● Parameters : n → total looping
// //  ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// //  ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

// const n = [1, 2, 3, 4, 5, 6];
// n.splice(2, 1, "Fizz");
// console.log(n);
// n.splice(5, 1, "Fizz");
// console.log(n);

// // n2= 15
// let n2 = [];

// for (let i = 1; i <= 20; i++) {
//   n2.push(i);
// }

// console.log(n2.length);

// for (let i = 0; i <= n2.length; i++) {
//   if (n2[i] % 5 === 0 && n2[i] % 3 === 0) {
//     n2.splice(i, 1, "FizzBuzz");
//   } else if (n2[i] % 3 === 0) {
//     n2.splice(i, 1, "Buzz");
//   } else if (n2[i] % 5 === 0) {
//     n2.splice(i, 1, "Fizz");
//   }
// }

// console.log(n2);

// // no.3
// // ● Create a function to calculate Body Mass Index (BMI)
// // ● Formula : BMI = weight (kg) / (height (meter))²
// // ● Parameters : weight & height
// // ● Return values :
// // ○ < 18.5 return “less weight”
// // ○ 18.5 - 24.9 return “ideal”
// // ○ 25.0 - 29.9 return “overweight”
// // ○ 30.0 - 39.9 return “very overweight”
// // ○ > 39.9 return “obesity

// function calculateBmi(weight, heightCm) {
//   let heightInM = heightCm / 100;
//   return weight / (heightInM * heightInM);
// }

// const weight = 75; // kg
// const height = 165; // cm

// const bmi = calculateBmi(weight, height);
// let result;

// if (bmi < 18.5) {
//   result = "less weight";
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//   result = "ideal";
// } else if (bmi >= 25 && bmi <= 29.9) {
//   result = "overweight";
// } else if (bmi >= 30 && bmi <= 39.9) {
//   result = "very overweight";
// } else {
//   result = "obesity";
// }

// console.log(`BMI: ${bmi}`);
// console.log(`Result : ${result}`);

// // no.4
// // Write a function to remove all odd numbers in an array and return a new array that contains even
// // numbers only
// //  ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

// let number = [, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const oddNumber = number.filter((number) => number % 2 === 0);
// console.log(oddNumber);

// //no.5
// // Write a function to split a string and convert it into an array of words
// //  ○ Example : “Hello World” → [“Hello”, “World”

// const kata = ["Hello World"];
// const word = kata.split(" ");

// console.log(word);

//===================

// no .1

// function triangle(height){
//   for(let i = 1 ; i<=height ; i++){
//     let row ="";
//     for (let j = 1; j <= i ; j++) {
//       row +=j + " ";
//     }
//     console.log(row);
//   }
// }

// triangle(5);

// versi "0(number)"

// function triangle(height) {
//   let currentNumb = 1;

//   for (let i = 1; i <= height; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += (currentNumb < 10 ? "0" : "") + currentNumb + " ";
//       currentNumb++;
//     }
//     console.log(row);
//   }
// }

// triangle(4);

// // no.2
// function fizzBuzz(n) {
//   let message = "";


// for (let i = 1; i <= n; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     message += "FizzBuzz " ;
//   } else if (i % 3 === 0) {
//     message += "Buzz " ;
//   } else if (i % 5 === 0) {
//     message += "Fizz " ;
//   } else {
//     message += i + " ";
//   }
// }
// console.log(message);
// }

// fizzBuzz(15);


//no.3
// function calculateBmi(weight, height) {
//   let bmi =weight / (height * height);


// if (bmi < 18.5) {
//   return  "less weight";
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//   return  "ideal";
// } else if (bmi >= 25 && bmi <= 29.9) {
//   return  "overweight";
// } else if (bmi >= 30 && bmi <= 39.9) {
//   return  "very overweight";
// } else {
//   return  "obesity";
// }
// }
// const result = calculateBmi(70,1.75);
// console.log(`Result : ${result}`);

//no. 4
// menggunakan build in method

// function removeOddNumbers(arr) {
//   return arr.filter((item)=>item % 2===0);
// }
// const inputArr= [1,2,3,4,5,6,7,8,9,10];

// console.log(removeOddNumbers(inputArr);

// tidak menggunakan build in method

// function removeOddNumbers2(arr) {
//   const evenNumber = [];

//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%2 == 0){
//       evenNumber.push(arr[i]);
//     }
//   }
//   return evenNumber;
// }

// const inputArr =[1,2,3,4,5,6,7,8,9,10]
// console.log(removeOddNumbers2(inputArr));


//no. 6

// function splitString(input) {
//   return input.split (" ");
  
// }

// console.log(splitString("Hello World"));


// tanpa menggunakan build in method 

const splitString = function(input) {
  const kata = [];
  let temp = "";

for (let i = 0; i < input.length ; i++) {
  if(input[i]=== " ") {
    kata.push(temp);
    temp = "";
    continue;
  }

  temp += input[i];
}
kata.push(temp);

return kata;
}

console.log(splitString("Hello World Jogja"));