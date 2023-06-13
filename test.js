class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class Tree{
    constructor(){
        this.root=null
    }

    insert(value){
        const node=new Node(value)
        if(!this.root){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(root.value>node.value){
            if(root.left==null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }


    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
        }
    }
    postorder(root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value);
        }
    }
    
    BFS(){
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

    min(root){
        if(root){
            if(!root.left){
                return root.value
            }else{
                return this.min(root.left)
            }
        }
    }

    max(root){
        if(root){
            if(!root.right){
                return root.value
            }else{
                return this.max(root.right)
            }
        }
    }
}


const tree=new Tree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)

// tree.preorder(tree.root)
// tree.inorder(tree.root)
// tree.postorder(tree.root)
// tree.BFS(tree.root)

// console.log(tree.min(tree.root));
console.log(tree.max(tree.root));


