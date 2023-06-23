// // class TrieNode{
// //     constructor(){
// //         this.children=new Map()
// //         this.EndNode='*'
// //     }
// // }


// // class Trie{
// //     constructor(){
// //         this.root=new TrieNode()    
// //     }

// //     insert(word){
// //         let currentNode=this.root
// //         for (let i = 0; i < word.length; i++) {
// //             const char=word[i]
// //             if(!currentNode.children.has(char)){
// //                 currentNode.children.set(char,new TrieNode())
// //             }
// //             currentNode=currentNode.children.get(char)
// //         }
// //         currentNode.EndNode="*"
// //     }
// //     startsWith(prefix) {
// //         let currentNode = this.root;
    
// //         for (let i = 0; i < prefix.length; i++) {
// //           const char = prefix[i];
    
// //           if (!currentNode.children.has(char)) {
// //             return false;
// //           }
    
// //           currentNode = currentNode.children.get(char);
// //         }
    
// //         return true;
// //       }

// // }

// // const trie = new Trie();
  
// // trie.insert("apple");
// // trie.insert("banana");
// // trie.insert("orange");
// // trie.insert("op");


// // console.log(trie.root);


// class treeNode{
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
//         const newNode=new treeNode(value)
//         if(!this.root){
//             this.root=newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(newNode.value<root.value){
//             if(root.left==null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right==null){
//                 root.right=newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }
//      postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     Bst(){
//         const queue=[]
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

//     maxVal(root){
//         if(root){
//             if(!root.right){
//                 return root.value
//             }else{
//                 return this.maxVal(root.right)
//             }
//         }
//     }

//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(root==null){
//             return
//         }

//         if(root.value>value){
//             root.left=this.deleteNode(root.left,value)
//         }else if(root.value<value){
//             root.right=this.deleteNode(root.right,value)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }

//             root.value=this.min(root.right)
//             root.right=this.deleteNode(root.right,root.value)
//         }
//         return root
//     }

//     findclosestvalue(root,target){
//         let closestValue=root.value
//         let minDiff=Math.abs(closestValue-target)

//         let currentNode=root
//         while (currentNode!=null) {
//             const currentDiff=Math.abs(currentNode.value-target)
//             if(currentDiff<minDiff){
//                 minDiff=currentDiff
//                 closestValue=currentNode.value
//             }
//             if(target<currentNode.value){
//                 currentNode=currentNode.left
//             }else if(target>currentNode.value){
//                 currentNode=currentNode.right
//             }else{
//                 return currentNode.value
//             }
//         }
//         return closestValue
//     }
// }


// const tree=new Tree()
// tree.insert(10)
// tree.insert(9)
// tree.insert(2)
// tree.insert(12)
// tree.insert(15)
// tree.insert(5)

// // tree.inOrder(tree.root)

// // tree.preOrder(tree.root)

// // tree.postOrder(tree.root)

// // console.log(tree.maxVal(tree.root));
// // console.log(tree.min(tree.root));

// // tree.delete(12)
// // tree.Bst()

// // console.log(tree.findclosestvalue(tree.root,8))

// class Heap{
//     constructor(){
//         this.Heap=[]
//     }

//     buildheap(array){
//         this.Heap=array
//         const startIdx=Math.floor((array.length-1)/2)
//         for (let i = startIdx; i >=0; i--) {
//            this.shiftDown(i)
//         }
//     }

//     shiftDown(currentIdx){

//         let maxIdx=currentIdx
//         let leftIdx=2*currentIdx+1
//         let rightIdx=2*currentIdx+2
//         let length=this.Heap.length

//         if(leftIdx<length && this.Heap[leftIdx]>this.Heap[maxIdx]){
//             maxIdx=leftIdx
//         }
        
//         if(rightIdx<length && this.Heap[rightIdx]>this.Heap[maxIdx]){
//             maxIdx=rightIdx
//         }

//         if(maxIdx != currentIdx){
//             this.swap(currentIdx,maxIdx)
//             this.shiftDown(maxIdx)
//         }
//     }

//     Heapsort(){
//         const sortedArray=[]
//         while (this.Heap.length>0) {
//             sortedArray.push(this.extract())
//         }
//         return sortedArray
//     }

//     extract(){
//         let maxVal=this.Heap[0]
//         let lastIdx=this.Heap.length-1
//         this.swap(0,lastIdx)
//         this.Heap.pop()
//         this.shiftDown(0)
//         return maxVal
//     }

//     swap(i,j){
//         [this.Heap[i],this.Heap[j]]=[this.Heap[j],this.Heap[i]]
//     }

//     insert(value){
//         this.Heap.push(value)
//         this.shiftUp(this.Heap.length-1 )
//     }

//     shiftUp(index){
//         const parentIdx=Math.floor((index-1)/2)
//         if(this.Heap[parentIdx]<this.Heap[index]){
//             this.swap(parentIdx,index)
//             this.shiftUp(parentIdx)
//         }
//     }

//     remove(value){
//         const index=this.Heap.indexOf(value)
//         if (index==-1) { 
//             return false
//         }

//         this.swap(index,this.Heap.length-1)
//         this.Heap.pop()
//         const parentIdx=Math.floor((index-1)/2)
//         if(this.Heap[parentIdx]<this.Heap[index]){
//             this.shiftUp(index)
//         }else{
//             this.shiftDown(index)
//         }
//     }
// }

// const heapSort=new Heap()

// heapSort.buildheap([3,2,5,1,6])

// heapSort.remove(6)
// // console.log(heapSort.Heapsort());


// class Graph{
//     constructor(){
//         this.Map=new Map()
//     }

//     addvertex(data){
//         if(!this.Map.has(data)){
//             this.Map.set(data,[])
//         }
//     }

//     addEdges(vertex,edge,isBidirectional){
//         this.addvertex(vertex)
//         this.addvertex(edge)
//         this.Map.get(vertex).push(edge)
//         if(isBidirectional){
//             this.Map.get(edge).push(vertex)
//         }
//     }

//     display(){
//         for (const [key,value] of this.Map.entries()) {
//             console.log(`${key}: ${value.join(" ")}`);   
//         }
//     }

//     dfs(startVertex){
//         const stack=[]
//         const visited=new Set()

//         stack.push(startVertex)
//         visited.add(startVertex)

//         while (stack.length>0) {
//             const vertex=stack.pop()
//             console.log(vertex);
//             const edges=this.Map.get(vertex)
//             for (const edge of edges) {
//                 if(!visited.has(edge)){
//                     stack.push(edge)
//                     visited.add(edge)
//                 }
//             }
//         }
//     }

//     Bfs(startVertex){
//         const queue=[]
//         const visited=new Set()

//         queue.push(startVertex)
//         visited.add(startVertex)

//         while (queue.length>0) {
//             const vertex=queue.shift()
//             console.log(vertex);
//             const edges=this.Map.get(vertex)
//             for (const edge of edges) {
//                 if(!visited.has(edge)){
//                     queue.push(edge)
//                     visited.add(edge)
//                 }
//             }
//         }
//     }

//     removeVertex(vertex){
//         if(this.Map.has(vertex)){
//             this.Map.delete(vertex)
            
//             for (const [key,value] of this.Map.entries()) {
//                 const index=value.indexOf(vertex)
//                 if(index!==-1){
//                     value.splice(index,1)
//                 }
//             }
//         }
//     }   

//     removeEdge(vertex,edge){
//         if(this.Map.has(vertex)){
//             const edges=this.Map.get(vertex)
//             const index=edges.indexOf(edge)
//             if(index!==-1){
//                 edges.splice(index,1)
//             }
//         }
//     }

//     hasEdge(vertex,edge){
//         if(!this.Map.has(vertex)){
//             return false
//         }
//             const edges=this.Map.get(vertex)
//             return edges.includes(edge)
        
//     }
// }

// const graph=new Graph()

// graph.addvertex('A')
// graph.addvertex('B')
// graph.addvertex('C')
// graph.addvertex('D')
// graph.addvertex('E')

// graph.addEdges("A",'B',true)
// graph.addEdges("A",'C',true)
// graph.addEdges("A",'D',true)
// graph.addEdges("B",'C',true)
// graph.addEdges("B",'E',true)
// graph.addEdges("E",'C',true)


// // graph.Bfs("A")

// // graph.removeVertex("A")
// // graph.removeEdge("A","C")
// // console.log(graph.hasEdge("A","E"));
// // graph.display()


// class TrieNode{
//     constructor(){
//         this.children=new Map()
//         this.endNode=false
//     }
// }

// class Trie{
//     constructor(){
//         this.root=new TrieNode()
//     }

//     insert(word){
//         let currentNode=this.root
//         for (let i = 0; i < word.length; i++) {
//             let char=word[i]

//             if(!currentNode.children.has(char)){
//                 currentNode.children.set(char,new TrieNode())
//             }
//             currentNode=currentNode.children.get(char)
//         }
//         currentNode.endNode=true
//         currentNode.children.set("*",new trieNode())
//     }

//     startwith(prefix){
//         let currentNode=this.root
//         for (let i = 0; i < prefix.length; i++) {
//             if(!currentNode.children.has(char)){
//                 return false
//             }
//             currentNode=currentNode.children.get(char)
//         }
//         return true
//     }
// }


// const trie=new TrieNode()

// trie.insert(5)


class treeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class Tree{
    constructor(){
        this.root=null
    }

    insert(value){
        const newNode=new treeNode(value)
        if(!this.root){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(root.value>newNode.value){
            if(root.left==null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right==null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
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

    max(root){
        if(root){
            if(!root.right){
                return root.value
            }else{
                return this.max(root.right)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    bst(){
        const queue=[]
        queue.push(this.root)

        while (queue.length) {
            const curr=queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(!root){
            return root
        }

        if(root.value>value){
            root.left=this.deleteNode(root.left,value)
        }else if(root.value<value){
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
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }

    findclosest(root,target){
        let closestValue=root.value
        let minDiff=Math.abs(target-closestValue)

        let currentNode=root

        while (currentNode!==null) {
            let currentDiff=Math.abs(target-currentNode.value)

            if(currentDiff<minDiff){
                minDiff=currentDiff
                closestValue=currentNode.value
            }
           if(target<currentNode.value){
                currentNode=currentNode.left
           } else if(target>currentNode.value){
                currentNode=currentNode.right
           }else{
            return currentNode.value
           }
        }
        return closestValue
    }
}

const newTree=new Tree()

newTree.insert(10)
newTree.insert(13)
newTree.insert(5)
newTree.insert(8)
newTree.insert(2)

// console.log(newTree.findclosest(newTree.root,7));


class Heap{
    constructor(){
        this.heap=[]
    }

    buildHeap(array){
        this.heap=array
        const startIdx=Math.floor((array.length-1)/2)
        for (let i = startIdx; i >=0; i--) {
           this.shiftDown(i)
        }
    }

    shiftDown(currentIdx){
        let maxIdx=currentIdx
        let leftIdx=2*currentIdx+1
        let rightIdx=2*currentIdx+2
        let length=this.heap.length

        if(leftIdx<length && this.heap[leftIdx]>this.heap[maxIdx]){
            maxIdx=leftIdx
        }
        if(rightIdx<length && this.heap[rightIdx]>this.heap[maxIdx]){
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

        while (this.heap.length) {
            sortedArray.push(this.extract())
        }
        return sortedArray
    }

    extract(){
        let maxVal=this.heap[0]
        let lastIdx=this.heap.length-1
        this.swap(0,lastIdx)
        this.heap.pop()
        this.shiftDown(0)
        return maxVal
    }

    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }

    shiftUp(index){
        const parentIdx=Math.floor((index-1)/2)
        if(this.heap[parentIdx]<this.heap[index]){
            this.swap(parentIdx,index)
            this.shiftUp(parentIdx)
        }
    }

    remove(value){
        const index=this.heap.indexOf(value)
        if(index!==-1){
            this.swap(index,this.heap.length-1)
            this.heap.pop()
            const parentIndex=Math.floor((index-1)/2)
            if(this.heap[parentIndex]<this.heap[index]){
                this.shiftUp(index)
            }else{
                this.shiftDown(index)
            }
        }
    }
}

const Heapsort=new Heap()

Heapsort.buildHeap([2,1,3,6,4,9])

// Heapsort.insert(10)
// Heapsort.remove(3)
// console.log(Heapsort.heapSort())

class Graph{
    constructor(){
        this.map=new Map()
    }

    addvertex(data){
        if(!this.map.has(data)){
            this.map.set(data,[])
        }
    }

    insertVertex(vertex,edge,isBidirectional){
        this.addvertex(vertex)
        this.addvertex(edge)
        this.map.get(vertex).push(edge)
        if(isBidirectional){
            this.map.get(edge).push(vertex)
        }
    }

    display(){
        for (const [key,value] of this.map.entries()) {
            console.log(`${key} : ${value}`);
        }
    }

    dfs(startIdx){
        const stack=[]
        const visited=new Set()

        stack.push(startIdx)
        visited.add(startIdx)

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

    bfs(startIdx){
        const queue=[]
        const visited=new Set()

        queue.push(startIdx)
        visited.add(startIdx)

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
                    value.splice(index,1)
                }
            }
        }
    }

    removeEdge(vertex,edge){
        if(this.map.has(vertex)){
            const edges=this.map.get(vertex)
            const index=edges.indexOf(edge)
            if(index !== -1){
                edges.splice(index,1)
            }
        }
    }
}

const graphtest=new Graph()

graphtest.addvertex("A")
graphtest.addvertex("B")
graphtest.addvertex("C")
graphtest.addvertex("D")
graphtest.addvertex("E")

graphtest.insertVertex("A",'B',true)
graphtest.insertVertex("A",'C',true)
graphtest.insertVertex("A",'E',true)
graphtest.insertVertex("E",'C',true)
graphtest.insertVertex("B",'D',true)

// graphtest.display()
// graphtest.bfs("A")
// console.log(graphtest.hasEdge("A","D"));
// graphtest.removeVertex("A")
// graphtest.removeEdge("E","A")
// graphtest.display()

class trieNode{
    constructor(){
        this.children=new Map()
        this.endNode=false
    }
}

class Trie{
    constructor(){
        this.root=new trieNode()
    }

    insert(word){
        let curr=this.root
        for (let i = 0; i < word.length; i++) {
            let char=word[i]

            if(!curr.children.has(char)){
                curr.children.set(char,new trieNode())
            }
            curr=curr.children.get(char)
        }

        curr.endNode=true
        curr.children.set("*",new trieNode())
    }


    startwith(prefix){
        let curr=this.root
        for (let i = 0; i < prefix.length; i++) {
            let char=prefix[i]

            if(!curr.children.has(char)){
                return false
            }
            curr=curr.children.get(char)
        }
        return true
    }
}


const trietest=new Trie()

trietest.insert("Apple")
trietest.insert("orange")
trietest.insert("red")
trietest.insert("green")

// console.log(trietest.startwith("Apple"))