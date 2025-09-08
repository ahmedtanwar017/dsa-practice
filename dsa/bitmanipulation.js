function decimalToBinary(n) {
  if (n === 0) return "0";

  let binary = [];
  while (n > 0) {
    let remainder = n % 2;
    binary.push(remainder); // collect remainders
    n = Math.floor(n / 2);  // divide by 2
  }

  // reverse because binary digits come from bottom-up
  return binary.reverse().join("");
}

// Example usage:
console.log(decimalToBinary(10)); // "1010"
console.log(decimalToBinary(25)); // "11001"
console.log(decimalToBinary(1));  // "1"
