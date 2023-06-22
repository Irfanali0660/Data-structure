

// function selectionsort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i+1; j < array.length; j++) {
//            if(array[i]>array[j]){
//             let temp=array[i]
//             array[i]=array[j]
//             array[j]=temp
//            }
//         }
//     }   
//     return array
// }

// // console.log(selectionsort([2,1,3,4,-5,5]));

// function bubblesort(array) {
//     let swapped
//     do {
//         swapped=false
//         for (let i = 0; i < array.length; i++) {
//             if(array[i]>array[i+1]){
//                 let temp=array[i]
//                 array[i]=array[i+1]
//                 array[i+1]=temp
//                 swapped=true
//             }
//         }
//     } while (swapped);
//     return array
// }

// // console.log(bubblesort([2,1,3,4,5,-2]));

// function insersionsort(array) {
//     for (let i = 1; i < array.length; i++) {
//         let number=array[i]
//         let j=i-1
//         while (j>=0 && array[j]>number) {
//             array[j+1]=array[j]
//             j-=1
//         }
//         array[j+1]=number
//     }
//     return array
// }

// console.log(insersionsort([2,1,4,3,5,-6]));


// class trieNode{
//     constructor(){
//         this.children=new Map()
//         this.endNode=false
//     }
// }

// class Trie{
//     constructor(){
//         this.root=new trieNode()
//     }

//     insert(word){
//         let currentNode=this.root

//         for (let i = 0; i < word.length; i++) {
//             let char=word[i]

//             if(!currentNode.children.has(char)){
//                 currentNode.children.set(char,new trieNode())
//             }
//             currentNode=currentNode.children.get(char)
//         }
//         currentNode.endNode=true
//         currentNode.children.set("*",new trieNode())
//     }

//     startWith(prefix){
//         let currentNode=this.root

//         for (let i = 0; i < prefix.length; i++) {
//             let char=prefix[i]

//             if(!currentNode.children.has(char)){
//                 return false
//             }
//             currentNode=currentNode.children.get(char)
//         }
//        return true
//     }
// }

// const trie = new Trie();
  
// trie.insert("apple");
// trie.insert("banana");
// trie.insert("orange");
// trie.insert("op");

// console.log(trie.root.children);


class Heap{
    constructor(){
        this.Heap=[]
    }

    buildHeap(array){
        this.Heap=array

        const startIdx=Math.floor((array.length-1)/2)
        for (let i = startIdx; i >=0; i--) {
            this.shiftDown(i)
        }
    }

    shiftDown(currentIdx){
        let minIdx=currentIdx
        let leftIdx=2*currentIdx+1
        let rightIdx=2*currentIdx+2
        let length=this.Heap.length

       if(leftIdx<length && this.Heap[leftIdx]>this.Heap[minIdx]){
        minIdx=leftIdx
       }
       if(rightIdx<length && this.Heap[rightIdx]>this.Heap[minIdx]){
        minIdx=rightIdx
       }

       if(minIdx!==currentIdx){
        this.swap(currentIdx,minIdx)
        // this.shiftDown(minIdx);
       }
    }

    heapSort(){
        const sortedArray=[]

        while (this.Heap.length>0) {
            sortedArray.push(this.extractMin())
        }
        return sortedArray
    }

    extractMin(){
        if(this.Heap.length==0){
            return
        }

        const min=this.Heap[0]
        let lastIdx=this.Heap.length-1
        this.swap(0,lastIdx)
        this.Heap.pop()
        this.shiftDown(0)
        return min
    }

    swap(i,j){
        [this.Heap[i],this.Heap[j]]=[this.Heap[j],this.Heap[i]]
    }

    insert(value){
        this.Heap.push(value)
        this.shiftUp(this.Heap.length-1)
    }

    shiftUp(index){
        const parentIdx = Math.floor((index - 1) / 2);
        if (this.Heap[parentIdx] < this.Heap[index]) {
          this.swap(parentIdx, index);
          this.shiftUp(parentIdx);
        }
    }

    remove(value){
        const index=this.Heap.indexOf(value)
        if(index===-1){
            return false
        }

        this.swap(index,this.Heap.length-1)
        this.Heap.pop()
        const parentIndex=Math.floor((index-1)/2)
        if(index>0 && this.Heap[index]>this.Heap[parentIndex]){
            this.shiftUp(index)
        }else{
            this.shiftDown(index)
        }
        return true
    }
    
}

const heap=new Heap()

// heap.buildHeap([3,2,1,4,5,8])

// console.log(heap.heapSort())

heap.insert(6)
heap.insert(22)
heap.insert(3)
heap.insert(2)
heap.insert(4)

// console.log(heap.remove(2));

// console.log(heap.heapSort())


class Node{
   constructor(value){
    this.value=value
    this.left=null
    this.right=null
   }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }

    insert(value){
        const node=new Node(value)
        if(!this.root){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(root.value>node.value){
           if(root.left==null){
            root.left=node
           }else{
            this.insertNode(root.left,node)
           }
        }else{
            if(root.right==null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return
        }else{
            if(root.value==value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    } 
    
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    Bst(){
        const queue=[]
        queue.push(this.root)
        while (queue.length) {
            let curr=queue.shift()
            console.log(curr.value) 
            if(curr.left){
                queue.push(curr.left)
            }if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(root){
            if(!root.left){
                return root.value
            }else{
                return this.min(root.left)
            }
        }
    }

    delete(value){
       this.root=this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root==null){
            return root
        }

        if(value<root.left){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
           root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            } 
            root.value=this.min(root.right)
            root.right=this.delete(root.right,root.value)
        }
        return root
    }


     findClosestValue(root, target) {
        let closestValue = root.value;
        let minDiff = Math.abs(target - closestValue);
      
        let currentNode = root;
      
        while (currentNode !== null) {
          const currentDiff = Math.abs(target - currentNode.value);
      
          if (currentDiff < minDiff){
            minDiff = currentDiff;
            closestValue = currentNode.value;
          }
      
          if (target < currentNode.value) {
            currentNode = currentNode.left;
          } else if (target > currentNode.value) {
            currentNode = currentNode.right;
          } else {
            // If the target value is found, no need to search further
            return currentNode.value;
          }
        }
      
        return closestValue;
      }
}

const bst=new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// bst.delete(15)
// bst.Bst()

// console.log(bst.findClosestValue(bst.root,4));

// console.log(bst.min(bst.root));

class Graph{
    constructor(){
        this.map=new Map()
    }

    addvertex(data){
        if(!this.map.has(data)){
            this.map.set(data,[])
        }
    }

    insert(vertex,edge,isBidirectional){
        this.addvertex(vertex)
        this.addvertex(edge)

        this.map.get(vertex).push(edge)
        if(isBidirectional){
            this.map.get(edge).push(vertex)
        }
    }

    display(){
        for (const [key,value] of this.map.entries()) {
            console.log(`${key}:${value}`);     
        }
    }

    dfs(startVertex){
        const stack=[]
        const visited=new Set()
        stack.push(startVertex)
        visited.add(startVertex)

        while (stack.length>0) {
            const vertex=stack.pop()
            console.log(vertex);
            const edges=this.map.get(vertex)
            for (const edge of edges) {
                if(!visited.has(edge)){
                    stack.push(edge)
                    visited.add(edge)
                }
            }
        }
    }

    Bfs(startVertex){
        const queue=[]
        const visited=new Set()
        queue.push(startVertex)
        visited.add(startVertex)

        while (queue.length>0) {
            const vertex=queue.shift()
            console.log(vertex);
            const edges=this.map.get(vertex)
            for (const edge of edges) {
                if(!visited.has(edge)){
                    queue.push(edge)
                    visited.add(edge)
                }
            }
        }
    }

    hasEdge(vertex,edge){
        if(this.map.has(vertex)){
            const edges=this.map.get(vertex)
            return edges.includes(edge)
        }
        return false
    }

    removeVertex(vertex){
        if(this.map.has(vertex)){
            this.map.delete(vertex)
            for (const [key,value] of this.map.entries()) {
                const index=value.indexOf(vertex)
                if(index !== -1){
                    value.splice(vertex,1)
                }
            }
        }
    } 
    
    removeEdge(vertex,edge){
        if(this.map.has(vertex)){
            const edges=this.map.get(vertex)
            const index=edges.indexOf(edge)
            if(index !== -1){
                edges.splice(edge,1)
            }
        }
    }
}


const graph=new Graph()

graph.addvertex("A")
graph.addvertex("B")
graph.addvertex("C")
graph.addvertex("D")
graph.addvertex("E")
graph.addvertex("F")

graph.insert("A","B",true)
graph.insert("A","C",true)
graph.insert("A","D",true)
graph.insert("B","F",true)
graph.insert("C","E",true)

graph.display()

// graph.dfs("A")

graph.Bfs("A")
// graph.removeVertex("A")
graph.removeEdge("A","B")
graph.display()