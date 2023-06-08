class Stack{
    constructor(){
        this.items=[]
    }
    
    push(element){
        this.items.push(element)
    }
    
    pop(){
        this.items.pop()
    }
    
    peek(){
       return this.items[this.items.length-1]
    }
    
    isEmpty(){
        return this.items.length===0
    }
    
    size(){
        return this.items.length
    }
    
    print(){
        console.log(this.items.toString());
    }

    removeMiddle(){
        let tempstack=new Stack()
        let middle=Math.floor(this.items.length/2)

        for (let i = 0; i < middle; i++) {
            tempstack.push(this.items.pop())
        }
        this.items.pop()
        
        while (!tempstack.isEmpty()) {
            this.items.push(tempstack.items.pop())
        }
    }
    }
    
    const stack=new Stack()
    
    stack.push(10)
    stack.push(20)
    stack.push(30)
    stack.push(40)

    // stack.pop()
    // console.log(stack.peek());
    // console.log(stack.size());
    stack.print()
    // console.log(stack.isEmpty());
    stack.removeMiddle()
    stack.print()
    