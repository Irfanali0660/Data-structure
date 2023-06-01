class Node{
    constructor(value){
        this.value=value
        this.pre=null
        this.next=null
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
            node.next=this.head
            this.head=node
        }
        this.length++
    }

    append(value){
        const node=new Node(value)
        if(this.length==0){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            node.pre=this.tail
            this.tail=node
        }
        this.length++
    }

    print(){
        if(this.length==0){
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
    ischeck(){
        console.log(this.head);
        console.log(this.tail);
        console.log(this.length);
    }
}


let list=new LinkedList()

list.prepend(20)
list.prepend(30)
list.append(10)
list.print()
list.ischeck()