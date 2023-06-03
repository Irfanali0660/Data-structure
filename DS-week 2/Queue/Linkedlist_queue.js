class Node{
    constructor(value){ 
        this.value=value
        this.next=null
    }
}

class linkedListqueue{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    
    enqueue(value){
        const node=new Node(value)
        if(!this.head){
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
        }
        this.head=this.head.next
        this.size--
        if(this.size==0){
            this.tail=null
        }
    }


    peek(){
        return this.head.value
    }

    print(){
        if(this.size==0){
            return null
        }

        let current=this.head
        let queueValues=''

        while (current) {
            queueValues+=`${current.value} `
            current=current.next
        }
        console.log(queueValues);
    }
}

const queue=new linkedListqueue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.print()
queue.dequeue()
queue.print()
console.log(queue.peek());