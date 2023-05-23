class Node{
    constructor(value){
        // console.log(value);
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

    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let pre=this.head
            while (pre.next) {
                pre=pre.next
            }
            pre.next=node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let curr=this.head
            let listValues=''
            while (curr) {
                console.log(curr);
                listValues+=`${curr.value} `
                curr=curr.next
            }
            console.log(listValues )
        }
      }
}

const list=new linkedList()
// list.print()
console.log('List is empty?',list.isEmpty());
console.log('List size',list.getSize());
list.append(10)    
// list.print()
list.append(20)
list.append(30)
list.prepend(40)
list.prepend(50)
list.print()