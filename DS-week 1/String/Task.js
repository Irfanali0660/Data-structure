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
        this.length=0
    }

    prepend(value){
        const node=new Node(value)
        if(this.length==0){
            this.head=node
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
        }else{
            let pre=this.head
            while (pre.next) {
                pre=pre.next
            }
            pre.next=node   
        }
        this.length++
    }

    print(){
        if(this.length==0){
            console.log('list is empty')
        }else{
            let curr=this.head
            let listValues=''
            while (curr) {
                listValues+=`${curr.value} `
                curr=curr.next
            }
            console.log(listValues )
        }
    }

    insertafterbefore(k,val){
        if(this.length==k || k<0){
            return console.log("invalid");
        }
       let before= this.head
       let after=this.head.next
       const node=new Node(val)
       const node1=new Node(val)
       if(k==0){
           node.next=this.head
           this.head=node
       }
        for (let i = 0; i < k-1; i++) {
            before=before.next
            after=after.next
        }
       node.next=before.next
       before.next=node
       node1.next=after.next
       after.next=node1
    }
}

let list=new LinkedList()

list.append(10)
list.append(40)
list.append(30)
list.prepend(20)
list.prepend(10)
list.print()
list.insertafterbefore(2,33)
list.print()