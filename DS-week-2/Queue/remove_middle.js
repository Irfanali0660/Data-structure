class Queue{
    constructor(){
        this.items=[]
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    peek(){
        return  this.items[0]
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
}

function removeMiddle(queue){
    let middle=Math.floor(queue.items.length/2)
    let tempQueue=new Queue()

    for (let i = 0; i < middle; i++) {
         tempQueue.enqueue(queue.dequeue())
    }
    queue.dequeue()
    while (tempQueue.items.length) {
        queue.items.unshift(tempQueue.items.pop())
    }
}


const queue=new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)
removeMiddle(queue)
queue.print()