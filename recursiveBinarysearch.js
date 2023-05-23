function recursivebinary(array,target) {
    return search(array,target,0,array.length-1)
}

function search(array,target,leftindex,rightindex){
    let middle=Math.floor((leftindex+rightindex)/2)
    if(leftindex>rightindex){
        return -1
    }
    if(array[middle]==target){
        return middle
    }
    else if(target<array[middle]){
        return search(array,target,leftindex,middle-1)
    }else{
        return search(array,target,middle+1,rightindex)
    }
}

console.log(recursivebinary([1,2,3,4,5,6,7,8,9],14));