// NO 1

//  You are given a JavaScript class called Train that simulates a train's passenger management system.
//     The Train class has the following methods and properties:

//     - constructor(): Initializes the Train with an initial passenger, "masinis," and a maximum
//     capacity of 10 passengers.
//     - isFull(): Checks if the train is at full capacity. It returns true if the train is full
//     and false otherwise.
//     - isEmpty(): Checks if the train has no passengers except "masinis." It returns true if the
//     train is empty and false otherwise.
//     - showPassenger(): Returns an object that contains the list of passengers on the train and
//     the remaining available seats.
//     - passengerIn(name): Adds a passenger with the given name to the train. It returns "add passenger
//     success" if the passenger is successfully added, "train full" if the train is at full capacity,
//     and "passenger already exists" if the passenger is already on the train.
//     - passengerOut(name): Removes a passenger with the given name from the train. It returns
//     "remove passenger success" if the passenger is successfully removed, "cannot remove masinis"
//     if an attempt is made to remove the "masinis," "train empty" if the train is already empty, and
//     "passenger not found" if the passenger with the given name is not found on the train.

// class Train {
//   constructor() {
//     this.passengers = ["masinis"];
//     this.maxSize = 10;
//   }
//   #isFull() {
//     return this.passengers.length >= this.maxSize;
//   }
//   #isEmpty() {
//     return this.passengers.length === 1; //1 = masinisnya
//   }

//   showPassenger() {
//     return {
//       passengers: this.passengers, //untuk mengurangi jumlah dari masinis
//       availableSeat: this.maxSize - this.passengers.length,
//     };
//   }

//   passengerIn(name) {
//     if (this.#isFull()) {
//       return `train is full`;
//     }
//     if (this.passengers.includes(name)) {
//       return `the ${name} already exists`;
//     }
//     this.passengers.push(name);
//     return "add passenger success";
//   }

//   passengerOut(name) {
//     if (name === "masinis") {
//       return "cannot remove masinis";
//     }
//     if (this.#isEmpty()) {
//       return "Train is Empty";
//     }
//     const index = this.passengers.indexOf(name);
//     if (index === -1) {
//       return `${name} is not found`;
//     }
//     this.passengers.splice(index, 1);
//     return `remove ${name} success`;
//   }
// }

// const train = new Train();

// console.log(train.passengerIn("John"));
// console.log(train.passengerIn("Albert"));
// console.log(train.passengerIn("Jonas"));
// console.log(train.passengerIn("Jacob"));
// console.log(train.passengerIn("Dadang"));
// console.log(train.passengerIn("masinis"));
// console.log(train.passengerIn("Damang"));
// console.log(train.passengerIn("Wang"));
// console.log(train.passengerIn("Uda"));
// console.log(train.passengerIn("Bambang"));
// console.log;
// train.passengerIn("mamat");
// console.log(train.showPassenger());
// console.log(train.passengerOut("Jonas"));
// console.log(train.showPassenger());
// console.log(train.passengerOut("Bambang"));
// console.log(train.passengerOut("masinis"));
// console.log(train.passengerOut("John"));
// console.log(train.passengerOut("Albert"));
// console.log(train.passengerOut("Jonas"));
// console.log(train.passengerOut("Jacob"));
// console.log(train.passengerOut("Dadang"));
// console.log(train.passengerOut("masinis"));
// console.log(train.passengerOut("Damang"));
// console.log(train.passengerOut("Wang"));
// console.log(train.passengerOut("Uda"));
// console.log(train.passengerOut("Bambang"));

// NO 2

/*Write a JavaScript function called phoneNumber that takes a single argument input.
    The function is intended to format a phone number. It checks the input to ensure
    it meets certain criteria and then proceeds with formatting. The formatting
    includes replacing the leading "0" with "62" and creating a template in the
    format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The
    function returns the formatted phone number.

    - Check if the input is of type "string." If it's not, return "Invalid phone number."
    - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
    - Make sure the input all are numeric 0-9
    ex :
    input = "085244455555"
    output = "(6285)-2444-55555"
*/
// function phoneNumber(input) {
//   let output = [];

//   if (input.length !== 12 && typeof input.length !== "string") {
//     return "Invalid phone number";
//   }
//   const replaceNum = input.replace("0", "62");
//   const splitNum = replaceNum.split("");
//   console.log(replaceNum);

//   splitNum.splice(8, 0, "-");
//   splitNum.splice(4, 0, "-");
//   splitNum.splice(4, 0, ")");
//   splitNum.splice(0, 0, "(");

//   output.push(splitNum.join(""));
//   console.log(output);
//   return output.join();
// }
// const input = "085244455555";
// console.log(phoneNumber(input));

// typeof,replace,split,join

// ====================================================

// No. 2 Phone Number

function phoneNumber(input) {
  // - Check if the input is of type "string." If it's not, return "Invalid phone number."
  if (typeof input !== "string") {
    return "Invalid phone number";
  }
  // - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
  if (input.length !== 12) {
    return "Invalid phone number";
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] < "0" || input[i] > "9") {
      return "Invalid phone Number";
    }
  }
  input = "62" + input.slice(1);
  console.log(input);
  let template = "(xxxx)-xxxx-xxxxx";
  console.log(input.split(""));
  input.split("").forEach((item) => {
    // di split terlebih dahulu menjadi permasing" index
    template = template.replace("x", item); // template di replace dengan menggunakan item dari array yang sudah di split
  });
  return template;
}

phoneNumber("085244455555");

console.log(phoneNumber("085244455555"));

// no.1  train


class Train{
  constructor(){
  this.container = ["masinis"]; //untuk passenger
  this.maxSize = 10;
  }


#isFull() {
  return this.container.length === this.maxSize;
}

#isEmpty (){
  return this.container.length === 1;
}

showPassenger(){
  return{
    passenger : this.container,
    remainingSeat : this.maxSize - this.container.length
  }
}

passengerIn(name){
  if(this.#isFull()){
    return "train full";
  }
  if(this.container.includes(name)){
    return "passenger already exist";
  }
  this.container.push(name);
  return "add passenger success";

}

passengerOut(name){
if(name === "masinis"){
  return "cannot remove masinis";
}

if(this.#isEmpty()){
  return"train empty";
}

const index = this.container.indexOf(name);

if(index === -1){ //karena ingin mengecek index jadi length harus di -1
  return "passenger not found";
}
this.container.splice(index,1);
}}


const train = new Train;

console.log(train.passengerIn("a"));
console.log(train.passengerIn("b"));
console.log(train.passengerIn("c"));
console.log(train.passengerIn("d"));
console.log(train.passengerIn("e"));
console.log(train.passengerIn("f"));
console.log(train.passengerIn("g"));
console.log(train.passengerIn("h"));
console.log(train.passengerIn("masinis"));
console.log(train.passengerIn("i"));
console.log(train.showPassenger());
console.log(train.passengerOut("a"));