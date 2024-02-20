// Exercise - Shooting Game
//  ● Specifications :
//  ○ Create a shooting game between two player
//  ○ Each player has three properties : name, health and power
//  ○ Each player will take turns to shooting
//  ○ Before shooting, players get a chance to get random items (health +10 or power +10)
//  ○ The game will continue until one of the players has health < 0
//  ● Requirements :
// ○ Create ShootingGame & Player class
//  ○ ShootingGame class :
// ■ constructor(player1, player2) → player objects as a parameter
//  ■ getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
//  ■ start() → start shooting games
//  ○ Player class :
//  ■ Property → name, health (default 100), power (default 10)
//  ■ hit(power) →  subtract player health
//  ■ useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
//  ■ showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
//  ○ ShootingGame start() function flow :
//  ■ In every turn :
//  ● Show each player status before shooting
//  ● Get random item for each player before shooting
//  ● Show each player status after shooting
//  ■ Show winner name

// class Player {
//   constructor(name) {
//     this.name = name;
//     this.health = 100;
//     this.power = 10;
//   }

//   hit(power) {
//     this.health -= power;
//   }

//   useItem(item) {
//     if (item.randomHealth) {
//       this.health += item.randomHealth;
//     } else {
//       this.power += item.randomPower;
//     }
//   }

//   showStatus() {
//     console.log(
//       `Player ${this.name} (Health => ${this.health}, Power => ${this.power})`
//     );
//   }
// }

// function getRandomItem() {
//   const item = [0, 10];
//   const indexItem = Math.floor(Math.random() * 1.9);
//   const randomPower = item[indexItem];
//   const randomHealth = item[indexItem];
//   return { randomHealth, randomPower };
// }

// class ShootingGame {
//   constructor(player1, player2) {
//     this.player1 = player1;
//     this.player2 = player2;
//     this.turn = 1;
//     this.winner = null;
//   }

//   start() {
//     while (!this.winner) {
//       console.log(`Turn ${this.turn}`);
//       this.player1.showStatus();
//       this.player2.showStatus();

//       const item1 = getRandomItem();
//       const item2 = getRandomItem();

//       this.player1.useItem(item1);
//       this.player2.useItem(item2);

//       this.player1.hit(this.player2.power);
//       this.player2.hit(this.player1.power);

//       if (this.player1.health <= 0) {
//         this.winner = this.player2;
//       } else if (this.player2.health <= 0) {
//         this.winner = this.player1;
//       }

//       this.turn++;
//     }

//     console.log(`GAME OVER, WINNER: ${this.winner.name}`);
//   }
// }

// const player1 = new Player("Aqta");
// const player2 = new Player("Bisa");

// const game = new ShootingGame(player1, player2);

// game.start();

// // no.2
// Exercise - Employee Salary
//  ● Specifications :
//  ○ Create a program to calculate total salary based on employee type
//  ○ There are two types of employee : full-time & part-time
//  ○ Salary for full-time employee :
// ■ IDR 100.000 / hour
//  ■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
//  ○ Salary for part-time employee :
// ■ IDR 50.000 / hour
//  ■ IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
//  ● Requirements :
//  ○ Create an Employee as a parent class
//  ○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
//  ■ Create a method in that class to add working hour per day
//  ■ Create a method in that class to calculate total salary
//  ○ Use inheritance concept

class Employee{
  constructor(hourlyRate){
    this.hourlyRate = hourlyRate;
    this.workingHours =0;
  }

  WorkingHours(hours){
    this.workingHours += hours
  }
  totalSalary(){
    if(this.workingHours<=6){
      return this.workingHours * this.hourlyRate
    }else{
      if (this instanceof FulltimeEmployee){
        return (6 * this.hourlyRate) + ((this.workingHours - 6) *75000);
      }else if(this instanceof ParttimeEmployee){
        return (6 * this.hourlyRate) + ((this.workingHours - 6) *30000);
      };
    }
  }

}

class FulltimeEmployee extends Employee{
constructor(){
  super(100000);
}

}

class ParttimeEmployee extends Employee{
constructor(){
  super(50000)
}
}

const fullTimeEmployee = new FulltimeEmployee();
const parTimeEmployee = new ParttimeEmployee();

fullTimeEmployee.WorkingHours(7);
parTimeEmployee.WorkingHours(5);

console.log(fullTimeEmployee.totalSalary());
console.log(parTimeEmployee.totalSalary());
