function HelloWorld() {
  console.log("Hello World");
}
HelloWorld();

function Sum(a, b) {
  let c = a + b;
  console.log("Sum is:", c);
}
Sum(-222, 223);

function AreaofRectangle(l, b) {
  if (l <= 0 || b <= 0) {
    console.error("Value should be greater than 0");
    return; // STOP execution
  }

  const area = l * b;
  console.log("Area Of Rectangle:", area);
}
AreaofRectangle(4, -14);

let array = [1, 2, 3, 4, 5];
function Sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(Sum(array));

function ChkEvenOdd(num) {
  if (num % 2 == 0) {
    console.log(`Even number ${num}`);
  } else {
    console.log(`Num is Odd ${num}`);
  }
}
ChkEvenOdd(-2);

function SmallestNum(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    console.log("Invalid Number");
    return;
  }

  if (a < b && a < c) {
    return `A is Smallest ${a}`;
  } else if (b < c && b < a) {
    return `B is Smallest ${b}`;
  } else if (c < a && c < b) {
    return `C is Smallest ${c}`;
  } else {
    return "Some values are equal";
  }
}

console.log(SmallestNum(-1, 3, 1));

// Reverse a String
function ReverseString(str) {
  if(typeof str !== "string"){
    throw new Error("Only String Allowed")
  }
  let rev = ""
  let s = 0;
  for (let i = str.length - 1; i >= s; i--) {
      rev = rev + str[i]
  }
  return rev
}
console.log(ReverseString("array"));

function Uturn(str){
  if(typeof str !== "string"){
    throw new Error("Only String Allowed")
  }
  const Split = str.split("");
  const Reverse = Split.reverse()
  const Result = Reverse.join("")
  return Result
}
console.log(Uturn("Car"));


