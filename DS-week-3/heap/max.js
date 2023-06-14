// class MaxHeap {
//     constructor() {
//       this.heap = [];
//     }
  
//     buildHeap(array) {
//       this.heap = [...array];
//       for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
//         this.shiftDownMax(i);
//       }
//     }
  
//     shiftDownMax(currentIndex, endIdx) {
//       let leftIdx = this.leftChild(currentIndex);
//       while (leftIdx <= endIdx) {
//         let rightIdx = this.rightChild(currentIndex);
//         let idxToShift;
//         if (rightIdx <= endIdx && this.heap[rightIdx] > this.heap[leftIdx]) {
//           idxToShift = rightIdx;
//         } else {
//           idxToShift = leftIdx;
//         }
//         if (this.heap[currentIndex] < this.heap[idxToShift]) {
//           this.swap(currentIndex, idxToShift);
//           currentIndex = idxToShift;
//           leftIdx = this.leftChild(currentIndex);
//         } else {
//           return;
//         }
//       }
//     }
  
//     shiftUpMax(currentIndex) {
//       let parentIndex = this.parent(currentIndex);
//       while (currentIndex > 0 && this.heap[parentIndex] < this.heap[currentIndex]) {
//         this.swap(currentIndex, parentIndex);
//         currentIndex = parentIndex;
//         parentIndex = this.parent(currentIndex);
//       }
//     }
  
//     peek() {
//       return this.heap[0];
//     }
  
//     remove() {
//       this.swap(0, this.heap.length - 1);
//       this.heap.pop();
//       this.shiftDownMax(0, this.heap.length - 1);
//     }
  
//     insert(value) {
//       this.heap.push(value);
//       this.shiftUpMax(this.heap.length - 1);
//     }
  
//     parent(i) {
//       return Math.floor((i - 1) / 2);
//     }
  
//     leftChild(i) {
//       return i * 2 + 1;
//     }
  
//     rightChild(i) {
//       return i * 2 + 2;
//     }
  
//     maxHeapSort(array) {
//       let maxHeap = new MaxHeap();
//       maxHeap.buildHeap(array);
    
//       for (let i = array.length - 1; i >= 1; i--) {
//         maxHeap.swap(0, i);
//         maxHeap.shiftDownMax(0, i - 1);
//       }
    
//       return maxHeap.heap;
//     }
  
//     display() {
//       for (let i = 0; i < this.heap.length; i++) {
//         console.log(this.heap[i]);
//       }
//     }
  
//     swap(i, j) {
//       [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//     }
//   }
  
//   let array = [3,2,6,1];
//   let heap = new MaxHeap();
//   console.log(heap.maxHeapSort(array));
//   heap.display();


// Helper function to swap elements in the array
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Heapify a subtree rooted at index i
function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // Left child
    const right = 2 * i + 2; // Right child

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        swap(arr, i, largest);

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

// Main function to perform heap sort
function heapSort(arr) {
    const n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements from heap one by one
    for (let i = n - 1; i >= 0; i--) {
        // Move the current root to the end
        swap(arr, 0, i);

        // Call max heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

// Example usage
const array = [3,2,1,4,8,5,6,7];
const sortedArray = heapSort(array);
console.log(sortedArray);
