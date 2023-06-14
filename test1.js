// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class Tree1 {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     const newnode = new Node(value);
//     if (this.root == null) {
//       this.root = newnode;
//     } else {
//       this.insertNode(this.root, newnode);
//     }
//   }

//   insertNode(root, newNode) {
//     if (root.value > newNode.value) {
//       if (root.left == null) {
//         root.left = newNode;
//       } else {
//         this.insertNode(root.left, newNode);
//       }
//     } else {
//       if (root.right == null) {
//         root.right = newNode;
//       } else {
//         this.insertNode(root.right, newNode);
//       }
//     }
//   }

//   inoderTraversal(root) {
//     if (root != null) {
//       console.log(root.value);
//       this.inoderTraversal(root.left);
//       this.inoderTraversal(root.right);
//     }
//   }

//   delete(value) {
//     this.root = this.deleteNode(this.root, value);
//   }

//   min(root) {
//     if (root) {
//       if (!root.left) {
//         return root.value;
//       } else {
//         return this.min(root.left);
//       }
//     }
//   }

//   deleteNode(root, value) {
//     if (root == null) {
//       return null;
//     }
//     if (root.value > value) {
//       root.left = this.deleteNode(root.left, value);
//     } else if (root.value < value) {
//       root.right = this.deleteNode(root.right, value);
//     } else {
//       if (!root.left && !root.right) {
//         return null;
//       }
//       if (!root.left) {
//         return root.right;
//       } else if (!root.right) {
//         return root.left;
//       }

//       root.value = this.min(root.right);
//       root.right = this.deleteNode(root.right, root.value);
//     }
//     return root;
//   }
// }

// const tree1 = new Tree1();

// tree1.insert(10);
// tree1.insert(5);
// tree1.insert(15);
// tree1.insert(3);
// tree1.insert(7);
// tree1.inoderTraversal(tree1.root);
// tree1.delete(10);
// tree1.inoderTraversal(tree1.root);

class Heap{
    constructor(array){
        this.heap=array
        this.bulidHeap()
    }

    bulidHeap(){
        for (let i = this.parent(this.heap.length-1); i >=0; i--) {
            this.shiftdown(i)
        }
    }

    shiftdown(currentIdx){
        const endIdx=this.heap.length-1
        let leftIdx=this.leftchild(currentIdx)

        while (leftIdx<=endIdx) {
            const rightIdx=this.rightchild(currentIdx)
            let idxToShift;
            if(rightIdx<=endIdx && this.heap[rightIdx]< this.heap[leftIdx]){
                idxToShift=rightIdx
            }else{
                idxToShift=leftIdx
            }
            if(this.heap[currentIdx]>this.heap[idxToShift]){
                [this.heap[currentIdx], this.heap[idxToShift]] = [this.heap[idxToShift],this.heap[currentIdx]];
                currentIdx = idxToShift;
                leftIdx = this.leftchild(currentIdx);
            }else{
                break;
            }
        }
    }

    parent(i) {
        return Math.floor((i - 1) / 2)
      }
   
      leftchild(i) {
        return 2 * i + 1;
      }
      rightchild(i) {
        return 2 * i + 2;
      }
      display(){
        console.log(this.heap);
    }
}

const heap=new Heap([3,2,1,4,8,5,6,7])
heap.display()