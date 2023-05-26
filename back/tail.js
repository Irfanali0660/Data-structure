class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    addToEnd(value) {
      const newNode = new Node(value);
  
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
        return;
      }
  
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  
  const linkedList = new LinkedList();

linkedList.addToEnd(1);
linkedList.addToEnd(2);
linkedList.addToEnd(3);

console.log(linkedList.head); // Output: Node { value: 1, next: Node { value: 2, next: Node { value: 3, next: null } } }
console.log(linkedList.tail); // Output: Node { value: 3, next: null }
