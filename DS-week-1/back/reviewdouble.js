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
        this.size=0
    }

    prepend(value){
        const node=new Node(value)
        if(this.size==0){
            this.head=node
            this.tail=node
        }else{
            this.head.pre=node
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    print(){
        if(this.size==0){
            return console.log("empty");
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

    check(){
        console.log(this.head);
        console.log(this.tail);
        console.log(this.size);
    }
}

const list=new LinkedList()
list.prepend(10)
list.prepend(20)
// list.append(40)
// list.append(10)
// list.append(20)

list.print()
list.check()