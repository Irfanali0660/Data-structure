class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    
    getSize(){
        return this.size
    }

    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    insert(value,index){
        if(index<0||index>this.size){
            return console.log("Invalid");
        }
        
        if(index==0){
            this.prepend(value)
        }
        else{
            const node=new Node(value)
            let pre=this.head
            for (let i = 0; i < index-1; i++) {
                pre=pre.next                
            }
            node.next=pre.next
            pre.next=node
            this.size++
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let curr=this.head
            let listValues=''
            while (curr) {
                // console.log(curr);
                listValues+=`${curr.value} `
                curr=curr.next
            }
            console.log(listValues )
        }
    }
}

const list=new linkedList()
// list.print()
// console.log('List is empty?',list.isEmpty());
list.prepend(50)
// console.log('List size',list.getSize());
list.insert(10,0)
list.print()


// list.insert(20,0)
// list.print()

// list.insert(30,1)
// list.print()

list.insert(40,1)

list.print()
