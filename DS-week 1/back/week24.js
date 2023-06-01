// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=null
//     }

//     append(value){
//         const node=new Node(value)
//         if(this.size==0){
//             this.head=node
//             this.tail=node
//         }else{
//             node.next=this.tail
//             this.tail=node
//         }
//         this.size++
//     }

//     update(value,postion){
//         if(this.size==0){
//             return console.log("empty");
//         }else if(this.size==0){
//             this.head=node
//             this.tail=node
//         }else{
//             const node=new Node(value)
//             let current=this.head
//             for (let i = 0; i < postion-1; i++) {
//                 current=current.next
//             }
//             node.next=current
//             current.next=node
//         }
//         this.size++
//     }
// }

// const list=new LinkedList()


function binary(array,value) {
    let left=0
    let right=array.length-1

    while (left<right) {
        let middle=Math.floor((left+right)/2)
        if(array[middle]==value){
            return middle
        }else if(array[middle]>value){
            right=middle-1
        }else{
            left=middle+1
        }
    }
    return -1
}

for (let i = 0; i < Math.floor(array.length/2); i++) {
   temp=array[i]
   array[i]=array[array.length-1-i]
   array[array.length-1-i]=temp
}

[1,2,3,4,5,6,7,8]