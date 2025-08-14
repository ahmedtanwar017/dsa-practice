const strings = ['a','b','c','d'];
const prompt = require("prompt-sync")

// Check Elements
// console.log(strings[3]);

// push (Insert at last)
strings.push('e') // O(1)

// pop (Deletes the last element)
strings.pop() // O(1)

// unshift (Elements to insert at the start of the array.)
strings.unshift('ab') // O(n)

// splice [splice(start: number, deleteCount?: number)]
strings.splice(2,0,'xy')

//Update Elements
strings[1] = 'o';

// Concat Operation
let veggies = ['carrot', 'pea'];
let food = strings.concat(veggies);
//console.log(food); 

// console.log(strings);   
// console.log(strings.length); 

// Two types of array:[static & dynamic]
// A static array is a fixed-size container. Once you create it, you can't change its size.
// A dynamic array can grow or shrink in size during runtime.

// Reference type
var object1 = {value: 1};
var object2 = object1;
var object3 = {value: 1}

// Scope type
let fruits = ["apple", "banana"]; // global scope
function printFruits() {
  let message = "Fruit:"; // function scope
  fruits.forEach(function(fruit) {
    console.log(message,fruit);
  });
}
// printFruits();
// console.log(fruits);   // works (global scope)
// console.log(message); // Error: message is not defined (outside function scope)

// Context type
const store = {
    name: "Fruit Store",
    fruits: ["apple", "banana"],
    showFruits: function() {
      this.fruits.forEach((fruit) => {
        console.log(this.name, fruit);
      });
    }
  };
// store.showFruits();

// intantiations in array
let tours = [
    { city: "Paris", price: 100 },
    { city: "Rome", price: 120 }
  ];
// console.log(tours[0].city);

// implementing an array

class MyArray{
  constructor(){
    this.data = {}
    this.lenght = 0
  }
  push(params) {
    this.data[this.lenght] = params;
    this.lenght++
    return params
  }
  pop(){
    const lastitem = delete this.data[this.lenght-1]
    delete this.data[this.lenght-1]
    this.lenght--;
    return lastitem
  }
}

const array = new MyArray();
// array.push("HI")
// array.push("Hello")
// array.pop()
// console.log(array);

// Reverse a string

const a = "ahmed";
function Reverse(params){
  const arr = params.split("")
  arr.reverse()
  return arr.join("")
}
// console.log(Reverse(a));

const arr = [0, 1, 23, 4, 90];

// Largest Element in array
function Lar(array) {
  let max = array[0]; // Step 1
  for (let i = 1; i < array.length; i++) { // Step 2
    if (array[i] > max) { // Step 3
      max = array[i]; // Step 4
    }
  }
  return max; // Step 5
}
// console.log("Max value:", Lar(arr)); // Step 6

// Second Largest Element in Array
function SElar(arr){
  let seElem = arr[0]
  let larElem = arr[0]
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > larElem){
      seElem = larElem
      larElem = arr[i]
    }else if (arr[i] > seElem && arr[i] !== larElem) {
        seElem = arr[i];     
    }
  }return seElem;
}
// console.log(SElar(arr));

// Sorting Array 
function Sort(arr) {
  const array = arr.split("");   // Split string into characters
  array.sort();                  // Sort alphabetically
  return array.join("");         // Join back into string
}
const rr = "hello";
// console.log(Sort(rr)); // Output: 'ehllo'

// Remove Duplicates from Sorted Array
function removeDuplicates(arr){
  return [new Set(arr)]
}
const r = [1, 1, 2, 2, 3, 4, 4];
console.log(removeDuplicates(r));

// rotate an array to the right by k
function rotate(nums, k) {
  k = k % nums.length;     // Handles if k is bigger than array size
  return nums.slice(-k).concat(nums.slice(0, -k));
}
// Example:
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const rotated = rotate(nums, k);
// console.log(rotated); // [5, 6, 7, 1, 2, 3, 4]

// const prompt = require("prompt-sync")
// let n = prompt("Enter a number:")
// console.log(n);

// for(let i = 1;i<=n;i++){
//   for(let j = 1;j<=n-i;j++){
//     process.stdout.write("*")
//   }
//   console.log("");
// }