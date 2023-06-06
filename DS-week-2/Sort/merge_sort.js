function mergesort(array) {
    if(array.length<2){
        return array
    }

    const middle=Math.floor(array.length/2)
    const left=array.slice(0,middle)
    const right=array.slice(middle)
    return merge(mergesort(left),mergesort(right))
}

function merge(leftarr,rightarr) {
    const sortarr=[]
    while (leftarr.length && rightarr.length){
        if(leftarr[0]<=rightarr[0]){
            sortarr.push(leftarr.shift())
        }else{  
            sortarr.push(rightarr.shift())
        }
    }
    return [...sortarr,...leftarr,...rightarr]
}


console.log(mergesort([3,2,4,5,6,-7]));