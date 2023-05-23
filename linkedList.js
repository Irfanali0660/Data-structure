// // Node class represents a single node in the linked list
// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   // LinkedList class represents the linked list
//   class LinkedList {
//     constructor() {
//       this.head = null;
//     }
  
//     // Method to insert a node at the end of the linked list
//     append(data) {
//       const newNode = new Node(data);
  
//       if (this.head === null) {
//         this.head = newNode;
//       } else {
//         let current = this.head;
//         while (current.next !== null) {
//           current = current.next;
//         }
//         current.next = newNode;
//       }
//     }
  
//     // Method to insert a node at the beginning of the linked list
//     prepend(data) {
//       const newNode = new Node(data);
//       newNode.next = this.head;
//       this.head = newNode;
//     }
  
//     // Method to insert a node at a specific position in the linked list
//     insertAt(data, position) {
//       if (position === 0) {
//         this.prepend(data);
//         return;
//       }
  
//       const newNode = new Node(data);
//       let current = this.head;
//       let count = 0;
//       let previous = null;
  
//       while (count < position) {
//         previous = current;
//         current = current.next;
//         count++;
//       }
  
//       newNode.next = current;
//       previous.next = newNode;
//     }
  
//     // Method to remove a node from the linked list
//     remove(data) {
//       if (this.head === null) {
//         return;
//       }
  
//       if (this.head.data === data) {
//         this.head = this.head.next;
//         return;
//       }
  
//       let current = this.head;
//       let previous = null;
  
//       while (current !== null) {
//         if (current.data === data) {
//           previous.next = current.next;
//           return;
//         }
//         previous = current;
//         current = current.next;
//       }
//     }
  
//     // Method to display the linked list
//     display() {
//       let current = this.head;
//       while (current !== null) {
//         console.log(current.data);
//         current = current.next;
//       }
//     }
//   }
  
//   // Example usage
//   const linkedList = new LinkedList();
  
//   linkedList.append(10);
//   linkedList.append(20);
//   linkedList.append(30);
  
//   linkedList.prepend(5);
  
//   linkedList.insertAt(15, 2);
  
//   linkedList.remove(20);
  
//   linkedList.display();
  



// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
    
//     getSize(){
//         return this.size
//     }
// }

// const list=new linkedList()
// console.log('List is empty?',list.isEmpty());
// console.log('List size',list.getSize());

class Node{
    constructor(value){
        // console.log(value);
        this.value=value
        this.next=null
    }
}

class linkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    
    getSize(){
        return this.size
    }

    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let curr=this.head
            let listValues=''
            while (curr) {
                // console.log(curr);
                listValues+=`${curr.value} `
                curr=curr.next
            }
            console.log(listValues )
        }
      }
}

const list=new linkedList()
// list.print()
console.log('List is empty?',list.isEmpty());
console.log('List size',list.getSize());
list.prepend(10)    
// list.print()
list.prepend(20)
list.prepend(30)
list.print()
