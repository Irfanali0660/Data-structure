function duplicate(array) {
    let unique={}
    let result=[]
    for (let i = 0; i < array.length; i++) {
      if(!unique[array[i]]){
        result.push(array[i])
        unique[array[i]]=true  
      }  
    }
    return result
}

console.log(duplicate([1,1,2,3,4,5,6,6,6,7]));