// class MinHeap {
//     constructor() {
//       this.heap = [];
//     }
  
//     buildHeap(array) {
//       this.heap = [...array];
//       for (let i = Math.floor((this.heap.length - 1) / 2); i >= 0; i--) {
//         this.shiftDown(i);
//       }
//     }
  
//     shiftDown(currentIndex) {
//       let leftIndex = currentIndex * 2 + 1;
//       let rightIndex = currentIndex * 2 + 2;
//       let smallestIndex = currentIndex;
  
//       if (
//         leftIndex < this.heap.length &&
//         this.heap[leftIndex] < this.heap[smallestIndex]
//       ) {
//         smallestIndex = leftIndex;
//       }
  
//       if (
//         rightIndex < this.heap.length &&
//         this.heap[rightIndex] < this.heap[smallestIndex]
//       ) {
//         smallestIndex = rightIndex;
//       }
  
//       if (smallestIndex !== currentIndex) {
//         this.swap(currentIndex, smallestIndex);
//         this.shiftDown(smallestIndex);
//       }
//     }
  
//     shiftUp(currentIndex) {
//       let parentIndex = Math.floor((currentIndex - 1) / 2);
  
//       while (
//         currentIndex > 0 &&
//         this.heap[currentIndex] < this.heap[parentIndex]
//       ) {
//         this.swap(currentIndex, parentIndex);
//         currentIndex = parentIndex;
//         parentIndex = Math.floor((currentIndex - 1) / 2);
//       }
//     }
  
//     peek() {
//       if (this.heap.length === 0) {
//         return null;
//       }
//       return this.heap[0];
//     }
  
//     remove() {
//       if (this.heap.length === 0) {
//         return null;
//       }
//       this.swap(0, this.heap.length - 1);
//       const removedElement = this.heap.pop();
//       this.shiftDown(0);
//       return removedElement;
//     }
  
//     insert(value) {
//       this.heap.push(value);
//       this.shiftUp(this.heap.length - 1);
//     }
  
//     size() {
//       return this.heap.length;
//     }
  
//     isEmpty() {
//       return this.heap.length === 0;
//     }
  
//     swap(index1, index2) {
//       [this.heap[index1], this.heap[index2]] = [
//         this.heap[index2],
//         this.heap[index1],
//       ];
//     }
//   }
  
//   // Example usage:
  
//   const array = [2,3,1,4,8,6,5]
//   const minHeap = new MinHeap();
//   minHeap.buildHeap(array);
  
//   console.log(minHeap.heap); // Output: [1, 2, 3, 5, 4, 6, 8]
  
//   minHeap.insert(0);
//   console.log(minHeap.heap); // Output: [0, 1, 3, 2, 4, 6, 8, 5]
  
//   minHeap.remove();
//   console.log(minHeap.heap); // Output: [1, 2, 3, 5, 4, 6, 8]
  
// ____________________________________________________________________________


// class Maxheap{
//     constructor(){
//         this.heap=[]
//     }

//     buildHeap(array){
//         this.heap=array
//         const startIdx=Math.floor((array.length-1)/2)
//         for (let i = startIdx ; i >=0 ; i--) {
//            this.shiftdown(i)
//         }
//     }

//     shiftdown(currentIdx){
//         const length=this.heap.length
//         let maxIdx=currentIdx
//         const leftIdx=2*currentIdx+1
//         const rightIdx=2*currentIdx+2

//         if(leftIdx<length && this.heap[leftIdx]>this.heap[maxIdx]){
//             maxIdx=leftIdx
//         }
//         if(rightIdx<length && this.heap[rightIdx]>this.heap[maxIdx]){
//             maxIdx=rightIdx
//         }

//         if(maxIdx!==currentIdx){
//             this.swap(currentIdx,maxIdx)
//             this.shiftdown(maxIdx)    
//         }
//     }

//     heapSort(){
//         const sortedArray=[]

//         while (this.heap.length>0) {
//             sortedArray.unshift(this.extractMax())
//         }
//         return sortedArray
//     }

//     extractMax(){
//         if(this.heap.length === 0){
//             return null 
//         }

//         const max=this.heap[0]
//         const lastIdx=this.heap.length-1
//         this.swap(0,lastIdx)
//         this.heap.pop()
//         this.shiftdown(0)

//         return max
//     }

//     swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }
// }

// const array = [3, 11, 62, 5, 2, 4,32,22];
//   const heap = new Maxheap();
//   heap.buildHeap(array);
  
//   const sortedArray = heap.heapSort();
//   console.log(sortedArray); // Output: [2, 3, 3, 5, 6, 8, 9, 24]
  



class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    buildHeap(array) {
      this.heap = array;
      const startIdx = Math.floor((array.length - 1) / 2);
      for (let i = startIdx; i >= 0; i--) {
        this.shiftDown(i);
      }
    }
  
    shiftDown(currentIdx) {
      const length = this.heap.length;
      let minIdx = currentIdx;
      const leftIdx = 2 * currentIdx + 1;
      const rightIdx = 2 * currentIdx + 2;
  
      if (leftIdx < length && this.heap[leftIdx] < this.heap[minIdx]) {
        minIdx = leftIdx;
      }
      if (rightIdx < length && this.heap[rightIdx] < this.heap[minIdx]) {
        minIdx = rightIdx;
      }
  
      if (minIdx !== currentIdx) {
        this.swap(currentIdx, minIdx);
        this.shiftDown(minIdx);
      }
    }
  
    // shiftUp(currentIdx) {
    //   if (currentIdx === 0) {
    //     return;
    //   }
  
    //   const parentIdx = Math.floor((currentIdx - 1) / 2);
    //   if (this.heap[currentIdx] < this.heap[parentIdx]) {
    //     this.swap(currentIdx, parentIdx);
    //     this.shiftUp(parentIdx);
    //   }
    // }
  
    heapSort() {
      const sortedArray = [];
      while (this.heap.length > 0) {
        sortedArray.push(this.extractMin());
      }
      return sortedArray;
    }
  
    extractMin() {
      if (this.isEmpty()) {
        return null;
      }
  
      const min = this.heap[0];
      const lastIdx = this.heap.length - 1;
      this.swap(0, lastIdx);
      this.heap.pop();
      this.shiftDown(0);
  
      return min;
    }
  
    // insert(value) {
    //   this.heap.push(value);
    //   this.shiftUp(this.heap.length - 1);
    // }
  
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  }
  
  // Usage example
  const array = [3, 24, 5, 6, 3, 2, 8, 9];
  const heap = new MinHeap();
  heap.buildHeap(array);
  
  // heap.insert(1);
  // heap.insert(4);
  // heap.insert(7);
  
  const sortedArray = heap.heapSort();
  console.log(sortedArray); // Output: [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 24]
  