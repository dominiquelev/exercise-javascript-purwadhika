// no 1
// ● Create a function to check if two objects are equal
// ● Example
//  ○ Input :  { a: 2 } & { a: 1 }
//  ○ Output: false
//  ● Example
//  ○ Input :  { a: “Hello” } & { a: 1 }
//  ○ Output: false
//  ● Example
//  ○ Input :  { a: 1 } & { a: 1 }
//  ○ Output: true

// const object1 = {a : 2}
// const object2 = {a: 1}

// function check(object1, object2){
//     const key1 = Object.keys(object1);
//     const key2 = Object.keys(object2);

//     if (key1.length !== key2.length) {
//         return false;
//     } for (let key of key1){
//         if(key2.length !== key1.length){
//             return false;
//         }
//     }
//     return true;
// }

// const object1 = {a : 1}
// const object2 = {a: 1}

// console.log(check(object1,object2));

// const key = { a: "hello" };
// const key1 = { a: 1 };

//  const check = (key,key1)=> {
//   let value = key.a === key1.a;
//   return value;
//  }

// console.log(check(key, key1));

// const obj = { a: 1 };
// const obj1 = { a: 1 };

// function check(obj, obj1) {
//  let value = obj.a === obj1.a ;
//   return value;

// }
// console.log(check(obj,obj1));
//no.2
// ● Create a function to get the intersection of two objects
// ● Example
// ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// ○ Output: { a: 1 }

// function findIntersection(obj1, obj2) {
//   const key1 = Object.keys(obj1);
//   const key2 = Object.keys(obj2);

//   const commonKeys = key1.filter((key) => key2.includes(key));
//   const intersection = {};

//   commonKeys.forEach((key) => {
//     intersection[key] = obj1[key];
//   });

//   return intersection;
// }
// cara 2 <muksal>

// const obj1 = { a: 1, b: 2 };
// const obj2 = { a: 1, c: 3 };
// console.log(intersection(obj1, obj2));

//no.3
// ● Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
// ● Example :
// Array1 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  },
// { name: ‘Student 2’, email : ‘student2@mail.com’  }
// ]
// Array2 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  },
// { name: ‘Student 3’, email : ‘student3@mail.com’  }
// ]
// ● Result :
// ArrayResult → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  },
// { name: ‘Student 2’, email : ‘student2@mail.com’  },
// { name: ‘Student 3’, email : ‘student3@mail.com’  }
//]

// const array1 = [
//   { name: "David", email: "davidal@gmail.com" },
//   { name: "Abdul", email: "abdulah@gmail.com" },
// ];

// const array2 = [
//   { name: "Abdul", email: "abdulah@gmail.com" },
//   { name: "Richard", email: "Richard@gmail.com" },
// ];

// const mergerStudent = [...array1, ...array2];
// console.log(mergerStudent);

// const mergerStudent1 = [];
// const entryData = [];

// mergerStudent.forEach((student) => {
//   const key = student.email;

//   if (!entryData[key]) {
//     entryData[key] = true;
//     mergerStudent1.push(student);
//   }
// });

// console.log(mergerStudent1);

//no.4
// ● Create a function that can accept input as an array of objects and switch all values into property and
// property into value
//  ● Example :
// ○ Input : [{ name: ‘David’, age: 20 }]
//  ○ Output : [{ David: ‘name’, 20: ‘age’}]

// const data = { name: "David", age: 20 };
// const reverse = {};

// function reverseObj(data) {
//   for (const key in data) {
//     if (Object.hasOwnProperty.call(data, key)) {
//       const value = data[key];
//       reverse[value] = key;
//     }
//   }
//   return reverse;
// }
// console.log(reverseObj(data));

//no.5
// ● Create a function to find a factorial number using recursion
// ● Example
// ○ Input : 5
// ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

// const n = 5;
// let result = 0;

// function factorrial(n) {
//   if (n === 0) {
//     return (result = 1);
//   } else {
//     return n * factorrial(n - 1);
//   }
// }

// console.log(factorrial(n));

//===================================================================

//no.1 (FOR OF)
// function objectEqual(obj1, obj2) {
//   const key1 = Object.keys(obj1); // MENAMPUNG SEMUA KEY YANG ADA DI OBJ1
//   const key2 = Object.keys(obj2);

//   if (key1.length !== key2.length) {
//     // kalau length nya berbeda contoh obj1 ada key a, dan b.
//     return false; // sedangkan key 2 hanya terdapat a, maka akan langsung false karena berbeda length
//   }

//   for (const key of key1) {
//     // lanjut looping karena ternya length sudah sama
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//     return true;
// }

// const obj1 = { a: 2 };
// const obj2 = { a: 1 };
// console.log(objectEqual(obj1, obj2));

// no.2
//INTERSECTION
// arrow function
//
const intersection = (obj1, obj2) => {
  const duplicate = {};

  for (let key in obj1) {
    // tidak akan berubah karena melakukan pengecekan object bukan index
    console.log(key);
    console.log(obj1[key] == obj2[key]);
    if (obj1[key] == obj2[key]) {
      //obj2 hanya untuk pengecekan, tidak dilooping
      duplicate[key] = obj1[key];
    }
  }
  return duplicate;
};

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, c: 3 };

console.log(intersection(obj1, obj2));

// no.3
//arrow function

// const removeDuplicate =(array1,array2)=>{
//   const combineArr = [...array1,...array2];

//   // console.log(combineArr);

//   const result = [];

//   for(let i =0 ; i<combineArr.length; i++){
//     //mereturn array baru
//     const duplicateValues = result.filter((val)=>{
//       return val.email === combineArr[i].email;
//     });

//     // console.log(duplicateValues);// mengecek hasil filter( ditemukan email yang sama)

//     // console.log(result);
//     if (!duplicateValues.length) {
//     result.push(combineArr[i]);
//     }
//   }

// return result;
// };

// const array1 = [
//   { name: "David", email: "davidal@gmail.com" },
//   { name: "Abdul", email: "abdulah@gmail.com" },
// ];

// const array2 = [
//   { name: "Abdul", email: "abdulah@gmail.com" },
//   { name: "Richard", email: "Richard@gmail.com" },
// ];

// console.log(removeDuplicate(array1,array2));

//no.4
// arrow function

const switchValue = (data) => {
  const result = [];
  console.log(data);

  data.forEach((item) => {
    //item looping1 ->{ name: "David", age: 20 }
    let temp = {};

    for (let key in item) {
      console.log(key);
      console.log([item[key]]);
      temp[item[key]] = key;

      // temp.["David"] = "name"; // item[key] = item.name
      // temp.["20"] = "age";
    }
    result.push(temp);
  });

  return result;
};

const arg = [{ name: "David", age: 20 }, { hobby: "makan" }];

console.log(switchValue(arg));

//no.5
// if condition

// function factorial(n){
//   if(n===0){
//     return 1;
//   } else {
//     return n*factorial(n-1);
//   }
// }

// const n =5;

// console.log(`factorial ${n}! =  ${factorial(n)}`);

const factorial = (n) => {
  if (n === 1) {
    return {
      step: ["1"],
      total: 1,
    };
  } else {
    const next = factorial(n - 1);

    return {
      step: [n, ...next.step],
      total: n * next.total,
    };
  }
};

const number = 5;

const { step, total } = factorial(number);
console.log({ step, total });

console.log(step.join(" x ") + " = " + total);
