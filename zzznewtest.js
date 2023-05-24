// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class LinkedList{
//      constructor(){
//         this.head=null
//         this.size=0
//      }

//      getempty(){
//         return this.size===0
//      }

//      prepend(value){
//         const node=new Node(value)
//         if(this.getempty()){
//            this.head=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//      }

//      remove(){
//         if(this.getempty()){
//             return console.log("Empty");
//         }else{

//         }
//      }

//      print(){
//         if(this.getempty()){
//             return console.log('Empty list')
//         }else{
//             let curr=this.head
//             let values=''
//             while (curr) {
//                 values+=`${curr.value} `
//                 curr=curr.next
//             }
//             console.log(values);
//         }
//      }
// }


// const list=new LinkedList()

// list.prepend(20)
// list.prepend(30)
// list.prepend(40)

// list.print()

function binary(array,value) {
    let left=0
    let right=array.length-1
    while (left<=right) {
        let middle=Math.floor((left+right)/2)
        if(array[middle]==value){
            return array[middle]*middle
        }else if(array[middle]>value){
            right=middle-1
        }else{
            left=middle+1
        }
    }
}

console.log(binary([1,2,3,4,5,6,7],5));