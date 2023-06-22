// class MaxHeap {
//   constructor() {
//     this.heap = [];
//   }

//   buildHeap(array) {
//     this.heap = [...array];
//     for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
//       this.shiftDownMax(i);
//     }
//   }

//   parent(i) {
//     return Math.floor((i - 1) / 2);
//   }

//   leftChild(i) {
//     return i * 2 + 1;
//   }

//   rightChild(i) {
//     return i * 2 + 2;
//   }

//   shiftDownMax(currentIndex) {
//     // console.log(currentIndex, "CURRENT");
//     let leftIdx = this.leftChild(currentIndex);
//     let endIdx;
//     if (endIdx === undefined) {
//         endIdx = this.heap.length - 1;
//     }
//     // console.log(leftIdx, "LEFT INDEX");
//     // console.log(endIdx, "end INDEX");
//     while (leftIdx <= endIdx){
//       let rightIdx = this.rightChild(currentIndex);
//     //   console.log(rightIdx,"++++++++++++++++++++++++");
//       let idxToShift;
//       if (rightIdx <= endIdx && this.heap[rightIdx] > this.heap[leftIdx]) {
//         idxToShift = rightIdx;
//       } else {
//           idxToShift = leftIdx;
//       }
//       if (this.heap[currentIndex] < this.heap[idxToShift]) {
//         this.swap(currentIndex, idxToShift);
//         currentIndex = idxToShift;
//         leftIdx = this.leftChild(currentIndex);
//       } else {
//         return;
//       }
//     //   console.log(this.heap,"*****************");
//     }
//   }

//   shiftUpMax(currentIndex) {
//     let parentIndex = this.parent(currentIndex);
//     while (
//       currentIndex > 0 &&
//       this.heap[parentIndex] < this.heap[currentIndex]
//     ) {
//       this.swap(currentIndex, parentIndex);
//       currentIndex = parentIndex;
//       parentIndex = this.parent(currentIndex);
//     }
//   }

//   peek() {
//     return this.heap[0];
//   }

//   remove() {
//     this.swap(0, this.heap.length - 1);
//     this.heap.pop();
//     this.shiftDownMax(0, this.heap.length - 1);
//   }

//   insert(value) {
//     this.heap.push(value);
//     this.shiftUpMax(this.heap.length - 1);
//   }

//   // parent(i) {
//   //   return Math.floor((i - 1) / 2);
//   // }

//   // leftChild(i) {
//   //   return i * 2 + 1;
//   // }

//   // rightChild(i) {
//   //   return i * 2 + 2;
//   // }

//   maxHeapSort(array) {
//     let maxHeap = new MaxHeap();
//     maxHeap.buildHeap(array);

//     for (let i = array.length - 1; i >= 1; i--) {
//       maxHeap.swap(0, i);
//       maxHeap.shiftDownMax(0, i - 1);
//     }

//     return maxHeap.heap;
//   }

//   display() {
//     for (let i = 0; i < this.heap.length; i++) {
//       console.log(this.heap[i]);
//     }
//   }

//   swap(i, j) {
//     [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//   }
// }

// let array = [3, 11, 62, 5, 2, 4];
// console.log(array);
// let heap = new MaxHeap();
// // console.log(heap.maxHeapSort(array));
// heap.buildHeap(array);
// //   heap.display();
// console.log(heap.heap);

// // Helper function to swap elements in the array
// function swap(arr, i, j) {
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// // Heapify a subtree rooted at index i
// function heapify(arr, n, i) {
//     let largest = i; // Initialize largest as root
//     const left = 2 * i + 1; // Left child
//     const right = 2 * i + 2; // Right child

//     // If left child is larger than root
//     if (left < n && arr[left] > arr[largest]) {
//         largest = left;
//     }

//     // If right child is larger than largest so far
//     if (right < n && arr[right] > arr[largest]) {
//         largest = right;
//     }

//     // If largest is not root
//     if (largest !== i) {
//         swap(arr, i, largest);

//         // Recursively heapify the affected sub-tree
//         heapify(arr, n, largest);
//     }
// }

// // Main function to perform heap sort
// function heapSort(arr) {
//     const n = arr.length;

//     // Build max heap
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapify(arr, n, i);
//     }

//     // Extract elements from heap one by one
//     for (let i = n - 1; i >= 0; i--) {
//         // Move the current root to the end
//         swap(arr, 0, i);

//         // Call max heapify on the reduced heap
//         heapify(arr, i, 0);
//     }

//     return arr;
// }

// // Example usage
// const array = [3,2,1,4,8,5,6,7];
// const sortedArray = heapSort(array);
// console.log(sortedArray);


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

  shiftUp(currentIdx) {
    if (currentIdx === 0) {
      return;
    }

    const parentIdx = Math.floor((currentIdx - 1) / 2);
    if (this.heap[currentIdx] < this.heap[parentIdx]) {
      this.swap(currentIdx, parentIdx);
      this.shiftUp(parentIdx);
    }
  }

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

  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  remove(value) {
    const index = this.heap.indexOf(value);
    if (index === -1) {
      return false;
    }

    this.swap(index, this.heap.length - 1);
    this.heap.pop();

    const parentIdx = Math.floor((index - 1) / 2);
    if (index > 0 && this.heap[index] < this.heap[parentIdx]) {
      this.shiftUp(index);
    } else {
      this.shiftDown(index);
    }

    return true;
  }

}

// Usage example
const array = [3,2,1,4,5,8]
const heap = new MinHeap();
heap.buildHeap(array);

heap.insert(1);
heap.insert(4);
heap.insert(7);
// heap.remove(24) 
const sortedArray = heap.heapSort();
console.log(sortedArray); // Output: [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 24]
