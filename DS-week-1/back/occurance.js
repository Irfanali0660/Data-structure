function countOccurance(array) {

    let count={}
    for (let i = 0; i < array.length; i++) {
      if(count[array[i]]){
        count[array[i]]+=1
      }  else{
        count[array[i]]=1
      }
    }
    return count
}

console.log(countOccurance([1, 2, 3, 2, 1, 1, 4, 5, 4, 2, 5,5]));