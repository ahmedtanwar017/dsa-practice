
const prompt = require("prompt-sync")();
 
// let arr = []
// let n = parseInt(prompt("Array Size : "));

// console.log("You entered:", n);

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i + 1; j++) {
//         process.stdout.write(" ");
//     }
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*");
//     }
//     console.log(); // Move to next line after printing one row
// }
// let arr = [1,2,3,4,5]
// for(j = 0; j < n; j++){
// let copy = arr[0]
//     for(i = 0;i < arr.length-1;i++){
//         arr[i] = arr[i+1]
//     }
//     arr[arr.length-1] = copy
// }
// console.log(arr);

// for(i = 0;i < n;i++){
//     let x = prompt("Enter NO.")
//     arr.push(x)
// }
//  console.log(arr);

//Bubble Sort
// let arr = [7,4,5,6,1]
// let n = arr.length
// for(let i = 0; i < n-1; i++){
//     for(let j = 0;j < n-1-i; j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr);


// Selection Sort
// let array = [3,5,7,9,1]
// let a = array.length
// for(let i = 0;i < a-1; i++){
//     let minIndex = i
//     for(let j = i+1;j < a; j++){
//         if(array[minIndex] > array[j])
//             minIndex = j
//     }
//      let temp = array[i];
//     array[i] = array[minIndex];
//     array[minIndex] = temp;
// }
// console.log(array);

// Insertion Sort


// fibonacci
// function fibonacci(n){
//     let fib = [0,1]
//     for(let i = 2;i < n; i++){
//         fib[i] = fib[i-1] + fib[i-2]
//     }
//     console.log(fib);
// }
// fibonacci(6)

// Factorial Number
let n = Number(prompt("Enter a number:"))
let sum = 1
for(let i = 2;i <= n; i ++){
    sum = sum * i
}
// console.log(sum);

