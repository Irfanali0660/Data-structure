class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedlist{
    constructor(){
        this.head=null
        this.size=0
    }

    prepend(value){
        const node=new Node(value)
        if(this.size==0){
            this.head=node
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
        }else{
            let curr=this.head
            while (curr.next) {
                curr=curr.next
            }
            curr.next=node
        }
        this.size++
    }

    print(){
        if(this.size==0){
            return console.log('list is empty')
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
}


const list=new linkedlist()

list.append(10)
list.prepend(56)
list.append(14)
list.prepend(56)
list.print()