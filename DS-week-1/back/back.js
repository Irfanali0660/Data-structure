// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }


//     prepend(value){
//         const node=new Node(value)
//         if(this.size==0){
//             this.head=node
//             this.tail=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }

//     append(value){
//         const node=new Node(value)
//         if(this.size==0){
//             this.head=node
//             this.tail=node
//         }else{
//             this.tail.next=node
//             this.tail=node
//         }
//         this.size++
//     }

//     print(){
//         if(this.size==0){
//             return console.log("Empty");
//         }else{
//             let curr=this.head
//             let values=''
//             while (curr) {
//                 values+=`${curr.value} `
//                 curr=curr.next
//             }
//             console.log(values);
//         }
//     }

//     insert(value,pos){
//         if(pos<0 || pos > this.size){
//             return console.log("invalid");
//         }
//         if(this.size==0 || pos==0){
//             this.prepend(value)
//         }else{
//             const node=new Node(value)
//             let pre=this.head
//             for (let i = 0; i < pos-1; i++) {
//                 pre=pre.next                
//             }
//             node.next=pre.next
//             pre.next=node
//             this.size++
//         }
//     }

//     removeFirst(){
//         if(this.size==0){
//             return console.log("NO list");
//         }else{
//             this.head=this.head.next
//             this.size--
//         }
//     }

//     removeLast(){
//         if(this.size==0){
//             return console.log("NO list");
//         }else{
//             let pre=this.head

//             while (pre.next.next) {
//                 pre=pre.next
//             }
//             pre.next=null
//             this.tail=pre
//             this.size--
//         }
//     }

//     removeMiddle(){
//         if(this.size==0){
//             return console.log("NO list");
//         }else{
//             let pre=this.head
//             for (let i = 0; i <Math.floor(this.size/2)-2; i++) {
//                 pre=pre.next                
//             }
//             pre.next=pre.next.next
//             this.size--
//         }
//     }

//     removeIndex(index){
//         if(index<0 || index>this.size){
//             return console.log("invalid");
//         }
//         if(this.size==0){
//             return console.log("NO list");
//         }else if(index==0){
//             this.removeFirst()
//         }
//         else{
//             let pre=this.head
//             for (let i = 0; i < index-1; i++) {
//                 pre=pre.next                
//             }
//             pre.next=pre.next.next
//             this.size--;
//         } 
//     }   

//     removevalue(value){
//         if(this.size==0){
//             return console.log("NO list");
//         }else if(this.head.value==value){
//             this.head=this.head.next
//             this.size--
//         }
//         else{
//             let pre=this.head
//             while (pre.next) {
//                 if(pre.next.value==value){
//                     pre.next=pre.next.next
//                     this.size--
//                 }else{
//                  pre=pre.next;
//                 }
//             }
//         }
//     }

//     removeDup(){
//         if(this.size==0){
//             return console.log("NO list");
//         }
//         else{
//             let pre=this.head
//             while (pre!=null) {
//                 let temp=pre
//                 while (temp.next!=null) {
//                     if(pre.value===temp.next.value){
//                         temp.next=temp.next.next
//                         this.size--
//                     }else{
//                         temp=temp.next
//                     }
//                 }
//                 pre=pre.next
//             }
//         }
//     }

//     search(value){
//         if(this.size==0){
//             return console.log("NO list");
//         }
//         else{
//             let pre=this.head
//             let i=0
//             while (pre) {
//                 if(pre.value==value){
//                     return i
//                 }
//                 pre=pre.next
//                 i++
//             }
//             return -1
//         }
//     }

//     palindrom(){
//         if(this.size==0){
//             return console.log("NO list");
//         }
//         else{
//             let array=[]
//             let fast=this.head
//             let slow=this.head

//             while (fast && fast.next) {
//                 array.push(slow.value)
//                 fast=fast.next.next
//                 slow=slow.next
//             }

//             if(fast){
//                 slow=slow.next
//             }

//             while (slow) {
//                 let value=array.pop()
//                 if(value!=slow.value){
//                     return false
//                 }
//                 slow=slow.next
//             }
//             return true

//         }
//     }

//     reverse(){
//         if(this.size==0){
//             return console.log("empty");
//         }else{
//             let curr=this.head
//             let pre=null
//             while (curr) {
//                 let next=curr.next
//                 curr.next=pre
//                 pre=curr
//                 curr=next
//             }
//             this.head=pre
//         }
//     }

//     check(){
//         console.log(this.head);
//         console.log(this.tail);
//         console.log(this.size);
//     }
// }

// const list=new LinkedList()

// list.prepend(10)
// list.append(20)
// // list.append(50)
// list.append(20)

// list.append(10)

// list.prepend(60)
// // list.append(60)


// // list.append(70)
// // list.insert(30,1)
// // list.print()
// // list.removeFirst()
// list.print()
// // list.removeLast()
// // list.removeIndex(2)
// // list.removeMiddle()
// // list.removevalue(70)
// // list.removeDup()
// list.reverse()
// list.print()
// // console.log(list.search(51));
// list.check()
// // console.log(list.palindrom());


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

        prepend(value){
        const node=new Node(value)
        if(this.size==0){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    append(value){
        const node=new Node(value)
        if(this.size==0){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }

    print(){
        if(this.size==0){
            return console.log("Empty");
        }else{
            let curr=this.head
            let values=''
            while (curr) {
                values+=`${curr.value} `
                curr=curr.next
            }
            console.log(values);
        }
    }

    removeEnd(){
        if(this.size==0){
            return console.log("Empty");
        }else{
            let curr=this.head
            while (curr.next.next) {
               curr=curr.next
            }
            curr.next=null
            this.size--
        } 
    }

}



const list=new LinkedList()

list.prepend(10)
list.append(20)
list.append(50)
list.append(20)
list.removeEnd()
list.print()