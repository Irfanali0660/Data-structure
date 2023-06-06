class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedListstack{
    constructor(){
        this.top=null
        this.length=0
    }

    push(value){
        const node=new Node(value)
        node.next=this.top
        this.top=node
        this.length++
    }

    pop(){
        if(this.length==0){
            return null
        }
        let poppedvalue=this.top.value
        this.top=this.top.next
        this.length--
        return poppedvalue
    }

    peek(){
        if(this.length==0){
            return null
        }

        return this.top.value
    }

    print(){
        if(this.length==0){
            return null
        }

        let curr=this.top
        let stackValues=''

        while (curr) {
            stackValues+=`${curr.value} `
            curr=curr.next
        }
        console.log(stackValues);
    }
}

const stack=new linkedListstack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

console.log(stack.pop());
console.log(stack.peek());


stack.print()
