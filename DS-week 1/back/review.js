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
        this.size=0
    }

    prepend(value){
        const node=new Node(value)
        if(this.size==0){
            this.head=node
            this.tail=node
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
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
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

    removeFirst(){
        if(this.size==0){
            return console.log("list empty");
        }else{
            this.head=this.head.next
            this.size--
        }
    }
    removeLast(){
        if(this.size==0){
            return console.log("list empty");
        }else{
           let pre=this.head
           while (pre.next.next) {
                pre=pre.next
           }
           pre.next=null
           this.size--
        }   
    }

    removeMiddle(){
        if(this.size==0){
            return console.log("list empty");
        }else{
            let pre=this.head
            for (let i = 0; i <Math.floor(this.size/2)-2; i++) {
                pre=pre.next
            }
            pre.next=pre.next.next
            this.size--
        }   
    }

    removeIndex(index){
        if(this.size==0){
            return console.log("list empty");
        }else if(index<0 || index>this.size){
            return console.log("invalid");
        }else if(index==0){
            this.removeFirst()
        }
        else{
            let pre=this.head
            for (let i = 0; i <index-1; i++) {
                pre=pre.next
            }
            pre.next=pre.next.next
            this.size--
        }    
    }

    removeValue(value){
        if(this.size==0){
            return console.log("list empty");
        }else if(value==this.head.value){
            this.removeFirst()
        }
        else{
         let pre=this.head
         while (pre.next) {
            if(pre.next.value==value){
                pre.next=pre.next.next
                this.size--
            }else{
                pre=pre.next
            }
        }
        }    
    }
    search(value){
        if(this.size==0){
            return console.log("list empty");
        }else{
           let curr=this.head
           let i=0
           
           while (curr) {
            if(curr.value==value){
                return i  
            }
                curr=curr.next
                i++           
        }
        return -1
        } 
    }

    removeDuplicate(){
        if(this.size==0){
            return console.log("list empty");
        }else{
           let curr=this.head
           while (curr!=null) {
            let temp=curr
            while (temp.next!=null) {
                if(curr.value==temp.next.value){
                    temp.next=temp.next.next
                    this.size--
                }else{
                    temp=temp.next
                }
            }
            curr=curr.next
           }
        }
    }

    reverse(){
        if(this.size==0){
            return console.log("list empty");
        }else{
           let curr=this.head
           let pre=null
           while (curr) {
            let next=curr.next
            curr.next=pre
            pre=curr
            curr=next
           }
           this.head=pre
        }
    }
    palindrom(){
        if(this.size==0){
            return console.log("list empty");
        }else{
           let fast=this.head
           let slow=this.head
           let array=[]
           while (fast && fast.next) {
            array.push(slow.value)
            fast=fast.next.next
            slow=slow.next
           }
           if(fast){
            slow=slow.next
           }

           while (slow) {
            let value=array.pop()
            if(value!=slow.value){
                return false
            }
            slow=slow.next
           }
           return true
        }
    }
    check(){
        console.log();
    }

}

const list=new LinkedList()
list.prepend(10)
list.prepend(20)
list.append(40)
list.append(10)
list.append(20)

list.print()
list.removeFirst()
// list.removeLast()
// list.removeMiddle()
// list.removeIndex(0)
// list.removeValue(40)
// console.log(list.search(40));
// list.removeDuplicate()
// list.reverse()

// console.log(list.palindrom());
list.print()
console.log(list);