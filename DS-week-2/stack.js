// class Stack{
//     constructor(element){
//        this.items=[]
//     }

//     push(element){
//         this.items.push(element)
//     }

//     pop(){
//         if(this.items.length==0){
//             return null
//         }else{
//             this.items.pop()
//         }
//     }

//     peek(){
//         return this.items[this.items.length-1]
//     }

//     print(){
//         console.log(this.items)
//     }
// }

// const stack=new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.pop()
// stack.print()
// console.log(stack.peek());


class Node{
    constructor(element){
        this.value=element
        this.next=null
    }
}

class linkedListstack{
    constructor(){
        this.top=null
        this.size=null
    }

    push(element){
        const node=new Node(element)
        if(this.size==0){
            this.top=node
        }else{
            node.next=this.top
            this.top=node
        }
        this.size++
    }

    pop(){
        if(this.size==0){
            return null
        }else{
            this.top=this.top.next
        }
    }

    print(){
        let curr=this.top
        let values=''
        while (curr) {
            values+=`${curr.value} `
            curr=curr.next
        }
        console.log(values);
    }
}

const stack=new linkedListstack()
stack.push(20)
stack.push(10)
stack.push(30)
stack.print()
stack.pop()
stack.print()