class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addFirst(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addLast(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  remove(value) {
    if (!this.head) return null;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    let prev = null;

    while (current && current.value !== value) {
      prev = current;
      current = current.next;
    }

    if (current) {
      prev.next = current.next;
      this.size--;
    }
  }

  // Insert at a specific index
  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }

    if (index === 0) {
      this.addFirst(value);
    } else {
      const newNode = new Node(value);
      let prev = this.head;

      // Traverse to the node before insertion
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      newNode.next = prev.next; // Link new node to next
      prev.next = newNode; // Link previous node to new node
      this.size++;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log("Index out of bounds");
      return null;
    }

    let removedNode;

    // Case 1: Remove head
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      // Traverse to node before index
      let current = this.head;
      let previous = null;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }

      removedNode = current;
      previous.next = current.next;
    }

    this.size--;
    return removedNode.value;
  }

  print() {
    let current = this.head;
    let list = "";
    while (current) {
      list += current.value + " -> ";
      current = current.next;
    }
    console.log(list + "null");
  }
}

// 🎯 Example usage
let list = new LinkedList();
list.addLast(10);
list.addLast(20);
list.addFirst(5);
list.print(); // 5 -> 10 -> 20 -> null
list.remove(40);
list.removeAt(2)
list.print(); // 5 -> 20 -> null
list.insert(40, 1); // Insert 40 at the end
list.print();

// git add .
// git commit -m "Updated DSA solutions"
// git push
