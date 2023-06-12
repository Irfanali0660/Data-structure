// function large(array) {
//     let large=Infinity
//     for (let  i= 0; i < array.length; i++) {
//         if(large>array[i]){
//             large=array[i]
//         }
//     }
//     return large
// }

// console.log(large([3,4,5,67,455,3,2]));

// function large(array) {
//     let middle=Math.floor((array.length-1)/2)
//     for(i=middle;i<array.length-1;i++){
//             array[i]=array[i+1]
//             middle++;
//             console.log(array[i]);
//     }
//     array.length-=1
//     return array
// }

// console.log(large([3,4,5,455,3,10]));

// function insert(array,value) {
//     let middle=Math.floor((array.length)/2)
//     for (let i = array.length ; i > middle; i--) {
//         array[i] = array[i - 1];
//       }
    
//       array[middle] = value;
//     // array.splice(middle,0,value)
//     return array
// }

// console.log(insert([3,4,5,455,3,10],111));


// function insert(array,value,index) {
//    if(index<0 || index>array.length){
//     return null
//    }else{
//     for (let i = array.length; i > index; i--) {
//         array[i]=array[i-1]        
//     }
//     array[index]=value
//    }
//    return array
// }

// console.log(insert([3,4,5,455,3,10],111,0));

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
            if (!node.next) {
                this.tail = node;
              }
        }
    this.length++
    }

    append(value){
        const node=new Node(value)

        if(this.length==0){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
           this.tail=node
        }
        this.length++
    }

    print(){
        if(this.length==0){
            return console.log('empty');
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
    header(){
        console.log(this.head);
        console.log(this.tail);
    }
    
    
}

// const list=new LinkedList()

// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.append(40)

// list.print()
// list.header()
