// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class Tree{
//     constructor(){
//         this.root=null
//     }

//     insert(value){
//         const node=new Node(value)
//         if(!this.root){
//             this.root=node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(root.value>node.value){
//             if(root.left==null){
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right==null){
//                 root.right=node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }


//     preorder(root){
//         if(root){
//             console.log(root.value);
//             this.preorder(root.left)
//             this.preorder(root.right)
//         }
//     }
//     inorder(root){
//         if(root){
//             this.inorder(root.left)
//             console.log(root.value);
//             this.inorder(root.right)
//         }
//     }
//     postorder(root){
//         if(root){
//             this.postorder(root.left)
//             this.postorder(root.right)
//             console.log(root.value);
//         }
//     }
    
//     BFS(){
//         let queue=[]
//         queue.push(this.root)
//         while (queue.length) {
//             let curr=queue.shift()
//             console.log(curr.value);
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }

//     min(root){
//         if(root){
//             if(!root.left){
//                 return root.value
//             }else{
//                 return this.min(root.left)
//             }
//         }
//     }

//     max(root){
//         if(root){
//             if(!root.right){
//                 return root.value
//             }else{
//                 return this.max(root.right)
//             }
//         }
//     }

//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(root===null){
//             return root
//         }else{
//             if(value<root.value){
//                 root.left=this.deleteNode(root.left,value)
//             }else if(value>root.value){
//                 root.right=this.deleteNode(root.right,value)
//             }else{
//                 if(!root.left && !root.right){
//                     return null
//                 }
//                 if(!root.left){
//                     return root.right
//                 }else if(!root.right){
//                     return root.left
//                 }
//                  root.value=this.min(root.right)
//                  root.right=this.deleteNode(root.right,root.value)       
//             }
//             return root
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value==value){
//                 return true
//             }else if(root.value>value){
//                 return this.search(root.left,value)
//             }else if(root.value<value){
//                 return this.search(root.right,value)
//             }
//             return false
//         }
//     }
   

//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(root==null){
//             return root
//         }else if(root.value>value){
//             return this.deleteNode(root.left,value)
//         }else if(root.value<value){
//             return this.deleteNode(root.right,value)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }
//         }
//     }
// }


// const tree=new Tree()
// tree.insert(10)
// tree.insert(5)
// tree.insert(15)
// tree.insert(3)
// tree.insert(7)

// // tree.preorder(tree.root)
// // tree.inorder(tree.root)
// tree.postorder(tree.root)
// tree.BFS(tree.root)

// // console.log(tree.min(tree.root));
// // console.log(tree.max(tree.root));

// console.log("haa");
// tree.delete(5)
// // tree.BFS(tree.root)
// console.log(tree.search(tree.root,47)
// );




// class MaxHeap{
//     constructor(){
//         this.heap=[]
//     }

//     buildHeap(array){
//         this.heap=array
//         for (let i = (Math.floor((array.length-1)/2)); i >=0; i--) {
//             this.shiftDown(i)
//         }
//     }


//     shiftDown(currentIdx){
//         let length=this.heap.length
//         let maxIdx=currentIdx
//         let leftIdx=2*currentIdx+1
//         let rightIdx=2*currentIdx+2

//         if(leftIdx<length && this.heap[leftIdx]>this.heap[maxIdx]){
//             maxIdx=leftIdx
//         }
        
//         if(rightIdx<length && this.heap[rightIdx]>this.heap[maxIdx]){
//             maxIdx=rightIdx
//         }

//         if(maxIdx!==currentIdx){
//             this.swap(currentIdx,maxIdx)
//         }
//     }

//     swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }

//     heapSort(){
//         const sortedArray=[]
//         while (this.heap.length>0) {
//             sortedArray.unshift(this.extractMax())
//         }
//         return sortedArray
//     }

//     extractMax(){
//         if(this.heap.length==0){
//             return null
//         }

//         let max=this.heap[0]
//         let lastIdx=this.heap.length-1
//         this.swap(0,lastIdx)
//         this.heap.pop()
//         this.shiftDown(0)
//         return max
//     }
// }

// const maxHeap=new MaxHeap()

// maxHeap.buildHeap([2,1,4,3,5,8])
// console.log(maxHeap.heapSort());


class Maxheap{
    constructor(){
        this.heap=[]
    }

    buildheap(array){
        this.heap=array

        for (let i = Math.floor((array.length-1)/2); i >=0; i--) {
            this.shiftDown(i)
        }
    }

    shiftDown(currentIdx){
        let length=this.heap.length
        let maxIdx=currentIdx
        let leftIdx=2*currentIdx+1
        let rightIdx=2*currentIdx+2
        if(leftIdx<length && this.heap[leftIdx]<this.heap[maxIdx]){
            maxIdx=leftIdx
        }
        if(rightIdx<length && this.heap[rightIdx]<this.heap[maxIdx]){
            maxIdx=rightIdx
        }
        
        if(maxIdx!==currentIdx){
            this.swap(currentIdx,maxIdx)
            
        }
    }
    
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }

    heapSort(){
        const sortedArray=[]
        while (this.heap.length>0) {
            sortedArray.unshift(this.extractMax())
        }
        return sortedArray
    }

    extractMax(){
        if(this.heap.length==0){
            return null
        }
        const max=this.heap[0]
        const lastIdx=this.heap.length-1
        this.swap(0,lastIdx)
        this.heap.pop()
        this.shiftDown(0)
        return max
    }

    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }

    shiftUp(currentIdx){
        if (currentIdx === 0) {
            return;
          }
      
          const parentIdx = Math.floor((currentIdx - 1) / 2);
          if (this.heap[currentIdx] < this.heap[parentIdx]) {
            this.swap(currentIdx, parentIdx);
            this.shiftUp(parentIdx);
          }
    }

    remove(value){
        const index=this.heap.indexOf(value)
        if(index===-1){
            return false
        }
        this.swap(index,this.heap.length-1)
        this.heap.pop()
        const parentIdx=Math.floor((index-1)/2)
        if(index>0 && this.heap[index]<this.heap[parentIdx]){
            this.shiftUp(index)
        }else{
            this.shiftDown(index)
        }
        return true
    }
}

const array = [3, 11, 62, 5,22,14];
console.log(array);
const heap = new Maxheap();
heap.buildheap(array);

// const sortedArray = heap.heapSort();
// console.log(sortedArray); // Output: [2, 3, 3, 5, 6, 8, 9, 24]
heap.insert(33)
console.log(heap.heapSort()); 

