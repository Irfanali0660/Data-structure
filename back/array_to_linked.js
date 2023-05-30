class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

function arrayto(array) {
    if(array.length==0){
        return null
    }

    const head=new Node(array[0])
    let current=head

    for (let i = 1; i < array.length; i++) {
        let node=new Node(array[i])
        current.next=node
        current=node
    }
    return head
}


let linkedList=arrayto([1,2,3,4,5,6,7,8,9])

let curr=linkedList
let  values=''

while (curr) {
    values+=`${curr.value} `
    curr=curr.next
}
console.log(values);
