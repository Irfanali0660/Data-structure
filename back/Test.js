// linear search

function linear(arr,val) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==val){
            return i
        }
    }
    return -1
}
// console.log(linear([3,4,5,6,8,3,1,2],8));

// insert element

function linearinsert(arr,val,pos) {
    for (let i = arr.length; i > pos; i--) {
        arr[i]=arr[i-1]
    }
    arr[pos]=val
    return arr
}
// console.log(linearinsert([3,4,5,6,8,3,1,2],111,4));

// delete element

function linearinsert(arr,pos) {
    for (let i = pos; i < arr.length; i++) {
        arr[i]=arr[i+1]
    }
    arr.length--
    return arr
}
// console.log(linearinsert([3,4,5,6,8,3,1,2],1));

// binary search

function binarysearch(arr,val) {
    let left=0
    let right=arr.length-1
    
    while (left<=right) {
        let middle=Math.floor((left+right)/2)

        if(arr[middle]==val){
            return middle
        }else if(arr[middle]>val){
            right=middle-1
        }else{
            left=middle+1
        }
    }
    return -1
}

// console.log(binarysearch([1,2,3,4,5,6,7,8,9],5));

// binary insert

function binaryInsert(arr, value) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === value) {
        // Handle value found in the array
        // For example, replace the existing value or skip insertion
        arr.splice(start, 0, value); // Insert the value at the appropriate position
        console.log(arr);

        }
  
      if (arr[mid] < value) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
  }

// binaryInsert([1,2,3,4,5,6,7,8,9],4)

// recursive binary search

function recursiveBinary(array,value) {
     return recursivesearch(array,value,0,array.length-1)
}

function recursivesearch(array,value,left,right) {
    if(left>right){
        return -1
    }
    let middle=Math.floor((left+right)/2)

    if(array[middle]==value){
        return middle
    }else if(array[middle]>value){
       return recursivesearch(array,value,left,middle-1)
    }else{
       return recursivesearch(array,value,middle+1,right)
    }
}

// console.log(recursiveBinary([1,2,3,4,5,6,7,8,9],7));

// linked list

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
            this.tail=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.length++
    }

    append(value){
        const node=new Node(value)
        if(this.length==0){
            this.head==node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.length++
    }

    print(){
        if(this.length==0){
            return console.log("empty");
        }else{
            let current=this.head
            let listvalues=''
            while (current) {
                listvalues+=`${current.value} `
                current=current.next
            }
            console.log(listvalues);
        }
    }

    check(){
        console.log(this.head);
        console.log(this.tail);
        console.log(this.length);

    }

    insert(val,pos){
        if(pos<0 || pos>this.length){
            return console.log('invaild');
        }
        if(pos==0){
            this.prepend(val)
        }else{
            const node=new Node(val)
            let pre=this.head
            for (let i = 0; i < pos-1; i++) {
                pre=pre.next
            }
            node.next=pre.next
            pre.next=node
        }
    }

    deletefirst(){
        if(this.length==0){
            console.log('empty');
        }else{
            this.head=this.head.next
        }
        this.lengt--
    }

    deletelast(){
        if(this.length==0){
            console.log('empty');
        }else{
            let pre=this.head
            while (pre.next.next) {
                pre=pre.next
            }
            pre.next=null
            this.tail=pre
        }
        this.length--
    }
    deleteIndex(pos){
        if(pos<0 || pos > this.length || this.length==0){
            return console.log("Empty");
        }else if(pos==0){
           this.deletefirst()
        }else if(pos==this.length){
            this.deletelast()
        }else{
            let pre=this.head
            for (let i = 0; i < pos-1; i++) {
                pre=pre.next
            }
            pre.next=pre.next.next
        }
    }

    deletemid(){
        if(this.length==0){
            return console.log('empty');
        }else{
            let pre=this.head
            console.log(Math.floor(this.length/2),this.length);
            let mid=Math.floor(this.length/2)
            for (let i = 0; i < mid-1; i++) {
                pre=pre.next                
            }
            pre.next=pre.next.next
            this.length--
        }
    }

    deleteValue(value){
        if(this.length==0){
            return console.log('empty');
        }else{
            let pre=this.head
            if(this.head.value==value){
                return this.head=this.head.next
            }
            while (pre.next) {
                if(pre.next.value==value){
                   return pre.next=pre.next.next
                }else{
                    pre=pre.next
                }
            }
            return console.log("NO value");
        } 
    }

    duplicate(value){
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

    search(value){
        if(this.length==0){
            return console.log('empty');
        }else{
            let pre=this.head
            let i=0
            while (pre) {
                if(pre.value==value){
                    return i
                }
                pre=pre.next
                i++
            }
            return -1
        } 
    }

    palidrome(){
        let fast=this.head
        let slow=this.head
        let array=[]


        while (fast.next) {
            array.push(slow.value)
            fast=fast.next.next
            slow=slow.next
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
}

const list=new LinkedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.append(20)
list.append(30)
// list.append(50)
// list.insert(55,2)
list.print()

// list.deletefirst()
// list.print()
// list.deletelast()
// list.deleteIndex(0)
// list.deletemid()
// console.log(list.search(40));
// list.deleteValue(30)
// list.duplicate()
console.log(list.palidrome());
list.print()
// list.check()