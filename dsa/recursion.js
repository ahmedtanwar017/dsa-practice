let count = 0
function rec(){
    if(count == 5){
        return
    }else{
        console.log(count);
        count = count + 1
        rec()        
    }
}
// rec()

// const prompt = require("prompt-sync")();
// let name = prompt("Enter your name:")
function nam(i,n){
    if(i>n){
        return
    }else{
        console.log(`${i},${name}`);
        nam(i+1,n)
    }
}
// nam(0,5)

function rev(i,n){
    if(i<n){
        return
    }else{
        console.log(i);
        rev(i-1,n)
    }
}
// rev(5,0)

function chk(i,n){
    if(i<1){
        return
    }else{
        chk(i-1,n)
        console.log(i);        
    }
}
// chk(5,0)

function sum(i,s){
    if(i < 1){
        console.log(s);
        return
    }else{
        sum(i-1,s+i)
    }
}
// sum(5,0)

function s(n){
    if(n == 1){
        return 1;    // Stop recursion here, return 0
    }else{
        return n * s(n-1);
    }
}
console.log(s(3));  // Output: 6

let ar = [1,2,3,4,5]
function a(l,r){
    if(l > r){
        return
    }else{
        let temp = ar[l]
        ar[l] = ar[r]
        ar[r] = temp
        a(l+1,r-1)
    }
}
// console.log(a(0,arr.length-1));
// console.log(ar);

function palin(arr, i) {
    let n = arr.length;
    if (i >= n / 2) {
        return true; // All characters checked
    }
    if (arr[i] !== arr[n - i - 1]) {
        return false; // Mismatch found
    }
    return palin(arr, i + 1); // Recursive call to check next positions
}

// Example usage:
// let arr = [1, 2, 3, 2, 1];
// console.log(palin(arr, 0)); // true

// let str = "madam";
// console.log(palin(str, 0)); // true

function fibonacci(n) {
    if (n <= 1) {
        return n; // Base cases: fib(0)=0, fib(1)=1
    }
    let l = fibonacci(n - 1) 
    let sl = fibonacci(n - 2);
    return fib = l + sl // Recursive call
}

// Example:                        
console.log(fibonacci(5)); // 5 => 0 1 2 3 4
console.log(fibonacci(7)); // 13

