// Exercise 1
//  ● Create a function to calculate array of student data
//  ● The object has this following properties :
//  ○ Name → String
//  ○ Email → String
//  ○ Age → Date
//  ○ Score → Number
//  ● Parameters : array of student
//  ● Return values :
//  ○ Object with this following properties :
//  ■ Score
//  ● Highest
//  ● Lowest
//  ● Average
//  ■ Age
//  ● Highest
//  ● Lowest
//  ● Average

let student = [
  { name: "David", email: "davidal@gmail.com", age: 18, score: 85 },
  { name: "Abdul", email: "abdulah@gmail.com", age: 16, score: 75 },
  { name: "Richard", email: "Richard@gmail.com", age: 17, score: 92 },
];
console.log(student.length);
function calculateAverageScore(studentArray) {
  let totalScore = 0;

  for (let student of studentArray) {
    totalScore += student.score;
  }
  return totalScore / studentArray.length;
}

function calculateHighestScore(studentArray) {
  let topScore = 0;
  for (let student of studentArray) {
    topScore = Math.max(topScore, student.score);
  }
  return topScore;
}

function calculateLowestScore(studentArray) {
  let lowestScore = Infinity;
  for (let student of studentArray) {
    lowestScore = Math.min(lowestScore, student.score);
  }
  return lowestScore;
}

const highestScore = calculateHighestScore(student);
const averageScore = calculateAverageScore(student);
const lowestscore = calculateLowestScore(student);

function ageStatus(studentArray) {
  let highestAge = 0;
  let lowestAge = Infinity;
  let totalAge = 0;

  for (let student of studentArray) {
    highestAge = Math.max(highestAge, student.age);
    lowestAge = Math.min(lowestAge, student.age);

    totalAge += student.age;
  }

  const averageAge = totalAge / studentArray.length;

  return {
    highestAge: highestAge,
    lowestAge: lowestAge,
    averageAge: averageAge,
  };
}
const ageStat = ageStatus(student);

console.log(ageStat);

console.log(`Highest Score : ${highestScore} ||
             Average Score : ${averageScore} ||
             Lowest Score : ${lowestscore}`);

console.log(`Highest Age : ${ageStat.highestAge} ||
             Average Age : ${ageStat.averageAge} ||
             Lowest Age : ${ageStat.lowestAge}`);

// Exercise 2
//  ● Create a program to create transaction
//  ● Product Class
//  ○ Properties
//  ■ Name
//  ■ Price
//  ● Transaction Class
//  ○ Properties
//  ■ Total
//  ■ Product
//  ● All product data
//  ● Qty
//  ○ Add to cart method → Add product to transaction
//  ○ Show total method → Show total current transaction
//  ○ Checkout method → Finalize transaction, return transaction data

// class Product {
//   constructor(productName, price) {
//     this.productName = productName;
//     this.price = price;
//   }
// }

// class Transaction extends Product {
//   constructor(total, products, quantity) {
//     super();
//     this.total = 0;
//     this.products = [];
//     this.quantity = [];
//   }

//   addToCart(product, quantity) {
//     this.products.push(product);
//     this.quantity.push(quantity);
//     this.total += product.price * quantity;
//   }
//   showTotal() {
//     console.log(`Total: Rp  ${this.total}`);
//   }

//   checkOut() {
//     const dataOfTransaction = {
//       total: this.total,
//       product: this.products,
//       quantity: this.quantity,
//     };
//     return dataOfTransaction;
//   }
// }

// const products = {
//   Novel: new Product("Memorium", 85000),
//   Comic: new Product("One Piece", 50000),
// };

// const transaction = new Transaction();
// transaction.addToCart(products.Novel, 1);
// transaction.addToCart(products.Comic, 1);
// transaction.showTotal();
// const dataOfTransaction = transaction.checkOut();

// console.log(`Your Transaction:`, dataOfTransaction);

//=========================================================

//cara 1 pake build in method ======================================================

// class StudentDataCalculator {
//     constructor(students) {
//         this.students = students;
//     }
//     calculate() {
//         if (this.students.length === 0) {
//             return {
//                 Score: {},
//                 Age: {},
//             };
//         }

//     let maxScore, minScore, avgScore, maxAge, minAge, avgAge;

//     const sortScore = this.students.sort((a, b) => a.score -b.score);
//     const sumScore = this.students.reduce((a, b) => a + b.score, 0);
//     maxScore = sortScore[sortScore.length - 1].score;
//     minScore = sortScore[0].score;
//     avgScore = sumScore / this.students.length;

//     const sortAge = this.students.sort((a, b) => a.age - b.age);
//     const sumAge = this.students.reduce((a, b) => a + b.age, 0);
//     maxAge = sortAge[sortAge.length - 1].age;
//     minAge = sortAge[0].age;
//     avgAge = sumAge / this.students.length;

//     return{
//         Score:{
//             Highest: maxScore,
//             Lowest: minScore,
//             Average: avgScore,
//         },
//         Age: {
//             Highest: maxAge,
//             Lowest: minAge,
//             Average: avgAge,
//         },
//       };
//     }
// }

// // Example usage:
// const students = [
//     {
//         name: "Alice",
//         email: "alice@example.com",
//         age: 20,
//         score: 85,
//     },
//     {
//         name: "Bob",
//         email: "bob@example.com",
//         age: 21,
//         score: 92,
//     },
//     {
//         name: "Charlie",
//         email: "charlie@example.com",
//         age: 19,
//         score: 78,
//     },
// ]

// const result = new StudentDataCalculator(students);
// const studentData = result.calculate();
// console.log(studentData);

// cara 2 tanpa build in method ========================================================

class StudentDataCalculator {
  constructor(students) {
    this.students = students;
  }

  calculate() {
    if (this.students.length === 0) {
      return {
        Score: {},
        Age: {},
      };
    }

    //Initialize variables to calculate Score and Age properties
    let scoreSum = 0;
    let scoreHighest = this.students[0].score;
    let scoreLowest = this.students[0].score;

    let ageSum = 0;
    let ageHighest = this.students[0].age;
    let ageLowest = this.students[0].age;

    this.students.forEach((student) => {
      //Calculate Score Properties
      const score = student.score;
      scoreSum += score;
      if (score > scoreHighest) {
        scoreHighest = score;
      }
      if (score < scoreLowest) {
        scoreLowest = score;
      }

      //Calculate Age properties
      const age =
        new Date().getFullYear() - new Date(student.age).getFullYear();
      ageSum += age;
      if (age > ageHighest) {
        ageHighest = age;
      }
      if (age < ageLowest) {
        ageLowest = age;
      }
    });

    // Calculate averages
    const scoreAverage = scoreSum / this.students.length;
    const ageAverage = ageSum / this.students.length;

    return {
      Score: {
        Highest: scoreHighest,
        Lowest: scoreLowest,
        Average: scoreAverage,
      },
      Age: {
        // Highest: new Date().getFullYear() - new Date(ageHighest).getFullYear(),
        Highest: ageHighest,
        Lowest: ageLowest,
        Average: ageAverage,
      },
    };
  }
}

// Example usage:
const students = [
  {
    name: "Alice",
    email: "alice@example.com",
    age: 20,
    score: 85,
  },
  {
    name: "Bob",
    email: "bob@example.com",
    age: 21,
    score: 92,
  },
  {
    name: "Charlie",
    email: "charlie@example.com",
    age: 19,
    score: 78,
  },
];

const result = new StudentDataCalculator(students);
const studentData = result.calculate();
console.log(studentData);

// Exercise 2 ==========================================================================

class Product {
  constructor(name, price) {
      this.name = name;
      this.price = price;
  }
}

class Transaction {
  constructor(){
      this.cart = [];
      this.total = 0;
  }

  addToCart(product, qty){
      console.log(product);
      const existingProduct = this.cart.find(
          (item) => item.product.name === product.name
      );
     
  console.log(existingProduct);

  if (existingProduct) {
      existingProduct.qty += qty;
  } else {
      this.cart.push({product, qty});
  }

  this.total += product.price * qty;
  }
  

  showTotal(){
      return {message:`Total: Rp ${this.total.toLocaleString("id-ID")}`};
  }

  checkout(userMoney) {
      if (Number(userMoney) < this.total || !userMoney) {
          return { message: `Transaction failed: Insufficient funds.`};
      }
      const products = [];
      for (const item of this.cart){
          products.push({
              product:item.product.name,
              price: item.product.price,
              qty: item.qty,
          });
      }

      return {
          total: "Rp " + this.total.toLocaleString("id-ID"),
          cart: products,
          message: "Transaction success",
          remainingFunds: "Rp " + (userMoney - this.total).toLocaleString("id-ID"),
      };
    }
  }

//Example usage
const product1 = new Product("Apple", 2000);
const product2 = new Product("Mango", 15000);

const transaction = new Transaction();

transaction.addToCart((product1, 2));
console.log(transaction.showTotal());

transaction.addToCart((product2, 3));
transaction.addToCart((product2, 3));

const showTotal = transaction.showTotal();
console.log(showTotal);

const createTransaction  = transaction.checkout(100000);
console.log(createTransaction);