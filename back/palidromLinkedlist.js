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

    append(value){
        const node=new Node(value)
        if(this.size==0){
            this.head==node
        }else{
            let pre=this.head
            
            while (pre.next) {
                console.log(pre);
                pre=pre.next
            }
            
            pre.next=node
            console.log(pre);
        }
        this.size++
    }

    insert(value,index){
        if(index<0||index>this.size){
            return console.log("Invalid");
        }
        const node=new Node(value)
        if(this.size==0 || index==0){
            this.prepend(value)
        }else{
            let pre=this.head
            for (let i = 0; i < index-1; i++) {
                pre=pre.next                
            }
            node.next=pre.next
            pre.next=node
        }
        this.size++
    }



    removeFirst(){
        if(this.size==0){
           return console.log('empty listt');
        }else{
            this.head=this.head.next
        }
        this.size--
    }
    removelast(){
        if(this.size==0){
            return console.log('empty listt');
         }else{

            let pre=this.head
            while (pre.next.next) {
                pre=pre.next
            }
            pre.next=null
        }
         this.size--
    }

    removemiddle(){
        if(this.size==0){
            return console.log('empty listt');
         }else{
            console.log(this.size,Math.floor(this.size/2));
            let pre=this.head
         for (let i = 0; i <=Math.floor(this.size/2)-2; i++) {
            pre=pre.next            
         }
         pre.next=pre.next.next
        }
         this.size--
    }

    remove(index){
        if(this.size==0 || index<0 || index>this.size){
            return console.log("Empty listtt || invalid");
        }
        if(index==0){
            this.head=this.head.next
        }else{
            let pre=this.head
            for (let i = 0; i < index-1; i++) {
                pre=pre.next
            }
            pre.next=pre.next.next
        }
        this.size--
    }
    removeValues(value){
        if(this.size==0){
            return console.log("empty list");
        }else{
            if(this.head.value==value){
                this.head=this.head.next
            }
            let current=this.head
            while (current!== null) {
                if (current.next !== null && current.next.value === value) {
                    // Remove the node
                    current.next = current.next.next;
                  } else {
                    current = current.next;
                  }
            }
        }
    }


    palindrome(){
        let fast=this.head
        let slow=this.head
        let array=[]

        while (fast && fast.next) {
            array.push(slow.value)
            slow=slow.next
            fast=fast.next.next
        }

        if(fast){
            slow=slow.next
        }

        while (slow) {
            let val=array.pop()
            if(val!==slow.value){
                return false
            }
            slow=slow.next
        }
        return true
    }

    search(val){
        if(this.size==0){
            return console.log("Empty listtt");
        }else{
            let curr=this.head
            let i=0
            while (curr) {
                if(curr.value==val){
                    return i
                }
                curr=curr.next
                i++
            }
            return -1
        }
    }

    

    print(){
        if(this.size==0){
            return console.log("empty list");
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

const list=new Linkedlist
// list.prepend(10)
list.prepend(2)
list.prepend(1)

// list.append(50)

// list.append(20)
// list.append(10)

// list.insert(21,3)

// list.print()
// list.removeFirst()
// list.print()
// list.removelast()
// list.print()
// list.removemiddle()
// list.print()
// list.remove(2)
list.print()
// list.removeValues(50)
// list.print()

console.log(list.palindrome());
// console.log(list.search(50));