function linear(array,val) {
    for (let i = 0; i < array.length; i++) {
       if(array[i]==val){
        return i
       }
    }
    return -1
}

// console.log(linear([2,3,1,2,4,5,6,7],6));

function binary(array,value) {
    let left=0;
    let right=array.length-1
    while (left<=right) {
        let middle=Math.floor((right+left)/2)
        if(array[middle]==value){
            return middle
        }else if(array[middle]>value){
            right=middle-1
        }else{
            left=middle+1
        }
    }
    return -1
}

// console.log(binary([1,2,3,4,5,6,7,8,9],72));

function recursivebinary(array,value) {
    return search(array,value,0,array.length-1)
}

function search(array,value,left,right) {
    if(left>right){
        return -1
    }
    let middle=Math.floor((left+right)/2)
    if(array[middle]==value){
        return middle
    }else if(array[middle]>value){
        return search(array,value,left,middle-1)
    }else{
        return search(array,value,middle+1,right)
    }
}
// console.log(recursivebinary([1,2,3,4,5,6,7,8,9],3));
function factorial(num) {
    // let fact=1
    // for (let i = 1; i <=num; i++) {
        //     fact=fact*i
        // }
        // return fact

        if(num==1){
            return 1
        }

    return factorial(num-1)*num
}

// console.log(factorial(4));

function fibnoci(num) {
    // let fib=[0,1]
    // for (let i = 2; i < num; i++) {
    //    let val=fib[i-1]+fib[i-2]
    //    fib.push(val) 
    // }
    // return fib
    if(num<=1){
        return num
    }else{
        return fibnoci(num-1)+fibnoci(num-2)
    }
}

// console.log(fibnoci(10));

function stringrevese(str) {
    return str.split('').reverse().join('')
}

// console.log(stringrevese('hello'));

function stringreveseloop(str) {
    let reverse=''
    for (let i = str.length-1; i >=0; i--) {
        reverse+=str.charAt(i)  
    }
    return reverse
}

// console.log(stringreveseloop('hello'));
function deletearray(array,val) {
    for (let i = 0; i < array.length; i++) {
        if(array[i]==val){
            for (let j = i; j < array.length; j++) {
               array[j]=array[j+1] 
            }
            array.length--
        }
    }
    return array
}

// console.log(deletearray([2,3,4,5,6,7,8],5));
function insert(array,val,pos){
    for (let i = array.length; i > pos; i--) {
       array[i]=array[i-1]
    }
    array[pos]=val
    return array
}

// console.log(insert([1,2,3,5,6,7,8,9],4,3));

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

function arraytolinked(array){
    if(array.length==0){
        return null
    }
let head=new Node(array[0])
let current=head
    for (let i = 1; i < array.length; i++) {
        const node=new Node(array[i])
        current.next=node
        current=node
    }
    return head
}

const LinkedList=arraytolinked([1,2,3,4,5,6])
let curr=LinkedList
let values=''
while (curr) {
    values+=`${curr.value} `
    curr=curr.next
}
console.log(values);