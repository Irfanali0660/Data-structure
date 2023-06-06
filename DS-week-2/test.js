function bubble(array) {
    let swapped
    do {
        swapped=false
        for (let i = 0; i < array.length; i++) {
           if(array[i]>array[i+1]){
            temp=array[i]
            array[i]=array[i+1]
            array[i+1]=temp
            swapped=true
           } 
        }
    } while (swapped);
    return array
}

// console.log(bubble([3,2,4,1,-6,5]));

function insertion(array) {
    for (let i = 1; i < array.length; i++) {
        let number=array[i]
        j=i-1
        while (j>=0 && array[j]>number) {
            array[j+1]=array[j]
            j-=1
        }
        array[j+1]=number
    }
    return array
}

// console.log(insertion([3,2,4,4,-6,5]));

function quick(array){
 if(array.length<=1){
    return array
 }

 let left=[]
 let right=[]
 let pivot=array[array.length-1]

 for (let i = 0; i < array.length-1; i++) {
    if(pivot>array[i]){
        left.push(array[i])
    }else{
        right.push(array[i])
    }
 }
 return [...quick(left),pivot,...quick(right)]
}

// console.log(quick([3,2,4,4,-6,5]));

function selection(array) {
    for (let i = 0; i < array.length; i++) {
       for (let j = i; j < array.length; j++) {
        if(array[i]>array[j]){
            temp=array[i]
            array[i]=array[j]
            array[j]=temp
        }
       }
    }
    return array
}

// console.log(selection([3,2,-6,-8,10,4]));


function mergesort(array) {
    if(array.length<=1){
        return array
    }

    let middle=Math.floor(array.length/2)
    let left=array.slice(0,middle)
    let right=array.slice(middle)

    return merge(mergesort(left),mergesort(right))
}

function merge(left,right) {
    let sortarray=[]

    while (left.length && right.length) {
        if(left[0]<=right[0]){
            sortarray.push(left.shift())
        }else{
            sortarray.push(right.shift())
        }
    }
    return [...sortarray,...left,...right]
}

console.log(mergesort([3,2,-6,-8,10,4]));