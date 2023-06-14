class MinHeap {
    constructor(array) {
      this.heap = array;
      this.buildHeap();
    }
 
        buildHeap() {
      for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
        this.shiftDown(i);
      }
      return this.heap
    }
 
    shiftDown(currentIdx) {
      const endIdx = this.heap.length - 1;
      let leftIdx = this.leftChild(currentIdx);
      while (leftIdx <= endIdx) {
        const rightIdx = this.rightChild(currentIdx);
        let idxToShift;
        if (rightIdx <= endIdx && this.heap[rightIdx] < this.heap[leftIdx]){
          idxToShift = rightIdx;
        }
        else {
          idxToShift = leftIdx;
        }
        if (this.heap[currentIdx] > this.heap[idxToShift]) {
          [this.heap[currentIdx], this.heap[idxToShift]] = [this.heap[idxToShift],this.heap[currentIdx]];
          currentIdx = idxToShift;
          leftIdx = this.leftChild(currentIdx);
        } else {
          break;
        }
      }
    }
 
    shiftUp(currentIdx) {
      let parentIdx = this.parent(currentIdx);
      while (
        currentIdx > 0 && this.heap[parentIdx] > this.heap[currentIdx]) {
        [this.heap[currentIdx], this.heap[parentIdx]] = [ this.heap[parentIdx],this.heap[currentIdx]];
        currentIdx = parentIdx;
        parentIdx = this.parent(currentIdx);
      }
    }
    peek() {
      return this.heap[0];
    }
    remove() {
      [this.heap[0], this.heap[this.heap.length - 1]] = [ this.heap[this.heap.length - 1],this.heap[0]];
      const removedValue = this.heap.pop();
      this.shiftDown(0);
      return removedValue;
    }
    insert(value) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
    }
    parent(i) {
      return Math.floor((i - 1) / 2)
    }
 
    leftChild(i) {
      return 2 * i + 1;
    }
    rightChild(i) {
      return 2 * i + 2;
    }
 
    display() {
      console.log(this.heap);
    }
}
let arr = [3 ,11 ,62 ,5 ,2 ,4]
const li = new MinHeap(arr)
// console.log(li.buildHeap());
li.display()
