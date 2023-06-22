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
        let currentNode=this.root

        for (let i = 0; i < word.length; i++) {
            const char=word[i]

            if(!currentNode.children.has(char)){
                currentNode.children.set(char,new trieNode())
            }
            currentNode=currentNode.children.get(char)
        }
        currentNode.endNode=true
        currentNode.children.set("*")
    }

    startWith(prefix){
        let currentNode=this.root

        for (let i = 0; i < prefix.length; i++) {
            const char=prefix[i]
            if(!currentNode.children.has(char)){
                return false
            }
            currentNode=currentNode.children.get(char)
        }
        return true
    }
}

const trie = new Trie();
  
trie.insert("apple");
trie.insert("")
trie.insert("banana");
trie.insert("orange");
trie.insert("op");

// console.log(trie.startWith("ordan"));

// console.log(trie.root.children);


class HeapSort{
    constructor(){
        this.heap=[]
    }

    buildHeap(array){
        this.heap=array
        let startIdx=Math.floor((array.length-1)/2)
        for (let i = startIdx; i >=0; i--) {
            this.shiftDown(i)
        }
    }

    shiftDown(currentIdx){
        let minIdx=currentIdx
        let leftIdx=2*currentIdx+1
        let rightIdx=2*currentIdx+2
        let length=this.heap.length-1

        if(leftIdx<length && this.heap[leftIdx]<this.heap[minIdx]){
            minIdx=leftIdx
        }
        
        if(rightIdx<length && this.heap[rightIdx]<this.heap[minIdx]){
            minIdx=rightIdx
        }

        if(minIdx!==currentIdx){
            this.swap(currentIdx,minIdx)
            this.shiftDown(minIdx)
        }
    }
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }

    heapsort(){
        const sortedArray=[]
        while (this.heap.length>0) {
            sortedArray.push(this.extractMin())
        }
        return sortedArray
    }

    extractMin(){
        let min =this.heap[0]
        let lastIdx=this.heap.length-1
        this.swap(0,lastIdx)
        this.heap.pop()
        this.shiftDown(0)
        return min
    }

    
}

const heap=new HeapSort()

heap.buildHeap([3,2,1,4,5,8])

console.log(heap.heapsort())