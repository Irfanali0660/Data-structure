// class Node{
//     constructor(value){
//             this.value=value
//             this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     getempty(){
//         return this.size===0
//     }

//     append(value){
//         const node=new Node(value)
//         if(this.getempty()){
//             this.head=node
//         }else{
//             let pre=this.head
//             while (pre.next) {
//                 pre=pre.next
//             }
//             pre.next=node
//         }
//         this.size++
//     }

//     prepend(value){
//         const node=new Node(value)
//         if(this.getempty()){
//             this.head=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//     }

//     removefirst(){
//         if(this.getempty()){
//             console.log("Empty");
//         }else{
//             this.head=this.head.next
//         }
//     }

//     removelast(){
//         if (!this.head) {
//             return;
//           }
//           let current = this.head;
//           while (current.next.next) {
//             current = current.next;
//           }
//           current.next = null;
//     }

//     insert(value,index){
//         if(index<0 || index>this.size){
//             return console.log("invalid")
//         }
//         if(index==0){
//             this.prepend(value)
//         }else{
//             const node=new Node(value)
//             let pre=this.head

//             for (let i = 0; i < index-1; i++) {
//                 pre=pre.next
//             }
//             node.next=pre.next
//             pre.next=node
//             this.size++
//         }
//     }

//     print(){
//         if(this.getempty()){
//             console.log("Empty element");
//         }else{
//             let curr=this.head
//             let values=''
//             while (curr) {
//                 values+=`${curr.value} `
//                 curr=curr.next
//             }
//             console.log(values);
//         }
//     }
// }

// const list=new LinkedList()

// list.append(10)
// list.append(40)
// list.append(20)
// list.prepend(30)

// list.print()
// // list.removelast()
// list.insert(89,3)
// list.print()


function removeDuplicates(array,val,pos) {
    const length = array.length;
    for (let i = length; i > pos; i--) {

        // array.splice(pos,0,val)

        array[i]=array[i-1]
     
    //   for (let j = i+1; j < length; j++) {
    //         if(array[i]==array[j]){
    //             array.splice(j,1)
                
    //         }
    // }
}
array[pos]=val
return array;
}
  // Example usage:
  const array = [1, 2, 1,3, 4, 2, 3, 5];
  const result = removeDuplicates(array,14,2);
  console.log(result); // Output: [1, 2, 3, 4, 5]
  