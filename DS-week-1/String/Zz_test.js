// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   class LinkedList {
//     constructor() {
//       this.head = null;
//     }
  
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
  
//     removeDuplicates() {
//       let temp = this.head;
//      while (temp!=null) {
//         let current = temp
//         while (current.next !== null) {
//             if (temp.data === current.next.data) {
//               current.next = current.next.next;
//             } else {
//               current = current.next;
//             }
//           }
//           temp=temp.next
//      }
//     }
  
//     display() {
    
//             let curr=this.head
//             let listValues=''
//             while (curr) {
//                 listValues+=`${curr.data} `
//                 curr=curr.next
//             }
//             console.log(listValues )
        
//     }
//   }
  
//   // Create a sorted linked list
//   const linkedList = new LinkedList();
//   linkedList.append(1);
//   linkedList.append(2);
//   linkedList.append(2);
//   linkedList.append(3);
//   linkedList.append(3);
//   linkedList.append(3);
//   linkedList.append(3);
//   linkedList.append(4);
//   linkedList.append(3);
  
//   console.log("Original Linked List:");
//   linkedList.display();
  
//   linkedList.removeDuplicates();
  
//   console.log("Linked List after removing duplicates:");
//   linkedList.display();
  

class linkedList{
    constructor(){
         this.array=[1,4,2,3,5]
    }

    prepend(value){
        this.array.unshift(value)
    }

    append(value){
        this.array.push(value)
    }
    insert(value,position){
        if(position==0){
            this.prepend(value)
        }else if(position==this.array.length-1){
            this.append(value)
        }else{
            this.array.splice(position,0,value)
        }
    }

    remove(data) {
        const index = this.array.indexOf(data);
        if (index !== -1) {
          this.array.splice(index, 1);
        }
      }

    display(){
        console.log(this.array);
    }
}

const list=new linkedList()

list.prepend(33)
list.append(55)
list.append(55)

list.insert(23,4)
list.remove(55)
list.display()