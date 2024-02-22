// var isPalindrome = function (s) {
//    let sNew= s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//    console.log(sNew);
//  let value = sNew === sNew.split("").reverse().join("");

//  return value;
// };
// var s = "A man, a plan, a canal: Panama";

// console.log(isPalindrome(s));

// console.log(s.split(" ").reverse());
// console.log(s.split(" ").reverse().join(""));

// var singleNumber = function (nums) {
//   const noDuplicate = [];
//   const seen = {};

//   for (const key of nums) {

//     if (!seen[key]) {
//       seen[key] = true;
//     } else if (noDuplicate.indexOf(key) === -1) {
//       noDuplicate.push(key);
//     }
//   }
//   return noDuplicate;
// };

// console.log(singleNumber(key));

// var nums = [2, 2, 1];

// var singleNumber = function (nums) {
//   const noDuplicate = [];
//   const seen = {};

//   for (const key of nums) {
//     if (!seen[key]) {
//       seen[key] = true;
//       noDuplicate.push(key);
//     } else {
//       const index = noDuplicate.indexOf(key);
//       if (index !== -1) {
//         noDuplicate.splice(index, 1);
//       }
//     }
//   }
//   return noDuplicate;
// };

// var nums = [2, 2, 1];
// console.log(singleNumber(nums));

// var containsDuplicate = function (nums) {
//     const duplicate =nums.filter((item, index) => nums.indexOf(item) !== index)
//   if (duplicate.length >0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// var nums = [1, 2, 3, 1];
// console.log(containsDuplicate(nums));

// var generate = function (numRows) {
//   if (numRows === 0) return [];
//   if (numRows === 1) return [[1]];
//   let result = [];

//   for (let i = 1; i <= numRows; i++) {
//     let num = [];
//     for (let j = 0; j < i; j++) {
//       if (j === 0 || j === i - 1) {
//         num.push(1);
//       } else {
//         num.push((result[i-2][j-1] + result[i-2][j]));
//       }
//     }
//     result.push(num);
//   }
//   return result;
// };
// console.log(generate(5));

// var romanToInt = function(s) {
//     const romanNumeral ={
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//     };
//     let result =0;
//     for(let i = 0 ; i< s.length ; i++){
//         const currSymbol = romanNumeral[s[i]];
//         const nextSymbol = romanNumeral[s[i+1]];

//         if(nextSymbol && currSymbol < nextSymbol){
//             result -= currSymbol;
//         }else{
//             result+= currSymbol
//         }
//     }
//     return result
// };

//  var s =  "LVIII";

//  console.log(romanToInt(s))
// var isPalindrome = function (x) {
//   let reverse = 0;
//   let original = x;

//   if (x < 0) {
//     return false;
//   }
//     while (x > 0) {
//       let y = x % 10;
//       reverse = (reverse * 10) + y;
//       x = Math.floor(x / 10);
//     }
//     return original === reverse;
//   };

// var x = 10;
// console.log(isPalindrome(x));

// var removeDuplicates = function (nums) {
//   var expectedNums = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[i + 1]) {
//       nums[expectedNums] = nums[i];
//       expectedNums++;
//     }
//   }
//   return expectedNums;
// };

// var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// var expect = [0, 1, 2, 3, 4]
// const k = removeDuplicates(nums);
// console.log(nums.slice(0, k))

// function removeElement(nums, val) {
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//       if (nums[i] !== val) {
//           nums[k] = nums[i];
//           k++;
//           console.log(nums[k]);
//           ;
//       }
//   }
//   return k;
// }

// var nums = [3,2,2,3];
// var val = 3;
// console.log(removeElement(nums, val)); // Output: [0, 1, 4, 0, 3]

// var lengthOfLastWord = function(s) {
//  var sNew = s.trim().split(" ");
//  var lastWord = sNew.length -1;
//     if(sNew[lastWord]=== ""){
//         return 0;
//     }else {
//         return sNew[lastWord].length
//     }
// };

// var s = "Hello World";
// console.log(lengthOfLastWord(s));

// var intToRoman = function (s) {
//   const romanHash = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   const romanNum =Object.keys(romanHash).reverse();
//   let accumulator = "";
//   let stringNum = s.toString();
//   for (let i = 0; i < stringNum.length; i++) {
//     const split = parseInt(stringNum[i]);
//     const placeValue = Math.pow(10, stringNum.length - i - 1);
//     let value = split * placeValue;
//     console.log(split);

//     for (const roman of romanNum) {
//       let valueRoman = romanHash[roman];
//       if (value >= valueRoman) {
//         accumulator += roman.repeat(Math.floor(value / valueRoman));
//         value %= valueRoman;
//         console.log(accumulator);
//       }
//     }
//   }
//   accumulator = accumulator.replace("DCCCC", "CM");
//   accumulator = accumulator.replace("CCCC", "CD");
//   accumulator = accumulator.replace("LXXXX", "XC");
//   accumulator = accumulator.replace("XXXX", "XL");
//   accumulator = accumulator.replace("VIIII", "IX");
//   accumulator = accumulator.replace("IIII", "IV");

//   return accumulator;
// };

// console.log(intToRoman(12));

// var containsDuplicate = function(nums) {

//   for (let i = 0; i < nums.length; i++) {
//     if(nums.length!== new Set(nums).size){
//       return true;
//     } else{
//     return false;
//   }
// }
// };

// var nums = [1,2,3,1];
// console.log(containsDuplicate(nums));

//   var containsNearbyDuplicate = function (nums, k) {
//     var map = new Map();
//     for(let i =0;i<nums.length;++i){
//         if(map.has(nums[i])&& Math.abs(map.get(nums[i])-i) <=k ){
//             return true;
//         }else {
//             map.set(nums[i],i);
//         }
//     }
//     return false;
// };

// var nums = [1,2,3,1];
// var k = [3];
// console.log(containsNearbyDuplicate(nums, k));

// var convertTemperature = function(celsius) {
//   const kelvin =celsius+273.15;
//   return kelvin
// };

// var celsius = [36.50];
// console.log(convertTemperature(celsius));

// var fizzBuzz = function (n) {
//   let answer = "";

//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       answer += "FizzBuzz ";
//     } else if (i % 3 === 0) {
//       answer += "Buzz ";
//     } else if (i % 5 === 0) {
//       answer += "Fizz ";
//     } else {
//       answer += i + " ";
//     }
//   }
//   console.log(answer);
// };
// var n = 15;
// console.log(fizzBuzz(n));

// var trailingZeroes = function (n) {
//   let result = 0;
//   for (let i = 5; i <= n; i *= 5) {
//     result += Math.floor(n / i);
//   }
//   return result;
// };

// var n = 5;

var sortArray = function(nums) {
    let result = nums.sort((a,b)=>a-b);
    return result;
};

var nums = [5,1,1,2,0,0]
expect = [0,0,1,1,2,5]
console.log(sortArray(nums));


var getConcatenation = function(nums) {
    
  let arr = nums
  let result = nums.concat(arr);
  return result


};
var nums = [1,2,1]
expect = [1,2,1,1,2,1]

console.log(getConcatenation(nums));