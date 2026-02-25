// // function HelloWorld() {
// //   console.log("Hello World");
// // }
// // HelloWorld();

// // function Sum(a, b) {
// //   let c = a + b;
// //   console.log("Sum is:", c);
// // }
// // Sum(-222, 223);

// // function AreaofRectangle(l, b) {
// //   if (l <= 0 || b <= 0) {
// //     console.error("Value should be greater than 0");
// //     return; // STOP execution
// //   }

// //   const area = l * b;
// //   console.log("Area Of Rectangle:", area);
// // }
// // AreaofRectangle(4, -14);

// // let array = [1, 2, 3, 4, 5];
// // function Sum(arr) {
// //   let sum = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     sum = sum + arr[i];
// //   }
// //   return sum;
// // }
// // console.log(Sum(array));

// // function ChkEvenOdd(num) {
// //   if (num % 2 == 0) {
// //     console.log(`Even number ${num}`);
// //   } else {
// //     console.log(`Num is Odd ${num}`);
// //   }
// // }
// // ChkEvenOdd(-2);

// // function SmallestNum(a, b, c) {
// //   if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
// //     console.log("Invalid Number");
// //     return;
// //   }

// //   if (a < b && a < c) {
// //     return `A is Smallest ${a}`;
// //   } else if (b < c && b < a) {
// //     return `B is Smallest ${b}`;
// //   } else if (c < a && c < b) {
// //     return `C is Smallest ${c}`;
// //   } else {
// //     return "Some values are equal";
// //   }
// // }

// // console.log(SmallestNum(-1, 3, 1));

// // // Reverse a String
// // function ReverseString(str) {
// //   if(typeof str !== "string"){
// //     throw new Error("Only String Allowed")
// //   }
// //   let rev = ""
// //   let s = 0;
// //   for (let i = str.length - 1; i >= s; i--) {
// //       rev = rev + str[i]
// //   }
// //   return rev
// // }
// // console.log(ReverseString("array"));

// // function Uturn(str){
// //   if(typeof str !== "string"){
// //     throw new Error("Only String Allowed")
// //   }
// //   const Split = str.split("");
// //   const Reverse = Split.reverse()
// //   const Result = Reverse.join("")
// //   return Result
// // }
// // console.log(Uturn("Car"));

// // a = [1,9,2,3,4,5,3,3]
// // count = ""
// // function Repetition(arr){
// //   for(let i = 0; i < arr.length; i++){
// //     for(let j = i + 1; j < arr.length; j++){
// //       if(arr[i] === arr[j]){
// //         return arr[i];   // first repeating number
// //       }
// //     }
// //   }
// //   return null;  // if no repetition
// // }

// // console.log(Repetition(a));

// function Factorial(num){
//   let sum = 1
//   for(let i = 1;i <= num;i++){
//     sum = sum * i
//   }
//   return sum
// }
// console.log(Factorial(3));
// // 3! = 3*2*1 = 6*1 = 6

// function leapyear(year) {
//   if (year % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(leapyear(2023));

// let arr = [1, 2, 2, 3];

// let map = new Map();

// for (let num of arr) {
//   map.set(num, (map.get(num) || 0) + 1);
// }

// for (let [key, value] of map) {
//   console.log(`${key} is ${value}`);
// }

// function sumofdigits(num){
//   const sum = num.toString().split("").map(Number)
//   const total = sum[0] + sum[1]
//   return total
// }
// console.log(sumofdigits(12));

// function sum(num){
//   let sum = num.toString().split("").map(Number)
//   let total = 0
//   for(let i = 0;i < sum.length; i++){
//     total = sum[i] + total
//   }
//   return total
// }
// console.log(sum(1111));

// function Tables(nums,range){
//   let result = []
//   for(let i = 1;i < range;i++){
//     result.push(i * nums)
//   }
//   return result
// }
// console.log(Tables(5,15));

let array = [1,2,3,4,5]
function Maximum(arr){
  let max = arr[0]
  for(let i = 1;i < arr.length;i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  return max
}
console.log(Maximum(array));

