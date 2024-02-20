// //no.1
// // Write a function to get the lowest, highest and average value in the array (with and without sort function).
// //  a.
// //  Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx

// const arr = [12, 5, 23, 18, 4, 45, 32];
// function lowestHighestAverage(arr) {
//   let lowest = Math.min(...arr);
//   let highest = Math.max(...arr);

//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   const average = sum / arr.length;
//   return {
//     lowest: lowest,
//     highest: highest,
//     average: average,
//   };
// }

// const result = lowestHighestAverage(arr);
// console.log(`Lowest: ${result.lowest}`);
// console.log(`highest: ${result.highest}`);
// console.log(`average: ${result.average}`);

// // no.2
// // Write a function that takes an array of words and returns a string by concatenating the words in the array,
// // separated by commas and - the last word - by an 'and'.
// //  a.
// //  Example : arr =  ["apple", "banana", "cherry", "date"]→ “apple,banana,cherry, and date”

// let fruits = ["apple", "banana", "cherry", "date"];

// function combineString(fruits) {
//   if (fruits.length === 0) return "";

//   const lastIndex = fruits.pop();

//   return fruits.join(", ") + (fruits.length ? ", " : "") + " and " + lastIndex;
// }
// console.log(combineString(fruits));

// //no.3
// // Write a function to split a string and convert it into an array of words
// //  a.
// //  Example : “Hello World” → [“Hello”, “World”]

// let inputString = "Hello World";

// function splitString(inputString) {
//   return inputString.split(" ");
// }

// console.log(splitString(inputString));

// //no. 4
// // Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// // of the same length.
// //  a.
// //  Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

// let arr1 = [1, 2, 3];
// let arr2 = [3, 2, 1];

// function calculate(arr1, arr2) {
//   let endResult = [];
//   for (let i = 0; i < arr1.length; i++) {
//     endResult.push(arr1[i] + arr2[i]);
//   }
//   return endResult;
// }

// console.log(calculate(arr1, arr2));

// //no. 5
// // Write a function that adds an element to the end of an array. However, the element should only be added if it is
// // not already in the array.
// //  a.
// //  Example : arr = [1, 2, 3, 4], newElement = 4   →   [1, 2, 3, 4]
// // b.
// //  Example : arr = [1, 2, 3, 4], newElement = 7   →   [1, 2, 3, 4, 7]

// let arra1 = [1, 2, 3, 4];
// let newElement = [4];

// function addNumber(arra1, newElement) {
//   if(newElement!== arra1){
//   return arra1.concat(newElement);
// } else{
//   return false;
// }
// }

// const arra2 = arra1.concat(newElement);
// let newElement2 = [1];

// console.log(addNumber(arra1, newElement));
// console.log(addNumber(arra2, newElement2));

// //no.6
// // // Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// // //  a.
// // //  Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]

// function evenNumber(numbers) {
//   return numbers.filter((numbers) => numbers % 2 === 0);
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(evenNumber(numbers));

// //no.7
// // Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// // array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// // array can only contain 5 elements).
// // a.maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// // The function will return [5, 10, 24, 3, 6]

// let maxSize1 = 5;
// let integer = [5, 10, 24, 3, 6, 7, 8];

// function limitArraySize(integer, maxSize1) {
//   return integer.splice(0, 5);
// }

// console.log(limitArraySize(integer, maxSize1));

// // no. 8
// // Write a function that will combine 2 given array into one array
// // a.
// // Example : arr1 = [1, 2, 3], arr2 =  [4, 5, 6] → [1, 2, 3, 4, 5, 6]
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// function concatenateArray(array1) {
//   return array1.concat(array2);
// }
// console.log(concatenateArray(array1));

// // no. 9
// // Write a function to find duplicate values in an array
// //  a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

// let num = [1, 2, 2, 2, 3, 3, 4, 5, 5];

// function duplicateNum(number) {
//   const duplicateAr = [];
//   const seen = [];

//   for (let num of number) {
//     if (!seen[num]) {
//       seen[num] = true;
//     } else if (!duplicateAr.includes(num)) {
//       duplicateAr.push(num);
//     }
//   }
//   return duplicateAr;
// }

// console.log(duplicateNum(num));

// // NO.10
// // Write a function to find the difference in 2 given array
// //  a. Example : arr1 = [1, 2, 3, 4, 5], arr2 =  [3, 4, 5, 6, 7] → [1, 2, 6, 7]
// let array3 = [1, 2, 3, 4, 5];
// let array4 = [3, 4, 5, 6, 7];

// function difference(array3, array4) {
//   const diff1 = array3.filter((item) => !array4.includes(item));
//   const diff2 = array4.filter((item) => !array3.includes(item));
//   return diff1.concat(diff2);
// }

// console.log(difference(array3, array4));
// //no.11
// // Based on the array below write a function that will return primitive data types only.                                            let
// // arr = [1, [], undefined, {}, "string", {}, []];
// //  a. The function will return [1, undefined, “string”]
// let arrNew = [1, [], undefined, {}, "string", {}, []];

// function primitivedata(arrNew) {
//   return arrNew.filter((arrNew) => typeof arrNew !== "object");
// }

// console.log(primitivedata(arrNew));
// //no.12
// //  Write a function from a given array of numbers and return the second smallest number
// //  a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
// let checkNumbers = [5, 3, 1, 7, 2, 6];
// function smallest(checkNumbers) {
//   checkNumbers.sort((a, b) => a - b);
//   return checkNumbers[1];
// }
// console.log(checkNumbers.sort());
// console.log(smallest(checkNumbers));

// //no.13
// //  Write a function from a given array of mixed data types and return the sum of all the number
// //  a.Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

// let mixedArray = ["3", 1, "string", null, false, undefined, 2];

// function sumNum(mixedArray) {
//   let sum = 0;
//   for (let i = 0; i < mixedArray.length; i++) {
//     if (typeof mixedArray[i] === "number") {
//       sum += mixedArray[i];
//     }
//   }
//   return sum;
// }

// console.log(sumNum(mixedArray));

// //no.14
// //  Write a function from the below array of number that will return sum of duplicate values.                                    let
// // arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// //  a. The function will return 40

// let array = [10, 20, 40, 10, 50, 30, 10, 60, 10];

// function sumdDuplicate(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     const num1 = array[i];

//     if (array.indexOf(num1) !== array.lastIndexOf(num1)) {
//       sum += num1;
//     }
//   }
//   return sum;
// }

// console.log(sumdDuplicate(array));

// // Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// // between rock, paper, or scissor.
// //  a.
// //  Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'



function userChoice() {
  let game = ["rock", "paper", "scissor"];
  let user = prompt("enter rock, paper, or scissor");
  user = user.toLowerCase();
  if (user === "rock" || user === "paper" || user === "scissor") {
    return user;
  } else {
    console.log("Please choose rock, paper, or scissors.");
    return userChoice();
  }
}

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * 2.9);
  return game[randomIndex];
}

function winner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Everyone is a winner";
  } else if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    return "You Win!";
  } else {
    return "Computer Wins!";
  }
}

function gameStart() {
  const getUserChoice = userChoice();
  const getComputerChoice = computerChoice();
  console.log("User choice:", getUserChoice);
  console.log("Computer choice:", getComputerChoice);
  console.log(winner(getUserChoice, getComputerChoice));
}

gameStart();

//======================
// no.4

// [1,2,3,4,5]
// [1,2,3]
function calculateArray(arr1, arr2) {
  const result = [];
  const maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
    const sum = (arr1[i] || 0) + (arr2[i] || 0);
    result.push(sum);
  }

  return result;
}

console.log(calculateArray([1, 2, 3, 4, 5], [1, 2, 3]));

//no.7

function maxSize(number, max) {
  const result = [];

  number.forEach((item) => {
    if (result.length === max) return; // memberhentikan loop
    result.push(item);
  });
  return result;
}

const max = 5;
const number = [5, 10, 24, 3, 6, 7, 8];
console.log(maxSize(number, max));

// no. 14
function sumdDuplicate(arr) {
  const duplicateValues = arr.filter((value, index, array) => {
    return array.indexOf(value) !== index;
  });
  console.log(duplicateValues); //patokan untuk looping dari for method

  let result = 0;
  for (let item of arr) {
    if (duplicateValues.includes(item)) {
      result += item;
    }
  }

  return result;
}

console.log(sumdDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]));


//no.15