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
        let pre=null
        let curr=this.head
        while(curr){
            let next=curr.next
            console.log(next,'next______________');
            curr.next=pre
            console.log(curr.next,'curr.next--------------');
            pre=curr
            console.log(pre,'pre+++++++++++++');
            curr=next
            console.log(curr,'curr^^^^^^^^^^^^^^^^^^');
            console.log('***********************************************');
        }   
        this.head=pre
        console.log(this.head);
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
list.prepend(40)
list.prepend(50)
list.print()
// list.duplicate()
list.revese()
list.print()