class MinHeap {
  constructor() {
    this.heap = [];
  }

  buildHeap(array) {
    this.heap = [...array];
    for (let i = Math.floor((this.heap.length - 1) / 2); i >= 0; i--) {
      this.shiftDown(i);
    }
  }

  shiftDown(currentIndex) {
    let leftIndex = currentIndex * 2 + 1;
    let rightIndex = currentIndex * 2 + 2;
    let smallestIndex = currentIndex;

    if (
      leftIndex < this.heap.length &&
      this.heap[leftIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = leftIndex;
    }

    if (
      rightIndex < this.heap.length &&
      this.heap[rightIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = rightIndex;
    }

    if (smallestIndex !== currentIndex) {
      console.log(this.heap, "HEAPPPPPPP");
      this.swap(currentIndex, smallestIndex);
      this.shiftDown(smallestIndex);
    }
  }

  shiftup(currentIndex) {
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    this.swap(0, this.heap.length - 1);
    const removedElement = this.heap.pop();
    this.shiftDown(0);
    return removedElement;
  }

  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
}

// Example usage:

const array = [3, 11, 62, 5, 2, 4];
const minHeap = new MinHeap();
minHeap.buildHeap(array);

console.log(minHeap.heap); // Output: [1, 2, 3, 5, 4, 6, 8]

minHeap.insert(0);
console.log(minHeap.heap); // Output: [0, 1, 3, 2, 4, 6, 8, 5]

// minHeap.remove();
// console.log(minHeap.heap); // Output: [1, 2, 3, 5, 4, 6, 8]
