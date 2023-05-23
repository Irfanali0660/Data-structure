class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    getEmpty(){
        return this.size===0
    }

    getsize(){
        return this.size
    }

    prepend(value){
        const node=new Node(value)
        if(this.getEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    insert(value,index){
        if(index<0 || index >this.size){
            return console.log("invalid");
        }
        if(index==0){
            this.prepend(value)
        }else{
            let node=new Node(value)
            let pre=this.head
            for(let i=0;i<index-1;i++){
                pre=pre.next
            }
            console.log(pre.next);
            node.next=pre.next
            pre.next=node
            this.size++
        }
    }
    


    print(){
        if(this.getEmpty()){
            console.log("Empty");
        }else{
            let curr=this.head
            let listvalue=''
            while(curr){
                listvalue+=`${curr.value} `
                curr=curr.next
            }
            console.log(listvalue);
        }
    }
}


const list =new LinkedList()

list.prepend(10)
list.prepend(20)
list.print()