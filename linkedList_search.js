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

    remove(index){
        if(index<0 || index>this.size){
            return null
        }
        let removenode
        if(index==0){
            removenode=this.head
            this.head=this.head.next
        }else{
            let pre=this.head
            console.log(this.head);
            for (let i = 0; i < index-1; i++) {
                pre=pre.next
            }
            console.log(pre.next,'pre');
            removenode=pre.next

            pre.next=removenode.next
            console.log(this.head,'head');
        }
        this.size--
        return removenode.value
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


    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value==value){
            this.head=this.head.next
            this.size--
            return value
        }else{
            let pre=this.head
            while (pre.next && pre.next.value !==value) {
               pre=pre.next
            }
            if(pre.next){
                const removenode=pre.next
                pre.next=removenode.next
                this.size--
                return value
            }
            return null
        }

    }

    search(value){
        if(this.isEmpty()){
            return null
        }
        let i=0
        let curr=this.head

        while (curr) {
            if(curr.value==value){
                return i    
            }
            curr=curr.next
            i++
        }
        return -1
    }

    revese(){
        let pre=null
        let curr=this.head
        while(curr){
            let next=curr.next
            curr.next=pre
            pre=curr
            curr=next
        }
        this.head=pre
    }
    removeLastNode() {
        if (this.head === null) {
          return;
        } else if (this.head.next === null) {
          this.head = null;
        } else {
          let current = this.head;
          let previous = null;
          while (current.next !== null) {
              previous = current;
              current = current.next;
            }
            console.log(previous);
            previous.next = null;
        //   current = null;
        }
    }
    
    duplicate(){
        let temp = this.head;
        while (temp!=null) {
           let current = temp
           while (current.next !== null) {
               if (temp.value === current.next.value) {
                 current.next = current.next.next;
               } else {
                 current = current.next;
               }
             }
             temp=temp.next
        }
    }
    print(){
        if(this.isEmpty()){
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
      
}

const list=new linkedList()
list.insert(10,0)
list.insert(10,0)
list.insert(20,0)
list.insert(10,0)
list.insert(30,0)
list.insert(40,0)



list.insert(20,0)
list.insert(20,0)
list.insert(20,0)
list.prepend(30)
list.insert(40,2)
list.insert(40,2)

list.print()
list.removeLastNode()
list.search(220)
list.revese()
list.print()
list.duplicate()
list.print()
