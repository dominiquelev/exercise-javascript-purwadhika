// You have implemented the BankQueue class to manage customer queues in a bank. In this scenario,
//     you can perform operations such as adding customers to the queue, calling the next customer, and
//     counting the number of customers in the queue.

//    constructor:
//    - this.queue

//    method :
//    - enqueue : menambahkan value baru dalam antrian
//    - dequeue : menghilangkan value paling depan dalam antrian
//    - size : melihat jumlah antrian saat ini

class Queue {
  #customer;
  constructor(queue) {
    this.queue = queue;
    this.#customer = [];
    
    
  }

  enqueque(customer) {
    return this.#customer.push(customer);
  }

  dequeque() {
    return this.#customer.shift();
  }
  size() {
    return this.#customer;
  }
}
const queue = new Queue();

console.log(queue.enqueque("dom"));
console.log(queue.enqueque("fianda"));
console.log(queue.enqueque("albert"));
console.log(queue.enqueque("matane"));
console.log(queue.enqueque("mana"));

console.log(queue.size())

console.log(queue.dequeque());
console.log(queue.dequeque());
console.log(queue.dequeque());
console.log(queue.dequeque());
console.log(queue.dequeque());
console.log(queue.dequeque());
console.log(queue.size());