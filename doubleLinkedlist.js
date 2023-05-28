// class Node {
//     constructor(value) {
//       this.value = value;
//       this.prev = null;
//       this.next = null;
//     }
//   }
  
//   class DoublyLinkedList {
//     constructor() {
//       this.head = null;
//       this.tail = null;
//     }
  
//     append(value) {
//       const newNode = new Node(value);
  
//       if (!this.head) {
//         this.head = newNode;
//         this.tail = newNode;
//       } else {
//         newNode.prev = this.tail;
//         this.tail.next = newNode;
//         this.tail = newNode;
//       }
//     }
  
//     printList() {
//       let current = this.head;
//       while (current) {
//         console.log(current.value);
//         current = current.next;
//       }
//     }

//     header(){
//       console.log(this.head);
//       console.log(this.tail);
//     }
//   }
  
//   // Example usage
//   const doublyLinkedList = new DoublyLinkedList();
//   doublyLinkedList.append(1);
//   doublyLinkedList.append(2);
//   doublyLinkedList.append(3);
//   doublyLinkedList.printList();
//   doublyLinkedList.header()
  

class Node{
  constructor(value){
      this.value=value
      this.next=null
      this.pre=null
  }
}

class LinkedList{
  constructor(){
      this.head=null
      this.tail=null
      this.length=0
  }

  prepend(value){
      const node=new Node(value)

      if(this.length==0){
        this.head=node
        this.tail=node
      }else{
          this.head.pre=node
          node.next=this.head
          this.head=node
          if (!node.next) {
              this.tail = node;
            }
      }
  this.length++
  }

  append(value){
      const node=new Node(value)

      if(this.length==0){
          this.head=node
          this.tail=node
          this.pre=null
      }else{
          this.tail.next=node
          node.pre=this.tail
          this.tail=node
      }
      this.length++
  }

  print(){
      if(this.length==0){
          return console.log('empty');
      }else{
          let curr=this.head
          let values=''
          while (curr) {
            console.log(curr,"NODE___________");
              values+=`${curr.value} `
              curr=curr.next
          }
          console.log(values);
      }
  }
  header(){
      // console.log(this.head);
      // console.log(this.tail);
  }
  
  
}

const list=new LinkedList()

list.prepend(10)
list.prepend(20)
list.prepend(30)
list.append(40)

list.print()
// list.header()
