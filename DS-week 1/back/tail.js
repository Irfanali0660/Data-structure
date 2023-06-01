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
      this.size=0;
    }
  
    addToEnd(value) {
      const newNode = new Node(value);
  
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
        return;
      }
      
      console.log(this.tail,'before');
      this.tail.next = newNode;
      this.tail = newNode;
      console.log(this.tail,'after');
      this.size++
    }

    print(){
        if(this.size==0){
            return console.log("Empty");
        }else{
            let curr=this.head
            let listvalues=''

            while (curr) {
                listvalues+=`${curr.value} `
                curr=curr.next
            }
            console.log(listvalues);
        }
    }
  }
  
  const linkedList = new LinkedList();

linkedList.addToEnd(1);
linkedList.addToEnd(2);
linkedList.addToEnd(3);
linkedList.print()

console.log(linkedList.head); // Output: Node { value: 1, next: Node { value: 2, next: Node { value: 3, next: null } } }
console.log(linkedList.tail); // Output: Node { value: 3, next: null }
