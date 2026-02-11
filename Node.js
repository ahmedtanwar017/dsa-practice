// import http from 'http'
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/plain'})
//     res.end("hello World")
// }).listen(3000)

// function fetchData(callback) {
//     console.log("Fetching data...");

//     setTimeout(() => {
//         callback("Data received!");
//     }, 2000);
// }

// fetchData(function(message) {
//     console.log(message);
// });

// const fetchPromise = () => {
//     return new Promise((resolve,reject) => {
//         let succes = true
//         setTimeout(()=>{
//             if(succes = true){
//             resolve("Success")
//         }else{
//             reject("Reject")
//         }
//         },3000)
        
//     })
// }
// fetchPromise()
// .then(result => console.log(result))
// .catch(error => console.error(error))

// async function getData() {
//   const result = await fetchPromise();
//   console.log(result);
// }

// getData();

// const fs = require("fs")
// const createfile = fs.writeFile('demo.txt', 'Hello NodeJS', (err) => {
//   if (err) throw err;
//   console.log("File Written");
// });
// console.log(createfile);

// fs.unlink('demo.txt', (err) => {
//   if (err) throw err;
//   console.log("File Deleted");
// });

// Read file	        readFile()
// Write create file	writeFile()
// Append update file	appendFile()
// Delete file	        unlink()
// Rename file	        rename()
// Move file	        rename()
// Change permission	chmod()

// let fullPath = path.join("users", "ahmed", "file.txt");
// console.log(fullPath);

// class Person {
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
//   greet(){
//     console.log("hello "+ this.name + " your age is "+ this.age);
//   }
// }
// let ob1 = new Person("Ahmed",21)
// ob1.greet()

// Encapsulation
class BankAccount {
  #balance = 0;      // private variable

  deposit(amount) {
    this.#balance = this.#balance + amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let acc = new BankAccount();
acc.deposit(500);
console.log(acc.getBalance());

// Abstraction
class ATM {
  withdraw(amount) {
    this.validate();
    this.updateBalance(amount);
  }

  validate() {
    console.log("Validation done");
  }

  updateBalance(amount) {
    console.log(amount + " withdrawn");
  }
}

let atm = new ATM();
atm.withdraw(1000);

// Inheritance
// class Animal {
//   eat() {
//     console.log("Eating...");
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("Barking...");
//   }
// }

// let d = new Dog();
// d.eat();   // inherited method
// d.bark();

// Polymorphism
class Animal {
  sound() {
    console.log("Animal makes sound");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow Meow");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bhau Bhau");
  }
}

let a = new Cat();
a.sound();   // Meow Meow

let b = new Dog();
b.sound();   // Bhau Bhau

// Super Keyword
class Parent {
  constructor() {
    console.log("Parent");
  }
}

class Child extends Parent {
  constructor() {
    super();
  }
}

// Getters and Setters



