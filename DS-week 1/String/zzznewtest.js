function binary(array,num) {
    return bsearch(array,num,0,array.length-1)
}

function bsearch(array,num,left,right) {
    let middle=Math.floor((left+right)/2)
    if(left>right){
        return 'empty'
    }
    if(array[middle]==num){
        return [middle*num,middle,num]
    }else if(array[middle]>num){
        return bsearch(array,num,left,middle-1)
    }else{
        return bsearch(array,num,middle+1,right)
    }
}


console.log(binary([1,2,3,4,5,6,7,8,9],3));