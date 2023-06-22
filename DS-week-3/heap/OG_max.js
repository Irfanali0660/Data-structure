class MaxHeap {
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
        // console.log(currentIdx,"CURR");
      const length = this.heap.length;
      let maxIdx = currentIdx;
      const leftIdx = 2 * currentIdx + 1;
      const rightIdx = 2 * currentIdx + 2;
      if (leftIdx < length && this.heap[leftIdx] > this.heap[maxIdx]) {
        // console.log('left');
        maxIdx = leftIdx;
      }
      if(rightIdx < length && this.heap[rightIdx] > this.heap[maxIdx]) {
        // console.log('right');
        maxIdx = rightIdx;
      }
  
      if(maxIdx !== currentIdx) {
        this.swap(currentIdx, maxIdx);
        // this.shiftDown(maxIdx);
      }
    }
  
    heapSort() {
      const sortedArray = [];
      while (this.heap.length > 0) {
        sortedArray.unshift(this.extractMax());
      }
      return sortedArray;
    }
  
    extractMax() {
      if (this.isEmpty()) {
        return null;
      }
  
      const max = this.heap[0];
      const lastIdx = this.heap.length - 1;
      this.swap(0, lastIdx);
      console.log(this.heap,"HEAP");
      this.heap.pop();
      this.shiftDown(0);
      return max;
    }
  
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  }     
  
  // Usage example
  const array = [3, 11, 62, 5,22,14];
  console.log(array);
  const heap = new MaxHeap();
  heap.buildHeap(array);
  
  const sortedArray = heap.heapSort();
  console.log(sortedArray); // Output: [2, 3, 3, 5, 6, 8, 9, 24]
  