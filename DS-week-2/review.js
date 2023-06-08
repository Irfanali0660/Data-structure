// // bubble

// function bubblesort(array) {
//     let swapped
//     do {
//         swapped=false
//         for (let i = 0; i < array.length; i++) {
//            if(array[i]>array[i+1]){
//             temp=array[i]
//             array[i]=array[i+1]
//             array[i+1]=temp
//             swapped=true
//            }
//         }
//     } while (swapped);
//     return array
// }

// // console.log(bubblesort([2,1,3,-6,4,5,7]));

// function insertionsort(array) {
//     for (let i = 1; i < array.length; i++) {
//        let number=array[i]
//        let j=i-1
//        while (j>=0 && array[j]>number) {
//         array[j+1]=array[j]
//         j-=1
//        }
//        array[j+1]=number
//     }
//     return array
// }

// // console.log(insertionsort([2,1,3,-6,4,5,7]));


// function quickSort(array) {
//     if(array.length<=1){
//         return array
//     }
//     let left=[]
//     let right=[]
//     let pivot=array[array.length-1]

//     for (let i = 0; i < array.length-1; i++) {
//        if(array[i]<pivot){
//         left.push(array[i])
//        }else{
//         right.push(array[i])
//        }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// // console.log(quickSort([2,1,3,-6,4,5,7]));

// function mergesort(array) {
//     if(array.length<=1){
//         return array
//     }
//     let middle=Math.floor(array.length/2)
//     let left=array.slice(0,middle)
//     let right=array.slice(middle)
//     return merge(mergesort(left),mergesort(right))
// }

// function merge(left,right) {
//     let sortarr=[]

//     while (left.length && right.length) {
//         if(left[0]<=right[0]){
//             sortarr.push(left.shift())
//         }else{
//             sortarr.push(right.shift())
//         }   
//     }
//     return [...sortarr,...left,...right]
// }


// // console.log(mergesort([2,1,3,-6,4,5,7]));

// function selectionsort(array) {
//     for (let i = 0; i < array.length; i++) {
//         let index=i
//         for (let j = i+1; j < array.length; j++) {
//            if(array[j]<array[index]){
//             index=j
//            }
//         }
//         if(index!=i){
//             [array[i],array[index]]=[array[index],array[i]]
//         }
//     }
//     return array
// }

// // console.log(selectionsort([2,1,3,-6,7,4,5,8]));



// // hashtable

// class Hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

// hashkey(key){
//     let total=0
//     for (let i = 0; i < key.length; i++) {
//         total+=key.charCodeAt(i)
//     }
//     return total%this.size
// }

//     set(key,value){
//         let index=this.hashkey(key)
//         let bucket=this.table[index]
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             let samekeyItem=bucket.find((item)=>item[0]===key)
//             if(samekeyItem){
//                 samekeyItem[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index=this.hashkey(key)
//         let bucket=this.table[index]
//         if(bucket){
//             let samekeyItem=bucket.find((item)=>item[0]===key)
//             if(samekeyItem){
//                 return samekeyItem[1]
//             }
//         }
//         return undefined
//     }

//     display(){
//         for (let i = 0; i < this.table.length; i++) {
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }

//     remove(key){
//         let index=this.hashkey(key)
//         let bucket=this.table[index]
//         if(bucket){
//             let samekeyItem=bucket.find((item)=>item[0]===key)
//             if(samekeyItem){
//                 bucket.splice(bucket.indexOf(samekeyItem),1)
//             }
//         }
       
//     }
// }

// const hash=new Hashtable(30)

// hash.set('name','irfan')
// hash.set('amen','ali')
// hash.set('naem','irfanali')
// hash.set('age','irfanali')
// hash.remove('amen')

// // hash.display()


// selection

function Selectionsort(array){
    for (let i = 0; i < array.length; i++) {
       let small=i
       for (let j = i+1; j < array.length; j++) {
        if(array[j]<array[small]){
            small=j
        }
       }
       if(small != i){
        [array[i],array[small]]=[array[small],array[i]]
       }
    }
    return array
}

// console.log(Selectionsort([2,1,3,4,3,5,-6,7]),'selection');


function bubblesort(array) {
   let swapped
   
   do {
    swapped=false
    for (let i = 0; i < array.length; i++) {
       if(array[i]>array[i+1]){
        temp=array[i]
        array[i]=array[i+1]
        array[i+1]=temp
        swapped=true
       }
    }
   } while (swapped);

   return array
}

// console.log(bubblesort([2,1,3,4,3,5,-6,7]),'bubblesort');

function insersionsort(array) {
    for (let i = 1; i < array.length; i++) {
       let number=array[i]
       let j=i-1

       while (j>=0 && array[j]>number) {
        array[j+1]=array[j]
        j-=1
       }
       array[j+1]=number
    }
    return array
}

// console.log(insersionsort([2,1,3,4,3,5,-6,7]),'insersionsort');

function quicksort(array) {
    if(array.length<=1){
        return array
    }
    let left=[]
    let right=[]
    let pivot=array[array.length-1]
    for (let i = 0; i < array.length-1; i++) {
       if(array[i]<pivot){
        left.push(array[i])
       }else{
        right.push(array[i])
       }
    }
    return [...quicksort(left),pivot,...quicksort(right)]
}

// function quick(array) {
//     let quick= quicksort(array)
//     console.log(quicksort(array));
//     for (let i = 0; i < Math.floor(quick.length/2); i++) {
//        temp=quick[i]
//        quick[i]=quick[quick.length-1-i]
//        quick[quick.length-1-i]=temp
//     }
//     return quick
// }

console.log(quicksort([2,1,3,4,3,5,-6,7]),'quicksort');

function mergesort(array) {
    if(array.length<=1){
        return array
    }

    let middle=Math.floor(array.length/2)
    let left=array.slice(0,middle)
    let right=array.slice(middle)

    return merge(mergesort(left),mergesort(right))
}

function merge(left,right) {
    let sortarr=[]
    while (left.length && right.length) {
        if(left[0]<=right[0]){
            sortarr.push(left.shift())
        }else{
            sortarr.push(right.shift())
        }
    }
    return [...sortarr,...left,...right]
}

// console.log(mergesort([2,1,3,4,3,5,-6,7]),'mergesort');


class hashtable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hashfun(key){
        let total=0
        for (let i = 0; i < key.length; i++) {
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }

    set(key,value){
        let index=this.hashfun(key)
        let bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let samekeyItem=bucket.find((item)=>item[0]===key)
            if(samekeyItem){
                samekeyItem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index=this.hashfun(key)
        let bucket=this.table[index]
        if(bucket){
            let samekeyItem=bucket.find((item)=>item[0]===key)
            if(samekeyItem){
                return samekeyItem[1]
            }
        }
        return undefined
    }

    display(){
        for (let i = 0; i < this.size; i++) {
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }

    remove(key){
        let index=this.hashfun(key)
        let bucket=this.table[index]

        if(bucket){
            let samekeyItem=bucket.find((item)=>item[0]===key)
            if(samekeyItem){
                bucket.splice(bucket.indexOf(samekeyItem),1)
            }
        }
    }
}

const hash=new hashtable(30)

hash.set('name','irfan')
hash.set('amen','ali')
hash.set('naem','irfanali')
hash.set('age','irfanali')
hash.remove('amen')

// hash.display()


// stack

class stack{
    constructor(){
        this.item=[]
    }

    push(element){
        this.item.push(element)
    }

    pop(){
        this.item.pop()
    }

    peek(){
        return this.item[this.item.length-1]
    }

    isEmpty(){
        return this.item.length===0
    }

    print(){
        console.log(this.item.toString());
    }
}

const Stack=new stack()

// Stack.push(10)
// Stack.push(20)
// Stack.push(30)
// Stack.push(40)
// Stack.push(50)
// Stack.pop()
// console.log(Stack.peek());
// console.log(Stack.isEmpty());
// Stack.print()

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

class LinkedStack{
    constructor(){
        this.top=null
        this.size=0
    }

    push(value){
        const node=new Node(value)
        if(this.size==0){
            this.top=node
        }else{
            node.next=this.top
            this.top=node
        }
        this.size++
    }

    pop(){
        if(this.size==0){
            return null
        }else{
            this.top=this.top.next
        }
        this.size--
    }

    peek(){
        return this.top.value
    }
    
    print(){
        let curr=this.top
        let values=''

        while (curr) {
            console.log(curr.value);
            curr=curr.next
        }
        
    }
}

const Linkstack=new LinkedStack()

// Linkstack.push(20)
// Linkstack.push(10)
// Linkstack.push(30)
// Linkstack.push(40)
// Linkstack.push(50)
// Linkstack.pop()
// console.log(Linkstack.peek());  
// Linkstack.print()

class Queue{
    constructor(){
        this.item=[]
    }

    enqueue(element){
        this.item.push(element)
    }

    dequeue(){
        this.item.shift()
    }

    peek(){
        return this.item[0]
    }

    print(){
        console.log(this.item.toString());
    }
}

const queue=new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)
// queue.dequeue()
// console.log(queue.peek());
// queue.print()


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedQueue{
    constructor(){
        this.front=null
        this.rear=null
        this.size=0
    }

    enqueue(element){
        const node=new Node(element)
        if(this.size===0){
            this.front=node
            this.rear=node
        }else{
            this.rear.next=node
            this.rear=node
        }
        this.size++
    }

    dequeue(){
        if(this.size==0){
            return null
        }else{
            this.front=this.front.next
        }
        this.size--
    }

    print(){
        let curr=this.front
        while (curr) {
            console.log(curr.value);
            curr=curr.next
        }
    }
}

const Linkqueue=new LinkedQueue()

// Linkqueue.enqueue(10)
// Linkqueue.enqueue(20)
// Linkqueue.enqueue(30)
// Linkqueue.enqueue(40)
// Linkqueue.enqueue(50)
// Linkqueue.dequeue()
// Linkqueue.print()


