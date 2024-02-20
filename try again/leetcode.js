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

