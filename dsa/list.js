class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let current = this.head;
      let listValues = "";
      while (current) {
        listValues += current.data + " -> ";
        current = current.next;
      }
      console.log(listValues + "null");
    }
  }
}

const list = new linkedlist();
console.log(list.isEmpty);
list.prepend(10);
list.prepend(20);
list.prepend(5);
list.append(10);
list.append(20);
list.append(30);
list.print();

function upperBound(arr, x, n) {
  let low = 0,
    high = n - 1;
  let ans = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // maybe an answer
    if (arr[mid] > x) {
      ans = mid;
      //look for smaller index on the left
      high = mid - 1;
    } else {
      low = mid + 1; // look on the right
    }
  }
  return ans;
}

// let arr = [3, 5, 8, 9, 15, 19];
// let n = 6,
//   x = 9;
// let ind = upperBound(arr, x, n);
// console.log("The upper bound is the index:", ind);

// git add .
// git commit -m "Updated DSA solutions"
// git push

function searchInsert(arr, x) {
  let n = arr.length;
  let low = 0;
  let high = n;
  let ans = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }return(ans)
}

let arr = [1, 2, 4, 7];
let x = 6;
let ind = searchInsert(arr, x);
console.log("The index is:", ind);