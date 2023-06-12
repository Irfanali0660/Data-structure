class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Linkedlist{
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

    duplicate(){
        let curr=this.head
        while (curr!=null ) {
            let check=curr
            while (check.next !=null ) {
                if(curr.value==check.next.value){
                    check.next=check.next.next
                }else{
                    check=check.next
                }
            }
            curr=curr.next
        }
    }

    revese(){
        
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
}

const list=new Linkedlist()

list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(30)
list.prepend(30)
list.print()
// list.duplicate()
// list.print()