function linear(arr,val) {
    for (let i = 0; i < arr.length; i++) {
    if(arr[i]==val){
        return i
    }        
    }
    return -1
}


console.log(linear([2,3,1,5,4,3,8],2));