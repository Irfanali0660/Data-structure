// class queue{
//     constructor(){
//         this.items=[]
//     }

//     enqueue(element){
//         this.items.enqueue(element)
//     }

//     dequeue(){
//         if(this.items.length==0){
//             return null
//         }else{
//            return this.items.shift()
//         }
//     }

//     peek(){
//         return this.items[0]
//     }

//     print(){
//         console.log(this.items.toString());
//     }
// }

// const Queue=new queue()

// Queue.enqueue(10)
// Queue.enqueue(20)
// Queue.enqueue(30)
// console.log(Queue.dequeue());
// console.log(Queue.peek());
// Queue.print()



class Node{
    constructor(element){
        this.value=element
        this.next=null
    }
}

class linkedListstack{
    constructor(){
        this.head=null
        this.size=0
        this.tail=null
    }

    enqueue(element){
        const node=new Node(element)
        if(this.size==0){
            this.head=node
            this.tail=node
        }else{
           this.tail.next=node
           this.tail=node
        }
        this.size++
    }

    dequeue(){
        if(this.size==0){
            return null
        }else{
            this.head=this.head.next
        }
    }

    print(){
        let curr=this.head
        let values=''
        while (curr) {
            values+=`${curr.value} `
            curr=curr.next
        }
        console.log(values);
    }
}

const stack=new linkedListstack()
stack.enqueue(20)
stack.enqueue(10)
stack.enqueue(30)
stack.print()
stack.dequeue()
stack.print()