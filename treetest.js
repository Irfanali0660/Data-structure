class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearchTreetest{
    constructor(){
        this.root=null
    }   

    insert(value){
       const newNode= new Node(value)
        if(this.root==null){
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
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    minValue(root){
        if(root){
            if(!root.left){
                return root.value
            }else{
                return this.minValue(root.left)
            }
        }
    }

    maxValue(root){
        if(root){
            if(!root.right){
                return root.value
            }else{
                return this.maxValue(root.right)
            }
        }
    }

    BSF(){
        let queue=[]
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

    delete(value){
       this.root=this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root===null){
            return null
        }
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.right && !root.left){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }

            root.value=this.minValue(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }
}


const treeTest=new BinarySearchTreetest()

treeTest.insert(20)
treeTest.insert(10)
treeTest.insert(40)
treeTest.insert(30)

// treeTest.preOrder(treeTest.root)

// console.log(treeTest.minValue(treeTest.root));
// console.log(treeTest.maxValue(treeTest.root));

treeTest.BSF()
console.log("HHA");
treeTest.delete(30)
treeTest.BSF()
// console.log(treeTest.root);