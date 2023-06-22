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

    isEmpty(){
        return this.root===null
    }

    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }    
    }

    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
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
    
    search(root,value){
        if(!root){
            return false    
        }else{
            if(root.value===value){
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
            this.inOrder(root.right)
            console.log(root.value);
        }
    }

    postOrder(root){
        if(root){
            this.inOrder(root.left)
            this.inOrder(root.right)
            console.log(root.value);
        }
    }

    leaveOrder(){
        const queue=[]
        queue.push(this.root)
        while (queue.length) {
            let curr=queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    minValue(root){
        if(root){
            if (!root.left) {
                return root.value
            }else{ 
                return this.minValue(root.left)
            }
        }
    }

    maxValue(root){
        if(root){
            if (!root.right) {
                return root.value
            }else{ 
                return this.maxValue(root.right)
            }
        }
    }

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root===null){
            return root
        }
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{  
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.left){
                return root.right
            }
            root.value=this.minValue(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }

    closestValue(root,target){
        let closestValue=root.value
        let minDiff=Math.abs(target-closestValue)

        let currentNode=root

        while (currentNode!==null) {
            let currentDiff=Math.abs(target-currentNode.value)

            if(currentDiff<minDiff){
                minDiff=currentDiff
                closestValue=currentNode.value
            }

            if(currentNode.value>target){
                currentNode=currentNode.left
            }else if(currentNode.value<target){
                currentNode=currentNode.right
            }else{
                return currentNode.value
            }
        }
        return closestValue
    }

    isBST(root) {
        return this.isBSTHelper(root, -Infinity, Infinity);
      }
      
    isBSTHelper(node, min, max) {
        if (node === null) {
          // Empty node is considered as a valid BST
          return true;
        }
      
        if (node.value <= min || node.value >= max) {
          // Node value violates the BST property
          return false;
        }
      
        // Recursively validate the left and right subtrees
        return (
          this.isBSTHelper(node.left, min, node.value) &&
          this.isBSTHelper(node.right, node.value, max)
        );
    }
}

const bst=new BinarySearchTree()
console.log('Tree is empty?',bst.isEmpty());

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

// console.log(bst.search(bst.root,10));
// console.log(bst.search(bst.root,5));
// console.log(bst.search(bst.root,15));
// console.log(bst.search(bst.root,20));
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)

bst.leaveOrder()
console.log("ha");
// console.log(bst.minValue(bst.root));
// console.log(bst.maxValue(bst.root));c
// bst.delete(5)
// bst.leaveOrder()

// console.log(bst.closestValue(bst.root,12));

console.log(bst.isBST(bst.root));